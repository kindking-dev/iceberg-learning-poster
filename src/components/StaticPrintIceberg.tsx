import React from 'react';
import { icebergDimensions } from '../data/posterContent';
import { IcebergIllustration } from './IcebergIllustration';
import { IcebergLayer } from './IcebergLayer';

export const StaticPrintIceberg: React.FC = () => {
  const level1 = icebergDimensions.find((d) => d.level === 1)!;
  const level2 = icebergDimensions.find((d) => d.level === 2)!;
  const level3 = icebergDimensions.find((d) => d.level === 3)!;
  const level4 = icebergDimensions.find((d) => d.level === 4)!;
  const level5 = icebergDimensions.find((d) => d.level === 5)!;

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-12 gap-3 items-stretch flex-1">
        {/* Left Side: Levels 1, 2, 4 */}
        <div className="col-span-3 flex flex-col justify-between space-y-2">
          <div>
            <div className="text-[9px] uppercase font-bold text-coral-dark tracking-wider mb-1">
              SURFACE CRITERIA • WHAT WE CAN SEE
            </div>
            <IcebergLayer dimension={level1} />
          </div>

          <div>
            <div className="text-[9px] uppercase font-bold text-teal-dark tracking-wider mb-1">
              LAYER 01 • MEANING-MAKING
            </div>
            <IcebergLayer dimension={level2} />
          </div>

          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-700 tracking-wider mb-1">
              LAYER 03 • EPISTEMIC RIGOR
            </div>
            <IcebergLayer dimension={level4} />
          </div>
        </div>

        {/* Center: Large High-Resolution Iceberg Vector Centerpiece */}
        <div className="col-span-6 flex flex-col items-center justify-center relative min-h-[480px]">
          <IcebergIllustration />
        </div>

        {/* Right Side: Levels 3, 5 & Conceptual Note */}
        <div className="col-span-3 flex flex-col justify-between space-y-2">
          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-700 tracking-wider mb-1">
              LAYER 02 • ACTIVE DEPLOYMENT
            </div>
            <IcebergLayer dimension={level3} />
          </div>

          <div>
            <div className="text-[9px] uppercase font-bold text-ocean-900 tracking-wider mb-1">
              LAYER 04 • DURABLE RETENTION
            </div>
            <IcebergLayer dimension={level5} />
          </div>

          <div className="p-2 rounded-xl bg-pale-ice/70 border border-ocean-200/80 text-[9.5px] text-slate-muted leading-tight">
            <span className="font-bold text-ocean-800 block mb-0.5">Conceptual Principle:</span>
            These five dimensions represent complementary aspects of cognitive depth, not a rigid sequential hierarchy. Grades reveal localized performance; authentic learning requires conceptual, practical, and epistemological roots.
          </div>
        </div>
      </div>
    </div>
  );
};

