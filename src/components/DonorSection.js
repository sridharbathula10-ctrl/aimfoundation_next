import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import ScrollText from "./ScrollText";
import SectionEyebrow from "./SectionEyebrow";

export default function DonorSection() {
  return (
    <section className="bg-[#f7f3fa] px-6 py-[58px] md:px-12 md:py-[58px]" aria-labelledby="donor-heading">
      <div className="mx-auto max-w-[1304px]">
        <div className="relative isolate overflow-hidden rounded-[14px] bg-white px-[26px] py-10 text-black md:px-[clamp(28px,7vw,104px)] md:py-[52px]">
          <ScrollReveal className="grid items-center md:grid-cols-[1fr_300px]" delay={100}>
            <div>
              <SectionEyebrow>Our Donor</SectionEyebrow>
              <h2 id="donor-heading" className="donor-title max-w-[760px] text-[clamp(36px,4.5vw,68px)] font-medium leading-[.96]">Megha Engineering &amp;<br />Infrastructures Limited</h2>
            </div>
            <Image className="w-full max-w-[260px] justify-self-start object-contain md:justify-self-end" src="/images/donaor.png" alt="Megha Engineering & Infrastructures Limited" width={1000} height={600} />
          </ScrollReveal>
          <div className="mt-[35px] border-t border-[#e8e1e8] pt-[26px] md:mt-12">
            <ScrollText className="m-0 max-w-none font-serif text-[19px] font-medium leading-[1.38] md:text-xl" text="A confirmed donor supporting AIM Foundation's programme delivery in Andhra Pradesh." delay={120} />
          </div>
        </div>
      </div>
    </section>
  );
}
