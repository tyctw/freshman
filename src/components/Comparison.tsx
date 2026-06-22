import { motion } from 'motion/react';
import { GitCompare, BookOpen, GraduationCap } from 'lucide-react';

const academicsComparison = [
  {
    category: '課程內容',
    highSchool: [
      '以學術研究為導向，注重學術研究基礎知識課程（如國文、英文、數學等）',
      '依各高中設立不同的特色學程班群'
    ],
    vocational: [
      '以專門技術為導向，注重實務技術方面的實作課程（如實務專題、實習課程等）',
      '一共分成15個專業學群科別'
    ]
  },
  {
    category: '考試類型',
    highSchool: ['學測、分科測驗'],
    vocational: ['學測、統測']
  },
  {
    category: '考試科目',
    highSchool: [
      '學測 (依規定採計): 國文、英文、數學、社會、自然',
      '分科 (依規定採計): 數學甲、物理、化學、生物、歷史、地理、公民'
    ],
    vocational: [
      '學測 (依規定採計): 國文、英文、數學、社會、自然',
      '統測 (共20個群別): 國文、英文、數學、專業科目(一)、專業科目(二)'
    ]
  }
];

const admissionComparison = [
  {
    category: '大學',
    highSchool: [
      '1. 特殊選材',
      '2. 繁星推薦',
      '3. 申請入學',
      '4. 考試分發'
    ],
    vocational: [
      '1. 特殊選才',
      '2. 申請入學',
      '3. 考試分發'
    ]
  },
  {
    category: '四技二專',
    highSchool: [
      '1. 特殊選材',
      '2. 四技申請入學',
      '3. 技優保送',
      '4. 技優甄審'
    ],
    vocational: [
      '1. 特殊選材',
      '2. 技職繁星',
      '3. 四技甄選',
      '4. 統測分發',
      '5. 技優保送',
      '6. 技優甄審'
    ]
  }
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-24 bg-[#047857] text-white border-y-4 border-[#022C22] overflow-hidden" aria-labelledby="comparison-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#022C22] shadow-[4px_4px_0px_0px_#022C22] mb-6 text-[#047857]"
            aria-hidden="true"
          >
            <GitCompare className="w-8 h-8 md:w-10 md:h-10 stroke-[3]" />
          </motion.div>
          <motion.h2
            id="comparison-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white sm:text-4xl mb-4"
          >
            高中 VS 高職
          </motion.h2>
          <p className="text-base sm:text-lg text-white font-bold max-w-2xl mx-auto">
            恭喜錄取！一張表帶你快速了解未來高中的學習樣貌，以及與高職的學程、升學差異！
          </p>
        </div>

        {/* 學程差異 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#065F46] p-2 rounded-xl text-white">
              <BookOpen className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-black text-white">學程差異</h3>
          </div>
          
          <div className="bg-white text-[#1E293B] rounded-3xl border-4 border-[#065F46] shadow-[6px_6px_0px_0px_#065F46] md:shadow-[12px_12px_0px_0px_#065F46] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#ECFDF5] border-b-4 border-[#065F46] font-black text-center md:text-left">
              <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] hidden md:block">學程制度</div>
              <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] bg-[#3B82F6] text-white">高中</div>
              <div className="p-4 md:p-6 bg-[#F97316] text-white">高職</div>
            </div>
            
            <div className="flex flex-col">
              {academicsComparison.map((item, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-3 ${idx !== academicsComparison.length - 1 ? 'border-b-4 border-[#065F46]' : ''}`}>
                  <div className="p-4 md:p-6 font-black bg-[#ECFDF5] border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] flex items-center justify-center md:justify-start">
                    {item.category}
                  </div>
                  <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46]">
                    <div className="md:hidden font-black text-[#3B82F6] mb-2 border-b-2 border-slate-200 pb-1">【高中】</div>
                    <ul className="space-y-2 font-bold text-sm sm:text-base text-slate-700">
                      {item.highSchool.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#3B82F6] shrink-0">▶</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="md:hidden font-black text-[#F97316] mb-2 border-b-2 border-slate-200 pb-1">【高職】</div>
                    <ul className="space-y-2 font-bold text-sm sm:text-base text-slate-700">
                      {item.vocational.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#F97316] shrink-0">▶</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 升學差異 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#065F46] p-2 rounded-xl text-white">
              <GraduationCap className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-black text-white">升學差異</h3>
          </div>
          
          <div className="bg-white text-[#1E293B] rounded-3xl border-4 border-[#065F46] shadow-[6px_6px_0px_0px_#065F46] md:shadow-[12px_12px_0px_0px_#065F46] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#ECFDF5] border-b-4 border-[#065F46] font-black text-center md:text-left">
              <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] hidden md:block">升學制度</div>
              <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] bg-[#3B82F6] text-white">高中</div>
              <div className="p-4 md:p-6 bg-[#F97316] text-white">高職</div>
            </div>
            
            <div className="flex flex-col">
              {admissionComparison.map((item, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-3 ${idx !== admissionComparison.length - 1 ? 'border-b-4 border-[#065F46]' : ''}`}>
                  <div className="p-4 md:p-6 font-black bg-[#ECFDF5] border-b-4 md:border-b-0 md:border-r-4 border-[#065F46] flex items-center justify-center md:justify-start">
                    {item.category}
                  </div>
                  <div className="p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-[#065F46]">
                    <div className="md:hidden font-black text-[#3B82F6] mb-2 border-b-2 border-slate-200 pb-1">【高中】</div>
                    <ul className="space-y-2 font-bold text-sm sm:text-base text-slate-700">
                      {item.highSchool.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#3B82F6] shrink-0 font-black mb-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="md:hidden font-black text-[#F97316] mb-2 border-b-2 border-slate-200 pb-1">【高職】</div>
                    <ul className="space-y-2 font-bold text-sm sm:text-base text-slate-700">
                      {item.vocational.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#F97316] shrink-0 font-black mb-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
