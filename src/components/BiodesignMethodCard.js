const stages = [
  { number: "1", title: "Identify", text: "Real clinical needs, observed in practice" },
  { number: "2", title: "Invent", text: "Solutions designed with clinicians and engineers" },
  { number: "3", title: "Implement", text: "Deployed in Indian public health settings" },
];

export default function BiodesignMethodCard() {
  return <div className="biodesign-method-card relative isolate overflow-hidden rounded-[24px] border border-[#bda8cb] bg-[#eee7f3] p-6 text-[#402f5a] shadow-[0_24px_55px_#8c6b9b24] md:p-8">
    <div aria-hidden="true" className="absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-[#dfc9f2]/70 blur-[75px]" />
    <div aria-hidden="true" className="absolute -bottom-24 -left-16 -z-10 h-52 w-52 rounded-full bg-[#d9c4e7]/65 blur-[65px]" />
    <div className="flex items-center justify-between gap-5"><p className="font-mono text-[10px] font-semibold uppercase tracking-[.17em] text-black">The Biodesign Method</p><span className="h-px w-10 bg-black/30" /></div>
    <p className="mt-4 max-w-[330px] font-[family-name:var(--font-playfair)] text-[22px] leading-[1.05] text-black">From a real clinical need to impact at population scale.</p>
    <div className="relative mt-8 grid grid-cols-3 gap-2 before:absolute before:left-[16%] before:right-[16%] before:top-5 before:h-px before:bg-black/20">{stages.map((stage) => <div className="relative min-w-0 text-center" key={stage.number}><span className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full border border-[#f2d8fc]/50 bg-[#4b3063] font-[family-name:var(--font-playfair)] text-[22px] leading-none text-[#ffd2e5] shadow-[0_0_0_6px_#352147]">{stage.number}</span><h3 className="mt-4 text-[14px] font-semibold tracking-[-.02em] text-black">{stage.title}</h3><p className="mx-auto mt-1.5 max-w-[130px] text-[11px] leading-[1.48] text-black">{stage.text}</p></div>)}</div>
    <div className="mt-8 grid gap-3 border-t border-[#bda8cb] pt-5 sm:grid-cols-2"><div className="rounded-xl border border-[#cdbbd7] bg-white/65 p-3.5"><p className="font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-black">Facility</p><p className="mt-1.5 text-[14px] font-medium text-black">8,000 sq. ft. committed</p></div><div className="rounded-xl border border-[#cdbbd7] bg-white/65 p-3.5"><p className="font-mono text-[9px] font-semibold uppercase tracking-[.13em] text-black">Location</p><p className="mt-1.5 text-[14px] font-medium leading-5 text-black">Ratan Tata Innovation Hub, Amaravati</p></div></div>
  </div>;
}
