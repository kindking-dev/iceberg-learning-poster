import React from 'react';
import { Conclusion } from '../components/Conclusion';
import { References } from '../components/References';

export const Bibliography: React.FC = () => {
  return (
    <footer className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-3">
      {/* Conclusion Banner (Left/Center col span 7) */}
      <div className="lg:col-span-7">
        <Conclusion />
      </div>

      {/* APA 7 References and Contributor Strip (Right col span 5) */}
      <div className="lg:col-span-5">
        <References />
      </div>
    </footer>
  );
};

