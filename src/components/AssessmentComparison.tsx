import React from 'react';
import { assessmentComparison } from '../data/posterContent';
import { CheckCircle2, AlertCircle, Scale } from 'lucide-react';

export const AssessmentComparison: React.FC = () => {
  const { examinations, projects, synthesis } = assessmentComparison;

  return (
    <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3.5 shadow-subtle">
      {/* Title with Balance Icon */}
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-ocean-100">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-ocean-600" />
          <h3 className="text-xs font-bold font-heading text-ocean-900 uppercase tracking-wide">
            Critical Comparison: Examinations vs. Projects
          </h3>
        </div>
        <span className="text-[10px] font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded border border-ocean-200/60">
          Showing Both Sides
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Left: Examinations */}
        <div className="bg-ocean-50/50 p-2.5 rounded-lg border border-ocean-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-ocean-900 font-heading">
              {examinations.title}
            </span>
            <span className="text-[9px] uppercase font-bold text-ocean-600 bg-white px-1.5 py-0.5 rounded border border-ocean-200">
              Standardized
            </span>
          </div>

          <div className="space-y-1.5">
            <div>
              <span className="text-[9.5px] font-bold text-teal-dark uppercase tracking-wider flex items-center gap-1 mb-0.5">
                <CheckCircle2 className="w-3 h-3 text-teal-soft" />
                What They Assess Well:
              </span>
              <ul className="text-[10.5px] text-ocean-800 space-y-0.5 pl-3 list-disc">
                {examinations.strengths.slice(0, 2).map((s, idx) => (
                  <li key={idx} className="leading-tight">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[9.5px] font-bold text-coral-dark uppercase tracking-wider flex items-center gap-1 mb-0.5">
                <AlertCircle className="w-3 h-3 text-coral" />
                What They May Overlook:
              </span>
              <ul className="text-[10.5px] text-slate-muted space-y-0.5 pl-3 list-disc">
                {examinations.limitations.slice(0, 2).map((l, idx) => (
                  <li key={idx} className="leading-tight">{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Practical Projects */}
        <div className="bg-teal-light/30 p-2.5 rounded-lg border border-teal-soft/30">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-ocean-900 font-heading">
              {projects.title}
            </span>
            <span className="text-[9px] uppercase font-bold text-teal-dark bg-white px-1.5 py-0.5 rounded border border-teal-soft/30">
              Authentic
            </span>
          </div>

          <div className="space-y-1.5">
            <div>
              <span className="text-[9.5px] font-bold text-teal-dark uppercase tracking-wider flex items-center gap-1 mb-0.5">
                <CheckCircle2 className="w-3 h-3 text-teal-soft" />
                What They Reveal:
              </span>
              <ul className="text-[10.5px] text-ocean-800 space-y-0.5 pl-3 list-disc">
                {projects.strengths.slice(0, 2).map((s, idx) => (
                  <li key={idx} className="leading-tight">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[9.5px] font-bold text-coral-dark uppercase tracking-wider flex items-center gap-1 mb-0.5">
                <AlertCircle className="w-3 h-3 text-coral" />
                Critical Limitations:
              </span>
              <ul className="text-[10.5px] text-slate-muted space-y-0.5 pl-3 list-disc">
                {projects.limitations.slice(0, 2).map((l, idx) => (
                  <li key={idx} className="leading-tight">{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Balanced Synthesis Box */}
      <div className="mt-2.5 p-2 bg-gradient-to-r from-ocean-50 to-pale-ice rounded-lg border-l-3 border-ocean-600 text-[10.5px] text-ocean-900 font-medium italic leading-snug">
        ⚖️ <span className="font-bold text-ocean-800">Balanced Conclusion:</span> "{synthesis}"
      </div>
    </div>
  );
};

