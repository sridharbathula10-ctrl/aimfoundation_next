import { FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";
import ScrollProgress from "../../components/ScrollProgress";
import ScrollReveal from "../../components/ScrollReveal";
import SectionEyebrow from "../../components/SectionEyebrow";

export const metadata = {
  title: "Get Involved and Contact | AIM Foundation",
  description: "AIM Foundation builds healthcare innovation for India's public health system through its flagship Amaravati School of Biodesign, with programmes including Janani Mitra delivered with State Governments in Andhra Pradesh and Telangana.",
};

const supportRoutes = [
  ["01", "Corporate CSR Partnerships", "For corporates seeking to deploy CSR funding into measurable, government-embedded public health programmes. AIM works with eligible partner entities for CSR routing, and provides programme-wise budgets, milestone-linked disbursement and regular progress reporting.", "Discuss A CSR Partnership"],
  ["02", "Foundation And Institutional Partnerships", "For foundations and institutions interested in maternal and child health, population health research, or medical technology innovation. AIM provides detailed programme proposals, joint outcome frameworks and co-branded reporting.", "Request A Proposal"],
  ["03", "Individual Contributions", "Support AIM's work through a direct contribution. Contributions are applied to active programmes and are eligible for tax deduction under Section 80G. Receipts and certificates are issued in accordance with applicable Income Tax rules.", "Contact Us To Contribute"],
];

const requirements = [
  ["Amaravati School of Biodesign", "Fellowship cohorts, prototyping facilities and international faculty exchange at the Ratan Tata Innovation Hub."],
  ["Janani Mitra", "₹100 per beneficiary. Support is measured directly in women reached across Andhra Pradesh and Telangana."],
  ["Gut Microbiome Study", "Participant recruitment, sample collection and sequencing capacity across the 90,000-participant cohort."],
];

function SectionLabel({ children }) {
  return <SectionEyebrow>{children}</SectionEyebrow>;
}

export default function GetInvolvedPage() {
  return <main className="bg-[#fbfafc] text-[#3f3049]">
    <ScrollProgress />

    <section className="relative isolate overflow-hidden bg-[#fffafd] px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-[220px]">
      <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-55 [background-image:linear-gradient(#76528c12_1px,transparent_1px),linear-gradient(90deg,#76528c12_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <ScrollReveal className="mx-auto max-w-[1304px]">
        <SectionLabel>Get Involved</SectionLabel>
        <h1 className="mt-6 max-w-[850px] text-[clamp(54px,7vw,96px)] font-medium leading-[.88] tracking-[-.075em]">Support Work<br /><span className="font-serif font-medium">That Reaches Scale.</span></h1>
        <p className="mt-7 max-w-[690px] text-[16px] leading-[1.65] text-[#5f5269] md:text-[19px]">AIM Foundation operates programmes that need specific support to deliver at scale. The requirements below name what each programme needs and what your support will fund.</p>
      </ScrollReveal>
    </section>
    {/* <section className="bg-[#f4eef7] px-6 py-20 md:px-12 md:py-28" aria-labelledby="legal-status-heading">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal><SectionLabel>Legal Status</SectionLabel><h2 id="legal-status-heading" className="mt-5 text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">A clear basis for support.</h2></ScrollReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ScrollReveal as="article" className="rounded-2xl border border-[#d8c8e1] bg-white p-7 shadow-[0_12px_28px_#4c35600b]"><p className="font-mono text-[11px] font-semibold uppercase tracking-[.13em] text-[#a84679]">Incorporation</p><p className="mt-5 max-w-[570px] text-[18px] leading-[1.6] text-[#55445f]">AIM Foundation is a Section 8 not-for-profit company incorporated under the Companies Act, 2013. CIN: U86201TS2024NPL192456.</p></ScrollReveal>
          <ScrollReveal as="article" className="rounded-2xl border border-[#d8c8e1] bg-white p-7 shadow-[0_12px_28px_#4c35600b]" delay={100}><p className="font-mono text-[11px] font-semibold uppercase tracking-[.13em] text-[#a84679]">Tax Position</p><p className="mt-5 max-w-[570px] text-[18px] leading-[1.6] text-[#55445f]">AIM Foundation is registered under Sections 12A and 80G of the Income Tax Act, 1961. Contributions are eligible for tax deduction under Section 80G.</p></ScrollReveal>
        </div>
      </div>
    </section>

    <section className="bg-[#fffafd] px-6 py-20 md:px-12 md:py-28" aria-labelledby="support-heading">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal><SectionLabel>Three Routes To Support Our Work</SectionLabel><h2 id="support-heading" className="mt-5 max-w-[780px] text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">Choose the way you want to help.</h2></ScrollReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {supportRoutes.map(([number, title, copy, action], index) => <ScrollReveal as="article" key={number} delay={index * 100} className="flex min-h-[390px] flex-col rounded-2xl border border-[#d8c8e1] bg-white p-7 shadow-[0_12px_28px_#4c35600b] transition hover:-translate-y-1 hover:border-[#a84679]">
            <p className="font-serif text-[48px] leading-none tracking-[-.07em] text-[#a84679]">{number}</p><h3 className="mt-8 text-[28px] font-medium leading-[1.03] tracking-[-.045em] text-[#50308d]">{title}</h3><p className="mt-5 text-[14px] leading-[1.65] text-[#65566d]">{copy}</p><a href="mailto:contact@aimfoundation.ai" className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#50308d] pb-1 pt-8 text-[13px] font-semibold text-[#50308d]">{action}<FiArrowUpRight aria-hidden="true" /></a>
          </ScrollReveal>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f4eef7] px-6 py-20 md:px-12 md:py-28" aria-labelledby="requirements-heading">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal><SectionLabel>Programme Requirements</SectionLabel><h2 id="requirements-heading" className="mt-5 max-w-[760px] text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">Every programme has a named requirement.</h2></ScrollReveal>
        <div className="mt-12 border-t border-[#cdbbd6]">{requirements.map(([programme, need], index) => <ScrollReveal as="article" key={programme} delay={index * 90} className="grid gap-5 border-b border-[#cdbbd6] py-7 md:grid-cols-[minmax(220px,.55fr)_1fr] md:gap-12"><h3 className="text-[25px] font-medium leading-[1.05] tracking-[-.04em] text-[#50308d]">{programme}</h3><p className="max-w-[720px] text-[16px] leading-[1.65] text-[#5f5269]">{need}</p></ScrollReveal>)}</div>
      </div>
    </section>

    <section className="bg-[#fffafd] px-6 py-20 md:px-12 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-[1304px] gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <ScrollReveal><SectionLabel>Contact Us</SectionLabel><h2 id="contact-heading" className="mt-5 text-[clamp(42px,4.8vw,68px)] font-medium leading-[.94] tracking-[-.07em]">Let&apos;s start a conversation.</h2><p className="mt-6 max-w-[450px] text-[16px] leading-[1.65] text-[#65566d]">AIM Foundation welcomes conversations with governments, funding partners, clinical institutions, researchers and technology partners.</p><div className="mt-10 space-y-6 text-[15px] leading-[1.6] text-[#55445f]"><a className="flex items-start gap-4 transition hover:text-[#50308d]" href="mailto:contact@aimfoundation.ai"><FiMail className="mt-1 shrink-0 text-[#8d245b]" /><span>contact@aimfoundation.ai</span></a><address className="flex items-start gap-4 not-italic"><FiMapPin className="mt-1 shrink-0 text-[#8d245b]" /><span>C 206, Trendset Rythme, Survey No. 7,<br />White Field Road, Kondapur,<br />Telangana 500 084, India</span></address></div></ScrollReveal>
        <ScrollReveal className="rounded-2xl border border-[#d8c8e1] bg-[#f7f2f8] p-6 shadow-[0_12px_28px_#4c35600b] md:p-8" delay={120}>
          <form action="mailto:contact@aimfoundation.ai" method="post" encType="text/plain" className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Name<input required name="name" className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]" /></label><label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Organisation<input required name="organisation" className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]" /></label></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Email<input required type="email" name="email" className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]" /></label><label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Phone <span className="font-normal text-[#7b7187]">(optional, with country code)</span><input name="phone" type="tel" className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]" /></label></div>
            <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Purpose Of Enquiry<select required name="purpose" defaultValue="" className="rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]"><option value="" disabled>Select a purpose</option><option>CSR partnership</option><option>Foundation partnership</option><option>Government engagement</option><option>Media enquiry</option><option>Individual contribution</option><option>Other</option></select></label>
            <label className="grid gap-2 text-[12px] font-semibold text-[#55445f]">Message<textarea required name="message" rows="5" className="resize-y rounded-lg border border-[#d5c5de] bg-white px-4 py-3 text-[15px] font-normal outline-none transition focus:border-[#8d245b]" /></label>
            <button type="submit" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#402f5a] px-6 py-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#50308d]">Send Enquiry <FiArrowUpRight aria-hidden="true" /></button>
          </form>
        </ScrollReveal>
      </div>
    </section> */}

    {/* <section className="bg-[#f4eef7] px-6 py-20 md:px-12 md:py-28" aria-labelledby="map-heading"><div className="mx-auto max-w-[1304px]"><ScrollReveal><SectionLabel>Find Us</SectionLabel><h2 id="map-heading" className="mt-5 text-[clamp(42px,4.8vw,68px)] font-medium leading-[.94] tracking-[-.07em]">Visit AIM Foundation.</h2></ScrollReveal><ScrollReveal className="mt-10 overflow-hidden rounded-2xl border border-[#d8c8e1] bg-white shadow-[0_12px_28px_#4c35600b]" delay={100}><iframe className="h-[380px] w-full border-0" title="AIM Foundation location" loading="lazy" src="https://www.google.com/maps?q=C%20206%2C%20Trendset%20Rythme%2C%20White%20Field%20Road%2C%20Kondapur%2C%20Telangana%20500%20084&output=embed" /></ScrollReveal></div></section> */}
  
  </main>;
}
