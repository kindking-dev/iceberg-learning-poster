import React, { useState } from 'react';
import { PosterHeader } from './components/PosterHeader';
import { EditorialColumnLeft } from './components/EditorialColumnLeft';
import { CenterIcebergSection } from './sections/CenterIcebergSection';
import { StaticPrintIceberg } from './components/StaticPrintIceberg';
import { EditorialColumnRight } from './components/EditorialColumnRight';
import { PosterFooter } from './components/PosterFooter';
import { Sparkles, ZoomIn, ZoomOut, Maximize2, Layers, Compass } from 'lucide-react';
import './styles/tokens.css';
import './styles/global.css';
import './styles/poster.css';
import './styles/print.css';

export const App: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [centerMode, setCenterMode] = useState<'3d' | 'static'>('3d');
  const [viewMode, setViewMode] = useState<'a1' | 'responsive'>('a1');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#E5EDF3] py-2 md:py-6 px-1 md:px-4 flex flex-col items-center">
      {/* ---------------- TOP CONTROL BAR (NO-PRINT) ---------------- */}
      <div className="no-print w-full max-w-[1720px] mb-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-ocean-200/90 shadow-card flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-ocean-950 font-heading flex items-center gap-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-coral" />
            ACADEMIC POSTER SUITE
          </span>
          <span className="text-slate-300">|</span>
          <span className="bg-ocean-100 text-ocean-800 font-bold px-2.5 py-0.5 rounded text-[11px] font-heading">
            ISO 216 A1 LANDSCAPE (841 × 594 mm)
          </span>
          <span className="text-slate-muted hidden md:inline text-[11px]">
            Astana IT University • Pedagogy of Higher Education
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Central Iceberg Presentation Mode: 3D Interactive vs All-in-One Poster */}
          <div className="bg-ocean-100/70 p-0.5 rounded-xl border border-ocean-200/80 flex items-center">
            <button
              onClick={() => setCenterMode('3d')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all text-xs ${
                centerMode === '3d'
                  ? 'bg-ocean-900 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-950'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-teal-soft" />
              <span>Interactive 3D Iceberg</span>
            </button>
            <button
              onClick={() => setCenterMode('static')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all text-xs ${
                centerMode === 'static'
                  ? 'bg-ocean-900 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-950'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-coral" />
              <span>Full A1 Presentation Mode</span>
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="bg-ocean-50 p-0.5 rounded-xl border border-ocean-200 flex items-center">
            <button
              onClick={() => setViewMode('a1')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'a1'
                  ? 'bg-ocean-900 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-950'
              }`}
            >
              A1 Poster Layout
            </button>
            <button
              onClick={() => setViewMode('responsive')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                viewMode === 'responsive'
                  ? 'bg-ocean-900 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-950'
              }`}
            >
              Reading Flow
            </button>
          </div>

          {/* Zoom Controls (A1 Mode) */}
          {viewMode === 'a1' && (
            <div className="hidden sm:flex items-center gap-1 bg-ocean-50 px-2 py-1 rounded-xl border border-ocean-200 text-ocean-800 font-mono">
              <button
                onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                className="hover:text-ocean-600 p-0.5"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-bold w-12 text-center">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                className="hover:text-ocean-600 p-0.5"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="hover:text-ocean-600 p-0.5 ml-1"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- MAIN POSTER COMPOSITION CANVAS ---------------- */}
      <main
        className={`poster-container poster-canvas bg-[#F7FAFC] transition-transform duration-200 ${
          viewMode === 'a1'
            ? 'w-[1640px] max-w-[98vw] shadow-elevated rounded-3xl border-2 border-ocean-200/90 p-5 md:p-6 my-2'
            : 'w-full max-w-6xl shadow-card rounded-2xl border border-ocean-200 p-4 md:p-8'
        }`}
        style={
          viewMode === 'a1' && zoomLevel !== 100
            ? { transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }
            : {}
        }
      >
        {/* Full-Width Header */}
        <PosterHeader
          onPrint={handlePrint}
          activeLevel={activeLevel}
          onResetLevel={() => setActiveLevel(null)}
        />

        {/* 3-Column Unified Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* LEFT COLUMN: Section 1 (The Research) */}
          <div className="lg:col-span-3">
            <EditorialColumnLeft />
          </div>

          {/* CENTRE COLUMN: Section 2 (The Central Iceberg) */}
          <div className="lg:col-span-6">
            {/* When in 3D interactive mode and not printing */}
            <div className={`h-full ${centerMode === '3d' ? 'block print:hidden' : 'hidden'}`}>
              <CenterIcebergSection
                activeLevel={activeLevel}
                onSelectLevel={(lvl) => setActiveLevel(lvl)}
                onCloseModal={() => setActiveLevel(null)}
              />
            </div>

            {/* When in static presentation mode or printing to PDF */}
            <div className={`h-full bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-ocean-300/80 p-4 shadow-card ${
              centerMode === 'static' ? 'block' : 'hidden print:block'
            }`}>
              <StaticPrintIceberg />
            </div>
          </div>

          {/* RIGHT COLUMN: Section 3 & 4 (The Analysis & Application) */}
          <div className="lg:col-span-3">
            <EditorialColumnRight />
          </div>
        </div>

        {/* Full-Width Footer: Section 5 (References & Contributors) */}
        <PosterFooter />
      </main>

      {/* Bottom Legal / Academic Footer */}
      <div className="no-print mt-3 text-center text-xs text-slate-muted">
        <span>© 2026 Astana IT University • Master's in Computer Science • Higher Education Pedagogy • Group SSE-2601</span>
      </div>
    </div>
  );
};
