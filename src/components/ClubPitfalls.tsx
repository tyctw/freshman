import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import NextSteps from './NextSteps';

const pitfallTips = [
  {
    title: '打聽「地下社規」與「學長姐制」',
    desc: '有些社團表面光鮮亮麗，但內部有嚴格的階級制度或隱藏規定。選社前一定要去Dcard、Meteor或直接問認識的學長姐。'
  },
  {
    title: '評估「隱形花費」',
    desc: '表演性社團常需要買社服、器材、付表演場地費、慶功宴等，一年下來可能是一筆不小的開銷，先衡量自身經濟狀況。'
  },
  {
    title: '時間分配的現實面',
    desc: '「我不怕累，我可以兼顧！」這是高一新生最常產生的錯覺。段考前一週如果社團還要狂練，你真的承受得住嗎？'
  },
  {
    title: '幹部光環的代價',
    desc: '當社長/幹部聽起來很威風，學習歷程也好看，但你要負責處理人際衝突、拉贊助、寫企劃，這是極大的精神消耗。'
  },
  {
    title: '退社與轉社的難易度',
    desc: '有些熱門社團一旦加入就很難退出，或會被貼標籤。如果不確定自己有沒有熱忱，不要因為朋友去就跟著去。'
  }
];

export default function ClubPitfalls() {
  return (
    <section className="py-20 md:py-24 bg-[#FFF1F2] text-[#1E293B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 flex justify-start">
          <Link
            to="/club-selection"
            className="inline-flex items-center gap-2 bg-white text-[#F43F5E] hover:bg-[#FBBF24] hover:text-[#78350F] font-black text-base sm:text-lg transition-all border-4 border-[#9F1239] px-5 py-2.5 rounded-full shadow-[4px_4px_0px_0px_#9F1239] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            返回社團選擇指南
          </Link>
        </div>

        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#F43F5E] rounded-full flex items-center justify-center border-4 border-[#9F1239] shadow-[4px_4px_0px_0px_#9F1239] mb-6 text-white"
          >
            <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black text-[#1E293B] sm:text-5xl mb-6"
          >
            社團避雷指南
          </motion.h1>
          <p className="text-lg sm:text-xl text-slate-700 font-bold max-w-3xl mx-auto leading-relaxed">
            選錯社團讓你在段考與成發之間崩潰。來自無數學長姐的真實血淚，在送出志願序前，一定要看過這 5 個避雷提醒！
          </p>
        </div>

        <div>
          <div className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#1E293B] max-w-4xl mx-auto">
            <div className="space-y-6">
              {pitfallTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 sm:gap-6 items-start pb-6 border-b-2 border-slate-200 last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#FEF2F2] rounded-full flex items-center justify-center border-4 border-[#EF4444] text-[#DC2626] mt-1">
                    <AlertTriangle className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black mb-2 text-[#1E293B]">{tip.title}</h3>
                    <p className="font-bold text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <NextSteps steps={[
          {
            title: '高中三年地圖',
            desc: '提早預覽未來三年的重要挑戰',
            link: '/#roadmap',
            color: 'text-[#A855F7]',
            borderColor: 'border-[#581C87]',
            icon: '🗺️'
          },
          {
            title: '高一新生的暑假任務清單',
            desc: '開學前，你可以先做這幾件事',
            link: '/#checklist',
            color: 'text-[#10B981]',
            borderColor: 'border-[#065F46]',
            icon: '📝'
          }
        ]} />
      </div>
    </section>
  );
}
