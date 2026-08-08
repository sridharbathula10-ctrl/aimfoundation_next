export default function ProgrammeTags({ items, featured = false, twoLine = false, twoColumn = false }) {
  if (featured) return <div className={`grid gap-3 ${twoColumn ? "sm:grid-cols-2" : ""}`}>{items.map((tag) => {
    const [sdg, title] = tag.split(" · ");

    return <div className={`group rounded-xl border border-[#bda8c7] bg-[#fbf8fc] px-4 py-3.5 shadow-[0_7px_18px_#51395b0d] transition duration-300 hover:-translate-y-1 hover:border-[#8d245b] hover:shadow-[0_12px_24px_#8d245b1a] ${twoLine ? "flex flex-col items-start gap-1" : "flex items-center gap-4"}`} key={tag}>
      <strong className="shrink-0 rounded-full bg-[#50308d] px-3 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[.08em] !text-white shadow-[0_3px_8px_#50308d38] md:text-[13px]">{sdg}</strong>
      {!twoLine && <span className="h-8 w-px shrink-0 bg-[#d8cade] group-hover:bg-[#b96b93]" aria-hidden="true" />}
      <span className="text-[15px] font-semibold leading-[1.3] tracking-[-.015em] text-[#372541] md:text-[16px]">{title}</span>
    </div>;
  })}</div>;

  return <div className="flex flex-wrap gap-2">{items.map((tag) => <span className="rounded-full border border-[#806a8d] px-3 py-2.5 font-mono text-[12px] font-semibold leading-[1.35] tracking-[.02em] text-[#372541] transition duration-300 hover:-translate-y-1 hover:border-[#6f1748] hover:bg-[#f0e4eb] hover:text-[#4c1132]" key={tag}>{tag}</span>)}</div>;
}
