import ScrollReveal from "./ScrollReveal";
import ScrollText from "./ScrollText";
import SectionEyebrow from "./SectionEyebrow";

export default function DonorSection() {
  return (
    <section className="bg-[#f7f3fa] px-6 py-[58px] md:px-12 md:py-[58px]" aria-labelledby="donor-heading">
      <div className="mx-auto max-w-[1304px]">
        <div className="relative isolate min-h-[380px] overflow-hidden rounded-[18px] bg-[#fcf9fd] px-[26px] py-10 text-black shadow-[0_18px_46px_rgba(140,107,155,0.06)] md:min-h-[400px] md:rounded-[24px] md:px-[clamp(28px,7vw,104px)] md:py-[52px]">
          <ScrollReveal delay={100}>
            <SectionEyebrow>Our Donor</SectionEyebrow>
            <h2 id="donor-heading" className="donor-title max-w-[760px] text-[clamp(36px,4.5vw,68px)] font-medium leading-[.96]">Megha Engineering &amp;<br />Infrastructures Limited</h2>
          </ScrollReveal>
          <div className="mt-[35px] grid max-w-[990px] grid-cols-1 gap-[25px] border-t border-[#e8e1e8] pt-[26px] md:mt-12 md:grid-cols-[1fr_1.25fr] md:gap-[60px]">
            <ScrollText className="m-0 font-serif text-[19px] font-medium leading-[1.38] md:text-xl" text="A confirmed donor supporting AIM Foundation's programme delivery in Andhra Pradesh." delay={120} />
            <ScrollText className="m-0 text-base leading-[1.65]" text="Through the generous contributions of our donor, we are driving innovation in healthcare by integrating AI and advanced technologies. This collaboration empowers us to improve accessibility, enhance patient care, and create a more equitable healthcare ecosystem for everyone." delay={190} />
          </div>
        </div>
      </div>
    </section>
  );
}
