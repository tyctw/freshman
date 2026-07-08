import TimeCalculator from '../components/TimeCalculator';
import { useEffect } from 'react';

export default function TimeCalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <TimeCalculator />
    </main>
  );
}
