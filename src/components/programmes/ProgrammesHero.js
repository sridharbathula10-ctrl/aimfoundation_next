import ScrollReveal from "../ScrollReveal";
import SectionEyebrow from "../SectionEyebrow";

export default function ProgrammesHero() {
  return <section className="relative isolate min-h-[590px] overflow-hidden bg-[#fffafd] px-6 pb-20 pt-40 text-[#402f5a] md:min-h-[650px] md:px-12 md:pb-[105px] md:pt-[220px]">
    <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-35 [background-image:linear-gradient(#dfc9f217_1px,transparent_1px),linear-gradient(90deg,#dfc9f217_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    <ScrollReveal className="mx-auto max-w-[1304px]"><SectionEyebrow>AIM Foundation</SectionEyebrow><h1 className="my-[22px] md:text-[67px] text-[40px] font-medium leading-[.86] tracking-[-.075em] md:mb-6 md:text-[clamp(62px,9vw,132px)]">Programmes</h1><p className="max-w-[650px] font-[family-name:Playfair_Display,serif] text-[14px] font-normal leading-[1.46] text-[#5f5269] md:text-[clamp(18px,1.6vw,23px)]">AIM Foundation&apos;s work is anchored by its flagship, the Amaravati School of Biodesign. The programmes AIM operates are built under the School and delivered in partnership with State Governments and clinical institutions, inside existing public health workflows.</p></ScrollReveal>
  </section>;
}
