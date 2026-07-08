import FAQ from '../components/FAQ';
import { useEffect } from 'react';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <FAQ />
    </main>
  );
}
