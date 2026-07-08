import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicComparisonPage from './pages/AcademicComparisonPage';
import ClubSelectionPage from './pages/ClubSelectionPage';
import ClubPitfallsPage from './pages/ClubPitfallsPage';
import FAQPage from './pages/FAQPage';
import TimeCalculatorPage from './pages/TimeCalculatorPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFBEB] font-sans text-[#1E293B] selection:bg-[#FBBF24] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
