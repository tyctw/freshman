import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Map, Compass, CheckCircle, Menu, X, GitCompare, Zap, AlertTriangle, HelpCircle, Clock, Sparkles, Dices, FileWarning } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: '首頁', href: '/', icon: Compass },
  { name: '屬性鑑定', href: '/persona', icon: Sparkles },
  { name: '同學轉蛋', href: '/classmate-gacha', icon: Dices },
  { name: '遲到理由', href: '/excuse-generator', icon: FileWarning },
  { name: '高中 VS 高職', href: '/academic-comparison', icon: GitCompare },
  { name: '社團選擇', href: '/club-selection', icon: CheckCircle },
  { name: '社團避雷', href: '/club-pitfalls', icon: Zap },
  { name: '時間管理', href: '/time-calculator', icon: Clock },
  { name: '常見問答', href: '/faq', icon: HelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-4 border-[#FBBF24]" aria-label="主要導覽">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/#hero"
            className="flex-shrink-0 flex items-center cursor-pointer gap-2"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F43F5E] rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-[2px_2px_0px_0px_#9F1239]">
              新
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-[#1E293B]">
              新高一導航站
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-4 font-bold text-sm uppercase tracking-wide">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.name}
                >
                  <Link
                    to={item.href}
                    className="text-slate-600 hover:text-[#F59E0B] flex items-center p-2 transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#F59E0B] transition-all group-hover:w-full rounded-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <a href="https://tyctw.github.io/shared/" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#1E293B] text-[#1E293B] px-4 py-2 rounded-full font-bold text-sm shadow-[4px_4px_0px_0px_#1E293B] hover:translate-y-0.5 active:shadow-none transition-all flex items-center gap-2">
              <span>會錄取分享</span>
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-3">
             <a href="https://tyctw.github.io/shared/" target="_blank" rel="noopener noreferrer" className="bg-[#1E293B] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-[2px_2px_0px_0px_#FBBF24] active:shadow-none active:translate-y-[2px] transition-all">
               會錄取分享
             </a>
             <button 
               onClick={() => setIsOpen(!isOpen)}
               className="p-1.5 md:p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg text-slate-700"
               aria-expanded={isOpen}
               aria-controls="mobile-menu"
               aria-label={isOpen ? "關閉選單" : "開啟選單"}
             >
               {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7 stroke-[3]" aria-hidden="true" /> : <Menu className="w-6 h-6 md:w-7 md:h-7 stroke-[3]" aria-hidden="true" />}
             </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#1E293B]/40 backdrop-blur-sm z-[55] h-screen w-screen"
              aria-hidden="true"
              style={{ top: 0, left: 0 }}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 right-0 w-[280px] sm:w-[320px] bg-white border-l-4 border-[#1E293B] shadow-[-8px_0_0_0_rgba(30,41,59,0.1)] z-[60] flex flex-col h-screen"
            >
              <div className="p-4 border-b-4 border-[#FBBF24] flex justify-between items-center bg-[#FFFBEB]">
                <span className="font-black text-[#1E293B] text-lg">網站導覽</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] bg-white border-2 border-[#1E293B] rounded-lg text-slate-700 shadow-[2px_2px_0px_0px_#1E293B] active:translate-y-[2px] active:shadow-none transition-all"
                  aria-label="關閉選單"
                >
                  <X className="w-6 h-6 stroke-[3]" aria-hidden="true" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-3 font-bold text-base flex flex-col flex-1 overflow-y-auto bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-[#1E293B] p-3 rounded-2xl hover:bg-[#FBBF24] hover:text-[#78350F] transition-colors border-2 border-transparent hover:border-[#78350F] group"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-white flex items-center justify-center mr-4 text-[#F59E0B] border-2 border-transparent group-hover:border-[#78350F] transition-all">
                      <item.icon className="w-5 h-5 stroke-[3]" />
                    </div>
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
