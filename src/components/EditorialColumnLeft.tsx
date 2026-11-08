import React from 'react';
import { posterMetadata, theoreticalPerspectives, formativeFeedbackPrinciple } from '../data/posterContent';
import { BookOpen, HelpCircle, ArrowRight, RefreshCw } from 'lucide-react';

export const EditorialColumnLeft: React.FC = () => {
  const biggsTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Biggs'))!;
  const freireTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Freire'))!;

  return (
    <div className="flex flex-col space-y-3.5 h-full">
      {/* ---------------- SECTION 1: INTRODUCTION & BACKGROUND ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Section Header — stacked to prevent badge overflow */}
        <div className="pb-2 border-b border-ocean-100 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-ocean-600 inline-block shrink-0" />
            <h2 className="text-[10.5px] font-black font-heading text-ocean-950 uppercase tracking-wide leading-tight">
              SECTION 1 • INTRODUCTION & PEDAGOGICAL CONTEXT
            </h2>
          </div>
          <span className="inline-block text-[9.5px] font-bold text-coral-dark bg-coral-light px-2 py-0.5 rounded border border-coral/30 uppercase">
            Pedagogical Significance
          </span>
        </div>

        {/* Hypothetical Hook Callout */}
        <div className="p-3 bg-gradient-to-r from-coral-light/70 via-white to-pale-ice rounded-xl border-l-4 border-coral shadow-xs mb-3">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
            <div>
              <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-coral-dark block font-heading">
                Introductory Learning Hook (Hypothetical Scenario)
              </span>
              <p className="text-xs font-black text-ocean-950 leading-snug mt-0.5">
                "{posterMetadata.introScenario.hook}"
              </p>
              <p className="text-[9.5px] text-slate-muted mt-1 leading-tight italic">
                {posterMetadata.introScenario.context}
              </p>
            </div>
          </div>
        </div>

        {/* Core Rationale & Research Position */}
        <div className="text-xs text-ocean-900 leading-relaxed space-y-2">
          <p>
            Grades remain central to higher education governance, serving as credentials for progression, honors, and employment. However, high examination scores often reflect temporary memorization strategies rather than durable conceptual mastery.
          </p>

          <div className="p-2.5 bg-ocean-50/80 rounded-xl border border-ocean-200/70 text-ocean-950">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-ocean-700 block font-heading mb-1">
              SSE-2601 Research Thesis:
            </span>
            <p className="font-extrabold text-xs text-ocean-900 leading-snug">
              "{posterMetadata.groupPosition}"
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- THEORETICAL FOUNDATION: JOHN BIGGS ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Header: stacked */}
        <div className="pb-2 border-b border-ocean-100 mb-2">
          <div className="flex items-center gap-1.5 mb-1">
            <BookOpen className="w-3.5 h-3.5 text-ocean-600 shrink-0" />
            <h3 className="text-[10.5px] font-bold font-heading text-ocean-950 uppercase leading-tight">
              {biggsTheory.scholar} ({biggsTheory.year})
            </h3>
          </div>
          <span className="inline-block text-[9.5px] font-bold font-heading px-2 py-0.5 rounded bg-ocean-100 text-ocean-800 border border-ocean-200">
            {biggsTheory.concept}
          </span>
        </div>

        <p className="text-xs text-ocean-900 leading-snug mb-2.5 font-medium">
          {biggsTheory.coreIdea}
        </p>

        {/* Connected Alignment Diagram */}
        <div className="bg-gradient-to-r from-ocean-50/90 via-white to-pale-ice p-2.5 rounded-xl border border-ocean-200/80 mb-2.5">
          <div className="text-[9px] uppercase font-bold text-slate-muted tracking-wider mb-1.5 flex items-center justify-between font-heading">
            <span>Constructive Alignment</span>
            <span className="text-teal-dark font-semibold">Tripartite</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="p-1.5 bg-white rounded-lg border border-ocean-200 shadow-xs">
              <span className="font-extrabold text-ocean-900 block font-heading text-[9px]">
                OUTCOMES
              </span>
              <span className="text-[8px] text-slate-muted block mt-0.5">High-order mastery</span>
            </div>

            <div className="p-1.5 bg-white rounded-lg border border-teal-soft/40 shadow-xs relative">
              <span className="font-extrabold text-ocean-900 block font-heading text-[9px]">
                TEACHING
              </span>
              <span className="text-[8px] text-slate-muted block mt-0.5">Active problem-solving</span>
              <ArrowRight className="w-2.5 h-2.5 text-ocean-400 absolute -right-1.5 top-1/2 -translate-y-1/2 hidden md:block" />
            </div>

            <div className="p-1.5 bg-white rounded-lg border border-coral/40 shadow-xs">
              <span className="font-extrabold text-ocean-900 block font-heading text-[9px]">
                ASSESSMENT
              </span>
              <span className="text-[8px] text-slate-muted block mt-0.5">Authentic application</span>
            </div>
          </div>
        </div>

        {/* Critical Question */}
        <div className="flex items-start gap-1.5 text-xs text-ocean-900 bg-coral-light/40 p-2 rounded-lg border border-coral/20">
          <HelpCircle className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
          <div>
            <span className="text-[9.5px] font-bold uppercase text-coral-dark font-heading block">
              Critical Pedagogical Question:
            </span>
            <span className="font-extrabold italic text-ocean-950 text-[10.5px]">
              "{biggsTheory.criticalQuestion}"
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- THEORETICAL FOUNDATION: PAULO FREIRE ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Header: stacked */}
        <div className="pb-2 border-b border-ocean-100 mb-2">
          <div className="flex items-center gap-1.5 mb-1">
            <BookOpen className="w-3.5 h-3.5 text-coral shrink-0" />
            <h3 className="text-[10.5px] font-bold font-heading text-ocean-950 uppercase leading-tight">
              {freireTheory.scholar} ({freireTheory.year})
            </h3>
          </div>
          <span className="inline-block text-[9.5px] font-bold font-heading px-2 py-0.5 rounded bg-coral-light text-coral-dark border border-coral/30">
            Banking vs. Problem-Posing
          </span>
        </div>

        <p className="text-xs text-ocean-900 leading-snug mb-2 font-medium">
          {freireTheory.coreIdea}
        </p>

        {/* Concept Contrast */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs my-2">
          <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-muted">
            <span className="font-bold block text-[9.5px] uppercase font-heading text-slate-700">
              BANKING MODEL
            </span>
            <span className="text-[9px] leading-tight block">Passive fact deposition & recall</span>
          </div>

          <div className="p-2 bg-teal-light/50 rounded-lg border border-teal-soft/40 text-teal-dark">
            <span className="font-bold block text-[9.5px] uppercase font-heading">
              PROBLEM-POSING
            </span>
            <span className="text-[9px] leading-tight block">Critical dialogue & co-creation</span>
          </div>
        </div>

        <div className="flex items-start gap-1.5 text-xs text-ocean-900 bg-ocean-50 p-2 rounded-lg border border-ocean-100">
          <HelpCircle className="w-3.5 h-3.5 text-ocean-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-[9.5px] font-bold uppercase text-ocean-700 font-heading block">
              Critical Pedagogical Question:
            </span>
            <span className="font-extrabold italic text-ocean-950 text-[10.5px]">
              "{freireTheory.criticalQuestion}"
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- ASSESSMENT PRINCIPLE: FORMATIVE FEEDBACK LOOP ---------------- */}
      <section className="bg-white/95 backdrop-blur-md rounded-2xl border border-ocean-200/90 p-4 shadow-subtle">
        {/* Header: stacked */}
        <div className="pb-1.5 border-b border-ocean-100 mb-2">
          <div className="flex items-center gap-1.5 mb-1">
            <RefreshCw className="w-3.5 h-3.5 text-teal-soft shrink-0" />
            <h3 className="text-[10.5px] font-bold font-heading text-ocean-950 uppercase leading-tight">
              Formative Feedback Principle
            </h3>
          </div>
          <span className="inline-block text-[9px] font-bold text-teal-dark bg-teal-light px-2 py-0.5 rounded border border-teal-soft/30 uppercase">
            Assessment as Learning
          </span>
        </div>

        <p className="text-xs text-ocean-900 leading-snug mb-2 font-medium">
          {formativeFeedbackPrinciple.coreIdea}
        </p>

        {/* 4-Stage Feedback Cycle */}
        <div className="grid grid-cols-4 gap-1 text-center mb-2">
          {formativeFeedbackPrinciple.cycle.map((st, i) => (
            <div key={i} className="p-1.5 bg-ocean-50/70 rounded-lg border border-ocean-100">
              <span className="text-[9.5px] font-black text-teal-dark font-heading block">
                {st.step}
              </span>
              <span className="text-[8px] text-slate-muted block leading-tight mt-0.5">
                {st.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="text-[10px] text-slate-muted italic text-center">
          "{formativeFeedbackPrinciple.keyRule}"
        </div>
      </section>
    </div>
  );
};
