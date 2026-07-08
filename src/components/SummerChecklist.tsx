import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import NextSteps from './NextSteps';

const tasks = [
  {
    id: 1,
    title: '好好放空，睡到自然醒',
    category: '身心調適',
    desc: '會考真的辛苦了！在開始任何計畫前，給自己至少一到兩週的「無負擔耍廢期」，把消耗的精力補回來。'
  },
  {
    id: 2,
    title: '套量與購買新制服',
    category: '入學準備',
    desc: '記得注意學校公告的制服套量時間，可以先跟學長姐打聽哪些品項比較實用（例如運動服可能比制服常穿）。'
  },
  {
    id: 3,
    title: '探索自己的興趣與目標',
    category: '自我成長',
    desc: '高中要面臨選組與選修，趁著漫長的暑假，多看一些不同領域的書、YouTube 影片或參加營隊，發掘自己的熱情。'
  },
  {
    id: 4,
    title: '稍微預習高中英數（選做）',
    category: '課業準備',
    desc: '如果不想開學落差太大，可以稍微背一些高中單字，或者了解一下高中數學的銜接教材，但不要給自己太大壓力。'
  },
  {
    id: 5,
    title: '學一項一直想學的技能',
    category: '自我成長',
    desc: '剪輯影片、寫一點程式、學吉他、或者把一份食譜煮得很好吃。這些都會成為你高中的養分。'
  },
  {
    id: 6,
    title: '規劃通勤與住宿',
    category: '入學準備',
    desc: '確認上學的交通路線與接駁工具，或是需要住宿租屋。'
  },
  {
    id: 7,
    title: '認識校園周邊',
    category: '入學準備',
    desc: '實際走訪認識校園附近環境與生活機能，以備不時之需。'
  },
  {
    id: 8,
    title: '詳閱學校網站與規範',
    category: '入學準備',
    desc: '點閱學校網站，除了了解學校生活作息、例行活動，掌握學校公布的重要訊息、有哪些資源可以運用之外，也要詳細閱讀學校相關規範與規定，才不會一進學校就誤踩地雷。'
  }
];

export default function SummerChecklist() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTask = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  return (
    <section id="checklist" className="py-24 bg-[#FFFBEB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#1E293B] sm:text-4xl mb-4"
          >
            高一新生的暑假任務清單
          </motion.h2>
          <p className="text-base sm:text-lg text-slate-700 font-bold max-w-2xl mx-auto">
            不用急著把行事曆排滿，挑幾件重要的事情做就好。點擊完成你的規劃！
          </p>
        </div>

        <div className="space-y-6">
          {tasks.map((task, index) => {
            const isDone = completed.includes(task.id);
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleTask(task.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTask(task.id);
                  }
                }}
                role="checkbox"
                aria-checked={isDone}
                tabIndex={0}
                className={`p-5 sm:p-6 rounded-3xl cursor-pointer transition-all border-4 mx-2 sm:mx-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFBEB] ${
                  isDone 
                    ? 'bg-[#10B981] border-[#065F46] text-white shadow-[4px_4px_0px_0px_#065F46] md:shadow-[6px_6px_0px_0px_#065F46] translate-y-1' 
                    : 'bg-white border-[#1E293B] text-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] md:shadow-[6px_6px_0px_0px_#1E293B] md:hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`mt-1 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 flex items-center justify-center transition-colors ${
                    isDone ? 'border-white bg-[#065F46]' : 'border-[#1E293B]'
                  }`} aria-hidden="true">
                    {isDone && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <h3 className={`text-lg sm:text-xl font-black ${isDone ? 'text-white' : 'text-[#1E293B]'}`}>
                        {task.title}
                      </h3>
                      <span className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 font-bold rounded-full border-2 ${
                        isDone ? 'bg-[#065F46] text-white border-white/20' : 'bg-[#E2E8F0] text-slate-800 border-[#CBD5E1]'
                      }`}>
                        {task.category}
                      </span>
                    </div>
                    <p className={`font-bold leading-relaxed text-sm sm:text-base ${isDone ? 'text-white/90' : 'text-slate-700'}`}>
                      {task.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-5 sm:p-6 mx-2 sm:mx-0 bg-[#A855F7] rounded-3xl border-4 border-[#581C87] shadow-[6px_6px_0px_0px_#581C87] md:shadow-[8px_8px_0px_0px_#581C87] flex flex-col md:flex-row items-start gap-4 text-white"
        >
          <div className="bg-white text-[#A855F7] p-2 rounded-xl border-4 border-current shrink-0">
             <Info className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
          </div>
          <p className="font-bold leading-relaxed text-sm sm:text-base">
            <strong className="block text-xl mb-2 font-black">✨ 致家長的一段話：</strong>
            孩子剛結束高壓的國三生活。給他們一點喘息的空間與選擇權，讓他們為自己安排暑假，這也是「自主負責」的最好練習。高中生活，需要家長從「指導者」轉變成「陪伴者」。
          </p>
        </motion.div>

        <NextSteps steps={[
          {
            title: '高一時間管理計算機',
            desc: '看看你一週剩下多少自由時間？',
            link: '/time-calculator',
            color: 'text-[#9333EA]',
            borderColor: 'border-[#581C87]',
            icon: '⏱️'
          },
          {
            title: '高中 VS 高職 差異比較',
            desc: '到底哪裡不一樣？學習模式大解析',
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
