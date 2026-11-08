import React from 'react';
import { posterMetadata, theoreticalPerspectives, formativeFeedbackPrinciple } from '../data/posterContent';
import { TheoryCard } from '../components/TheoryCard';
import { AlignmentDiagram } from '../components/AlignmentDiagram';
import { Sparkles, HelpCircle, RefreshCw } from 'lucide-react';

export const Introduction: React.FC = () => {
  const biggsTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Biggs'))!;
  const freireTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Freire'))!;

  return (
    <section className="space-y-3">
      {/* SECTION 1: INTRODUCTION & BACKGROUND */}
      <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3.5 shadow-subtle space-y-2.5">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-ocean-100">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-ocean-600" />
            <h2 className="text-xs font-bold font-heading text-ocean-900 uppercase tracking-wide">
              SECTION 1 • INTRODUCTION & BACKGROUND
            </h2>
          </div>
          <span className="text-[10px] font-bold text-coral-dark bg-coral-light px-2 py-0.5 rounded border border-coral/30">
            Pedagogical Significance
          </span>
        </div>

        {/* Visual Hook Scenario */}
        <div className="bg-gradient-to-r from-coral-light/60 to-white p-2.5 rounded-lg border-l-4 border-coral shadow-xs">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-coral-dark block">
                Introductory Learning Scenario (Hypothetical Hook)
              </span>
              <p className="text-xs font-extrabold text-ocean-900 leading-snug">
                "{posterMetadata.introScenario.hook}"
              </p>
              <p className="text-[10px] text-slate-muted mt-0.5 leading-tight italic">
                {posterMetadata.introScenario.context}
              </p>
            </div>
          </div>
        </div>

        {/* Context & Rationale */}
        <div className="text-xs text-ocean-900 leading-relaxed space-y-1.5">
          <p>
            Grades are widely used across higher education to evaluate student performance, benchmark institutional progress, and determine academic opportunities. However, successful examination performance and meaningful learning are not necessarily the same thing.
          </p>
          <div className="p-2 bg-ocean-50/70 rounded-lg border border-ocean-100 text-[11px] font-semibold text-ocean-900">
            <span className="text-ocean-700 font-bold block uppercase text-[10px] tracking-wider mb-0.5">
              SSE-2601 Research Thesis:
            </span>
            "{posterMetadata.groupPosition}"
          </div>
        </div>
      </div>

      {/* THEORETICAL FOUNDATION: BIGGS */}
      <div>
        <TheoryCard theory={biggsTheory} accentColor="ocean" />
        <AlignmentDiagram />
      </div>

      {/* THEORETICAL FOUNDATION: FREIRE */}
      <div>
        <TheoryCard theory={freireTheory} accentColor="coral" />
      </div>

      {/* ASSESSMENT PRINCIPLE: FORMATIVE FEEDBACK LOOP */}
      <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3 shadow-subtle">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-teal-soft" />
            <span className="text-[11px] font-bold text-ocean-900 font-heading uppercase">
              {formativeFeedbackPrinciple.title}
            </span>
          </div>
          <span className="text-[9px] font-bold text-teal-dark bg-teal-light px-1.5 py-0.5 rounded">
            Assessment as Learning
          </span>
        </div>

        <p className="text-[10.5px] text-ocean-800 mb-2 leading-tight">
          {formativeFeedbackPrinciple.coreIdea}
        </p>

        {/* Cycle Steps */}
        <div className="grid grid-cols-4 gap-1 text-center">
          {formativeFeedbackPrinciple.cycle.map((c, i) => (
            <div key={i} className="bg-ocean-50/80 p-1.5 rounded border border-ocean-100">
              <span className="text-[9.5px] font-extrabold text-teal-dark font-heading block">
                {c.step}
              </span>
              <span className="text-[8.5px] text-slate-muted leading-tight block">
                {c.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-1.5 text-[9.5px] text-slate-muted italic text-center">
          "{formativeFeedbackPrinciple.keyRule}"
        </div>
      </div>
    </section>
  );
};

