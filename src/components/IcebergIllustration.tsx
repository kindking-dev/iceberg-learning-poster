import React from 'react';

interface IcebergIllustrationProps {
  activeLevel?: number;
  onHoverLevel?: (level: number | null) => void;
}

export const IcebergIllustration: React.FC<IcebergIllustrationProps> = ({
  activeLevel,
  onHoverLevel,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none py-1">
      <svg
        viewBox="0 0 900 1200"
        className="w-full h-full max-h-[850px] object-contain drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Atmospheric sky gradient above waterline */}
          <linearGradient id="skyAtmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F0F8FC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D8EFF8" stopOpacity="0.2" />
          </linearGradient>

          {/* Underwater ocean depth gradient */}
          <linearGradient id="oceanDeepColumn" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#287EAD" stopOpacity="0.14" />
            <stop offset="25%" stopColor="#1C638B" stopOpacity="0.30" />
            <stop offset="55%" stopColor="#164C72" stopOpacity="0.52" />
            <stop offset="85%" stopColor="#0E334D" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#061826" stopOpacity="0.92" />
          </linearGradient>

          {/* Above-water sunlit crystal ice gradients */}
          <linearGradient id="peakSunlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#EBF6FA" />
            <stop offset="80%" stopColor="#C4E7F5" />
            <stop offset="100%" stopColor="#9BD4EC" />
          </linearGradient>

          <linearGradient id="peakShadowFacet" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCE3F2" />
            <stop offset="50%" stopColor="#81C4E4" />
            <stop offset="100%" stopColor="#55A4CC" />
          </linearGradient>

          {/* Submerged crystalline ice gradients */}
          <linearGradient id="iceLayer2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8ED5F0" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#4FA8D2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2A7FA8" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="iceLayer3Grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#43A3CD" stopOpacity="0.92" />
            <stop offset="50%" stopColor="#23749E" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#155375" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="iceLayer4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#267EA8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#18567A" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#0F3B55" stopOpacity="0.99" />
          </linearGradient>

          <linearGradient id="iceLayer5Grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#154F70" stopOpacity="0.98" />
            <stop offset="50%" stopColor="#0D354E" stopOpacity="0.99" />
            <stop offset="100%" stopColor="#051926" stopOpacity="1" />
          </linearGradient>

          {/* Water Surface Multi-Wave Gradient */}
          <linearGradient id="surfaceWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#287EAD" stopOpacity="0.1" />
            <stop offset="20%" stopColor="#55B6AA" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="80%" stopColor="#287EAD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#287EAD" stopOpacity="0.1" />
          </linearGradient>

          {/* Light Shaft Gradient */}
          <linearGradient id="lightShaft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A9D7EC" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#55B6AA" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#287EAD" stopOpacity="0" />
          </linearGradient>

          <filter id="iceGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ---------------- BACKGROUND SUBMERGED WATER COLUMN ---------------- */}
        <rect x="15" y="290" width="870" height="895" rx="20" fill="url(#oceanDeepColumn)" />

        {/* Diagonal Atmospheric Light Shafts penetrating water */}
        <polygon points="360,290 440,290 620,840 510,840" fill="url(#lightShaft)" opacity="0.38" />
        <polygon points="490,290 560,290 730,760 640,760" fill="url(#lightShaft)" opacity="0.28" />
        <polygon points="260,290 330,290 320,690 230,690" fill="url(#lightShaft)" opacity="0.22" />

        {/* Horizontal Scientific Depth Stratum Lines */}
        <g stroke="#287EAD" strokeDasharray="3 4" strokeWidth="0.9" opacity="0.35">
          <line x1="25" y1="450" x2="875" y2="450" />
          <line x1="25" y1="670" x2="875" y2="670" />
          <line x1="25" y1="890" x2="875" y2="890" />
          <line x1="25" y1="1070" x2="875" y2="1070" />
        </g>

        {/* Depth Scientific Stratum Indicators */}
        <g fill="#164C72" fontFamily="Montserrat" fontWeight="700" fontSize="10.5" opacity="0.8">
          <text x="30" y="280" fill="#D86B42" fontSize="11" fontWeight="800">SURFACE (0 m)</text>
          <text x="30" y="442">-150 m • CONCEPTUAL STRATUM</text>
          <text x="30" y="662">-350 m • PRACTICAL DEPLOYMENT</text>
          <text x="30" y="882">-550 m • EPISTEMIC RIGOR</text>
          <text x="30" y="1062">-800 m • ABYSSAL RETENTION</text>
        </g>

        {/* Scientific Evidence Ratio Badges */}
        <g transform="translate(810, 250)">
          <rect x="-85" y="-13" width="95" height="26" rx="13" fill="#FCECE6" stroke="#F28C65" strokeWidth="1.5" />
          <text x="-37" y="4" fill="#D86B42" fontSize="10.5" fontFamily="Montserrat" fontWeight="800" textAnchor="middle">
            ~10% VISIBLE
          </text>
        </g>
        <g transform="translate(810, 690)">
          <rect x="-95" y="-13" width="115" height="26" rx="13" fill="#EAF4F8" stroke="#287EAD" strokeWidth="1.5" />
          <text x="-37" y="4" fill="#164C72" fontSize="10.5" fontFamily="Montserrat" fontWeight="800" textAnchor="middle">
            ~90% SUBMERGED
          </text>
        </g>

        {/* ---------------- LEVEL 5: DEEPEST ROOTS (ABYSSAL MASS - 890m - 1170m) ---------------- */}
        <g
          className="transition-all duration-300 cursor-pointer"
          onMouseEnter={() => onHoverLevel?.(5)}
          onMouseLeave={() => onHoverLevel?.(null)}
          opacity={activeLevel && activeLevel !== 5 ? 0.6 : 1}
        >
          <polygon
            points="220,890 380,870 560,885 690,920 630,1070 470,1165 310,1110 180,990"
            fill="url(#iceLayer5Grad)"
            stroke="#12345A"
            strokeWidth="2"
          />
          {/* 3D Internal facets */}
          <polygon points="470,1165 630,1070 550,960 450,1010" fill="#072235" opacity="0.85" />
          <polygon points="310,1110 470,1165 450,1010 330,960" fill="#0A2C42" opacity="0.75" />
          <polygon points="690,920 630,1070 550,960 620,930" fill="#041521" opacity="0.9" />
          <polygon points="180,990 310,1110 330,960 230,920" fill="#0F3852" opacity="0.8" />
        </g>

        {/* ---------------- LEVEL 4: CRITICAL THINKING (BATHYAL - 670m - 900m) ---------------- */}
        <g
          className="transition-all duration-300 cursor-pointer"
          onMouseEnter={() => onHoverLevel?.(4)}
          onMouseLeave={() => onHoverLevel?.(null)}
          opacity={activeLevel && activeLevel !== 4 ? 0.6 : 1}
        >
          <polygon
            points="140,670 380,650 670,665 770,780 690,890 220,890 110,790"
            fill="url(#iceLayer4Grad)"
            stroke="#1C638B"
            strokeWidth="2"
          />
          {/* Facets */}
          <polygon points="380,650 520,750 430,880 280,770" fill="#144C6E" opacity="0.6" />
          <polygon points="520,750 670,665 770,780 610,830" fill="#0D3B57" opacity="0.75" />
          <polygon points="140,670 280,770 220,890 110,790" fill="#1F6994" opacity="0.5" />
        </g>

        {/* ---------------- LEVEL 3: PRACTICAL APPLICATION (MESOPELAGIC - 450m - 675m) ---------------- */}
        <g
          className="transition-all duration-300 cursor-pointer"
          onMouseEnter={() => onHoverLevel?.(3)}
          onMouseLeave={() => onHoverLevel?.(null)}
          opacity={activeLevel && activeLevel !== 3 ? 0.6 : 1}
        >
          <polygon
            points="95,455 360,435 690,445 810,570 730,680 140,675 75,565"
            fill="url(#iceLayer3Grad)"
            stroke="#287EAD"
            strokeWidth="2"
          />
          {/* Internal facets */}
          <polygon points="360,435 490,545 400,665 240,555" fill="#3D92BC" opacity="0.45" />
          <polygon points="490,545 690,445 810,570 650,650" fill="#1C6C96" opacity="0.65" />
          <polygon points="95,455 240,555 140,675 75,565" fill="#5AAFD5" opacity="0.45" />
        </g>

        {/* ---------------- LEVEL 2: CONCEPTUAL UNDERSTANDING (EPILIMNION - 290m - 460m) ---------------- */}
        <g
          className="transition-all duration-300 cursor-pointer"
          onMouseEnter={() => onHoverLevel?.(2)}
          onMouseLeave={() => onHoverLevel?.(null)}
          opacity={activeLevel && activeLevel !== 2 ? 0.6 : 1}
        >
          <polygon
            points="180,295 420,285 680,295 765,420 610,465 370,455 130,430"
            fill="url(#iceLayer2Grad)"
            stroke="#55B6AA"
            strokeWidth="2"
          />
          {/* Subtle refraction facets */}
          <polygon points="420,285 520,370 410,455 290,370" fill="#88D0EC" opacity="0.5" />
          <polygon points="520,370 680,295 765,420 590,460" fill="#3991BB" opacity="0.55" />
          <polygon points="180,295 290,370 370,455 130,430" fill="#A8E0F5" opacity="0.45" />
        </g>

        {/* Scientific Organic Underwater Bubbles */}
        <g fill="#FFFFFF" opacity="0.5">
          <circle cx="160" cy="510" r="4.5" />
          <circle cx="170" cy="490" r="2.5" />
          <circle cx="760" cy="530" r="5" />
          <circle cx="770" cy="510" r="3" />
          <circle cx="250" cy="790" r="4" />
          <circle cx="680" cy="920" r="4.5" />
          <circle cx="695" cy="900" r="2.5" />
        </g>

        {/* ---------------- WATERLINE BOUNDARY (CRITICAL PEDAGOGICAL HORIZON) ---------------- */}
        <g>
          {/* Waterline Glow Band */}
          <rect x="15" y="286" width="870" height="9" fill="url(#surfaceWaveGrad)" opacity="0.75" />
          {/* Fine Crisp Waterline */}
          <line x1="15" y1="290" x2="885" y2="290" stroke="#F28C65" strokeWidth="2.5" />
          {/* Wave Ripple Patterns */}
          <path
            d="M 50 290 Q 240 284, 460 290 T 850 290"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 100 293 Q 320 298, 560 292 T 820 293"
            fill="none"
            stroke="#A9D7EC"
            strokeWidth="1.5"
            opacity="0.9"
          />
        </g>

        {/* ---------------- LEVEL 1: ABOVE WATER (THE VISIBLE APEX) ---------------- */}
        <g
          className="transition-all duration-300 cursor-pointer"
          onMouseEnter={() => onHoverLevel?.(1)}
          onMouseLeave={() => onHoverLevel?.(null)}
          opacity={activeLevel && activeLevel !== 1 ? 0.6 : 1}
        >
          {/* Main Ice Peak Outline (Spanning from x=190 to x=710) */}
          <polygon
            points="450,45 570,140 650,225 710,289 450,289 190,289 250,200 350,120"
            fill="url(#peakSunlight)"
            stroke="#81C4E4"
            strokeWidth="2"
          />
          {/* Sunlit Pristine Left Facets */}
          <polygon points="450,45 350,120 420,195 470,135" fill="#FFFFFF" opacity="0.95" />
          <polygon points="350,120 250,200 330,250 420,195" fill="#EFF8FC" opacity="0.9" />
          <polygon points="250,200 190,289 380,289 330,250" fill="#D9EFF8" opacity="0.85" />

          {/* Shaded Right Facets */}
          <polygon points="450,45 470,135 570,140" fill="url(#peakShadowFacet)" opacity="0.85" />
          <polygon points="470,135 420,195 530,245 570,140" fill="#75BCD9" opacity="0.9" />
          <polygon points="570,140 530,245 650,225" fill="#5CAECF" opacity="0.88" />
          <polygon points="530,245 380,289 710,289 650,225" fill="#4B9EC2" opacity="0.85" />

          {/* Razor Crest Highlight on Peak */}
          <polyline
            points="450,45 470,135 420,195 380,289"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Peak Star Sparkle */}
          <circle cx="450" cy="45" r="4.5" fill="#FFFFFF" filter="url(#iceGlowFilter)" />
        </g>

        {/* ---------------- SCIENTIFIC CALLOUT CONNECTOR ANCHORS ---------------- */}
        <circle cx="450" cy="45" r="5" fill="#F28C65" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="430" cy="370" r="4.5" fill="#55B6AA" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="430" cy="550" r="4.5" fill="#287EAD" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="430" cy="760" r="4.5" fill="#1C638B" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="450" cy="1020" r="4.5" fill="#12345A" stroke="#FFFFFF" strokeWidth="2" />

        {/* Central Waterline Conceptual Marker Label */}
        <g transform="translate(450, 290)">
          <rect
            x="-210"
            y="-13"
            width="420"
            height="26"
            rx="13"
            fill="#FFFFFF"
            stroke="#F28C65"
            strokeWidth="2"
            className="shadow-md"
          />
          <text
            x="0"
            y="5"
            textAnchor="middle"
            fill="#12345A"
            fontSize="11"
            fontFamily="Montserrat"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            WATERLINE — THE BOUNDARY OF SURFACE OBSERVABILITY
          </text>
        </g>
      </svg>
    </div>
  );
};
