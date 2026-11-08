import React from 'react';
import { AssessmentComparison } from '../components/AssessmentComparison';
import { AssessmentModel } from '../components/AssessmentModel';
import { TheoryCard } from '../components/TheoryCard';
import { theoreticalPerspectives } from '../data/posterContent';

export const Application: React.FC = () => {
  const grabingerTheory = theoreticalPerspectives.find((t) => t.scholar.includes('Grabinger'))!;

  return (
    <section className="space-y-3">
      {/* CRITICAL COMPARISON: EXAMS VS PROJECTS */}
      <AssessmentComparison />

      {/* THEORETICAL FOUNDATION: GRABINGER & DUNLAP */}
      <TheoryCard theory={grabingerTheory} accentColor="teal" />

      {/* BALANCED ASSESSMENT ECOSYSTEM & COMPUTING ARCHITECTURE EXAMPLE */}
      <AssessmentModel />
    </section>
  );
};

