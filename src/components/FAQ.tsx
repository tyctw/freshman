import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import NextSteps from './NextSteps';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: '高中社團一定要參加嗎？',
      a: '強烈建議參加！社團不僅是紓解課業壓力的好地方，更是學習人際互動、舉辦活動經驗的重要管道。許多大學校系在看學習歷程時，也會參考社團經驗。但也要衡量自身時間，不要因為社團荒廢課業。'
    },
    {
      q: '什麼時候要決定自然組還是社會組（班群）？',
      a: '大部分學校會在高一下學期末進行選組或選班群。建議高一上學期多方探索，觀察自己對各科的興趣和表現，不要太早設限，也可以多請教輔導老師或學長姐。'
    },
    {
      q: '學習歷程檔案到底要怎麼做？',
      a: '不用想得太複雜，從上課的報告、實作作品或社團活動紀錄開始。重點是要寫出你的「動機」、「過程」和「反思」，也就是你學到了什麼、遇到困難怎麼解決，而不是單純的流水帳。'
    },
    {
      q: '剛開學該怎麼交朋友？',
      a: '可以從主動打招呼、分享文具或零食開始！大家剛開學都很緊張，釋出善意通常會得到很好的回應。也可以透過分組報告或社團活動自然地認識有共同興趣的新朋友。'
    },
    {
      q: '高中的課業真的很難嗎？',
      a: '相比國中，高中的課業深度和廣度確實增加很多，特別是英文和理科。建議開學就養成每天複習的習慣，上課聽不懂一定要馬上問，千萬不要把問題累積到段考前才解決。'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-[#E0F2FE] text-[#1E293B] border-y-4 border-[#0284C7] overflow-hidden min-h-screen" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 flex justify-start">
          <Link
            to="/#hero"
            className="inline-flex items-center gap-2 bg-white text-[#0284C7] hover:bg-[#FBBF24] hover:text-[#78350F] font-black text-base sm:text-lg transition-all border-4 border-[#0369A1] px-5 py-2.5 rounded-full shadow-[4px_4px_0px_0px_#0369A1] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
            返回主頁
          </Link>
        </div>

        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#0284C7] shadow-[4px_4px_0px_0px_#0284C7] mb-6 text-[#0EA5E9]"
            aria-hidden="true"
          >
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h2
            id="faq-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#1E293B] sm:text-4xl mb-4"
          >
            FAQ 常見問答
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto">
            對高中生活還有滿滿的問號嗎？我們整理了新生最常問的問題，幫你快速解惑！
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border-4 border-[#0284C7] shadow-[4px_4px_0px_0px_#0284C7] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-black text-[#1E293B] pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 stroke-[3] text-[#0EA5E9] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-slate-700 font-bold leading-relaxed border-t-2 border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <NextSteps steps={[
          {
            title: '高中 VS 高職 差異比較',
            desc: '還在猶豫？快速看懂學習環境的差別',
            link: '/academic-comparison',
            color: 'text-[#F43F5E]',
            borderColor: 'border-[#9F1239]',
            icon: '⚖️'
          },
          {
            title: '高中三年地圖',
            desc: '提早預覽未來三年的重要挑戰',
            link: '/#roadmap',
            color: 'text-[#A855F7]',
            borderColor: 'border-[#581C87]',
            icon: '🗺️'
          }
        ]} />
      </div>
    </section>
  );
}
