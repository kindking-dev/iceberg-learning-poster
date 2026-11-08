import React, { useState } from 'react';
import { posterMetadata, authors } from '../data/posterContent';
import { oceanAudio } from '../utils/oceanAudio';
import { Volume2, VolumeX, Layers, Compass } from 'lucide-react';

interface PosterHeaderProps {
  activeLevel: number | null;
  onResetLevel: () => void;
}

export const PosterHeader: React.FC<PosterHeaderProps> = ({
  activeLevel,
  onResetLevel,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => {
    const active = oceanAudio.toggle();
    setIsPlayingAudio(active);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-xl border border-ocean-200/90 px-6 py-4 rounded-2xl shadow-subtle mb-4 relative overflow-hidden">
      {/* Top Academic Context Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider uppercase font-semibold text-slate-muted border-b border-ocean-100 pb-2 mb-3">
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-ocean-900 text-white font-bold text-[10.5px] whitespace-nowrap shrink-0">
            <Compass className="w-3.5 h-3.5 text-teal-soft shrink-0" />
            {posterMetadata.institution}
          </span>
          <span className="text-ocean-800 font-bold whitespace-nowrap">{posterMetadata.course}</span>
        </div>

        {/* Action Controls: Audio Toggle only */}
        <div className="flex items-center gap-2.5 no-print">
          {/* Sound Toggle (Ambient ocean atmosphere) */}
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all border ${
              isPlayingAudio
                ? 'bg-teal-light text-teal-dark border-teal-soft shadow-xs'
                : 'bg-ocean-50 text-ocean-700 hover:bg-ocean-100 border-ocean-200'
            }`}
            title="Toggle procedural ocean ambience (Web Audio API)"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-teal-soft animate-pulse" />
                <span>Ocean Ambience: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-muted" />
                <span>Ocean Ambience: OFF</span>
              </>
            )}
          </button>

          {/* Reset 3D View / Selection */}
          {activeLevel !== null && (
            <button
              onClick={onResetLevel}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-ocean-100 text-ocean-800 hover:bg-ocean-200 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-ocean-600" />
              <span>Reset 3D Depth</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Title & Research Question Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Left: Main Title */}
        <div className="lg:col-span-7 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-coral-light border border-coral/30 text-coral-dark text-[10px] font-bold uppercase tracking-wider font-heading">
            <Compass className="w-3 h-3 text-coral" />
            FINAL CRITICAL ANALYSIS POSTER PRESENTATION • GROUP SSE-2601
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-ocean-950 font-heading tracking-tight leading-none">
            {posterMetadata.title}
          </h1>
          <p className="text-base lg:text-lg font-bold text-ocean-600 font-heading">
            {posterMetadata.subtitle}
          </p>
        </div>

        {/* Right: Research Question Hero Box */}
        <div className="lg:col-span-5 p-3 rounded-xl bg-gradient-to-br from-ocean-50 to-pale-ice border-l-4 border-coral shadow-subtle">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-coral-dark block font-heading mb-0.5">
            PRIMARY RESEARCH QUESTION
          </span>
          <p className="text-xs lg:text-sm font-black text-ocean-950 leading-snug">
            "{posterMetadata.researchQuestion}"
          </p>
          <p className="text-[10px] text-slate-muted italic mt-1 leading-tight">
            Focus: Evaluating the divergence between surface test metrics and multidimensional cognitive mastery.
          </p>
        </div>
      </div>

      {/* Authors Row */}
      <div className="mt-3 pt-2.5 border-t border-ocean-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-ocean-800 uppercase text-[10.5px] tracking-wider font-heading">
            RESEARCH AUTHORS:
          </span>
          {authors.map((author, idx) => (
            <span key={author.name} className="inline-flex items-center gap-1 font-extrabold text-ocean-900">
              <span>{author.name}</span>
              {idx < authors.length - 1 && <span className="text-slate-300 ml-1.5">•</span>}
            </span>
          ))}
        </div>

        <span className="text-[10.5px] font-bold text-slate-muted">
          Group SSE-2601 • Astana IT University
        </span>
      </div>
    </header>
  );
};

