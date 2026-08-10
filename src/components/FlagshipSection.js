import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ScrollText from "./ScrollText";
import BiodesignMethodCard from "./BiodesignMethodCard";
import SectionEyebrow from "./SectionEyebrow";

export default function FlagshipSection() {
  return (
    <section className="w-full py-10 lg:py-16">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-8">
        <ScrollReveal><SectionEyebrow className="mb-8">Our Flagship</SectionEyebrow></ScrollReveal>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,.75fr)] lg:gap-16">
          <div>
            <ScrollReveal delay={100}><h2 className="text-4xl font-light leading-[0.95] tracking-tight text-[#173c70] md:text-5xl xl:whitespace-nowrap">Amaravati School of Biodesign</h2></ScrollReveal>
            <div className="mt-6 space-y-5">
              <ScrollText delay={100} className="text-[14px] leading-[1.65] md:text-[16px]" text="A translational healthcare technology innovation and training platform, built in partnership with the Government of Andhra Pradesh and taught on the Stanford Biodesign method." />
              <ScrollText delay={150} className="text-[14px] leading-[1.65] md:text-[16px]" text="At the School, clinicians, engineers, startups and institutions work together to identify real clinical needs, invent solutions for them, and implement those solutions in Indian public health settings. An 8,000 sq. ft. facility is committed at the Ratan Tata Innovation Hub, Amaravati." />
              <ScrollText delay={200} className="text-[14px] font-medium leading-[1.65] md:text-[16px]" text="International partners: Stanford Mussallem Center for Biodesign, Biodesign Australia, Biodesign Israel." />
              <ScrollText delay={250} className="text-[14px] leading-[1.65] md:text-[16px]" text="The programmes AIM Foundation operates are built under the School and delivered at population scale through State Government health systems." />
            </div>
            <ScrollReveal delay={300} direction="left"><Link href="/programmes#school-heading" className="mt-6 inline-flex items-center gap-1 whitespace-nowrap border-b border-[#50308d] pb-1 text-[16px] font-bold tracking-[-.02em] text-[#50308d] transition-colors duration-300">Read More About The School <span className="text-lg">↗</span></Link></ScrollReveal>
          </div>
          <ScrollReveal className="self-start" delay={160} direction="left"><BiodesignMethodCard /><p className="mt-4 text-[13px] font-medium leading-5 text-[#68576d]">The School applies the Stanford Biodesign method through India&apos;s public health system.</p></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
