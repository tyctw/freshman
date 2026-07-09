import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicComparisonPage from './pages/AcademicComparisonPage';
import ClubSelectionPage from './pages/ClubSelectionPage';
import ClubPitfallsPage from './pages/ClubPitfallsPage';
import FAQPage from './pages/FAQPage';
import TimeCalculatorPage from './pages/TimeCalculatorPage';
import PersonaQuizPage from './pages/PersonaQuizPage';
import ClassmateGachaPage from './pages/ClassmateGachaPage';
import ExcuseGeneratorPage from './pages/ExcuseGeneratorPage';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure elements are rendered
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-[#FFFBEB] font-sans text-[#1E293B] selection:bg-[#FBBF24] selection:text-white">

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/persona" element={<PersonaQuizPage />} />
          <Route path="/classmate-gacha" element={<ClassmateGachaPage />} />
          <Route path="/excuse-generator" element={<ExcuseGeneratorPage />} />
          <Route path="/academic-comparison" element={<AcademicComparisonPage />} />
          <Route path="/club-selection" element={<ClubSelectionPage />} />
          <Route path="/club-pitfalls" element={<ClubPitfallsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/time-calculator" element={<TimeCalculatorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
