import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import Countdown from './Countdown';

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden items-center flex min-h-[85vh] bg-[#F43F5E]">
      <div className="absolute right-[-20px] top-[-20px] w-80 h-80 bg-[#FB7185] rounded-full mix-blend-multiply opacity-50 hidden md:block"></div>
      <div className="absolute left-[-40px] bottom-[-40px] w-64 h-64 bg-[#FECDD3] rounded-full mix-blend-overlay hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            會考辛苦了！恭喜完成報到
          </motion.div>
          
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6 sm:mb-8 leading-tight"
          >
            準備好迎接你的 <br />
            <span className="text-[#FBBF24]">高中新旅程</span>了嗎？
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed font-medium"
          >
            從國中跨越到高中，不僅僅是制服的改變。這裡有更多的自由、更廣的知識，還有需要你親自探索的「學習歷程」。讓我們一起看看這三年有哪些不一樣！
          </motion.p>
          
          <Countdown />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4"
          >
            <HashLink
              smooth
              to="/academic-comparison#academics"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-8 text-base text-[#F43F5E] bg-white rounded-full font-black shadow-[4px_4px_0px_0px_#9F1239] md:shadow-[6px_6px_0px_0px_#9F1239] active:translate-y-[2px] md:hover:translate-y-0.5 active:shadow-none transition-all"
            >
              學習模式大翻轉
              <ArrowRight className="w-5 h-5 ml-2 font-black" />
            </HashLink>
            <HashLink
              smooth
              to="/#survival"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-8 text-base text-white bg-[#F59E0B] border-4 border-[#FBBF24] rounded-full font-black shadow-[4px_4px_0px_0px_#78350F] md:shadow-[6px_6px_0px_0px_#78350F] active:translate-y-[2px] md:hover:translate-y-0.5 active:shadow-none transition-all"
            >
              學長姐的血淚生存法則
            </HashLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
