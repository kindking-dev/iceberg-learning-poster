import React from 'react';
import { apaReferences } from '../data/references';
import { authors } from '../data/posterContent';
import { ReferenceItem } from '../data/posterContent';
import { BookOpen, ShieldCheck, UserCheck } from 'lucide-react';

/**
 * Render one APA 7 reference correctly:
 *
 * Journal article:
 *   Author, A. (Year). Title of article. *Journal Name*, *Volume*(Issue), pages. https://doi.org/xxx
 *
 * Book:
 *   Author, A. (Year). *Title of book* (Xth ed.). Publisher. https://doi.org/xxx
 *
 * We distinguish book vs. journal by presence of volume/issue pattern in `source`.
 */
function renderAPA7(ref: ReferenceItem) {
  // Detect if source looks like a journal citation: "Journal Name, vol(issue), pages"
  const isJournal = /,\s*\d+\(/.test(ref.source);

  if (isJournal) {
    // Split: "Higher Education, 32(3), 347–364" → journal part + vol/pages
    // We italic the journal name + volume
    const commaIdx = ref.source.indexOf(',');
    const journalName = ref.source.substring(0, commaIdx);
    const volPages = ref.source.substring(commaIdx); // ", 32(3), 347–364"
    return (
      <>
        <span className="font-semibold">{ref.authors}</span>
        {' '}({ref.year}). {ref.title}. <em>{journalName}</em>
        <em>{volPages}</em>.{' '}
        {ref.doi && (
          <a
            href={ref.doi}
            target="_blank"
            rel="noreferrer"
            className="text-ocean-600 hover:text-ocean-800 underline font-mono text-[9px] break-all"
          >
            {ref.doi}
          </a>
        )}
      </>
    );
  }

  // Book
  return (
    <>
      <span className="font-semibold">{ref.authors}</span>
      {' '}({ref.year}). <em>{ref.title}</em>
      {ref.edition ? ` (${ref.edition})` : ''}. {ref.source}.{' '}
      {ref.doi && (
        <a
          href={ref.doi}
          target="_blank"
          rel="noreferrer"
          className="text-ocean-600 hover:text-ocean-800 underline font-mono text-[9px] break-all"
        >
          {ref.doi}
        </a>
      )}
    </>
  );
}

export const PosterFooter: React.FC = () => {
  return (
    <footer className="mt-4 bg-white/95 backdrop-blur-xl border border-ocean-200/90 rounded-2xl p-4 shadow-subtle space-y-3">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-ocean-100">
        <div className="flex items-center gap-1.5 min-w-0">
          <BookOpen className="w-3.5 h-3.5 text-ocean-700 shrink-0" />
          <h3 className="text-xs font-black font-heading text-ocean-950 uppercase tracking-wider leading-tight">
            SECTION 5 • REFERENCES (APA 7TH EDITION) & RESEARCH CONTRIBUTIONS
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[9.5px] text-teal-dark font-semibold bg-teal-light px-2 py-0.5 rounded border border-teal-soft/30 whitespace-nowrap shrink-0">
          <ShieldCheck className="w-3 h-3 text-teal-soft shrink-0" />
          Verified Scholarly Literature
        </div>
      </div>

      {/* Grid: Left is APA References, Right is Contributor Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start text-xs">
        {/* Left: APA 7 Citations */}
        <div className="lg:col-span-7">
          <ol className="space-y-2 text-[10.5px] text-ocean-900 leading-relaxed list-none">
            {apaReferences.map((ref) => (
              <li key={ref.id} className="pl-5 -indent-5">
                {renderAPA7(ref)}
              </li>
            ))}
          </ol>
        </div>

        {/* Right: Individual Contributions */}
        <div className="lg:col-span-5 bg-ocean-50/60 p-2.5 rounded-xl border border-ocean-100">
          <div className="flex items-center gap-1.5 mb-1.5 text-[9.5px] uppercase font-bold text-slate-muted font-heading tracking-wider">
            <UserCheck className="w-3 h-3 text-ocean-600" />
            Individual Research Contributions (SSE-2601)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[9px]">
            {authors.map((author) => (
              <div key={author.name} className="p-1.5 bg-white rounded-lg border border-ocean-100/80 leading-tight shadow-xs">
                <span className="font-bold text-ocean-950 block font-heading">
                  {author.name}
                </span>
                <span className="text-slate-muted">{author.contribution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
