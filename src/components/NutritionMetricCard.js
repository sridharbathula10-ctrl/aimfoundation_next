export default function NutritionMetricCard() {
  return <div className="programme-metric h-[230px] rounded-[10px] p-5">
    <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#221A30]"><span>MDD-W</span><span className="rounded-[3px] bg-[#F2ECF7] px-3 py-1.5 text-[9px]">Daily threshold</span></div>
    <div className="mt-7 flex items-end justify-between"><p className="metric-figure font-sans text-[44px] font-semibold leading-none tracking-[-.04em]">5<span className="ml-1 text-[44px]">/10</span></p><div className="grid grid-cols-5 gap-1.5">{Array.from({ length: 10 }, (_, index) => <span className={`metric-bar h-5 w-4 ${index < 5 ? "bg-[#43286E]" : "bg-[#FFFFFF]"}`} key={index} />)}</div></div>
    <div className="mt-6 flex justify-between border-t border-[#E4DEEC] pt-4 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#221A30]"><span>Minimum dietary diversity for women</span></div>
  </div>;
}
