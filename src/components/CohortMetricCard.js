export default function CohortMetricCard() {
  return <div className="programme-metric h-[230px] rounded-[10px] p-5">
    <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#221A30]"><span>Study cohort</span><span className="h-2 w-2 rounded-full bg-[#B9A3D6] motion-safe:animate-pulse" /></div>
    <p className="metric-figure mt-6 font-sans text-[44px] font-semibold leading-none tracking-[-.04em]">90,000 <span className="font-sans text-[10px] uppercase tracking-[.12em]">people</span></p>
    <div className="mt-6 grid grid-cols-9 gap-1.5">{Array.from({ length: 9 }, (_, index) => <span className="metric-bar h-6 bg-[#43286E]" key={index} />)}</div>
    <div className="mt-6 flex justify-between border-t border-[#E4DEEC] pt-4 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-[#221A30]"><span>9 recruitment clusters</span><span>10K each</span></div>
  </div>;
}
