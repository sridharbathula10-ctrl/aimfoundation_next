export default function NutritionMetricCard() {
  return <div className="programme-metric rounded-[10px] border border-[#decde6] bg-white p-5 shadow-[0_10px_22px_#8c6b9b18] transition duration-500 group-hover:scale-[1.02]">
    <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#775d7b]"><span>MDD-W</span><span className="rounded-[3px] bg-[#faf5fb] px-3 py-1.5 text-[9px]">Daily threshold</span></div>
    <div className="mt-7 flex items-end justify-between"><p className="metric-figure font-serif text-[52px] leading-none tracking-[-.07em]">5<span className="ml-1 text-[19px]">/10</span></p><div className="grid grid-cols-5 gap-1.5">{Array.from({ length: 10 }, (_, index) => <span className={`metric-bar h-5 w-4 ${index < 5 ? "bg-[#9b7ad0]" : "bg-[#eee9f1]"}`} key={index} />)}</div></div>
    <div className="mt-6 flex justify-between border-t border-[#ece4ed] pt-4 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#775d7b]"><span>Minimum dietary diversity for women</span></div>
  </div>;
}
