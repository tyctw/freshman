export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-12 border-t-8 border-[#FBBF24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="w-8 h-8 bg-[#F43F5E] rounded-full flex items-center justify-center text-white font-black text-sm italic">
              新
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              新高一導航站
            </span>
          </div>
          <p className="text-slate-300 font-bold text-sm">
            本站由「會考落點分析系統」監製
            <br />給所有即將邁入人生新階段的女孩、男孩們。未來無限可能。
          </p>
        </div>
        
        <div className="text-slate-300 font-bold text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} 會考落點分析系統所屬網站<br />準備好展翅高飛。
        </div>
      </div>
    </footer>
  );
}
