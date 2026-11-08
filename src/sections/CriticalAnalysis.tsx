import React, { useState } from 'react';
import { icebergDimensions, posterMetadata } from '../data/posterContent';
import { IcebergIllustration } from '../components/IcebergIllustration';
import { IcebergLayer } from '../components/IcebergLayer';
import { Layers, Eye, EyeOff, Sparkles } from 'lucide-react';

export const CriticalAnalysis: React.FC = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const level1 = icebergDimensions.find((d) => d.level === 1)!;
  const level2 = icebergDimensions.find((d) => d.level === 2)!;
  const level3 = icebergDimensions.find((d) => d.level === 3)!;
  const level4 = icebergDimensions.find((d) => d.level === 4)!;
  const level5 = icebergDimensions.find((d) => d.level === 5)!;

  return (
    <section className="bg-white/95 backdrop-blur-md rounded-2xl border-2 border-ocean-300/80 p-4 shadow-card flex flex-col justify-between h-full relative overflow-hidden">
      {/* Section Title Header */}
      <div className="flex items-center justify-between pb-2 border-b border-ocean-200/80 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-ocean-800 text-white">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-ocean-600 block">
              SECTION 2 • THE CENTRAL PEDAGOGICAL METAPHOR
            </span>
            <h2 className="text-base font-black font-heading text-ocean-950 uppercase tracking-tight">
              THE FIVE DIMENSIONS OF COGNITIVE DEPTH
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-coral-light border border-coral/30 text-coral-dark font-bold text-[10px]">
            <Eye className="w-3 h-3 text-coral" />
            ~10% Visible Evidence
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-ocean-100 border border-ocean-200 text-ocean-800 font-bold text-[10px]">
            <EyeOff className="w-3 h-3 text-ocean-600" />
            ~90% Submerged Learning
          </span>
        </div>
      </div>

      {/* Main Visual Core: 3 - 6 - 3 Subcolumn Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 my-1">
        {/* Left Subcolumn (col-span-3): Level 1 (Top), Level 2 (Sub-surface), Level 4 (Epistemic Rigor) */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-2.5">
          {/* Level 1: Above Water */}
          <div>
            <div className="text-[9px] uppercase font-bold text-coral-dark tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-coral inline-block"></span>
              SURFACE CRITERIA • WHAT WE CAN SEE
            </div>
            <IcebergLayer
              dimension={level1}
              isHovered={hoveredLevel === 1}
              onHover={(id) => setHoveredLevel(id ? 1 : null)}
            />
          </div>

          {/* Level 2: Conceptual Understanding */}
          <div>
            <div className="text-[9px] uppercase font-bold text-teal-dark tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-teal-soft inline-block"></span>
              LAYER 01 • MEANING-MAKING
            </div>
            <IcebergLayer
              dimension={level2}
              isHovered={hoveredLevel === 2}
              onHover={(id) => setHoveredLevel(id ? 2 : null)}
            />
          </div>

          {/* Level 4: Critical Thinking */}
          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-700 tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-ocean-600 inline-block"></span>
              LAYER 03 • EPISTEMIC RIGOR
            </div>
            <IcebergLayer
              dimension={level4}
              isHovered={hoveredLevel === 4}
              onHover={(id) => setHoveredLevel(id ? 4 : null)}
            />
          </div>
        </div>

        {/* Center Subcolumn (col-span-6): The Dominant Iceberg Vector Centerpiece */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[500px]">
          <IcebergIllustration
            activeLevel={hoveredLevel || undefined}
            onHoverLevel={(lvl) => setHoveredLevel(lvl)}
          />
        </div>

        {/* Right Subcolumn (col-span-3): Level 3 (Practical), Level 5 (Retention), Guardrail note */}
        <div className="lg:col-span-3 flex flex-col justify-between space-y-2.5">
          {/* Level 3: Practical Application */}
          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-700 tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-ocean-500 inline-block"></span>
              LAYER 02 • ACTIVE DEPLOYMENT
            </div>
            <IcebergLayer
              dimension={level3}
              isHovered={hoveredLevel === 3}
              onHover={(id) => setHoveredLevel(id ? 3 : null)}
            />
          </div>

          {/* Level 5: Long-Term Retention & Transfer */}
          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-900 tracking-wider mb-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-ocean-800 inline-block"></span>
              LAYER 04 • DURABLE RETENTION
            </div>
            <IcebergLayer
              dimension={level5}
              isHovered={hoveredLevel === 5}
              onHover={(id) => setHoveredLevel(id ? 5 : null)}
            />
          </div>

          {/* Conceptual Guardrail Note */}
          <div className="p-2.5 rounded-xl bg-pale-ice/70 border border-ocean-200/80 text-[10px] text-slate-muted leading-tight">
            <span className="font-bold text-ocean-800 block mb-0.5">Conceptual Principle:</span>
            These five dimensions represent complementary aspects of cognitive depth, not a rigid sequential hierarchy. Grades reveal localized performance; authentic learning requires conceptual, practical, and epistemological roots.
          </div>
        </div>
      </div>

      {/* Prominent Bottom Central Takeaway Banner */}
      <div className="mt-3 pt-2.5 border-t-2 border-ocean-200 flex items-center justify-between bg-gradient-to-r from-ocean-50 via-white to-ocean-50 p-2.5 rounded-xl border border-ocean-200/90 shadow-subtle">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-coral shrink-0" />
          <span className="text-xs md:text-sm font-black font-heading text-ocean-900 uppercase tracking-wide">
            {posterMetadata.coreTakeaway}
          </span>
        </div>
        <div className="text-[11px] text-ocean-700 font-semibold italic hidden sm:block">
          "A high grade is visible evidence. True pedagogical mastery goes deeper."
        </div>
      </div>
    </section>
  );
};
