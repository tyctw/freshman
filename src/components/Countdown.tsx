import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    // 2026-08-31T00:00:00+08:00 represents start of day in Taiwan time
    const difference = +new Date('2026-08-31T00:00:00+08:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border-4 border-white/30 text-center max-w-sm mx-auto mb-10 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
         <h3 className="text-xl font-black text-white">開學日已經到了！🚀</h3>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 md:p-8 border-4 border-white/40 max-w-lg mx-auto mb-8 md:mb-10 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
      aria-label="開學倒數計時器"
    >
      <div className="sr-only" aria-live="polite">
        距離開學還有 {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分鐘 {timeLeft.seconds} 秒
      </div>
      <div className="flex items-center justify-center gap-2 mb-4 text-[#FBBF24]" aria-hidden="true">
        <Clock className="w-5 h-5 bg-white rounded-full p-0.5 text-[#F43F5E] stroke-[3]" />
        <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#FBBF24]">距離 2026/08/31 開學</h3>
      </div>
      
      <div className="flex justify-center gap-3 md:gap-4" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 bg-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-[#F43F5E] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            {timeLeft.days}
          </div>
          <span className="text-xs md:text-sm font-bold mt-2 text-white/90">天</span>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-black text-white/50 pt-2">:</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 bg-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-[#F43F5E] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span className="text-xs md:text-sm font-bold mt-2 text-white/90">時</span>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-black text-white/50 pt-2">:</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 bg-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-[#F43F5E] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span className="text-xs md:text-sm font-bold mt-2 text-white/90">分</span>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-black text-white/50 pt-2">:</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 bg-[#FBBF24] rounded-xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <span className="text-xs md:text-sm font-bold mt-2 text-white/90">秒</span>
        </div>
      </div>
    </motion.div>
  );
}
