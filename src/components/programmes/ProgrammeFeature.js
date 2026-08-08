import ScrollReveal from "../ScrollReveal";
import ProgrammeTags from "./ProgrammeTags";
import Image from "next/image";
import Link from "next/link";
import NutritionMetricCard from "../NutritionMetricCard";
import CohortMetricCard from "../CohortMetricCard";

function ProgrammeDiagram({ id }) {
  if (id === "janani-mitra") return <div aria-label="Five of ten MDD-W food groups" className="mx-auto w-full max-w-[350px]"><NutritionMetricCard /></div>;
  return <div aria-label="Study cohort of 90,000 participants" className="mx-auto w-full max-w-[350px]"><CohortMetricCard /></div>;
}

function ProgrammePhoto({ id }) {
  const photo = id === "janani-mitra"
    ? { src: "/images/ashaworker.png", alt: "ASHA worker supporting Janani Mitra", label: "Janani Mitra in practice" }
    : { src: "/images/gms.png", alt: "Gut Microbiome Study sample collection", label: "Population health research" };
  return <figure className="relative mx-auto w-full max-w-[350px] overflow-hidden rounded-[22px] border border-[#d1c3da] bg-[#402f5a] shadow-[0_18px_38px_#4c356018]"><div className="relative aspect-[4/3]"><Image className="object-cover transition duration-700 group-hover:scale-[1.04]" src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) calc(100vw - 48px), 350px" /><div className="absolute inset-0 bg-[linear-gradient(to_top,#21152fe0,transparent_60%)]" /><figcaption className="absolute inset-x-0 bottom-0 p-5 font-mono text-[9px] font-semibold uppercase tracking-[.14em] text-[#f1d9fb]">{photo.label}</figcaption></div></figure>;
}

export default function ProgrammeFeature({ programme }) {
  const support = programme.details.find(([label]) => label === "How To Support");
  const details = programme.details.filter(([label]) => label !== "How To Support");
  const isJanani = programme.id === "janani-mitra";

  return <article className="group mt-[59px] pb-[58px] first:mt-[59px] [&+article]:border-t [&+article]:border-[#c8bdce] [&+article]:pt-[60px] md:mt-[93px] md:pb-[88px] md:[&+article]:pt-[88px]" id={programme.id}>
    <div className={`grid gap-8 border-b border-[#b6a7c355] pb-8 md:grid-cols-[1.1fr_.9fr] md:gap-[9vw] ${isJanani ? "md:pb-10" : "md:pb-[70px]"}`}>
      <ScrollReveal>
        <p className="mb-5 mt-0 font-mono text-[12px] font-medium tracking-[.14em] text-[#9e87b0]">{programme.number}</p>
        <h3 className="m-0 max-w-[650px] text-[47px] font-medium leading-[.93] tracking-[-.073em] text-[#53318f] transition duration-300 group-hover:text-[#7a2453] md:text-[clamp(47px,5.4vw,78px)]">{programme.name}</h3>
      </ScrollReveal>
      <ScrollReveal delay={120} direction="left">
        <p className="mb-[22px] mt-1 font-mono text-[12px] font-semibold uppercase leading-[1.45] tracking-[.06em] text-[#8d245b]">{programme.strapline}</p>
        <ProgrammeTags featured twoLine twoColumn={programme.id === "janani-mitra"} items={programme.tags} />
      </ScrollReveal>
    </div>
    <div className={`grid gap-8 md:grid-cols-[.75fr_1.25fr] md:gap-[9vw] ${isJanani ? "mt-8 md:mt-10" : "mt-11 md:mt-[67px]"}`}>
      <div className="order-2 self-start md:order-none">
        <ScrollReveal className="transition duration-500 hover:-translate-y-2"><ProgrammeDiagram id={programme.id} /></ScrollReveal>
        <ScrollReveal delay={100} className="mt-5"><ProgrammePhoto id={programme.id} /></ScrollReveal>
      </div>
      <div>
        {details.map(([label, text], index) => <ScrollReveal as="article" className="grid gap-[9px] border-t border-[#b6a7c355] py-[22px] transition duration-300 hover:-translate-y-1 hover:border-[#8d245b] hover:bg-[#f8f3f8] hover:px-4 last:border-b md:grid-cols-[175px_1fr] md:gap-[26px] md:py-[25px]" delay={index * 50} key={label}>
          <h4 className="m-0 font-mono text-[12px] font-medium uppercase leading-[1.4] tracking-[.06em] text-[#785b8d]">{label}</h4>
          <p className="m-0 text-[17px] font-medium leading-[1.68] tracking-[-.008em] text-[#44354e] md:text-[18px]">{text}</p>
        </ScrollReveal>)}
        {support && <div className="mt-7 border-t border-[#b6a7c355] pt-7">
          <ScrollReveal className="relative isolate overflow-hidden rounded-[18px] bg-[#2a1d3d] p-6 text-[#fbf8fc] shadow-[0_18px_38px_#2a1d3d24]" delay={280}>
            <div aria-hidden="true" className="absolute -right-12 -top-16 -z-10 h-44 w-44 rounded-full bg-[#c65492]/30 blur-[55px]" />
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-[#f0b3d1]">How To Support</p>
            <p className="mt-4 max-w-[600px] text-[16px] font-medium leading-[1.65] text-[#eee5f2]">{support[1]}</p>
          </ScrollReveal>
          <ScrollReveal delay={330}><Link className="mt-5 inline-flex items-center gap-2 border-b border-[#8d245b] pb-1 font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#6f1748] transition hover:gap-3 hover:text-[#8d245b]" href="/get-involved">Discuss Supporting {programme.name} <span aria-hidden="true">→</span></Link></ScrollReveal>
        </div>}
      </div>
    </div>
  </article>;
}
