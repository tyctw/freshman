import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCcw, ArrowRight, Medal, AlertTriangle, Gift } from 'lucide-react';

type Trait = 'study' | 'sleep' | 'food' | 'social' | 'club';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    trait: Trait;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "下課鐘聲一響，你的反射動作是？",
    options: [
      { text: "立刻衝向福利社搶每日限量麵包 🏃‍♂️", trait: 'food' },
      { text: "瞬間趴平，進入深層睡眠模式 💤", trait: 'sleep' },
      { text: "拿出下一節課的課本開始預習 📚", trait: 'study' },
      { text: "衝去別班找國中同學或朋友聊天 🗣️", trait: 'social' },
    ]
  },
  {
    id: 2,
    question: "發現明天要考超難的數學，你的反應是？",
    options: [
      { text: "拜託學霸同學教我，順便蹭個筆記 🥺", trait: 'social' },
      { text: "算了吧，早點睡比較實在，夢裡什麼都有 🛌", trait: 'sleep' },
      { text: "挑燈夜戰，狂刷題本到天亮 ✍️", trait: 'study' },
      { text: "先去買個鹽酥雞當宵夜壓壓驚 🍗", trait: 'food' },
    ]
  },
  {
    id: 3,
    question: "迎新社團博覽會，你會怎麼逛？",
    options: [
      { text: "已經鎖定熱音/吉他社，準備大展身手 🎸", trait: 'club' },
      { text: "只找有提供免費零食跟飲料的攤位 🍕", trait: 'food' },
      { text: "直奔能豐富學習歷程的學術社團 🔬", trait: 'study' },
      { text: "拿完傳單就回家睡覺，好累喔 🥱", trait: 'sleep' },
    ]
  },
  {
    id: 4,
    question: "週末沒有安排的時候，你通常都在...",
    options: [
      { text: "在社辦跟幹部混一整天，社團是我家 🏠", trait: 'club' },
      { text: "跟朋友去西門町或信義區逛街看電影 🍿", trait: 'social' },
      { text: "去圖書館或咖啡廳讀書，充實自我 ☕", trait: 'study' },
      { text: "躺在床上滑短影音一整天，與床鋪融為一體 📱", trait: 'sleep' },
    ]
  }
];

const resultsData: Record<Trait, { title: string, subtitle: string, desc: string, luckyItem: string, avoid: string, color: string, emoji: string }> = {
  study: {
    title: '圖書館地縛靈',
    subtitle: '學霸是你？還是只想吹冷氣？',
    desc: '書本是你的摯友，學習歷程是你的畫布。你不是在圖書館，就是在前往圖書館的路上。老師眼中的乖寶寶，同學眼中的救世主（考前限定）。',
    luckyItem: '四色筆與螢光筆',
    avoid: '誘惑太多的熱舞社',
    color: 'border-blue-600 text-blue-600 bg-blue-50',
    emoji: '🤓'
  },
  sleep: {
    title: '睡神降臨',
    subtitle: '把學校當成高級旅館',
    desc: '在哪都能睡，站著也能睡。早自習是你最神聖的補眠時間，上課鐘聲對你來說只是另一首催眠曲。你的抽屜裡可能藏著一顆午睡枕。',
    luckyItem: '符合人體工學的午睡枕',
    avoid: '第一節的體育課',
    color: 'border-indigo-600 text-indigo-600 bg-indigo-50',
    emoji: '😴'
  },
  food: {
    title: '福利社 VIP',
    subtitle: '上學的動力來自於午餐',
    desc: '你對學校附近的美食地圖暸若指掌，福利社阿姨都認識你。同學總是問你「等下要吃什麼？」，而你總是有完美的答案。',
    luckyItem: '裝滿零錢的錢包',
    avoid: '忘記帶錢包的那一天',
    color: 'border-orange-600 text-orange-600 bg-orange-50',
    emoji: '🤤'
  },
  social: {
    title: '公關交際花',
    subtitle: '整棟樓都是你的朋友',
    desc: '認識的人比老師還多，走到哪都能跟人打招呼。班上的氣氛製造機，八卦的集散地。沒有你，班上就像失去靈魂的空殼。',
    luckyItem: '潤喉糖與行動電源',
    avoid: '手機沒電',
    color: 'border-pink-600 text-pink-600 bg-pink-50',
    emoji: '😎'
  },
  club: {
    title: '社團狂熱份子',
    subtitle: '上課是為了等下課去社辦',
    desc: '你的青春全部燃燒在社團裡。段考前一週還在練舞或開會，雖然成績可能岌岌可危，但你獲得了滿滿的回憶與革命情感。',
    luckyItem: '社團公假單',
    avoid: '段考前一週的晚自習',
    color: 'border-emerald-600 text-emerald-600 bg-emerald-50',
    emoji: '🔥'
  }
};

