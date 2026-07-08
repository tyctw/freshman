import Hero from '../components/Hero';
import SurvivalTips from '../components/SurvivalTips';
import Roadmap from '../components/Roadmap';
import Life from '../components/Life';
import MythBusters from '../components/MythBusters';
import SummerChecklist from '../components/SummerChecklist';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SurvivalTips />
      <Roadmap />
      <Life />
      <MythBusters />
      <SummerChecklist />
    </main>
  );
}
