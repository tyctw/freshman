import Comparison from '../components/Comparison';
import Academics from '../components/Academics';
import { useEffect } from 'react';

export default function AcademicComparisonPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <Comparison />
      <Academics />
    </main>
  );
}