export default function PersonaQuizPage() {
  const [step, setStep] = useState(0); // 0: intro, 1-4: questions, 5: result
  const [scores, setScores] = useState<Record<Trait, number>>({
    study: 0,
    sleep: 0,
    food: 0,
    social: 0,
    club: 0
  });
  const [finalResult, setFinalResult] = useState<Trait | null>(null);

  const handleOptionClick = (trait: Trait) => {
    const newScores = { ...scores, [trait]: scores[trait] + 1 };
    setScores(newScores);
    
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      const maxTrait = Object.keys(newScores).reduce((a, b) => newScores[a as Trait] > newScores[b as Trait] ? a : b) as Trait;
      setFinalResult(maxTrait);
      setStep(questions.length + 1);
    }
  };

  const resetQuiz = () => {
    setScores({ study: 0, sleep: 0, food: 0, social: 0, club: 0 });
    setFinalResult(null);
    setStep(0);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white border-4 border-[#1E293B] p-8 sm:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#1E293B] text-center"
            >
              <div className="text-6xl mb-6">🔮</div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#1E293B] mb-4">
                高中生屬性鑑定
              </h1>
              <p className="text-lg text-slate-600 mb-8 font-bold leading-relaxed max-w-lg mx-auto">
                你未來的高中生活會是什麼樣子？是稱霸學業、叱吒社團，還是成為福利社的傳說？只要 4 題，測出你隱藏的高中生潛力！
              </p>
              <button
                onClick={() => setStep(1)}
                className="bg-[#F59E0B] text-[#1E293B] px-8 py-4 rounded-full font-black text-xl border-4 border-[#1E293B] shadow-[4px_4px_0px_0px_#1E293B] hover:translate-y-1 hover:shadow-none active:translate-y-2 transition-all inline-flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6 stroke-[3]" />
                開始鑑定
              </button>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white border-4 border-[#1E293B] p-6 sm:p-10 rounded-3xl shadow-[8px_8px_0px_0px_#1E293B]"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                  <span>Question {step}</span>
                  <span>{step} / {questions.length}</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full border-2 border-[#1E293B] overflow-hidden">
                  <div 
                    className="h-full bg-[#F43F5E] transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1E293B] mb-8 leading-snug">
                {questions[step - 1].question}
              </h2>

              <div className="space-y-4">
                {questions[step - 1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.trait)}
                    className="w-full text-left p-4 sm:p-6 rounded-2xl border-4 border-slate-200 hover:border-[#1E293B] hover:bg-[#FFFBEB] hover:-translate-y-1 transition-all group font-bold text-slate-700 hover:text-[#1E293B] shadow-sm hover:shadow-[4px_4px_0px_0px_#1E293B] flex items-center justify-between"
                  >
                    <span className="text-lg">{option.text}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step > questions.length && finalResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border-4 border-[#1E293B] p-8 sm:p-12 rounded-3xl shadow-[8px_8px_0px_0px_#1E293B] text-center"
            >
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                鑑定結果
              </div>
              <div className="text-7xl mb-6">{resultsData[finalResult].emoji}</div>
              <h2 className="text-4xl sm:text-5xl font-black text-[#1E293B] mb-2">
                {resultsData[finalResult].title}
              </h2>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FBBF24] border-2 border-[#1E293B] font-bold text-[#78350F] text-sm mb-8">
                {resultsData[finalResult].subtitle}
              </div>

              <p className="text-lg text-slate-700 font-bold leading-relaxed mb-10 max-w-lg mx-auto">
                {resultsData[finalResult].desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                <div className={`p-4 border-4 rounded-2xl ${resultsData[finalResult].color} bg-opacity-20`}>
                  <div className="flex items-center gap-2 mb-2 font-black">
                    <Gift className="w-5 h-5" /> 幸運開運物
                  </div>
                  <div className="font-bold">{resultsData[finalResult].luckyItem}</div>
                </div>
                <div className="p-4 border-4 border-slate-200 bg-slate-50 rounded-2xl text-slate-600">
                  <div className="flex items-center gap-2 mb-2 font-black text-slate-800">
                    <AlertTriangle className="w-5 h-5" /> 避雷針警告
                  </div>
                  <div className="font-bold">{resultsData[finalResult].avoid}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto bg-white text-[#1E293B] px-6 py-3 rounded-full font-bold text-lg border-4 border-[#1E293B] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1E293B] transition-all inline-flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5 stroke-[3]" />
                  重新鑑定
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
