import { motion } from 'motion/react';
import { Clock, ArrowLeft, Moon, BookOpen, Train, Activity, Coffee } from 'lucide-react';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import NextSteps from './NextSteps';

export default function TimeCalculator() {
  const [sleep, setSleep] = useState(7);
  const [school, setSchool] = useState(8);
  const [commute, setCommute] = useState(1);
  const [study, setStudy] = useState(10);
  const [club, setClub] = useState(5);

  const totalWeeklyHours = 168;
  const sleepWeekly = sleep * 7;
  const schoolWeekly = school * 5;
  const commuteWeekly = commute * 5;
  const studyWeekly = study;
  const clubWeekly = club;

  const usedHours = sleepWeekly + schoolWeekly + commuteWeekly + studyWeekly + clubWeekly;
  const freeHours = totalWeeklyHours - usedHours;

  const calculateStatus = () => {
    if (freeHours < 0) return { text: '時間透支啦！你需要減少一些活動', color: 'text-red-600', bg: 'bg-red-100', border: 'border-red-600' };
    if (freeHours < 15) return { text: '行程滿檔！注意不要把自己逼太緊喔', color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-600' };
    if (freeHours > 40) return { text: '時間很充裕！可以多安排一些探索活動', color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-600' };
    return { text: '時間分配得很不錯！繼續保持', color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-600' };
  };

  const status = calculateStatus();

  return (
    <section className="py-20 md:py-24 bg-[#FAF5FF] text-[#1E293B] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 flex justify-start">
          <HashLink
            smooth
            to="/#life"
            className="inline-flex items-center gap-2 bg-white text-[#9333EA] hover:bg-[#FBBF24] hover:text-[#78350F] font-black text-base sm:text-lg transition-all border-4 border-[#581C87] px-5 py-2.5 rounded-full shadow-[4px_4px_0px_0px_#581C87] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            返回主頁
          </HashLink>
        </div>

        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#9333EA] rounded-full flex items-center justify-center border-4 border-[#581C87] shadow-[4px_4px_0px_0px_#581C87] mb-6 text-white"
          >
            <Clock className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black text-[#1E293B] sm:text-5xl mb-4"
          >
            高一時間管理計算機
          </motion.h1>
          <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto leading-relaxed">
            一週只有 168 小時，扣掉睡覺和上學，你還剩下多少時間可以自由運用？
            試著調整下面的數值，看看你的時間都去哪了！
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-4 border-[#581C87] rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#581C87]"
          >
            <h2 className="text-2xl font-black mb-6 text-[#1E293B]">你的每週行程</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between font-bold text-slate-700">
                  <span className="flex items-center gap-2"><Moon className="w-5 h-5 text-indigo-500" /> 睡眠 (每天)</span>
                  <span>{sleep} 小時</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="12"
                  value={sleep}
                  onChange={(e) => setSleep(Number(e.target.value))}
                  className="w-full accent-[#9333EA]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-bold text-slate-700">
                  <span className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-emerald-500" /> 學校上課 (週一至週五每天)</span>
                  <span>{school} 小時</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="10"
                  value={school}
                  onChange={(e) => setSchool(Number(e.target.value))}
                  className="w-full accent-[#9333EA]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-bold text-slate-700">
                  <span className="flex items-center gap-2"><Train className="w-5 h-5 text-slate-500" /> 通勤時間 (週一至週五每天)</span>
                  <span>{commute} 小時</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={commute}
                  onChange={(e) => setCommute(Number(e.target.value))}
                  className="w-full accent-[#9333EA]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-bold text-slate-700">
                  <span className="flex items-center gap-2"><Coffee className="w-5 h-5 text-amber-500" /> 課外讀書/補習 (每週)</span>
                  <span>{study} 小時</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={study}
                  onChange={(e) => setStudy(Number(e.target.value))}
                  className="w-full accent-[#9333EA]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-bold text-slate-700">
                  <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-rose-500" /> 社團/活動 (每週)</span>
                  <span>{club} 小時</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={club}
                  onChange={(e) => setClub(Number(e.target.value))}
                  className="w-full accent-[#9333EA]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <div className={`p-6 border-4 rounded-3xl font-black text-center ${status.bg} ${status.border} ${status.color} shadow-[6px_6px_0px_0px_var(--tw-shadow-color)]`} style={{ '--tw-shadow-color': 'currentColor' } as any}>
              <div className="text-xl mb-2">每週剩餘自由時間</div>
              <div className="text-5xl md:text-6xl my-4 tracking-tighter">
                {freeHours} <span className="text-2xl">小時</span>
              </div>
              <div className="text-sm sm:text-base font-bold bg-white/50 inline-block px-4 py-2 rounded-full mt-2">
                {status.text}
              </div>
            </div>

            <div className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 shadow-[6px_6px_0px_0px_#1E293B]">
              <h3 className="text-xl font-black mb-4 text-[#1E293B]">時間去哪了？</h3>
              <div className="space-y-3 font-bold text-sm sm:text-base text-slate-700">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500" /> 睡眠</span>
                  <span>{sleepWeekly} 小時 ({Math.round(sleepWeekly/168*100)}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500" /> 學校</span>
                  <span>{schoolWeekly} 小時 ({Math.round(schoolWeekly/168*100)}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-500" /> 通勤</span>
                  <span>{commuteWeekly} 小時 ({Math.round(commuteWeekly/168*100)}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500" /> 讀書</span>
                  <span>{studyWeekly} 小時 ({Math.round(studyWeekly/168*100)}%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-rose-500" /> 社團</span>
                  <span>{clubWeekly} 小時 ({Math.round(clubWeekly/168*100)}%)</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-slate-200 text-sm font-bold text-slate-500 text-center">
                ※ 一週總計 168 小時
              </div>
            </div>
          </motion.div>
        </div>

        <NextSteps steps={[
          {
            title: '新生常見 QA 問答區',
            desc: '大家都在問什麼？一解你心中的疑惑',
            link: '/faq',
            color: 'text-[#0EA5E9]',
            borderColor: 'border-[#0284C7]',
            icon: '❓'
          },
          {
            title: '高中 VS 高職 差異比較',
            desc: '還在猶豫？快速看懂學習環境的差別',
            link: '/academic-comparison',
            color: 'text-[#F43F5E]',
            borderColor: 'border-[#9F1239]',
            icon: '⚖️'
          }
        ]} />
      </div>
    </section>
  );
}
