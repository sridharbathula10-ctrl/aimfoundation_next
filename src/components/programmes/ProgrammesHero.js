import ScrollReveal from "../ScrollReveal";
import SectionEyebrow from "../SectionEyebrow";

export default function ProgrammesHero() {
  return <section className="relative isolate min-h-[590px] overflow-hidden bg-[#fffafd] px-6 pb-20 pt-40 text-[#402f5a] md:min-h-[650px] md:px-12 md:pb-[105px] md:pt-[220px]">
    <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-35 [background-image:linear-gradient(#dfc9f217_1px,transparent_1px),linear-gradient(90deg,#dfc9f217_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    <div aria-hidden="true" className="absolute -right-[42vw] top-[26%] -z-10 aspect-square w-[96vw] rounded-full border border-[#dfc9f255] shadow-[0_0_0_90px_#dfc9f20a,0_0_0_180px_#dfc9f207] motion-safe:animate-[pulse_7s_ease-in-out_infinite] md:-right-[13vw] md:top-[12%] md:w-[min(66vw,920px)]" />
    <div aria-hidden="true" className="absolute right-[12vw] top-[42%] -z-10 aspect-square w-[55vw] rounded-full border border-[#d37ca955] shadow-[inset_0_0_80px_#c17ddd45] motion-safe:animate-[pulse_5s_ease-in-out_infinite] md:right-[14vw] md:top-[30%] md:w-[min(31vw,430px)]" />
    <ScrollReveal className="mx-auto max-w-[1304px]"><SectionEyebrow>AIM Foundation</SectionEyebrow><h1 className="my-[22px] md:text-[67px] text-[40px] font-medium leading-[.86] tracking-[-.075em] md:mb-6 md:text-[clamp(62px,9vw,132px)]">Programmes</h1><p className="max-w-[650px] font-[family-name:Playfair_Display,serif] text-[14px] font-normal leading-[1.46] text-[#5f5269] md:text-[clamp(18px,1.6vw,23px)]">AIM Foundation&apos;s work is anchored by its flagship, the Amaravati School of Biodesign. The programmes AIM operates are built under the School and delivered in partnership with State Governments and clinical institutions, inside existing public health workflows.</p></ScrollReveal>
  </section>;
}
