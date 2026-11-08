import React from 'react';
import { conclusionData, posterMetadata } from '../data/posterContent';
import { Anchor, CheckCircle } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white via-ocean-50/50 to-pale-ice rounded-xl border border-ocean-300/80 p-3.5 shadow-subtle relative overflow-hidden">
      {/* Decorative ocean wave background element */}
      <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-ocean-100/60 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-ocean-200/70 mb-2">
        <div className="flex items-center gap-1.5">
          <Anchor className="w-4 h-4 text-ocean-700" />
          <h3 className="text-xs font-extrabold font-heading text-ocean-900 uppercase tracking-wide">
            SECTION 4 • FINAL CONCLUSION & PEDAGOGICAL POSITION
          </h3>
        </div>
        <span className="text-[10px] font-bold text-ocean-800 bg-white px-2 py-0.5 rounded border border-ocean-200 shadow-xs">
          SSE-2601 Consensus
        </span>
      </div>

      {/* Main Conclusion Text */}
      <div className="space-y-1.5 text-xs text-ocean-900 leading-relaxed font-normal">
        <p>
          A high grade may indicate that a student has mastered the material, but it is not sufficient proof of deep understanding. Its meaning depends on the assessment task, intended learning outcomes, and knowledge demonstrated.
        </p>
        <p className="text-slate-muted text-[11px]">
          Meaningful learning becomes evident when students can explain ideas, apply theory in unfamiliar situations, critically evaluate solutions, and retain knowledge across time. Rather than abandoning examinations, higher education must synthesize multiple assessment modalities, active dialogue, and actionable formative feedback.
        </p>
      </div>

      {/* Prominent Callout Banner */}
      <div className="mt-2.5 p-2.5 bg-gradient-to-r from-ocean-800 to-ocean-900 rounded-lg text-white shadow-card flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-teal-soft shrink-0" />
          <span className="text-xs md:text-sm font-extrabold font-heading tracking-wide text-white">
            "{conclusionData.prominentCallout}"
          </span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-wider text-ocean-200 hidden sm:inline-block">
          {posterMetadata.coreTakeaway}
        </span>
      </div>
    </div>
  );
};

