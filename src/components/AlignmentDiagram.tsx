import React from 'react';
import { Target, Layers, CheckSquare, ArrowRight } from 'lucide-react';

export const AlignmentDiagram: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-ocean-50/80 via-white to-pale-ice p-3 rounded-xl border border-ocean-200/90 shadow-subtle my-2">
      <div className="text-[10px] font-bold uppercase tracking-wider text-ocean-700 flex items-center justify-between mb-2">
        <span>Constructive Alignment Architecture (Biggs, 1996)</span>
        <span className="text-teal-dark font-semibold">Mutually Reinforced System</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center items-center">
        {/* Step 1 */}
        <div className="bg-white p-2 rounded-lg border border-ocean-200 shadow-xs flex flex-col items-center">
          <div className="p-1 rounded bg-ocean-100 text-ocean-700 mb-1">
            <Target className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10.5px] font-extrabold text-ocean-900 font-heading">
            INTENDED OUTCOMES
          </div>
          <div className="text-[9.5px] text-slate-muted leading-tight mt-0.5">
            Higher-order reasoning & deep application goals
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-2 rounded-lg border border-teal-soft/40 shadow-xs flex flex-col items-center relative">
          <div className="p-1 rounded bg-teal-light text-teal-dark mb-1">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10.5px] font-extrabold text-ocean-900 font-heading">
            TEACHING ACTIVITIES
          </div>
          <div className="text-[9.5px] text-slate-muted leading-tight mt-0.5">
            Active problem-posing, debate & practical labs
          </div>
          {/* Subtle directional connector */}
          <ArrowRight className="w-3 h-3 text-ocean-400 absolute -right-2.5 top-1/2 -translate-y-1/2 hidden lg:block" />
        </div>

        {/* Step 3 */}
        <div className="bg-white p-2 rounded-lg border border-coral/30 shadow-xs flex flex-col items-center">
          <div className="p-1 rounded bg-coral-light text-coral-dark mb-1">
            <CheckSquare className="w-3.5 h-3.5" />
          </div>
          <div className="text-[10.5px] font-extrabold text-ocean-900 font-heading">
            ASSESSMENT METHODS
          </div>
          <div className="text-[9.5px] text-slate-muted leading-tight mt-0.5">
            Authentic defense, systems design & rubrics
          </div>
        </div>
      </div>

      <div className="mt-2 text-[10px] text-center text-ocean-700 font-semibold italic">
        "Are we assessing what we actually teach? Assessment must directly measure intended cognitive depth."
      </div>
    </div>
  );
};

