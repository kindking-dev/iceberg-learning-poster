import React from 'react';
import { ThreeIcebergCanvas } from '../components/ThreeIcebergCanvas';
import { LayerDetailModal } from '../components/LayerDetailModal';
import { posterMetadata } from '../data/posterContent';
import { Eye, EyeOff, Sparkles, Compass } from 'lucide-react';

interface CenterIcebergSectionProps {
  activeLevel: number | null;
  onSelectLevel: (level: number) => void;
  onCloseModal: () => void;
}

export const CenterIcebergSection: React.FC<CenterIcebergSectionProps> = ({
  activeLevel,
  onSelectLevel,
  onCloseModal,
}) => {
  return (
    <div className="flex flex-col h-full bg-white/95 backdrop-blur-xl rounded-2xl border-2 border-ocean-300/80 p-4 shadow-card relative overflow-hidden">
      {/* Top Section Header */}
      <div className="flex items-start justify-between pb-2 border-b border-ocean-200 mb-3 z-10 gap-2 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1.5 rounded-lg bg-ocean-900 text-white shadow-xs shrink-0">
            <Compass className="w-4 h-4 text-teal-soft" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-ocean-600 block font-heading">
              SECTION 2 • THE CENTRAL PEDAGOGICAL METAPHOR
            </span>
            <h2 className="text-sm font-black font-heading text-ocean-950 uppercase tracking-tight leading-tight">
              THE FIVE DIMENSIONS OF COGNITIVE DEPTH
            </h2>
          </div>
        </div>

        {/* Observable Evidence Ratio — stacked vertically to prevent overflow */}
        <div className="flex flex-col gap-1 text-xs shrink-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-coral-light border border-coral/30 text-coral-dark font-extrabold text-[9.5px] font-heading whitespace-nowrap">
            <Eye className="w-3 h-3 text-coral shrink-0" />
            ~10% VISIBLE (EXAM)
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ocean-100 border border-ocean-200 text-ocean-800 font-extrabold text-[9.5px] font-heading whitespace-nowrap">
            <EyeOff className="w-3 h-3 text-ocean-600 shrink-0" />
            ~90% SUBMERGED
          </span>
        </div>
      </div>

      {/* Main 3D Iceberg Visual Stage */}
      <div className="relative flex-1 w-full min-h-[560px] md:min-h-[700px] flex items-center justify-center">
        {/* The 3D Realistic Three.js Canvas */}
        <ThreeIcebergCanvas
          activeLevel={activeLevel}
          onSelectLevel={onSelectLevel}
        />

        {/* Interactive Layer Detail Modal / Drawer */}
        <LayerDetailModal
          activeLevel={activeLevel}
          onClose={onCloseModal}
          onSelectLevel={onSelectLevel}
        />
      </div>

      {/* Bottom Prominent Central Takeaway Banner */}
      <div className="mt-3 pt-2.5 border-t-2 border-ocean-200 flex flex-wrap items-center justify-between bg-gradient-to-r from-ocean-50 via-white to-pale-ice p-3 rounded-xl border border-ocean-200/90 shadow-subtle z-10">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-coral shrink-0" />
          <span className="text-xs md:text-sm font-black font-heading text-ocean-950 uppercase tracking-wide">
            {posterMetadata.coreTakeaway}
          </span>
        </div>
        <div className="text-[11px] text-ocean-700 font-semibold italic hidden sm:block">
          "A high grade is visible evidence. True pedagogical mastery goes deeper."
        </div>
      </div>
    </div>
  );
};
