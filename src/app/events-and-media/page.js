import { FiArrowUpRight } from "react-icons/fi";
import ScrollProgress from "../../components/ScrollProgress";
import ScrollReveal from "../../components/ScrollReveal";
import SectionEyebrow from "../../components/SectionEyebrow";

export const metadata = {
  title: "Events and Media | AIM Foundation",
  description: "AIM Foundation builds healthcare innovation for India's public health system through its flagship Amaravati School of Biodesign, with programmes including Janani Mitra delivered with State Governments in Andhra Pradesh and Telangana.",
};

const events = [
  ["Asia-Pacific Biodesign Innovation Summit 2025", "AIM Foundation hosted this summit under the Bharat Biodesign banner."],
  ["Telangana AI Rising Grand Challenge", "AIM Foundation participated in the State's AI challenge programme."],
  ["AI in Affordable Healthcare, AI Impact Summit 2026", "Presentation on AI in affordable healthcare."],
  ["ISB Healthcare 4.0 Summit", "AIM Foundation participated in the ISB Healthcare 4.0 Summit."],
  ["MedTech & AI Innovations in Public Health Systems", "A session on deploying MedTech and AI inside public health systems."],
  ["A Strategic Alliance for Research, Innovation and Better Healthcare", "Announcement of a strategic research and innovation alliance."],
];

const coverage = [
  ["Deccan Chronicle", "24 August 2025", "Innovate From Telangana For World: Revanth", "The Chief Minister of Telangana unveiled the vision document ‘Innovations for Bharat: The BioDesign Blueprint’ at the APAC BioDesign Innovation Summit 2025, reported as organised by AIM Foundation at AIG Hospitals."],
  ["Business Standard", "24 August 2025", "Hyderabad Rising In Biotech, Pharma, MedTech Innovation: Revanth Reddy", "A Press Trust of India report from the same summit, carrying the State Government's commitment to act as a proactive partner on biodesign and to open historical medical data to researchers under strict privacy terms."],
  ["Deccan Chronicle", "11 August 2025", "Hyd Hosts APAC BioDesign Meet", "A preview of the summit naming AIM Foundation, Bharat Biodesign and BioDesign Israel as co-organisers, alongside the Stanford Byers/Mussallem Center for Biodesign, Japan Biodesign, Singapore Biodesign and BioInnovate Ireland."],
];

const cardBase = "group flex flex-col rounded-2xl border border-[#d8cbe0] bg-white p-7 shadow-[0_12px_28px_#4c35600b] transition duration-300 hover:-translate-y-1 hover:border-[#a84679] hover:shadow-[0_20px_38px_#4c356016]";

function SectionLabel({ children }) {
  return <SectionEyebrow>{children}</SectionEyebrow>;
}

export default function EventsAndMediaPage() {
  return <main className="bg-[#fbfafc] text-[#3f3049]">
    <ScrollProgress />

    <section className="relative isolate overflow-hidden bg-[#fffafd] px-6 pb-20 pt-40 md:px-12 md:pb-28 md:pt-[220px]">
      <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-55 [background-image:linear-gradient(#76528c12_1px,transparent_1px),linear-gradient(90deg,#76528c12_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <ScrollReveal className="mx-auto max-w-[1304px]">
        <SectionLabel>Events &amp; Media</SectionLabel>
        <h1 className="mt-6 max-w-[800px] text-[clamp(54px,7vw,96px)] font-medium leading-[.88] tracking-[-.075em]">Events<br /><span className="font-serif font-medium">And Media</span></h1>
        <p className="mt-7 max-w-[680px] text-[16px] leading-[1.65] text-[#5f5269] md:text-[19px]">AIM Foundation convenes and participates in events with government, clinical and academic partners, and its programmes are covered in the national and regional press. Both records live on this page.</p>
      </ScrollReveal>
    </section>

     {/* <section className="bg-[#f4eef7] px-6 py-20 md:px-12 md:py-28" aria-labelledby="past-events-heading">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal><SectionLabel>Past Events</SectionLabel><h2 id="past-events-heading" className="mt-5 max-w-[680px] text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">Conversations that move health systems forward.</h2></ScrollReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map(([title, description], index) => <ScrollReveal as="article" delay={index * 75} key={title} className={cardBase + " min-h-[230px] p-6 md:p-7 bg-white/80 border-[#d9c8e1]"}>
            <p className="font-mono text-[11px] font-semibold tracking-[.14em] text-[#a84679]">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-auto pt-10 text-[25px] font-medium leading-[1.02] tracking-[-.045em] text-[#50308d]">{title}</h3>
            <p className="mt-4 text-[14px] leading-[1.65] text-[#65566d]">{description}</p>
          </ScrollReveal>)}
        </div>
      </div>
    </section>

    <section className="bg-[#fffafd] px-6 py-20 md:px-12 md:py-28" aria-labelledby="coverage-heading">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal><SectionLabel>Coverage Of Our Programmes</SectionLabel><h2 id="coverage-heading" className="mt-5 max-w-[760px] text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">In the press.</h2><p className="mt-6 max-w-[630px] text-[16px] leading-[1.65] text-[#65566d]">Coverage of AIM Foundation&apos;s programmes in national publications, ordered most recent first.</p></ScrollReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {coverage.map(([publication, date, headline, summary], index) => <ScrollReveal as="article" delay={index * 100} key={headline} className={cardBase + " min-h-[330px] p-7 border-[#d8cbe0] bg-white"}>
            <div className="flex items-center justify-between gap-4 border-b border-[#e6dce9] pb-5 font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-[#8d6a9f]"><span>{publication}</span><time>{date}</time></div>
            <h3 className="mt-7 text-[27px] font-medium leading-[1.03] tracking-[-.045em] text-[#50308d]">{headline}</h3>
            <p className="mt-5 text-[14px] leading-[1.65] text-[#5f5269]">{summary}</p>
          </ScrollReveal>)}
        </div>
        <ScrollReveal as="article" className="mt-5 rounded-2xl border border-[#bca7ca] bg-[#f2e8f6] p-7 md:flex md:items-start md:gap-10" delay={150}>
          <div className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-[#8d245b]">Official Announcement<br /><time className="mt-2 block normal-case tracking-normal text-[#795c86]">Government of Andhra Pradesh · 20 January 2025</time></div>
          <p className="mt-5 max-w-[800px] text-[16px] leading-[1.65] text-[#55445f] md:mt-0">The Health Minister&apos;s office announced the AI-based Janani Mitra app, describing nutrition tracking through a food scanner, AI-assisted anaemia detection, and a direct line to ASHA workers and ANMs, built as a progressive web app for low-network areas.</p>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-[#f4eef7] px-6 py-20 md:px-12 md:py-28">
      <ScrollReveal className="closing-cta-card mx-auto grid max-w-[1304px] gap-10 overflow-hidden px-7 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-14 md:py-14">
        <div><SectionLabel>Stay Connected</SectionLabel><h2 className="mt-5 max-w-[650px] text-[clamp(38px,4.5vw,64px)] font-medium leading-[.94] tracking-[-.065em]">Work with AIM Foundation.</h2><p className="mt-5 max-w-[610px] text-[16px] leading-[1.65] text-[#65566d]">We welcome conversations with governments, clinical institutions, researchers, technology partners and funders.</p></div>
        <a className="inline-flex w-fit items-center gap-3 rounded-full bg-[#402f5a] px-6 py-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#50308d]" href="mailto:contact@aimfoundation.ai">Contact Us <FiArrowUpRight aria-hidden="true" /></a>
      </ScrollReveal>
    </section>  */}
  </main>;
}
