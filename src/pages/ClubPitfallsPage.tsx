import ClubPitfalls from '../components/ClubPitfalls';
import { useEffect } from 'react';

export default function ClubPitfallsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <ClubPitfalls />
    </main>
  );
}
