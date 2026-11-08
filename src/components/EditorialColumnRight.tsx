import React from 'react';
import { assessmentComparison, theoreticalPerspectives, balancedAssessmentModel, conclusionData } from '../data/posterContent';
import { Scale, CheckCircle2, AlertCircle, BookOpen, HelpCircle, Cpu, ArrowLeftRight, Sparkles, Check } from 'lucide-react';

export const EditorialColumnRight: React.FC = () => {
  const grabingerTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Grabinger'))!;
  const { examinations, projects, synthesis } = assessmentComparison;
  const { methods, computerArchExample, recommendations, highlightTakeaway } = balancedAssessmentModel;

  return (
    <div className="flex flex-col space-y-3.5 h-full">
      {/* ---------------- CRITICAL COMPARISON: EXAMINATIONS VS PROJECTS ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Header: stacked to avoid overflow in narrow column */}
        <div className="pb-2 border-b border-ocean-100 mb-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <Scale className="w-3.5 h-3.5 text-ocean-700 shrink-0" />
            <h2 className="text-[10.5px] font-black font-heading text-ocean-950 uppercase tracking-wide leading-tight">
              CRITICAL ANALYSIS: EXAMINATIONS VS. PROJECTS
            </h2>
          </div>
          <span className="inline-block text-[9px] font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded border border-ocean-200 uppercase">
            Showing Both Sides
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {/* Examinations */}
          <div className="p-2.5 bg-ocean-50/50 rounded-xl border border-ocean-100">
            <span className="text-[10.5px] font-bold font-heading text-ocean-950 block mb-1">
              {examinations.title}
            </span>
            <div className="space-y-1.5 text-[10.5px]">
              <div>
                <span className="text-[9px] font-bold uppercase text-teal-dark flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-teal-soft shrink-0" /> Strengths:
                </span>
                <p className="text-ocean-800 leading-tight mt-0.5">
                  {examinations.strengths[0]}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-coral-dark flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-coral shrink-0" /> Limitations:
                </span>
                <p className="text-slate-muted leading-tight mt-0.5">
                  {examinations.limitations[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Practical Projects */}
          <div className="p-2.5 bg-teal-light/40 rounded-xl border border-teal-soft/30">
            <span className="text-[10.5px] font-bold font-heading text-ocean-950 block mb-1">
              {projects.title}
            </span>
            <div className="space-y-1.5 text-[10.5px]">
              <div>
                <span className="text-[9px] font-bold uppercase text-teal-dark flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-teal-soft shrink-0" /> Strengths:
                </span>
                <p className="text-ocean-800 leading-tight mt-0.5">
                  {projects.strengths[0]}
                </p>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-coral-dark flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-coral shrink-0" /> Limitations:
                </span>
                <p className="text-slate-muted leading-tight mt-0.5">
                  {projects.limitations[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Balanced Critical Synthesis */}
        <div className="mt-2.5 p-2 bg-gradient-to-r from-ocean-50 via-white to-pale-ice rounded-xl border-l-4 border-ocean-600 text-[10px] text-ocean-900 font-medium italic leading-snug">
          ⚖️ <span className="font-bold text-ocean-800">Balanced Consensus:</span> "{synthesis}"
        </div>
      </section>

      {/* ---------------- THEORETICAL FOUNDATION: GRABINGER & DUNLAP ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Header: stacked layout */}
        <div className="pb-2 border-b border-ocean-100 mb-2">
          <div className="flex items-center gap-1.5 mb-1">
            <BookOpen className="w-3.5 h-3.5 text-teal-dark shrink-0" />
            <h3 className="text-[10.5px] font-bold font-heading text-ocean-950 uppercase leading-tight">
              {grabingerTheory.scholar} ({grabingerTheory.year})
            </h3>
          </div>
          <span className="inline-block text-[9px] font-bold font-heading px-2 py-0.5 rounded bg-teal-light text-teal-dark border border-teal-soft/30">
            {grabingerTheory.concept}
          </span>
        </div>

        <p className="text-xs text-ocean-900 leading-snug mb-2 font-medium">
          {grabingerTheory.coreIdea}
        </p>

        <div className="flex items-start gap-1.5 text-xs text-ocean-900 bg-teal-light/30 p-2 rounded-lg border border-teal-soft/20">
          <HelpCircle className="w-3.5 h-3.5 text-teal-dark shrink-0 mt-0.5" />
          <div>
            <span className="text-[9.5px] font-bold uppercase text-teal-dark font-heading block">
              Critical Pedagogical Question:
            </span>
            <span className="font-extrabold italic text-ocean-950 text-[10.5px]">
              "{grabingerTheory.criticalQuestion}"
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: BALANCED ASSESSMENT ECOSYSTEM ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle space-y-3">
        {/* Header: stacked to prevent overflow */}
        <div className="pb-1.5 border-b border-ocean-100">
          <span className="text-[9px] uppercase font-bold tracking-wider text-ocean-600 block mb-0.5">
            SECTION 3 • HE APPLICATION
          </span>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-[11px] font-black font-heading text-ocean-950 uppercase leading-tight">
              Balanced Assessment Ecosystem
            </h3>
            <span className="bg-ocean-100 text-ocean-800 border border-ocean-200 text-[9px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
              5 Modalities
            </span>
          </div>
        </div>

        {/* 5 Assessment Modalities — 2+3 grid for narrow column */}
        <div className="grid grid-cols-2 gap-1.5 text-center text-xs">
          {methods.map((m, idx) => (
            <div
              key={idx}
              className={`p-1.5 bg-ocean-50/70 rounded-lg border border-ocean-100 flex flex-col justify-between${
                idx === 4 ? ' col-span-2' : ''
              }`}
            >
              <span className="text-[9.5px] font-extrabold text-ocean-950 block font-heading leading-tight">
                {m.name}
              </span>
              <span className="text-[8px] text-slate-muted block mt-1 leading-tight">
                {m.purpose}
              </span>
            </div>
          ))}
        </div>

        {/* Computer Organisation & Architecture Application */}
        <div className="bg-gradient-to-br from-ocean-950 to-ocean-800 text-white p-2.5 rounded-xl">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[9.5px] font-bold uppercase text-teal-soft font-heading flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 shrink-0" />
              Computing Systems Architecture
            </span>
            <span className="text-[8px] bg-ocean-700/80 px-2 py-0.5 rounded font-mono text-ocean-200 ml-auto">
              Islam's Case
            </span>
          </div>

          <div className="bg-ocean-900/80 p-2 rounded-lg border border-ocean-700/60 mb-2 flex items-center justify-around gap-2 text-center text-xs">
            <div>
              <span className="text-[9.5px] font-extrabold text-teal-light block">CPU</span>
              <span className="text-[8px] text-ocean-300">Registers & ALU</span>
            </div>
            <div className="flex items-center gap-1 text-coral text-[8.5px] font-mono font-bold">
              <span>Bus</span>
              <ArrowLeftRight className="w-3 h-3" />
            </div>
            <div>
              <span className="text-[9.5px] font-extrabold text-teal-light block">RAM</span>
              <span className="text-[8px] text-ocean-300">Address & Latency</span>
            </div>
          </div>

          <p className="text-[9.5px] text-ocean-200 leading-tight italic">
            "{computerArchExample.quote}"
          </p>
        </div>

        {/* 4 HE Recommendations */}
        <div className="space-y-1">
          <span className="text-[9px] font-bold uppercase text-ocean-800 font-heading block tracking-wider">
            Evidence-Informed HE Recommendations:
          </span>
          <div className="grid grid-cols-2 gap-1.5 text-xs">
            {recommendations.map((rec) => (
              <div key={rec.num} className="p-1.5 bg-pale-ice/50 rounded-lg border border-ocean-200/60 leading-tight">
                <span className="text-[9px] font-bold font-mono text-ocean-700">{rec.num}. </span>
                <span className="font-bold text-ocean-950 text-[9.5px]">{rec.title}: </span>
                <span className="text-[8.5px] text-slate-muted">{rec.body}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlighted Takeaway */}
        <div className="p-2 bg-coral-light/70 rounded-xl border border-coral/30 flex items-center justify-center gap-2 text-center">
          <Check className="w-3.5 h-3.5 text-coral-dark shrink-0" />
          <span className="text-[10.5px] font-black text-coral-dark font-heading leading-tight">
            {highlightTakeaway}
          </span>
        </div>
      </section>

      {/* ---------------- SECTION 4: CONCLUSION ---------------- */}
      <section className="bg-gradient-to-br from-ocean-900 to-ocean-950 text-white rounded-2xl p-4 shadow-elevated">
        <div className="pb-2 border-b border-ocean-700/80 mb-2">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-teal-soft shrink-0" />
            <h2 className="text-[10.5px] font-black font-heading text-white uppercase tracking-wide leading-tight">
              SECTION 4 • FINAL CONCLUSION
            </h2>
          </div>
          <span className="inline-block text-[9px] font-bold text-ocean-300 bg-ocean-800/80 px-2 py-0.5 rounded border border-ocean-700">
            SSE-2601 Consensus
          </span>
        </div>

        <p className="text-[10.5px] text-ocean-100 leading-relaxed font-normal mb-3">
          A high grade may indicate successful preparation, but it is not sufficient proof of deep understanding. Meaningful learning becomes visible when students can explain ideas, apply knowledge in unfamiliar situations, evaluate their solutions, and retain what they have learned across time.
        </p>

        {/* Prominent Callout */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-coral-dark to-coral text-white font-heading font-black text-xs tracking-wide text-center uppercase shadow-md leading-snug">
          "{conclusionData.prominentCallout}"
        </div>
      </section>
    </div>
  );
};
