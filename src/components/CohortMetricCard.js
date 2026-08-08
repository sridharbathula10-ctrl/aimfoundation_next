export default function CohortMetricCard() {
  return <div className="programme-metric rounded-[10px] border border-[#decde6] bg-white p-5 shadow-[0_10px_22px_#8c6b9b18] transition duration-500 group-hover:scale-[1.02]">
    <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#775d7b]"><span>Study cohort</span><span className="h-2 w-2 rounded-full bg-[#9b7ad0] motion-safe:animate-pulse" /></div>
    <p className="metric-figure mt-6 font-serif text-[50px] leading-none tracking-[-.07em]">90,000 <span className="font-mono text-[10px] uppercase tracking-[.12em]">people</span></p>
    <div className="mt-6 grid grid-cols-9 gap-1.5">{Array.from({ length: 9 }, (_, index) => <span className="metric-bar h-6 bg-[#9b7ad0]" key={index} />)}</div>
    <div className="mt-6 flex justify-between border-t border-[#ece4ed] pt-4 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#775d7b]"><span>9 recruitment clusters</span><span>10K each</span></div>
  </div>;
}
