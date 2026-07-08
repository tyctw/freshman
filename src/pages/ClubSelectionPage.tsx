import ClubSelection from '../components/ClubSelection';
import { useEffect } from 'react';

export default function ClubSelectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <ClubSelection />
    </main>
  );
}
