import { motion } from 'motion/react';
import { Compass, Target, Trophy, Map as MapIcon } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      year: '高一：廣泛探索',
      title: '尋找興趣與適應新節奏',
      desc: '剛踏入高中，一切都是新的！這一年請多參加不同社團、聽講座、大膽嘗試各種多元選修。重點在於「尋找自己的興趣」，不用急著定下未來的科系，允許自己多方摸索，同時建立起高中的讀書習慣。',
      icon: Compass,
      color: 'text-[#3B82F6]',
      bg: 'bg-[#EFF6FF]',
      borderColor: 'border-[#1D4ED8]',
      shadow: 'shadow-[6px_6px_0px_0px_#1D4ED8]'
    },
    {
      year: '高二：聚焦深化',
      title: '選擇班群與社團幹部',
      desc: '面臨自然組、社會組或特殊班群的選擇。這時候你可能在社團擔任核心幹部，課業難度也會以等比級數增加！時間管理將受到極大挑戰，而「學習歷程檔案」也要開始展現你專屬的個人特色與學科深度。',
      icon: Target,
      color: 'text-[#F97316]',
      bg: 'bg-[#FFF7ED]',
      borderColor: 'border-[#C2410C]',
      shadow: 'shadow-[6px_6px_0px_0px_#C2410C]'
    },
    {
      year: '高三：衝刺收割',
      title: '備戰大考與展現成果',
      desc: '準備學測與分科測驗，將過去兩年的累積轉化為升學的果實。這一年需要極大的毅力與抗壓性，保持穩定的作息與心態。看著自己高中三年的成長，你會發現自己比想像中更強大！',
      icon: Trophy,
      color: 'text-[#F43F5E]',
      bg: 'bg-[#FFF1F2]',
      borderColor: 'border-[#BE123C]',
      shadow: 'shadow-[6px_6px_0px_0px_#BE123C]'
    }
  ];

  return (
    <section id="roadmap" className="py-20 md:py-24 bg-[#A855F7] text-white border-y-4 border-[#581C87] overflow-hidden" aria-labelledby="roadmap-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#581C87] shadow-[4px_4px_0px_0px_#581C87] mb-6 text-[#A855F7]"
            aria-hidden="true"
          >
            <MapIcon className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h2
            id="roadmap-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white sm:text-4xl mb-4"
          >
            高中三年破關地圖
          </motion.h2>
          <p className="text-base sm:text-lg text-[#F3E8FF] font-bold max-w-2xl mx-auto">
            高中生活就像是一場大型的角色扮演遊戲，每個階段都有不同的主線任務。先來偷看未來的關卡吧！
          </p>
        </div>

        <div className="relative">
          {/* 連接線 (Desktop) */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-2 bg-[#581C87] -translate-x-1/2 rounded-full" aria-hidden="true"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* 節點圓圈 (Desktop) */}
                <div className="hidden md:flex absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#581C87] z-10 items-center justify-center shadow-[4px_4px_0px_0px_#581C87]">
                   <step.icon className={`w-5 h-5 stroke-[3] ${step.color}`} />
                </div>

                <div className={`w-full md:w-[45%] bg-white rounded-3xl border-4 ${step.borderColor} ${step.shadow} p-6 sm:p-8 hover:-translate-y-1 transition-transform`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-4 ${step.borderColor} ${step.bg} ${step.color} md:hidden`}>
                      <step.icon className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full border-2 ${step.borderColor} font-black text-sm mb-2 ${step.bg} ${step.color}`}>
                        {step.year}
                      </span>
                      <h3 className="text-2xl font-black text-[#1E293B]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-700 font-bold leading-relaxed text-sm sm:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
