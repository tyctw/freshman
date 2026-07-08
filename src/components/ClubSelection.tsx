import { motion } from 'motion/react';
import { Activity, Target, Users, Star, ArrowLeft } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import NextSteps from './NextSteps';

const clubTypes = [
  {
    icon: Activity,
    title: '康樂/表演性社團',
    examples: '熱舞社、吉他社、康輔社、熱音社',
    pros: '能認識很多外校朋友、舞台魅力點滿、向心力極強。',
    cons: '花費時間極多，常需要留校練習到很晚，可能會有學長姐學弟妹制的壓力，活動費用較高。',
    color: 'bg-[#FCE7F3]',
    borderColor: 'border-[#DB2777]',
    textColor: 'text-[#9D174D]'
  },
  {
    icon: Target,
    title: '學術/學藝性社團',
    examples: '科研社、資訊社、校刊社、辯論社',
    pros: '對未來大學個人申請（學習歷程）有直接幫助，能學到硬實力或專業知識，作息相對正常。',
    cons: '可能比較沉悶，如果沒有興趣容易覺得像在上一門課。',
    color: 'bg-[#DBEAFE]',
    borderColor: 'border-[#2563EB]',
    textColor: 'text-[#1E3A8A]'
  },
  {
    icon: Users,
    title: '服務性社團',
    examples: '春暉社、扶少團、志工社',
    pros: '學習付出與關懷社會，能拿到志工時數，人際關係溫和友善。',
    cons: '假日可能需要出隊或舉辦營隊，耗費週末休息時間。',
    color: 'bg-[#D1FAE5]',
    borderColor: 'border-[#059669]',
    textColor: 'text-[#065F46]'
  },
  {
    icon: Star,
    title: '體育性社團',
    examples: '籃球社、排球社、羽球社',
    pros: '強身健體，能發洩課業壓力，培養團隊默契。',
    cons: '容易受傷，需要一定的體能基礎，也可能會有學長姐制。',
    color: 'bg-[#FFEDD5]',
    borderColor: 'border-[#EA580C]',
    textColor: 'text-[#9A3412]'
  }
];

export default function ClubSelection() {
  return (
    <section className="py-20 md:py-24 bg-[#F0FDF4] text-[#1E293B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 flex justify-start">
          <HashLink
            smooth
            to="/#life"
            className="inline-flex items-center gap-2 bg-white text-[#16A34A] hover:bg-[#FBBF24] hover:text-[#78350F] font-black text-base sm:text-lg transition-all border-4 border-[#14532D] px-5 py-2.5 rounded-full shadow-[4px_4px_0px_0px_#14532D] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            返回主頁
          </HashLink>
        </div>

        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#16A34A] rounded-full flex items-center justify-center border-4 border-[#14532D] shadow-[4px_4px_0px_0px_#14532D] mb-6 text-white"
          >
            <Target className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black text-[#1E293B] sm:text-5xl mb-6"
          >
            社團選擇指南
          </motion.h1>
          <p className="text-lg sm:text-xl text-slate-700 font-bold max-w-3xl mx-auto leading-relaxed">
            「玩社團」是高中最熱血的代名詞！不同的社團類型有不同的生態與花費。來看看哪種類型最適合你的個性與高中目標。
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubTypes.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${club.color} border-4 ${club.borderColor} rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--tw-shadow-color)] hover:-translate-y-1 transition-transform`}
                style={{ '--tw-shadow-color': club.borderColor.replace('border-', '') } as any}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-2xl bg-white border-4 ${club.borderColor} ${club.textColor}`}>
                    <club.icon className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-black ${club.textColor}`}>{club.title}</h3>
                    <p className="font-bold text-slate-700 text-sm mt-1">{club.examples}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="bg-white/60 p-4 rounded-2xl">
                    <div className="font-black text-[#059669] mb-1 flex items-center gap-2">
                      <span>👍</span> 優點
                    </div>
                    <p className="font-bold text-slate-800 leading-relaxed text-sm">{club.pros}</p>
                  </div>
                  <div className="bg-white/60 p-4 rounded-2xl">
                    <div className="font-black text-[#DC2626] mb-1 flex items-center gap-2">
                      <span>⚠️</span> 挑戰
                    </div>
                    <p className="font-bold text-slate-800 leading-relaxed text-sm">{club.cons}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <NextSteps steps={[
          {
            title: '社團避雷指南',
            desc: '5 個你選社團前不可不知的隱藏陷阱',
            link: '/club-pitfalls',
            color: 'text-[#F43F5E]',
            borderColor: 'border-[#9F1239]',
            icon: '🛡️'
          },
          {
            title: '高一時間管理計算機',
            desc: '看看你一週剩下多少自由時間？',
            link: '/time-calculator',
            color: 'text-[#9333EA]',
            borderColor: 'border-[#581C87]',
            icon: '⏱️'
          }
        ]} />
      </div>
    </section>
  );
}
