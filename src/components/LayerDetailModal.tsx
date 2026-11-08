import React from 'react';
import { icebergDimensions } from '../data/posterContent';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Lightbulb, Compass } from 'lucide-react';

interface LayerDetailModalProps {
  activeLevel: number | null;
  onClose: () => void;
  onSelectLevel: (level: number) => void;
}

export const LayerDetailModal: React.FC<LayerDetailModalProps> = ({
  activeLevel,
  onClose,
  onSelectLevel,
}) => {
  if (activeLevel === null) return null;

  const dimension = icebergDimensions.find((d) => d.level === activeLevel);
  if (!dimension) return null;

  const isAboveWater = dimension.position === 'above';

  const handlePrev = () => {
    onSelectLevel(activeLevel > 1 ? activeLevel - 1 : 5);
  };

  const handleNext = () => {
    onSelectLevel(activeLevel < 5 ? activeLevel + 1 : 1);
  };

  return (
    <div className="absolute right-3 md:right-6 top-16 md:top-20 z-40 w-full max-w-sm md:max-w-md bg-white/95 backdrop-blur-xl border border-ocean-300/90 rounded-2xl shadow-elevated p-5 transition-all duration-300 animate-in fade-in slide-in-from-right-4">
      {/* Top Bar with Level Badge, Stratum, and Close button */}
      <div className="flex items-center justify-between pb-3 border-b border-ocean-100">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-wider ${
              isAboveWater
                ? 'bg-coral-light text-coral-dark border border-coral/40'
                : 'bg-ocean-100 text-ocean-800 border border-ocean-200'
            }`}
          >
            LEVEL 0{dimension.level} • {dimension.depthLabel}
          </span>
          <span className="text-[10px] font-bold text-slate-muted uppercase tracking-wider">
            {isAboveWater ? 'Visible Metric' : 'Submerged Mastery'}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-muted hover:text-ocean-900 hover:bg-ocean-100 transition-colors"
          title="Close details panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Title & Pedagogical Definition */}
      <div className="my-3">
        <h3 className="text-lg md:text-xl font-black font-heading text-ocean-950 tracking-tight leading-tight">
          {dimension.title}
        </h3>
        <p className="text-xs text-ocean-800 mt-1.5 leading-relaxed font-medium">
          {dimension.explanation}
        </p>
      </div>

      {/* Key Observable Criteria & Manifestations */}
      <div className="bg-ocean-50/70 p-3 rounded-xl border border-ocean-100/80 my-3">
        <span className="text-[10px] uppercase font-bold text-ocean-700 tracking-wider flex items-center gap-1.5 mb-2 font-heading">
          <CheckCircle2 className="w-3.5 h-3.5 text-teal-soft" />
          Key Observable Criteria:
        </span>
        <ul className="space-y-1.5 text-xs text-ocean-900">
          {dimension.summary.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 leading-snug">
              <span className="w-1.5 h-1.5 rounded-full bg-ocean-500 mt-1.5 shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Domain Connection & Real Educational Application */}
      {dimension.academicNote && (
        <div className="p-2.5 rounded-xl bg-pale-ice/80 border border-ocean-200/70 text-xs text-ocean-900 leading-snug mb-3 flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-coral shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-ocean-950 block text-[10.5px] uppercase font-heading">
              Pedagogical Implication:
            </span>
            <span className="text-[11px] text-slate-muted italic">{dimension.academicNote}</span>
          </div>
        </div>
      )}

      {/* Specific Case Connection for Level 3: Computing Architecture */}
      {dimension.level === 3 && (
        <div className="p-2.5 rounded-xl bg-ocean-900 text-white text-[11px] leading-snug mb-3">
          <div className="flex items-center gap-1.5 text-teal-soft font-bold uppercase text-[9.5px] font-heading mb-1">
            <Compass className="w-3.5 h-3.5" />
            Computer Organisation & Architecture Case Study
          </div>
          <p className="text-ocean-100">
            Instead of merely defining CPU registers, students trace real-time CPU ↔ RAM bus interactions and analyze cache hierarchy trade-offs to explain dynamic system behavior.
          </p>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="pt-2.5 border-t border-ocean-100 flex items-center justify-between text-xs font-bold">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 text-ocean-700 hover:text-ocean-950 px-2 py-1 rounded hover:bg-ocean-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Layer</span>
        </button>

        <span className="text-[10px] text-slate-muted font-mono">
          0{dimension.level} / 05
        </span>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 text-ocean-700 hover:text-ocean-950 px-2 py-1 rounded hover:bg-ocean-100 transition-colors"
        >
          <span>Next Layer</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
