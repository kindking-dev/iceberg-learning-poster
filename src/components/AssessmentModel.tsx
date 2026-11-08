import React from 'react';
import { balancedAssessmentModel } from '../data/posterContent';
import { Cpu, HardDrive, ArrowLeftRight, Check, Sparkles } from 'lucide-react';

export const AssessmentModel: React.FC = () => {
  const { heading, methods, computerArchExample, recommendations, highlightTakeaway } =
    balancedAssessmentModel;

  return (
    <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3.5 shadow-subtle space-y-3">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-ocean-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-ocean-600 block">
            SECTION 3 • APPLICATION TO HIGHER EDUCATION
          </span>
          <h3 className="text-xs font-extrabold font-heading text-ocean-900 uppercase">
            {heading}
          </h3>
        </div>
        <span className="bg-teal-light text-teal-dark border border-teal-soft/30 text-[9.5px] font-bold px-2 py-0.5 rounded">
          Balanced Ecosystem
        </span>
      </div>

      {/* 5 Assessment Methods Pill Grid */}
      <div>
        <div className="text-[10px] font-bold uppercase text-slate-muted tracking-wider mb-1.5">
          Five Complementary Assessment Modalities
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 text-center">
          {methods.map((m, idx) => (
            <div
              key={idx}
              className="p-1.5 bg-ocean-50/70 rounded-lg border border-ocean-100 flex flex-col justify-between hover:bg-ocean-100/60 transition-colors"
            >
              <div>
                <span className="text-[9.5px] font-extrabold text-ocean-900 block font-heading leading-tight mb-0.5">
                  {m.name}
                </span>
                <span className="text-[8px] font-bold text-ocean-600 uppercase block mb-1">
                  {m.badge}
                </span>
              </div>
              <p className="text-[9px] text-slate-muted leading-tight">
                {m.purpose}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Computing Systems Architecture Case Study */}
      <div className="bg-gradient-to-r from-ocean-900 to-ocean-800 text-white p-2.5 rounded-xl shadow-xs">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-teal-soft" />
            <span className="text-[10.5px] font-bold font-heading tracking-wide uppercase text-ocean-100">
              {computerArchExample.title}
            </span>
          </div>
          <span className="text-[9px] bg-ocean-700/80 px-2 py-0.5 rounded text-ocean-200 border border-ocean-600 font-mono">
            {computerArchExample.focus}
          </span>
        </div>

        {/* Technical Architecture Interaction Mini-Diagram */}
        <div className="bg-ocean-950/70 p-2 rounded-lg border border-ocean-700/70 mb-2 flex items-center justify-around gap-2 text-center">
          <div className="bg-ocean-800 px-3 py-1 rounded border border-ocean-600">
            <Cpu className="w-4 h-4 mx-auto text-teal-soft mb-0.5" />
            <span className="text-[10px] font-extrabold font-heading block">CPU (PROCESSING)</span>
            <span className="text-[8px] text-ocean-300">Registers & ALU Control</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-coral text-[9px] font-mono font-bold">
              <span>Bus Interaction</span>
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-[8px] text-ocean-300 italic">Cache Hierarchy & Latency</span>
          </div>

          <div className="bg-ocean-800 px-3 py-1 rounded border border-ocean-600">
            <HardDrive className="w-4 h-4 mx-auto text-ocean-300 mb-0.5" />
            <span className="text-[10px] font-extrabold font-heading block">RAM (MEMORY)</span>
            <span className="text-[8px] text-ocean-300">Address Bus & Storage</span>
          </div>
        </div>

        {/* Contrast Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px] leading-tight">
          <div className="bg-ocean-950/50 p-1.5 rounded border border-ocean-700/40 text-ocean-200">
            <span className="text-coral font-bold block mb-0.5">Rote Reproduction:</span>
            Memorizing textbook hardware definitions without understanding system dynamics.
          </div>
          <div className="bg-ocean-950/50 p-1.5 rounded border border-teal-soft/40 text-teal-light">
            <span className="text-teal-soft font-bold block mb-0.5">Deep Application:</span>
            Tracing bus latency bottlenecks and justifying architectural memory trade-offs.
          </div>
        </div>
      </div>

      {/* 4 Concise Recommendations for Higher Education */}
      <div>
        <div className="text-[10px] font-bold uppercase text-ocean-800 tracking-wider mb-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-ocean-600" />
          Evidence-Informed HE Recommendations
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {recommendations.map((rec) => (
            <div
              key={rec.num}
              className="p-1.5 bg-pale-ice/50 rounded-lg border border-ocean-200/60"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[9.5px] font-extrabold font-mono text-ocean-600">
                  {rec.num}
                </span>
                <span className="text-[10px] font-bold text-ocean-900 font-heading">
                  {rec.title}
                </span>
              </div>
              <p className="text-[9px] text-slate-muted leading-tight">
                {rec.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlighted Takeaway */}
      <div className="p-2 bg-coral-light/70 rounded-lg border border-coral/30 flex items-center justify-center gap-2 text-center">
        <Check className="w-3.5 h-3.5 text-coral-dark shrink-0" />
        <span className="text-[11px] font-bold text-coral-dark font-heading">
          {highlightTakeaway}
        </span>
      </div>
    </div>
  );
};
