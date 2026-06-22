import { motion } from 'motion/react';
import { BookOpen, TrendingUp, Layers, PenTool } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: '108課綱與跑班選修',
    description: '不再只有共同科目！高中生活像大學一樣，會有許多「多元選修」課程，你需要離開原本的教室，到不同的班級與不同同學一起上課。',
  },
  {
    icon: TrendingUp,
    title: '學習歷程檔案',
    description: '大學入學的關鍵之一。高中三年不再只是拚考試，你參與的活動、做的報告和反思，都會成為展現你個人特色的數位履歷。',
  },
  {
    icon: BookOpen,
    title: '課程深度大幅提升',
    description: '高一的課程深度和進度會比國中快上許多。上課認真聽講、課後立即複習會是你最重要的生存法則。',
  },
  {
    icon: PenTool,
    title: '自主學習時間',
    description: '每週會有一段「自主學習」時間。你可以用來讀課外書、學寫程式、準備比賽，或者鑽研任何你有興趣的領域！',
  },
];

export default function Academics() {
  const cardStyles = [
    "border-[#10B981] shadow-[4px_4px_0px_0px_#065F46] md:shadow-[8px_8px_0px_0px_#065F46] text-[#047857]",
    "border-[#3B82F6] shadow-[4px_4px_0px_0px_#1E3A8A] md:shadow-[8px_8px_0px_0px_#1E3A8A] text-[#1D4ED8]",
    "border-[#A855F7] shadow-[4px_4px_0px_0px_#581C87] md:shadow-[8px_8px_0px_0px_#581C87] text-[#7E22CE]",
    "border-[#F97316] shadow-[4px_4px_0px_0px_#7C2D12] md:shadow-[8px_8px_0px_0px_#7C2D12] text-[#C2410C]"
  ];

  return (
    <section id="academics" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#1E293B] sm:text-4xl mb-4"
          >
            學習模式大翻轉
          </motion.h2>
          <p className="text-lg text-slate-700 font-bold max-w-2xl mx-auto">
            高中的學習不再是被動接收，更多時候需要你親自規劃與選擇。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-2 sm:p-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl border-4 p-6 sm:p-8 flex flex-col transition-transform md:hover:-translate-y-1 ${cardStyles[index % cardStyles.length]}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-4 border-current bg-white`}>
                <feature.icon className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-[#1E293B] mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-700 font-bold leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
