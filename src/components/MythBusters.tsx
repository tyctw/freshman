import { motion } from 'motion/react';
import { Zap, ThumbsUp, ThumbsDown, Skull, HeartPulse } from 'lucide-react';

export default function MythBusters() {
  const myths = [
    {
      myth: '學習歷程檔案就是「軍備競賽」，證書越多越好？',
      truth: '重在「反思」而非數量！大學教授想看的是你「為什麼做」、「學到什麼」以及「遇到困難如何解決」。一份有深度反思的報告，勝過十張沒有溫度的參加證明。',
      icon: HeartPulse,
      color: 'text-[#F43F5E]',
      borderColor: 'border-[#BE123C]',
      bg: 'bg-[#FFF1F2]',
      shadow: 'shadow-[6px_6px_0px_0px_#BE123C]'
    },
    {
      myth: '高一先用力玩社團，高二高三再來認真讀書就好？',
      truth: '千萬不要！高一的英數物化是高二的基石。如果高一基礎沒打好，高二的課程難度加上幹部壓力，會讓你直接崩潰。保持「上課認真、作業自己寫」的最低底線。',
      icon: Skull,
      color: 'text-[#8B5CF6]',
      borderColor: 'border-[#5B21B6]',
      bg: 'bg-[#F5F3FF]',
      shadow: 'shadow-[6px_6px_0px_0px_#5B21B6]'
    },
    {
      myth: '一定要考上頂大才是成功的人生？',
      truth: '大學只是中繼站，不是終點！高中三年最重要的任務是「認識自己」。找到一個你願意投入熱情的領域，比盲目追求校名光環更能走得長遠。',
      icon: ThumbsUp,
      color: 'text-[#10B981]',
      borderColor: 'border-[#047857]',
      bg: 'bg-[#ECFDF5]',
      shadow: 'shadow-[6px_6px_0px_0px_#047857]'
    }
  ];

  return (
    <section id="mythbusters" className="py-20 md:py-24 bg-[#FFFBEB] text-[#1E293B] overflow-hidden" aria-labelledby="myth-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#C2410C] shadow-[4px_4px_0px_0px_#C2410C] mb-6 text-[#F97316]"
            aria-hidden="true"
          >
            <Zap className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h2
            id="myth-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#1E293B] sm:text-4xl mb-4"
          >
            高中都市傳說大破解
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto">
            學長姐沒告訴你的殘酷真相？還是網路謠言滿天飛？讓我們一次為你解答最常見的高中迷思！
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-2 sm:p-4">
          {myths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`bg-white rounded-3xl border-4 ${item.borderColor} ${item.shadow} flex flex-col h-full hover:-translate-y-1 transition-transform`}
            >
              <div className={`p-6 border-b-4 ${item.borderColor} ${item.bg} rounded-t-2xl flex flex-col items-center text-center gap-4`}>
                <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center border-4 ${item.borderColor} ${item.color}`}>
                  <ThumbsDown className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-[#1E293B]">
                  迷思：{item.myth}
                </h3>
              </div>
              <div className="p-6 sm:p-8 flex-1 bg-white rounded-b-2xl flex flex-col relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#1E293B] flex items-center justify-center text-[#1E293B] shadow-[2px_2px_0px_0px_#1E293B] z-10">
                  <item.icon className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="pt-6">
                  <h4 className="text-lg font-black text-[#1E293B] mb-3 flex items-center gap-2">
                    <span className={`text-xl ${item.color}`}>💡</span> 真相解析
                  </h4>
                  <p className="text-slate-700 font-bold leading-relaxed">
                    {item.truth}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
