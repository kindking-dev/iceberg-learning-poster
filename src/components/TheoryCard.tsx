import React from 'react';
import { TheoryItem } from '../data/posterContent';
import { BookOpen, HelpCircle } from 'lucide-react';

interface TheoryCardProps {
  theory: TheoryItem;
  accentColor?: 'ocean' | 'teal' | 'coral';
}

export const TheoryCard: React.FC<TheoryCardProps> = ({
  theory,
  accentColor = 'ocean',
}) => {
  const getBadgeStyle = () => {
    switch (accentColor) {
      case 'coral':
        return 'bg-coral-light text-coral-dark border-coral/30';
      case 'teal':
        return 'bg-teal-light text-teal-dark border-teal-soft/30';
      default:
        return 'bg-ocean-100 text-ocean-800 border-ocean-200';
    }
  };

  return (
    <div className="bg-white/95 rounded-xl border border-ocean-200/80 p-3.5 shadow-subtle hover:border-ocean-400 transition-all">
      {/* Header: Scholar & Year */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-ocean-600" />
          <span className="text-xs font-bold font-heading text-ocean-900">
            {theory.scholar} ({theory.year})
          </span>
        </div>
        <span className={`text-[10px] font-bold font-heading px-2 py-0.5 rounded border ${getBadgeStyle()}`}>
          {theory.concept}
        </span>
      </div>

      {/* Core Scholarly Idea */}
      <p className="text-xs text-ocean-800 leading-snug mb-2 font-medium">
        {theory.coreIdea}
      </p>

      {/* Visual Model / Flow */}
      <div className="my-2 p-2 bg-ocean-50/70 rounded-lg border border-ocean-100">
        <div className="text-[9.5px] uppercase tracking-wider text-slate-muted font-bold mb-1">
          Theoretical Framework Model
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-ocean-800">
          {theory.visualModel.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="bg-white px-2 py-0.5 rounded shadow-xs border border-ocean-200/60">
                {item}
              </span>
              {idx < theory.visualModel.length - 1 && (
                <span className="text-ocean-500 font-black">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Critical Pedagogical Question */}
      <div className="mt-2 pt-2 border-t border-ocean-100/80 flex items-start gap-1.5">
        <HelpCircle className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
        <div>
          <span className="text-[10px] uppercase font-bold text-coral-dark block tracking-wider">
            Critical Question:
          </span>
          <p className="text-xs font-bold text-ocean-900 italic">
            "{theory.criticalQuestion}"
          </p>
        </div>
      </div>

      {/* Caveat / Balanced Reflection */}
      {theory.caveat && (
        <div className="mt-2 text-[10.5px] text-slate-muted bg-slate-50 p-1.5 rounded border border-slate-200/60 leading-tight">
          <span className="font-semibold text-ocean-800">Critical Balance:</span> {theory.caveat}
        </div>
      )}
    </div>
  );
};

