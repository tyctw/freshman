import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dices, RefreshCcw, Share2, Sparkles, Star } from 'lucide-react';

type Rarity = 'UR' | 'SSR' | 'SR' | 'R' | 'N';

interface Classmate {
  id: string;
  name: string;
  rarity: Rarity;
  desc: string;
  quote: string;
  color: string;
}

const classmates: Classmate[] = [
  { id: 'ur1', name: '假裝沒讀書的學霸', rarity: 'UR', desc: '考前哀嚎自己都沒看，發考卷時卻總是接近滿分。', quote: '「我昨天真的都在打傳說啦，不知道為什麼猜這麼準...」', color: 'from-fuchsia-500 to-purple-600' },
  { id: 'ur2', name: '提醒老師收作業的班長', rarity: 'UR', desc: '全班的公敵，正義的化身。總是能在老師快忘記時大聲提醒。', quote: '「老師！你還沒收昨天的小考考卷！」', color: 'from-rose-500 to-red-600' },
  { id: 'ssr1', name: '福利社百米跑者', rarity: 'SSR', desc: '第四節下課鐘聲一響，瞬間消失在教室，跑速媲美奧運選手。', quote: '「阿姨！我要一個雞排便當加奶茶！」', color: 'from-amber-400 to-orange-500' },
  { id: 'ssr2', name: '下課預言家', rarity: 'SSR', desc: '內建生理時鐘，總能在下課前10秒開始發出拉拉鍊、收書包的聲音。', quote: '（拉鍊聲）（拉椅子聲）（眼神充滿殺氣）', color: 'from-amber-400 to-orange-500' },
  { id: 'sr1', name: '防曬滿級大師', rarity: 'SR', desc: '體育課永遠躲在樹下或陰影處，撐傘是基本，外套是標配。', quote: '「好熱喔，我可以坐在這裡幫你們顧水壺嗎？」', color: 'from-blue-400 to-indigo-500' },
  { id: 'sr2', name: '行動電源供應商', rarity: 'SR', desc: '包包裡隨時備有3顆行動電源跟各種類型的充電線。', quote: '「你要Type-C還是Lightning？我這裡都有。」', color: 'from-blue-400 to-indigo-500' },
  { id: 'r1', name: '立可帶殺手', rarity: 'R', desc: '常常借別人的立可帶，還回來的時候不是斷帶就是用完。', quote: '「欸你的立可帶好像本來就壞了耶？」', color: 'from-emerald-400 to-teal-500' },
  { id: 'r2', name: '衛生紙乞丐', rarity: 'R', desc: '三年來從來沒自己買過衛生紙，靠著四處化緣度日。', quote: '「欸你有衛生紙嗎？借我抽兩張！」', color: 'from-emerald-400 to-teal-500' },
  { id: 'n1', name: '永遠在睡覺的人', rarity: 'N', desc: '早自習睡、國文課睡、連下課都在睡。不知道晚上都在幹嘛。', quote: '「（均勻的呼吸聲）」', color: 'from-slate-400 to-slate-500' },
  { id: 'n2', name: '背景路人甲', rarity: 'N', desc: '安靜上課，安靜下課，常常被老師點名時找不到人。', quote: '「......有，我坐在這裡。」', color: 'from-slate-400 to-slate-500' }
];

const rarityWeights: Record<Rarity, number> = {
  UR: 2,
  SSR: 8,
  SR: 20,
  R: 30,
  N: 40
};

