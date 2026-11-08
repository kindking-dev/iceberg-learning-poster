import React from 'react';
import { apaReferences } from '../data/references';
import { authors } from '../data/posterContent';
import { BookOpen, ShieldCheck, UserCheck } from 'lucide-react';

export const References: React.FC = () => {
  return (
    <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3.5 shadow-subtle space-y-3">
      {/* References Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-ocean-100">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-ocean-700" />
          <h3 className="text-xs font-bold font-heading text-ocean-900 uppercase tracking-wide">
            SECTION 5 • REFERENCES (APA 7TH EDITION)
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[9.5px] text-teal-dark font-semibold bg-teal-light px-2 py-0.5 rounded border border-teal-soft/30">
          <ShieldCheck className="w-3 h-3 text-teal-soft" />
          Verified Scholarly Sources
        </div>
      </div>

      {/* APA Reference List */}
      <ol className="space-y-1.5 text-[10px] text-ocean-900 leading-snug">
        {apaReferences.map((ref) => (
          <li key={ref.id} className="pl-4 -indent-4">
            <span className="font-semibold text-ocean-800">{ref.authors}</span> ({ref.year}).{' '}
            <span className="italic">{ref.title}</span>.{' '}
            <span>{ref.source}</span>.{' '}
            {ref.doi && (
              <a
                href={ref.doi}
                target="_blank"
                rel="noreferrer"
                className="text-ocean-600 hover:text-ocean-800 underline font-mono text-[9px] break-all inline-block ml-0.5"
              >
                {ref.doi}
              </a>
            )}
          </li>
        ))}
      </ol>

      {/* Author Individual Contributions Strip */}
      <div className="pt-2 border-t border-ocean-100">
        <div className="flex items-center gap-1.5 mb-1 text-[9.5px] uppercase font-bold text-slate-muted tracking-wider">
          <UserCheck className="w-3 h-3 text-ocean-600" />
          Individual Research Contributions (SSE-2601)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 text-[9px]">
          {authors.map((author) => (
            <div
              key={author.name}
              className="p-1.5 bg-pale-ice/40 rounded border border-ocean-100 leading-tight"
            >
              <span className="font-bold text-ocean-900 block font-heading">
                {author.name}
              </span>
              <span className="text-slate-muted">{author.contribution}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
