import React from 'react';
import { posterMetadata, authors } from '../data/posterContent';
import { Compass, GraduationCap, Users } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b-2 border-ocean-500/25 px-8 py-5 shadow-sm rounded-2xl mb-4 relative overflow-hidden">
      {/* Decorative subtle background corner glow */}
      <div className="absolute top-0 right-0 w-96 h-40 bg-gradient-to-l from-ocean-100/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-16 bg-gradient-to-r from-teal-light/40 to-transparent pointer-events-none" />

      {/* Top Academic Meta Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider uppercase font-semibold text-slate-muted border-b border-ocean-100 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-ocean-800 text-white font-bold text-[11px] tracking-wide">
            <GraduationCap className="w-3.5 h-3.5" />
            {posterMetadata.institution}
          </span>
          <span className="text-ocean-700 font-bold">{posterMetadata.course}</span>
          <span className="text-slate-300">•</span>
          <span>{posterMetadata.degreeProgram}</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="bg-ocean-100 text-ocean-800 px-2 py-0.5 rounded font-bold">
            GROUP: {posterMetadata.group}
          </span>
          <span className="text-slate-muted font-medium">ACADEMIC YEAR {posterMetadata.academicYear}</span>
        </div>
      </div>

      {/* Main Title & Research Question Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Title & Subtitle */}
        <div className="lg:col-span-7 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-coral-light border border-coral/30 text-coral-dark text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-coral" />
            CRITICAL ANALYSIS & PEDAGOGICAL INVESTIGATION
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-ocean-800 font-heading tracking-tight leading-tight">
            {posterMetadata.title}
          </h1>
          <p className="text-lg lg:text-xl font-semibold text-ocean-600 font-heading">
            {posterMetadata.subtitle}
          </p>
        </div>

        {/* Right Column: Research Question Callout Banner */}
        <div className="lg:col-span-5 bg-gradient-to-br from-ocean-50 to-pale-ice border-l-4 border-coral p-3.5 rounded-r-xl shadow-subtle">
          <div className="text-[11px] uppercase font-bold tracking-wider text-coral-dark flex items-center gap-1 mb-1">
            <span className="w-2 h-2 rounded-full bg-coral inline-block"></span>
            PRIMARY RESEARCH QUESTION
          </div>
          <p className="text-sm font-bold text-ocean-900 leading-snug">
            "{posterMetadata.researchQuestion}"
          </p>
          <div className="mt-1.5 text-[11px] text-ocean-700 font-medium italic">
            Focus: Evaluating the divergence between surface test metrics and multidimensional cognitive mastery.
          </div>
        </div>
      </div>

      {/* Author Strip & Compact Contribution Badges */}
      <div className="mt-4 pt-3 border-t border-ocean-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-ocean-900 font-medium">
          <Users className="w-3.5 h-3.5 text-ocean-600" />
          <span className="font-bold text-ocean-800 uppercase text-[11px] tracking-wider">RESEARCH AUTHORS:</span>
          {authors.map((author, idx) => (
            <span key={author.name} className="inline-flex items-center gap-1">
              <span className="font-bold text-ocean-800 hover:text-ocean-600 transition-colors cursor-default">
                {author.name}
              </span>
              {idx < authors.length - 1 && <span className="text-slate-300 ml-1.5">•</span>}
            </span>
          ))}
        </div>

        {/* Small contributor summary pill */}
        <div className="text-[11px] text-slate-muted hidden md:inline-block">
          SSE-2601 Research Group • Master's in Computer Science & Engineering
        </div>
      </div>
    </header>
  );
};

