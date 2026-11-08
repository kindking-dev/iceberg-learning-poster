import React, { useState } from 'react';
import { Header } from './components/Header';
import { Introduction } from './sections/Introduction';
import { CriticalAnalysis } from './sections/CriticalAnalysis';
import { Application } from './sections/Application';
import { Bibliography } from './sections/Bibliography';
import { Printer, ZoomIn, ZoomOut, Maximize2, Sparkles } from 'lucide-react';
import './styles/tokens.css';
import './styles/global.css';
import './styles/poster.css';
import './styles/print.css';

export const App: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'a1' | 'responsive'>('a1');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#EAEFF4] py-2 md:py-6 px-1 md:px-4 flex flex-col items-center">
      {/* Top Floating Control Bar (Hidden during print) */}
      <div className="no-print w-full max-w-[1700px] mb-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-ocean-200/90 shadow-card flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-ocean-900 font-heading flex items-center gap-1.5 text-sm">
            <Sparkles className="w-4 h-4 text-coral" />
            ACADEMIC POSTER SUITE
          </span>
          <span className="text-slate-300">|</span>
          <span className="bg-ocean-100 text-ocean-800 font-bold px-2 py-0.5 rounded text-[11px]">
            ISO 216 A1 LANDSCAPE (841 × 594 mm)
          </span>
          <span className="text-slate-muted hidden md:inline">
            Astana IT University • SSE-2601
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="bg-ocean-50 p-0.5 rounded-lg border border-ocean-200 flex items-center">
            <button
              onClick={() => setViewMode('a1')}
              className={`px-2.5 py-1 rounded font-bold transition-all ${
                viewMode === 'a1'
                  ? 'bg-ocean-800 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-900'
              }`}
            >
              A1 Poster Layout
            </button>
            <button
              onClick={() => setViewMode('responsive')}
              className={`px-2.5 py-1 rounded font-bold transition-all ${
                viewMode === 'responsive'
                  ? 'bg-ocean-800 text-white shadow-xs'
                  : 'text-ocean-700 hover:text-ocean-900'
              }`}
            >
              Web Reading Flow
            </button>
          </div>

          {/* Zoom Controls (Active in A1 mode) */}
          {viewMode === 'a1' && (
            <div className="hidden sm:flex items-center gap-1 bg-ocean-50 px-2 py-1 rounded-lg border border-ocean-200 text-ocean-800 font-mono">
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

          {/* Print / Export Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-gradient-to-r from-coral to-coral-dark text-white font-bold px-3.5 py-1.5 rounded-lg shadow-sm hover:opacity-95 transition-all text-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save A1 PDF</span>
          </button>
        </div>
      </div>

      {/* Main Poster Container */}
      <main
        className={`poster-container poster-canvas bg-[#F7FAFC] transition-transform duration-200 ${
          viewMode === 'a1'
            ? 'w-[1600px] max-w-[98vw] shadow-elevated rounded-2xl border-2 border-ocean-200/90 p-6 my-2'
            : 'w-full max-w-6xl shadow-card rounded-2xl border border-ocean-200 p-4 md:p-8'
        }`}
        style={
          viewMode === 'a1' && zoomLevel !== 100
            ? { transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }
            : {}
        }
      >
        {/* Full-Width Header */}
        <Header />

        {/* 3-Column Editorial Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* LEFT COLUMN: Section 1 (Introduction, Background, Biggs, Freire, Formative Loop) */}
          <div className="lg:col-span-3">
            <Introduction />
          </div>

          {/* CENTRAL COLUMN: Section 2 (The Central Pedagogical Iceberg & 5 Learning Levels) */}
          <div className="lg:col-span-6">
            <CriticalAnalysis />
          </div>

          {/* RIGHT COLUMN: Critical Analysis & Section 3 (Exams vs Projects, Grabinger REAL, Application) */}
          <div className="lg:col-span-3">
            <Application />
          </div>
        </div>

        {/* FULL-WIDTH FOOTER: Section 4 (Conclusion) & Section 5 (APA 7 References & Contributors) */}
        <Bibliography />
      </main>

      {/* Subtle bottom academic accreditation notice */}
      <div className="no-print mt-4 text-center text-xs text-slate-muted">
        <span>© 2026 Astana IT University • Higher Education Pedagogy • Group SSE-2601</span>
      </div>
    </div>
  );
};
