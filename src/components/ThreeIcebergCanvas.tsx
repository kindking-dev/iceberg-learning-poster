import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

interface ThreeIcebergCanvasProps {
  activeLevel: number | null;
  onSelectLevel: (level: number) => void;
}

export const ThreeIcebergCanvas: React.FC<ThreeIcebergCanvasProps> = ({
  activeLevel,
  onSelectLevel,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [hovered3DLevel, setHovered3DLevel] = useState<number | null>(null);

  // References to keep Three.js instances
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const icebergGroupRef = useRef<THREE.Group | null>(null);
  const layerMeshesRef = useRef<THREE.Mesh[]>([]);
  const waterPlaneRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const reqIdRef = useRef<number>(0);

  // Target rotation for interactive drag/parallax
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // Camera target Y for framing layers smoothly
  const targetCameraYRef = useRef(-2.0);
  const currentCameraYRef = useRef(-2.0);

  useEffect(() => {
    if (activeLevel === null) {
      targetCameraYRef.current = -2.0;
    } else if (activeLevel === 1) {
      targetCameraYRef.current = 1.0;
    } else if (activeLevel === 2) {
      targetCameraYRef.current = -0.9;
    } else if (activeLevel === 3) {
      targetCameraYRef.current = -2.6;
    } else if (activeLevel === 4) {
      targetCameraYRef.current = -4.5;
    } else if (activeLevel === 5) {
      targetCameraYRef.current = -6.2;
    }
  }, [activeLevel]);

  // Procedural 3D Iceberg Construction
  const buildIcebergGeometry = useCallback(() => {
    const layers = [
      { level: 1, geom: createLayerGeometry(1), color: '#FFFFFF', emissive: '#FFFFFF' },
      { level: 2, geom: createLayerGeometry(2), color: '#CBEBF8', emissive: '#55B6AA' },
      { level: 3, geom: createLayerGeometry(3), color: '#7CCCEF', emissive: '#287EAD' },
      { level: 4, geom: createLayerGeometry(4), color: '#3E9ECD', emissive: '#1C638B' },
      { level: 5, geom: createLayerGeometry(5), color: '#1B6B98', emissive: '#12345A' },
    ];
    return layers;
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 750;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Soft fog gradient: underwater gets denser blue fog
    scene.fog = new THREE.FogExp2('#0B2B44', 0.025);

    // Camera with full-height framing
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, -2.0, 16.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group holding the entire iceberg
    const icebergGroup = new THREE.Group();
    icebergGroupRef.current = icebergGroup;
    scene.add(icebergGroup);

    // Lighting setup
    // 1. Direct Arctic sunlight from top-right
    const sunLight = new THREE.DirectionalLight('#FFFFFF', 4.0);
    sunLight.position.set(10, 16, 12);
    scene.add(sunLight);

    // 2. Direct front fill light to make crystal facets sparkle
    const frontFill = new THREE.DirectionalLight('#F0F8FF', 2.2);
    frontFill.position.set(0, 4, 14);
    scene.add(frontFill);

    // 3. Soft sky ambient light
    const skyLight = new THREE.HemisphereLight('#FFFFFF', '#164C72', 2.6);
    scene.add(skyLight);

    // 4. Turquoise subsurface bounce light
    const subsurfaceLight = new THREE.DirectionalLight('#55B6AA', 2.2);
    subsurfaceLight.position.set(-10, -3, 8);
    scene.add(subsurfaceLight);

    // 5. Deep underwater fill light
    const deepOceanLight = new THREE.DirectionalLight('#287EAD', 2.8);
    deepOceanLight.position.set(0, -10, 8);
    scene.add(deepOceanLight);

    // Create Iceberg Layers
    const layerDefs = buildIcebergGeometry();
    const meshes: THREE.Mesh[] = [];

    layerDefs.forEach(({ level, geom, color }) => {
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: level === 1 ? 0.28 : 0.18,
        metalness: 0.08,
        flatShading: true,
        transparent: true,
        opacity: level === 1 ? 0.99 : 0.94,
        emissive: new THREE.Color(level === 1 ? '#F0F8FC' : color),
        emissiveIntensity: level === 1 ? 0.2 : 0.12,
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.userData = { level };
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      icebergGroup.add(mesh);
      meshes.push(mesh);
    });
    layerMeshesRef.current = meshes;

    // ---------------- WATERLINE PLANE ----------------
    const waterGeom = new THREE.PlaneGeometry(16, 16, 48, 48);
    waterGeom.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#3894C2'),
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.75,
      transparent: true,
      opacity: 0.45,
      ior: 1.333,
      side: THREE.DoubleSide,
    });
    const waterPlane = new THREE.Mesh(waterGeom, waterMat);
    waterPlane.position.y = 0;
    scene.add(waterPlane);
    waterPlaneRef.current = waterPlane;

    // Waterline Foam Ring
    const foamGeom = new THREE.RingGeometry(2.4, 3.8, 48);
    foamGeom.rotateX(-Math.PI / 2);
    const foamMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#FFFFFF'),
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const foamMesh = new THREE.Mesh(foamGeom, foamMat);
    foamMesh.position.y = 0.02;
    foamMesh.scale.set(1.15, 1, 0.9);
    scene.add(foamMesh);

    // ---------------- VOLUMETRIC GOD RAYS ----------------
    const shaftGeom = new THREE.ConeGeometry(3.5, 9.0, 16, 1, true);
    shaftGeom.translate(0, -4.5, 0);
    const shaftMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#A9D7EC'),
      transparent: true,
      opacity: 0.09,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const shaftMesh1 = new THREE.Mesh(shaftGeom, shaftMat);
    shaftMesh1.position.set(1.5, 0, 1.0);
    shaftMesh1.rotation.z = 0.18;
    scene.add(shaftMesh1);

    const shaftMesh2 = new THREE.Mesh(shaftGeom, shaftMat);
    shaftMesh2.position.set(-2.0, 0, 0.5);
    shaftMesh2.rotation.z = -0.22;
    shaftMesh2.scale.set(0.8, 1, 0.8);
    scene.add(shaftMesh2);

    // ---------------- UNDERWATER PARTICLES ----------------
    const particleCount = 220;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 1] = -Math.random() * 8.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#EAF4F8'),
      size: 0.07,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // ---------------- ANIMATION LOOP ----------------
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle natural sea wave displacement
      if (waterPlaneRef.current) {
        const pos = waterPlaneRef.current.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getZ(i);
          const waveHeight =
            Math.sin(u * 1.2 + elapsedTime * 1.5) * 0.04 +
            Math.cos(v * 1.4 + elapsedTime * 1.2) * 0.03;
          pos.setY(i, waveHeight);
        }
        pos.needsUpdate = true;
      }

      // Floating particles
      if (particlesRef.current) {
        const pPos = particlesRef.current.geometry.attributes.position;
        for (let i = 0; i < particleCount; i++) {
          let y = pPos.getY(i) + 0.003;
          if (y > 0) y = -8.5;
          pPos.setY(i, y);
        }
        pPos.needsUpdate = true;
      }

      // Smooth camera interpolation
      currentCameraYRef.current += (targetCameraYRef.current - currentCameraYRef.current) * 0.05;
      camera.position.y = currentCameraYRef.current;
      camera.lookAt(0, currentCameraYRef.current, 0);

      // Smooth rotation
      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.06;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.06;

      if (icebergGroupRef.current) {
        const idleSway = Math.sin(elapsedTime * 0.6) * 0.02;
        icebergGroupRef.current.rotation.y = currentRotationRef.current.y + idleSway;
        icebergGroupRef.current.rotation.x = currentRotationRef.current.x + Math.cos(elapsedTime * 0.5) * 0.01;
        icebergGroupRef.current.position.y = Math.sin(elapsedTime * 0.8) * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [buildIcebergGeometry]);

  // Dynamic Highlight on Hover / Select
  useEffect(() => {
    layerMeshesRef.current.forEach((mesh) => {
      const lvl = mesh.userData.level as number;
      const mat = mesh.material as THREE.MeshStandardMaterial;

      const isCurrentActive = activeLevel === lvl;
      const isCurrentHovered = hovered3DLevel === lvl;

      if (isCurrentActive) {
        mat.emissive.set(lvl === 1 ? '#F28C65' : lvl === 2 ? '#55B6AA' : '#287EAD');
        mat.emissiveIntensity = 0.65;
        mat.opacity = 1.0;
        mesh.scale.set(1.03, 1.03, 1.03);
      } else if (isCurrentHovered) {
        mat.emissive.set('#A9D7EC');
        mat.emissiveIntensity = 0.45;
        mat.opacity = 0.96;
        mesh.scale.set(1.015, 1.015, 1.015);
      } else {
        mat.emissive.set(lvl === 1 ? '#F0F8FC' : '#103248');
        mat.emissiveIntensity = lvl === 1 ? 0.2 : 0.1;
        mat.opacity = lvl === 1 ? 0.99 : 0.94;
        mesh.scale.set(1.0, 1.0, 1.0);
      }
    });
  }, [activeLevel, hovered3DLevel]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) {
      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationRef.current.y = normX * 0.35;
        targetRotationRef.current.x = normY * 0.15;
      }
      return;
    }

    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    targetRotationRef.current.y = Math.max(-0.6, Math.min(0.6, targetRotationRef.current.y + deltaX * 0.006));
    targetRotationRef.current.x = Math.max(-0.25, Math.min(0.25, targetRotationRef.current.x + deltaY * 0.004));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - lastMousePosRef.current.x;
    const deltaY = e.touches[0].clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    targetRotationRef.current.y = Math.max(-0.6, Math.min(0.6, targetRotationRef.current.y + deltaX * 0.008));
    targetRotationRef.current.x = Math.max(-0.25, Math.min(0.25, targetRotationRef.current.x + deltaY * 0.005));
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const depthMarkers = [
    { level: 1, label: 'SURFACE • 0 m', title: 'ACADEMIC PERFORMANCE', tag: 'VISIBLE TIP', color: '#F28C65' },
    { level: 2, label: 'DEPTH • -150 m', title: 'CONCEPTUAL UNDERSTANDING', tag: 'UNDERSTANDING', color: '#55B6AA' },
    { level: 3, label: 'DEPTH • -350 m', title: 'PRACTICAL APPLICATION', tag: 'REAL-WORLD SYSTEMS', color: '#287EAD' },
    { level: 4, label: 'DEPTH • -550 m', title: 'CRITICAL THINKING', tag: 'EPISTEMIC RIGOR', color: '#1C638B' },
    { level: 5, label: 'DEPTH • -800 m', title: 'LONG-TERM RETENTION', tag: 'DURABLE SCHEMA', color: '#12345A' },
  ];

  return (
    <div
      className="relative w-full h-full min-h-[580px] md:min-h-[720px] rounded-2xl overflow-hidden select-none bg-gradient-to-b from-[#F2F8FC] via-[#CFE6F2] to-[#0A263D] cursor-grab active:cursor-grabbing border border-ocean-200/90 shadow-elevated"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Three.js Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Atmospheric Shading */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-white/90 via-sky-50/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#061826]/90 via-[#0B2B44]/50 to-transparent pointer-events-none" />

      {/* Waterline Marker - Aligned cleanly across the middle-upper boundary */}
      <div
        className="absolute inset-x-0 top-[26%] pointer-events-none flex items-center justify-end pr-6 z-10"
        style={{ transform: 'translateY(-50%)' }}
      >
        <div className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-coral/40 shadow-sm text-coral-dark text-[10px] font-black uppercase tracking-wider font-heading flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          <span>WATERLINE • BOUNDARY OF OBSERVABILITY</span>
        </div>
      </div>

      {/* Floating 3D Stratum Depth Marker Buttons (Stacked cleanly on the left) */}
      <div className="absolute inset-y-0 left-3 md:left-5 flex flex-col justify-between py-6 pointer-events-none z-20">
        {depthMarkers.map((marker) => {
          const isSelected = activeLevel === marker.level;
          const isHovered = hovered3DLevel === marker.level;

          return (
            <button
              key={marker.level}
              type="button"
              onClick={() => onSelectLevel(marker.level)}
              onMouseEnter={() => setHovered3DLevel(marker.level)}
              onMouseLeave={() => setHovered3DLevel(null)}
              className={`pointer-events-auto text-left group transition-all duration-200 flex items-center gap-2.5 p-2 rounded-xl backdrop-blur-md border ${
                isSelected
                  ? 'bg-white shadow-card scale-105 border-ocean-500 ring-2 ring-ocean-400'
                  : isHovered
                  ? 'bg-white/95 shadow-sm scale-102 border-ocean-300'
                  : 'bg-white/80 hover:bg-white/95 border-white/70 shadow-subtle'
              }`}
              style={{
                borderColor: isSelected ? marker.color : undefined,
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center font-heading font-black text-xs text-white shadow-xs transition-transform group-hover:scale-110"
                style={{ backgroundColor: marker.color }}
              >
                0{marker.level}
              </div>

              <div className="pr-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-muted">
                    {marker.label}
                  </span>
                  <span
                    className="text-[8px] font-bold px-1.5 py-0.2 rounded uppercase"
                    style={{
                      backgroundColor: `${marker.color}18`,
                      color: marker.color,
                    }}
                  >
                    {marker.tag}
                  </span>
                </div>
                <div
                  className={`text-xs font-black font-heading leading-tight transition-colors ${
                    isSelected ? 'text-ocean-950 font-black' : 'text-ocean-900 group-hover:text-ocean-700'
                  }`}
                >
                  {marker.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating 3D Interaction Hints */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-ocean-200 text-ocean-800 text-[10px] font-medium shadow-subtle flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-soft animate-ping" />
          <span>Drag to rotate 3D • Click depth markers to inspect</span>
        </div>
      </div>

      {!hasWebGL && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ocean-100 p-6 text-center z-50">
          <p className="text-sm font-bold text-ocean-900 mb-2">3D Acceleration Not Available</p>
          <p className="text-xs text-slate-muted">Displaying high-resolution vector scientific illustration.</p>
        </div>
      )}
    </div>
  );
};

// Creates realistic crystalline faceted geometry
function createLayerGeometry(layerNum: number): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  let vertices: number[] = [];

  const addTri = (p1: number[], p2: number[], p3: number[]) => {
    vertices.push(...p1, ...p2, ...p3);
  };

  const addQuad = (p1: number[], p2: number[], p3: number[], p4: number[]) => {
    addTri(p1, p2, p3);
    addTri(p1, p3, p4);
  };

  if (layerNum === 1) {
    const apex = [0.15, 3.8, 0.2];
    const subPeak = [-1.1, 2.6, -0.3];
    const eastSpire = [1.3, 2.4, 0.4];

    const w1 = [-2.1, 0.0, 0.9];
    const w2 = [-1.4, 0.0, 1.8];
    const w3 = [0.2, 0.0, 2.1];
    const w4 = [1.8, 0.0, 1.6];
    const w5 = [2.4, 0.0, 0.4];
    const w6 = [1.9, 0.0, -1.2];
    const w7 = [0.1, 0.0, -1.9];
    const w8 = [-1.6, 0.0, -1.3];

    const m1 = [-1.4, 1.5, 0.6];
    const m2 = [-0.6, 1.6, 1.2];
    const m3 = [0.5, 1.7, 1.3];
    const m4 = [1.2, 1.5, 0.7];
    const m5 = [1.0, 1.4, -0.6];
    const m6 = [0.0, 1.6, -1.1];
    const m7 = [-1.0, 1.5, -0.7];

    addTri(apex, m2, m3);
    addTri(apex, m3, eastSpire);
    addTri(eastSpire, m3, m4);
    addTri(apex, eastSpire, m4);
    addTri(apex, m4, m5);
    addTri(apex, m5, m6);
    addTri(apex, m6, subPeak);
    addTri(subPeak, m6, m7);
    addTri(subPeak, m7, m1);
    addTri(apex, subPeak, m1);
    addTri(apex, m1, m2);

    addQuad(m1, m2, w2, w1);
    addQuad(m2, m3, w3, w2);
    addQuad(m3, m4, w4, w3);
    addQuad(m4, m5, w5, w4);
    addQuad(m5, m6, w6, w5);
    addQuad(m6, m7, w7, w6);
    addQuad(m7, m1, w1, w8);
    addQuad(m7, w8, w7, m6);
  } else if (layerNum === 2) {
    const t1 = [-2.1, 0.0, 0.9];
    const t2 = [-1.4, 0.0, 1.8];
    const t3 = [0.2, 0.0, 2.1];
    const t4 = [1.8, 0.0, 1.6];
    const t5 = [2.4, 0.0, 0.4];
    const t6 = [1.9, 0.0, -1.2];
    const t7 = [0.1, 0.0, -1.9];
    const t8 = [-1.6, 0.0, -1.3];

    const b1 = [-2.6, -1.6, 1.2];
    const b2 = [-1.8, -1.6, 2.3];
    const b3 = [0.4, -1.6, 2.7];
    const b4 = [2.3, -1.6, 2.0];
    const b5 = [3.0, -1.6, 0.6];
    const b6 = [2.4, -1.6, -1.5];
    const b7 = [0.2, -1.6, -2.4];
    const b8 = [-2.0, -1.6, -1.7];

    addQuad(t1, t2, b2, b1);
    addQuad(t2, t3, b3, b2);
    addQuad(t3, t4, b4, b3);
    addQuad(t4, t5, b5, b4);
    addQuad(t5, t6, b6, b5);
    addQuad(t6, t7, b7, b6);
    addQuad(t7, t8, b8, b7);
    addQuad(t8, t1, b1, b8);
  } else if (layerNum === 3) {
    const t1 = [-2.6, -1.6, 1.2];
    const t2 = [-1.8, -1.6, 2.3];
    const t3 = [0.4, -1.6, 2.7];
    const t4 = [2.3, -1.6, 2.0];
    const t5 = [3.0, -1.6, 0.6];
    const t6 = [2.4, -1.6, -1.5];
    const t7 = [0.2, -1.6, -2.4];
    const t8 = [-2.0, -1.6, -1.7];

    const b1 = [-3.1, -3.6, 1.4];
    const b2 = [-2.1, -3.6, 2.8];
    const b3 = [0.6, -3.6, 3.2];
    const b4 = [2.7, -3.6, 2.4];
    const b5 = [3.5, -3.6, 0.8];
    const b6 = [2.8, -3.6, -1.8];
    const b7 = [0.3, -3.6, -2.9];
    const b8 = [-2.4, -3.6, -2.0];

    addQuad(t1, t2, b2, b1);
    addQuad(t2, t3, b3, b2);
    addQuad(t3, t4, b4, b3);
    addQuad(t4, t5, b5, b4);
    addQuad(t5, t6, b6, b5);
    addQuad(t6, t7, b7, b6);
    addQuad(t7, t8, b8, b7);
    addQuad(t8, t1, b1, b8);
  } else if (layerNum === 4) {
    const t1 = [-3.1, -3.6, 1.4];
    const t2 = [-2.1, -3.6, 2.8];
    const t3 = [0.6, -3.6, 3.2];
    const t4 = [2.7, -3.6, 2.4];
    const t5 = [3.5, -3.6, 0.8];
    const t6 = [2.8, -3.6, -1.8];
    const t7 = [0.3, -3.6, -2.9];
    const t8 = [-2.4, -3.6, -2.0];

    const b1 = [-2.2, -5.6, 1.0];
    const b2 = [-1.4, -5.6, 2.0];
    const b3 = [0.4, -5.6, 2.3];
    const b4 = [1.9, -5.6, 1.7];
    const b5 = [2.5, -5.6, 0.5];
    const b6 = [2.0, -5.6, -1.2];
    const b7 = [0.2, -5.6, -2.0];
    const b8 = [-1.7, -5.6, -1.4];

    addQuad(t1, t2, b2, b1);
    addQuad(t2, t3, b3, b2);
    addQuad(t3, t4, b4, b3);
    addQuad(t4, t5, b5, b4);
    addQuad(t5, t6, b6, b5);
    addQuad(t6, t7, b7, b6);
    addQuad(t7, t8, b8, b7);
    addQuad(t8, t1, b1, b8);
  } else if (layerNum === 5) {
    const t1 = [-2.2, -5.6, 1.0];
    const t2 = [-1.4, -5.6, 2.0];
    const t3 = [0.4, -5.6, 2.3];
    const t4 = [1.9, -5.6, 1.7];
    const t5 = [2.5, -5.6, 0.5];
    const t6 = [2.0, -5.6, -1.2];
    const t7 = [0.2, -5.6, -2.0];
    const t8 = [-1.7, -5.6, -1.4];

    const deepKeelApex = [0.1, -8.0, 0.3];

    addTri(t1, t2, deepKeelApex);
    addTri(t2, t3, deepKeelApex);
    addTri(t3, t4, deepKeelApex);
    addTri(t4, t5, deepKeelApex);
    addTri(t5, t6, deepKeelApex);
    addTri(t6, t7, deepKeelApex);
    addTri(t7, t8, deepKeelApex);
    addTri(t8, t1, deepKeelApex);
  }

  geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geom.computeVertexNormals();
  return geom;
}