export default function ClassmateGachaPage() {
  const [isPulling, setIsPulling] = useState(false);
  const [result, setResult] = useState<Classmate | null>(null);
  const [copied, setCopied] = useState(false);

  const pullGacha = () => {
    if (isPulling) return;
    setIsPulling(true);
    setResult(null);
    setCopied(false);

    setTimeout(() => {
      const rand = Math.random() * 100;
      let cumulative = 0;
      let selectedRarity: Rarity = 'N';

      for (const [rarity, weight] of Object.entries(rarityWeights)) {
        cumulative += weight;
        if (rand <= cumulative) {
          selectedRarity = rarity as Rarity;
          break;
        }
      }

      const availableClassmates = classmates.filter(c => c.rarity === selectedRarity);
      const selectedClassmate = availableClassmates[Math.floor(Math.random() * availableClassmates.length)];
      
      setResult(selectedClassmate);
      setIsPulling(false);
    }, 1500);
  };

  const shareResult = async () => {
    if (!result) return;
    const text = `我在「新高一導航站」抽到了 ${result.rarity} 級同學：【${result.name}】！\n快來測測你會抽到什麼奇葩同學吧！\nhttps://tyctw.github.io/freshman/#/classmate-gacha`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: '高中奇葩同學轉蛋機',
          text: text,
          url: 'https://tyctw.github.io/freshman/#/classmate-gacha'
        });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to share:', err);
    }
  };

  const getRarityDisplay = (rarity: Rarity) => {
    switch(rarity) {
      case 'UR': return <div className="flex gap-1 justify-center">{[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300" />)}</div>;
      case 'SSR': return <div className="flex gap-1 justify-center">{[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-300 text-orange-300" />)}</div>;
      case 'SR': return <div className="flex gap-1 justify-center">{[...Array(3)].map((_, i) => <Star key={i} className="w-4 h-4 fill-purple-300 text-purple-300" />)}</div>;
      case 'R': return <div className="flex gap-1 justify-center">{[...Array(2)].map((_, i) => <Star key={i} className="w-4 h-4 fill-blue-300 text-blue-300" />)}</div>;
      case 'N': return <div className="flex gap-1 justify-center"><Star className="w-4 h-4 fill-slate-300 text-slate-300" /></div>;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#1E293B] mb-4 flex items-center justify-center gap-3">
            <Dices className="w-10 h-10 text-[#F59E0B]" />
            奇葩同學轉蛋機
          </h1>
          <p className="text-lg text-slate-600 font-bold">
            高中三年，你會遇到哪些神仙隊友（或豬隊友）？<br/>點擊轉蛋，抽出你的命定同學！
          </p>
        </div>

        <div className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#1E293B] relative overflow-hidden text-center min-h-[450px] flex flex-col items-center justify-center">
          
          {!isPulling && !result && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-48 h-48 mb-8 bg-slate-100 border-4 border-slate-300 rounded-full flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjY2JkNWUxIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50 rounded-full"></div>
                <Dices className="w-20 h-20 text-slate-300" />
              </div>
              <button
                onClick={pullGacha}
                className="bg-[#F43F5E] text-white px-8 py-4 rounded-full font-black text-2xl border-4 border-[#9F1239] shadow-[0px_6px_0px_0px_#9F1239] hover:translate-y-1 hover:shadow-[0px_2px_0px_0px_#9F1239] active:translate-y-2 active:shadow-none transition-all flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                單抽入魂！
              </button>
            </motion.div>
          )}

          {isPulling && (
            <motion.div
              key="pulling"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-48 h-48 bg-gradient-to-tr from-yellow-300 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)] border-4 border-white animate-pulse">
                <Dices className="w-24 h-24 text-white animate-spin" />
              </div>
              <h3 className="mt-8 text-2xl font-black text-[#1E293B] animate-bounce">轉蛋祈願中...</h3>
            </motion.div>
          )}

          {result && !isPulling && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-full"
            >
              <div className="mb-2">
                {getRarityDisplay(result.rarity)}
              </div>
              <div className={`text-3xl sm:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r ${result.color}`}>
                {result.rarity}
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-[#1E293B] mb-4">
                {result.name}
              </h2>
              
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-6 mb-6">
                <p className="text-lg font-bold text-slate-700 leading-relaxed mb-4">
                  {result.desc}
                </p>
                <p className="text-base font-medium text-slate-500 italic bg-white p-3 rounded-xl border border-slate-200">
                  {result.quote}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={pullGacha}
                  className="flex-1 bg-white border-4 border-[#1E293B] text-[#1E293B] px-6 py-3 rounded-full font-black shadow-[4px_4px_0px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E293B] transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5 stroke-[3]" />
                  再抽一次
                </button>
                <button
                  onClick={shareResult}
                  className="flex-1 bg-[#1E293B] border-4 border-[#1E293B] text-white px-6 py-3 rounded-full font-black shadow-[4px_4px_0px_0px_#F59E0B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#F59E0B] transition-all flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5 stroke-[3]" />
                  {copied ? '已複製連結！' : '炫耀結果'}
                </button>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="mt-8 text-center text-sm font-bold text-slate-500">
          * 轉蛋機率說明：UR (2%) / SSR (8%) / SR (20%) / R (30%) / N (40%)
        </div>
      </div>
    </div>
  );
}
