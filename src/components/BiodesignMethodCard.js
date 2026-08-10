const stages = [
  { number: "1", title: "Identify", text: "Real clinical needs, observed in practice" },
  { number: "2", title: "Invent", text: "Solutions designed with clinicians and engineers" },
  { number: "3", title: "Implement", text: "Deployed in Indian public health settings" },
];

export default function BiodesignMethodCard() {
  return <div className="biodesign-method-card relative overflow-hidden rounded-[24px] bg-white p-6 text-[#221A30] md:p-8">
    <div className="flex items-center justify-between gap-5"><p className="biodesign-method-card__eyebrow font-mono font-semibold uppercase tracking-[.17em] text-black">The Biodesign Method</p><span className="h-px w-10 bg-black/30" /></div>
    <p className="mt-4 max-w-[330px] font-[family-name:var(--font-playfair)] text-[22px] leading-[1.05] text-black">From a real clinical need to impact at population scale.</p>
    <div className="relative mt-8 grid grid-cols-3 gap-2 before:absolute before:left-[16%] before:right-[16%] before:top-5 before:h-px before:bg-[#E4DEEC]">{stages.map((stage) => <div className="relative min-w-0 text-center" key={stage.number}><span className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#43286E] font-[family-name:var(--font-playfair)] text-[22px] leading-none text-white">{stage.number}</span><h3 className="mt-4 text-[14px] font-semibold tracking-[-.02em] text-[#221A30]">{stage.title}</h3><p className="mx-auto mt-1.5 max-w-[130px] text-[11px] leading-[1.48] text-[#221A30]">{stage.text}</p></div>)}</div>
    <div className="mt-8 grid gap-3 border-t border-[#E4DEEC] pt-5 sm:grid-cols-2"><div className="biodesign-method-card__info rounded-xl p-3.5"><p className="font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-[#221A30]">Facility</p><p className="mt-1.5 text-[14px] font-medium text-[#221A30]">8,000 sq. ft. committed</p></div><div className="biodesign-method-card__info rounded-xl p-3.5"><p className="font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-[#221A30]">Location</p><p className="mt-1.5 text-[14px] font-medium leading-5 text-[#221A30]">Ratan Tata Innovation Hub, Amaravati</p></div></div>
  </div>;
}
