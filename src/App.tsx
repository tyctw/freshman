import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Academics from './components/Academics';
import Life from './components/Life';
import SummerChecklist from './components/SummerChecklist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-[#1E293B] selection:bg-[#FBBF24] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Academics />
        <Life />
        <SummerChecklist />
      </main>
      <Footer />
    </div>
  );
}
