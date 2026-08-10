const sdgColours = {
  "SDG 2": "#DDA63A",
  "SDG 3": "#4C9F38",
  "SDG 5": "#FF3A21",
  "SDG 9": "#FD6925",
  "SDG 17": "#19486A",
};

export default function ProgrammeTags({ items, featured = false, twoLine = false, twoColumn = false }) {
  if (featured) return <div className={`grid gap-3 ${twoColumn ? "sm:grid-cols-2" : ""}`}>{items.map((tag) => {
    const [sdg, title] = tag.split(" · ");

    return <div className={`group rounded-xl border border-[#bda8c7] bg-[#fbf8fc] px-4 py-3.5 shadow-[0_7px_18px_#51395b0d] transition duration-300 hover:-translate-y-1 hover:border-[#8d245b] hover:shadow-[0_12px_24px_#8d245b1a] ${twoLine ? "flex flex-col items-start gap-1" : "flex items-center gap-4"}`} key={tag}>
      <strong className="sdg-badge shrink-0 rounded-full px-3 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[.08em] !text-white shadow-[0_3px_8px_#51395b38] md:text-[13px]" style={{ backgroundColor: sdgColours[sdg] }}>{sdg}</strong>
      {!twoLine && <span className="h-8 w-px shrink-0 bg-[#d8cade] group-hover:bg-[#b96b93]" aria-hidden="true" />}
      <span className="text-[15px] font-semibold leading-[1.3] tracking-[-.015em] text-[#372541] md:text-[16px]">{title}</span>
    </div>;
  })}</div>;

  return <div className="flex flex-wrap gap-2">{items.map((tag) => {
    const [sdg, title] = tag.split(" · ");
    return <span className="inline-flex items-center gap-2 rounded-full border border-[#E4DEEC] bg-white px-2 py-1.5 font-mono text-[12px] font-semibold leading-[1.35] tracking-[.02em] text-[#372541] transition duration-300 hover:-translate-y-1 hover:border-[#6B4A9C]" key={tag}><strong className="sdg-badge rounded-full px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[.08em] !text-white" style={{ backgroundColor: sdgColours[sdg] }}>{sdg}</strong><span>{title}</span></span>;
  })}</div>;
}
