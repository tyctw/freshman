import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Copy, FileWarning, RefreshCcw, Share2, ShieldAlert } from 'lucide-react';

const reasons = [
  "我昨天扶老奶奶過馬路，結果老奶奶走太慢，我們才剛走到對面就天亮了。",
  "我的制服被外星人吸走拿去做研究了，我找了一小時才在鄰居家的屋頂找到。",
  "我早上出門的時候，一陣妖風把我吹回了床上，而且還幫我蓋好了被子。",
  "我家樓下的早餐店阿姨今天多送我一顆荷包蛋，基於禮貌我必須細細品嚐。",
  "我走在路上的時候，突然領悟了宇宙的真理，在原地思考了半小時。",
  "我的鬧鐘對我產生了感情，為了讓我多睡一點，它自己靜音了。",
  "一隻黑貓擋住了我的去路，我為了不帶來厄運，繞了遠路走。",
  "我今天早上照鏡子的時候，被自己的帥氣/美貌震懾到了，久久無法移開視線。",
  "公車司機開太快，一不小心就開過站了，我只好從隔壁縣市走回來。",
  "我家的狗把我的作業吃了，我為了教訓牠，花了一點時間。",
  "我出門的時候，我家樓下的野狗突然用後腳站起來跟我說話，我嚇到現在才回神。",
  "我的早餐因為太好吃了，我在吃的時候感動到痛哭流涕，花了一點時間平復情緒。",
  "我今天被捲入了一場時空裂縫，剛好掉到學校門口，雖然遲到了但至少我沒死。",
  "我為了拯救一隻被困在樹上的小貓，不小心學會了輕功，飛了幾圈才找到學校的方向。",
  "我昨晚在夢裡已經把今天的課都上完了，所以早上我的大腦拒絕讓我起床。",
  "出門的時候發現鞋帶打結了，解開的時候不小心解開了封印千年的古老魔法。",
  "我家的馬桶突然壞了，我必須用我的氣場鎮壓住它，不然我家會被水淹沒。",
  "我走在路上的時候，有一群鴿子擋住我的去路，牠們似乎在進行某種神秘儀式。"
];

const normalReasons = [
  "公車/火車誤點",
  "身體不舒服，去看了醫生",
  "路上遇到車禍塞車",
  "睡過頭（誠實為上）",
  "腳踏車/機車半路拋錨",
  "拉肚子，在廁所待比較久",
  "家裡有急事需要處理",
  "忘記帶重要東西回家拿",
  "大眾運輸工具發生事故停駛"
];

export default function ExcuseGeneratorPage() {
  const [excuse, setExcuse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<'crazy' | 'normal'>('crazy');

  const generateExcuse = () => {
    setIsGenerating(true);
    setExcuse("");
    
    setTimeout(() => {
      const list = mode === 'crazy' ? reasons : normalReasons;
      const randomExcuse = list[Math.floor(Math.random() * list.length)];
      setExcuse(randomExcuse);
      setIsGenerating(false);
      setCopied(false);
    }, 600);
  };

  const copyToClipboard = async () => {
    if (!excuse) return;
    try {
      await navigator.clipboard.writeText(excuse);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#1E293B] mb-4 flex items-center justify-center gap-3">
            <FileWarning className="w-10 h-10 text-[#EF4444]" />
            遲到理由產生器
          </h1>
          <p className="text-lg text-slate-600 font-bold">
            教官問你為什麼遲到？別慌，這裡有最完美的解釋。<br/>（※ 請謹慎使用，後果自負）
          </p>
        </div>

        <div className="bg-white border-4 border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#1E293B] relative">
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setMode('crazy')}
              className={`px-6 py-2 rounded-full font-bold text-sm border-2 transition-all ${mode === 'crazy' ? 'bg-[#EF4444] text-white border-[#EF4444]' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
            >
              瞎扯模式
            </button>
            <button
              onClick={() => setMode('normal')}
              className={`px-6 py-2 rounded-full font-bold text-sm border-2 transition-all ${mode === 'normal' ? 'bg-[#10B981] text-white border-[#10B981]' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
            >
              打安全牌
            </button>
          </div>

          <div className="bg-[#FFFBEB] border-4 border-[#FBBF24] rounded-2xl p-6 min-h-[150px] flex items-center justify-center text-center mb-8 relative">
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-[#78350F] font-bold text-xl"
                >
                  <RefreshCcw className="w-6 h-6 animate-spin" />
                  腦力激盪中...
                </motion.div>
              ) : excuse ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-[#1E293B] leading-relaxed"
                >
                  「{excuse}」
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-400 font-bold text-lg flex items-center gap-2"
                >
                  點擊下方按鈕獲取靈感
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={generateExcuse}
              className="flex-[2] bg-[#1E293B] text-white px-6 py-4 rounded-full font-black text-xl shadow-[4px_4px_0px_0px_#F59E0B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#F59E0B] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-6 h-6" />
              產生理由
            </button>
            
            {excuse && (
              <button
                onClick={copyToClipboard}
                className="flex-[1] bg-white border-4 border-[#1E293B] text-[#1E293B] px-6 py-4 rounded-full font-black text-lg shadow-[4px_4px_0px_0px_#1E293B] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Share2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? '已複製' : '複製'}
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 bg-red-50 text-red-600 p-4 rounded-2xl border-2 border-red-200">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-bold leading-relaxed">
            免責聲明：使用本產生器之理由導致被記警告、小過、大過或留校察看者，本網站概不負責。教官的心情難以預測，請自行評估風險。
          </p>
        </div>
      </div>
    </div>
  );
}
