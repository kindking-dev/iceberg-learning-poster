import React from 'react';
import { IcebergDimension } from '../data/posterContent';
import { Award, Brain, Workflow, Lightbulb, Clock, CheckCircle2 } from 'lucide-react';

interface IcebergLayerProps {
  dimension: IcebergDimension;
  isHovered?: boolean;
  onHover?: (id: string | null) => void;
}

export const IcebergLayer: React.FC<IcebergLayerProps> = ({
  dimension,
  isHovered,
  onHover,
}) => {
  const getIcon = () => {
    switch (dimension.iconName) {
      case 'award':
        return <Award className="w-4 h-4 text-coral-dark" />;
      case 'brain':
        return <Brain className="w-4 h-4 text-teal-soft" />;
      case 'workflow':
        return <Workflow className="w-4 h-4 text-ocean-500" />;
      case 'lightbulb':
        return <Lightbulb className="w-4 h-4 text-ocean-600" />;
      case 'clock':
        return <Clock className="w-4 h-4 text-ocean-800" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-ocean-600" />;
    }
  };

  const isAboveWater = dimension.position === 'above';

  return (
    <div
      onMouseEnter={() => onHover?.(dimension.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`relative p-3.5 rounded-xl border transition-all duration-200 ${
        isAboveWater
          ? 'bg-white border-coral/30 shadow-subtle hover:border-coral'
          : 'bg-white/95 border-ocean-200/80 shadow-subtle hover:border-ocean-500'
      } ${isHovered ? 'ring-2 ring-ocean-400 scale-[1.01]' : ''}`}
    >
      {/* Top Header Badge & Depth indicator */}
      <div className="flex items-start justify-between gap-1.5 mb-2">
        <div className="flex items-start gap-1.5 min-w-0">
          <div
            className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
              isAboveWater ? 'bg-coral-light' : 'bg-ocean-100'
            }`}
          >
            {getIcon()}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`text-[8.5px] font-bold tracking-wider uppercase font-heading ${
                  isAboveWater ? 'text-coral-dark' : 'text-ocean-600'
                }`}
              >
                LEVEL 0{dimension.level} • {isAboveWater ? 'VISIBLE' : 'SUBMERGED'}
              </span>
              <span
                className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded font-bold ${
                  isAboveWater
                    ? 'bg-coral-light text-coral-dark border border-coral/30'
                    : 'bg-ocean-50 text-ocean-700 border border-ocean-200'
                }`}
              >
                {dimension.depthLabel}
              </span>
            </div>
            <h3 className="text-xs font-bold text-ocean-900 font-heading leading-tight mt-0.5">
              {dimension.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Concise Bullet Points */}
      <ul className="space-y-1 mb-2">
        {dimension.summary.map((point, idx) => (
          <li key={idx} className="flex items-start gap-1.5 text-xs text-ocean-800 leading-snug">
            <span
              className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                isAboveWater ? 'bg-coral' : 'bg-teal-soft'
              }`}
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Critical Explanation */}
      <p className="text-[11px] text-slate-muted leading-relaxed border-t border-ocean-100 pt-1.5 italic">
        {dimension.explanation}
      </p>

      {/* Extra Academic Note if present */}
      {dimension.academicNote && (
        <div className="mt-1.5 text-[10px] text-ocean-700 font-semibold bg-ocean-50 px-2 py-0.5 rounded border border-ocean-100/80">
          💡 {dimension.academicNote}
        </div>
      )}
    </div>
  );
};
