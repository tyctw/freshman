import { motion } from 'motion/react';
import { Users, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Life() {
  return (
    <section id="life" className="py-20 md:py-24 bg-[#3B82F6] text-white overflow-hidden border-y-4 border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black sm:text-4xl mb-6">
              社團與生活：時間管理大考驗
            </h2>
            <p className="text-lg text-white/90 font-bold mb-8 leading-relaxed">
              高中的迷人之處在於多采多姿的課外活動。但隨著自由度的增加，如何在高強度的課業與精彩的生活中取得平衡，將是你最重要的課題。
            </p>

            <ul className="space-y-6">
              {[
                {
                  icon: Users,
                  title: '社團活動是第二重地',
                  desc: '吉他社、熱舞社、康輔社... 社團不僅是玩樂，更是學習人際溝通、舉辦活動和領導統御的絕佳舞台。',
                  color: 'text-[#BE123C]',
                  bg: 'bg-white'
                },
                {
                  icon: Clock,
                  title: '時間是你的魔法',
                  desc: '國中的作息多由老師家長安排，高中起你將有大量空白時間。學會排優先順序，別讓社團壓垮你的期中考。',
                  color: 'text-[#B45309]',
                  bg: 'bg-white'
                },
                {
                  icon: Zap,
                  title: '為自己的選擇負責',
                  desc: '你可以瘋狂玩社團，也可以埋首書堆，或者談一場青澀的戀愛。高中沒有標準答案，但每個選擇都有它的代價與收穫。',
                  color: 'text-[#047857]',
                  bg: 'bg-white'
                }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-white/10 p-4 rounded-2xl border-4 border-white border-opacity-30"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border-4 border-current ${item.bg} ${item.color}`}>
                    <item.icon className="w-5 h-5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1">{item.title}</h3>
                    <p className="text-white/80 font-bold text-sm">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/club-selection" 
                className="inline-flex items-center justify-center gap-2 bg-[#FBBF24] text-[#78350F] px-6 py-3 rounded-full font-black text-lg border-4 border-[#B45309] shadow-[4px_4px_0px_0px_#B45309] hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all"
              >
                <Zap className="w-5 h-5 stroke-[3]" />
                查看社團選擇指南
              </Link>
              <Link 
                to="/club-pitfalls" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[#BE123C] px-6 py-3 rounded-full font-black text-lg border-4 border-[#BE123C] shadow-[4px_4px_0px_0px_#BE123C] hover:-translate-y-1 active:translate-y-[2px] active:shadow-none transition-all"
              >
                查看社團避雷指南
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-2"
          >
            <div className="aspect-square sm:aspect-[4/5] rounded-3xl bg-[#FBBF24] border-4 border-[#B45309] shadow-[6px_6px_0px_0px_#78350F] md:shadow-[12px_12px_0px_0px_#78350F] p-6 lg:p-8 flex flex-col justify-center items-center text-center text-[#78350F] mx-4 sm:mx-0">
              <div className="text-5xl md:text-6xl mb-6 bg-white w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 border-[#B45309]">🎒</div>
              <h4 className="text-xl md:text-2xl font-black mb-4">學長姐的真心話</h4>
              <blockquote className="text-base md:text-lg font-bold leading-relaxed border-t-4 border-[#B45309] pt-6 mt-2">
                「不要怕犯錯，高中本來就是用來探索自己的。多參加活動，多認識朋友，但段考前一個月，請乖乖坐在書桌前！」
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
