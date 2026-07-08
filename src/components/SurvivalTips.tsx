import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Heart, X } from 'lucide-react';
import { useState } from 'react';

export default function SurvivalTips() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tips = [
    {
      icon: '🧻',
      title: '低調的補給站',
      desc: '有衛生紙不要讓全班知道，不然你就會成為班上的免費補給站。',
      color: 'bg-[#FEF3C7]',
      borderColor: 'border-[#F59E0B]',
      shadow: 'shadow-[4px_4px_0px_0px_#F59E0B]'
    },
    {
      icon: '👨‍👩‍👧',
      title: '守護父母的名字',
      desc: '保護好父母的名字！填完基本資料被發現後，你可能就準備失去本名了。',
      color: 'bg-[#E0E7FF]',
      borderColor: 'border-[#4F46E5]',
      shadow: 'shadow-[4px_4px_0px_0px_#4F46E5]'
    },
    {
      icon: '🎭',
      title: '第一印象拿捏',
      desc: '剛開學不要太內向，大家會以為你難相處；但也不要第一天就太外向，第一印象真的很重要。',
      color: 'bg-[#FCE7F3]',
      borderColor: 'border-[#DB2777]',
      shadow: 'shadow-[4px_4px_0px_0px_#DB2777]'
    },
    {
      icon: '📚',
      title: '自主交作業',
      desc: '作業記得自己交，高中很多老師不會像國中一樣每天追著你討。',
      color: 'bg-[#D1FAE5]',
      borderColor: 'border-[#059669]',
      shadow: 'shadow-[4px_4px_0px_0px_#059669]'
    },
    {
      icon: '⏰',
      title: '段考的眼淚',
      desc: '不要等段考前幾天才開始讀書，那幾天只夠你用來後悔。',
      color: 'bg-[#FEE2E2]',
      borderColor: 'border-[#DC2626]',
      shadow: 'shadow-[4px_4px_0px_0px_#DC2626]'
    },
    {
      icon: '🖊️',
      title: '物品一去不復返',
      desc: '文具、充電線、雨傘……借出去之前，請先做好「它可能不會回來」的心理準備。',
      color: 'bg-[#E0F2FE]',
      borderColor: 'border-[#0284C7]',
      shadow: 'shadow-[4px_4px_0px_0px_#0284C7]'
    },
    {
      icon: '🍱',
      title: '美食外交',
      desc: '帶了好吃的午餐或零食，很容易引來同學的「熱情關切」，小心一轉眼就被分食光了。',
      color: 'bg-[#FFEDD5]',
      borderColor: 'border-[#EA580C]',
      shadow: 'shadow-[4px_4px_0px_0px_#EA580C]'
    },
    {
      icon: '👀',
      title: '時光飛逝',
      desc: '不要覺得高中三年很久，一轉眼你就會發現自己在準備學測了。',
      color: 'bg-[#F3E8FF]',
      borderColor: 'border-[#9333EA]',
      shadow: 'shadow-[4px_4px_0px_0px_#9333EA]'
    },
    {
      icon: '🤝',
      title: '友善但保留',
      desc: '對每個人都友善，但不用急著第一天就把所有的心事都告訴別人。',
      color: 'bg-[#CCFBF1]',
      borderColor: 'border-[#0D9488]',
      shadow: 'shadow-[4px_4px_0px_0px_#0D9488]'
    },
    {
      icon: '📝',
      title: '沒有聯絡簿',
      desc: '高中沒有聯絡簿！自己要學會記下所有重要事項與代辦清單，不會再有老師每天盯著你。',
      color: 'bg-[#FEE2E2]',
      borderColor: 'border-[#EF4444]',
      shadow: 'shadow-[4px_4px_0px_0px_#EF4444]'
    },
    {
      icon: '📷',
      title: '黑歷史永流傳',
      desc: '不要自己製造黑歷史，相信我，同學們真的會記滿三年。',
      color: 'bg-[#F1F5F9]',
      borderColor: 'border-[#475569]',
      shadow: 'shadow-[4px_4px_0px_0px_#475569]'
    },
    {
      icon: '🧥',
      title: '教室冷氣',
      desc: '教室冷氣有時冷到像冰箱，有外套就帶。',
      color: 'bg-[#E0F2FE]',
      borderColor: 'border-[#0284C7]',
      shadow: 'shadow-[4px_4px_0px_0px_#0284C7]'
    }
  ];

  return (
    <section id="survival" className="py-20 md:py-24 bg-[#F8FAFC] text-[#1E293B] border-y-4 border-[#CBD5E1] overflow-hidden" aria-labelledby="survival-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#FBBF24] rounded-full flex items-center justify-center border-4 border-[#B45309] shadow-[4px_4px_0px_0px_#B45309] mb-6 text-[#78350F]"
            aria-hidden="true"
          >
            <AlertTriangle className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h2
            id="survival-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#1E293B] sm:text-4xl mb-4"
          >
            學長姐的血淚生存法則
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-600 font-bold max-w-2xl mx-auto mb-6">
            有些事老師不會教，但你一定要知道！來自無數學長姐的真實校園求生指南。
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F43F5E] text-white rounded-full font-black text-lg border-4 border-[#9F1239] shadow-[4px_4px_0px_0px_#9F1239] active:shadow-none active:translate-y-[4px] transition-all"
          >
            <Heart className="w-5 h-5 fill-current" />
            給高一新生的心靈雞湯
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-2">
          {tips.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl border-4 ${item.borderColor} ${item.color} ${item.shadow} p-5 flex flex-col hover:-translate-y-1 transition-transform`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className={`text-lg font-black mb-2 text-slate-900`}>
                {item.title}
              </h3>
              <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FFFBEB] border-4 border-[#1E293B] rounded-3xl shadow-[8px_8px_0px_0px_#1E293B] overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b-4 border-[#1E293B] bg-[#F43F5E] text-white">
                <h3 className="text-xl sm:text-2xl font-black flex items-center gap-2">
                  <Heart className="w-6 h-6 fill-current" />
                  給高一新生的心靈雞湯
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                  aria-label="關閉"
                >
                  <X className="w-6 h-6 stroke-[3]" />
                </button>
              </div>
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                <section>
                  <h4 className="text-xl font-black text-[#1E293B] mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌱</span> 第一週適應期的鼓勵建議
                  </h4>
                  <div className="bg-white border-2 border-[#CBD5E1] rounded-2xl p-5 shadow-sm">
                    <p className="text-slate-700 font-bold leading-relaxed">
                      剛踏入新環境，覺得大家都很厲害、自己格格不入是完全正常的！給自己一點時間適應，不用急著在第一週就交到知心好友或表現得完美。每個人都在摸索，允許自己慢慢來。
                    </p>
                  </div>
                </section>
                <section>
                  <h4 className="text-xl font-black text-[#1E293B] mb-3 flex items-center gap-2">
                    <span className="text-2xl">💆‍♂️</span> 壓力緩解的小撇步
                  </h4>
                  <div className="bg-white border-2 border-[#CBD5E1] rounded-2xl p-5 shadow-sm space-y-3 text-slate-700 font-bold leading-relaxed">
                    <p>1. 每天給自己 15 分鐘的「放空時間」，什麼都不想，純粹休息。</p>
                    <p>2. 焦慮時深呼吸，感受自己的節奏，不要被別人的步調帶著走。</p>
                    <p>3. 如果真的覺得累，提早睡覺是最好的特效藥！</p>
                    <p>4. 找個樹洞（日記或信任的家人朋友）傾訴，不要把所有壓力都悶在心裡。</p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
