import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "../../components/ScrollReveal";
import teamData from "../../data/team.json";
import SectionEyebrow from "../../components/SectionEyebrow";

export const metadata = {
  title: "Who We Are | AIM Foundation",
  description: "AIM Foundation builds healthcare innovation for India's public health system through its flagship Amaravati School of Biodesign, with programmes including Janani Mitra delivered with State Governments in Andhra Pradesh and Telangana.",
};

const principles = [
  ["01", "Early And Accurate Diagnosis", "Using advanced AI tools to detect diseases faster and more accurately, reducing diagnostic delays in underserved regions."],
  ["02", "Delivery Through Public Systems", "Programmes run inside existing public health workflows, delivered by the frontline workers who already serve these communities, not alongside them."],
  ["03", "Evidence Built For Indian Populations", "Research programmes generate reference data for Indian populations where little exists today, published jointly with clinical partners."],
];

const sdgs = [
  ["SDG 3", "Good Health and Well-being", "Janani Mitra addresses maternal nutrition and antenatal care. The Gut Microbiome Study contributes to non-communicable disease research.", "#4C9F38"],
  ["SDG 2", "Zero Hunger", "Janani Mitra targets undernutrition in pregnant women through validated dietary diversity monitoring.", "#DDA63A"],
  ["SDG 5", "Gender Equality", "Programmes deliver maternal health services through women community health workers to women in rural populations.", "#FF3A21"],
  ["SDG 17", "Partnerships for the Goals", "Delivered in partnership with State Governments, AIG Hospitals, and academic partners in India and abroad.", "#19486A"],
];

const partnerGroups = [
  ["Government Partners", [["Government of Andhra Pradesh", "Partner for the Amaravati School of Biodesign, Janani Mitra and the Gut Microbiome Study. Field implementation runs through the State's public health system."], ["Government of Telangana", "Memorandum of Understanding in progress for Janani Mitra."]]],
  ["Clinical and Technical Partners", [["AIG Hospitals, Hyderabad", "Clinical anchor across programmes. Provides clinical validation for Janani Mitra, laboratory processing and sequencing for the Gut Microbiome Study through the Barry Marshall Laboratory, and clinical mentorship for the Amaravati School of Biodesign."], ["Forsys Inc.", "Technology partner supporting programme delivery."]]],
  ["Academic and Institutional Partners", [["Indian School of Business", "Anchor partner for the Amaravati School of Biodesign."], ["Indian Institute of Technology, Delhi", "Anchor partner for the Amaravati School of Biodesign."], ["IIIT Hyderabad", "Academic collaboration."], ["Ratan Tata Innovation Hub, Amaravati", "Host facility for the Amaravati School of Biodesign."]]],
  ["International Programme Partners", [["Stanford Mussallem Center for Biodesign", "Biodesign method and international linkage."], ["Biodesign Australia", "International linkage and mentorship."], ["Biodesign Israel", "International linkage and mentorship."]]],
];

const partnerLogos = {
  "Government of Andhra Pradesh": "/images/ap-government.webp",
  "Government of Telangana": "/images/telangana-government.webp",
  "Indian School of Business": "/images/isb.webp",
  "Indian Institute of Technology, Delhi": "/images/iit-delhi.webp",
  "IIIT Hyderabad": "/images/iiit-hyderabad.webp",
  "Ratan Tata Innovation Hub, Amaravati":"/images/rtiv.jpeg",
  "AIG Hospitals, Hyderabad": "/images/aig.jpeg",
  "Stanford Mussallem Center for Biodesign": "/images/st.png",
  "Biodesign Australia": "/images/bid.png",
  "Biodesign Israel": "/images/bii.png",
  "Forsys Inc.": "/images/fr.png",
};

function SectionLabel({ children }) { return <SectionEyebrow>{children}</SectionEyebrow>; }

export default function WhoWeArePage() {
  return <main className=" bg-[#fbfafc] text-[#3f3049]">
    <section className="relative isolate min-h-[590px] overflow-hidden bg-[#fffafd] px-6 pb-20 pt-40 text-[#402f5a] md:min-h-[650px] md:px-12 md:pb-[105px] md:pt-[220px]">
      <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-35 [background-image:linear-gradient(#dfc9f217_1px,transparent_1px),linear-gradient(90deg,#dfc9f217_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <ScrollReveal className="mx-auto max-w-[1304px]"><SectionLabel>Who We Are</SectionLabel><h1 className="my-[22px] max-w-[850px] text-[54px] font-medium leading-[.9] tracking-[-.07em] md:mb-6 md:text-[clamp(52px,6vw,88px)]">Built On Research<br />And Innovation</h1><div className="max-w-[680px] space-y-3 text-[clamp(15px,1.35vw,18px)] leading-[1.6] text-[#44354e]"><p>AIM Foundation (AI &amp; MedTech Alliance Foundation) is a Section 8 not-for-profit that builds healthcare innovation for India&apos;s public health system, anchored by its flagship, the Amaravati School of Biodesign.</p><p>The programmes built under the School are delivered with State Governments through existing public health workflows, alongside research that generates evidence built on Indian populations.</p></div></ScrollReveal>
    </section>


    <section className="bg-[#f2edf5] px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1304px]"><ScrollReveal><SectionLabel>Founding Principles</SectionLabel><h2 className="mt-5 max-w-[700px] text-[clamp(42px,5vw,72px)] font-medium leading-[.94] tracking-[-.07em]">How AIM Foundation approaches its work.</h2></ScrollReveal><div className="mt-12 grid gap-4 md:grid-cols-3">{principles.map(([number, title, text], index) => <ScrollReveal as="article" className="group rounded-2xl border border-[#d5c8dc] bg-white/70 p-6 transition duration-500 hover:-translate-y-2 hover:border-[#a84679] hover:shadow-[0_20px_38px_#4c356016]" delay={index * 110} key={number}><p className="font-serif text-[46px] leading-none tracking-[-.07em] text-[#a84679]">{number}</p><h3 className="mt-8 text-[22px] font-medium leading-[1.05] tracking-[-.04em]">{title}</h3><p className="mt-4 text-[14px] leading-[1.65] text-[#65566d]">{text}</p></ScrollReveal>)}</div></div></section>
    <section className="sdg-goals bg-[#F7F5F8] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1304px]">

        <ScrollReveal>
          <SectionLabel>Sustainable Development Goals</SectionLabel>

          <h2 className="mt-8 max-w-none text-[clamp(42px,4vw,54px)] font-medium leading-[0.92] tracking-[-0.06em] text-[#4E2D91]">
            Our work aligns with a specific set of UN goals.
          </h2>

          <p className="mt-8 max-w-[620px] text-lg leading-8 text-[#5E5A72]">
            The goals below are those our current work directly addresses.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5">

          {sdgs.map(([number, title, text, color], index) => (

            <ScrollReveal
              key={number}
              delay={index * 100}
              as="article"
            >

              {/* Mobile */}
              <div className="rounded-3xl border border-[#D8C7E8] bg-white p-6 shadow-[0_8px_30px_rgba(74,45,145,0.08)] md:hidden">

                <div className="flex items-center justify-between">

                  <div className="sdg-badge rounded-full px-5 py-2 text-sm font-bold tracking-[0.15em] text-white" style={{ backgroundColor: color }}>
                    {number}
                  </div>

                  <div className="ml-4 h-px flex-1 bg-[#E7DDF3]" />

                </div>

                <h3 className="mt-6 text-[28px] font-medium leading-tight text-[#312A46]">
                  {title}
                </h3>

                <p className="mt-5 text-[16px] leading-8 text-[#6A647A]">
                  {text}
                </p>

              </div>

              {/* Desktop */}
              <div className="hidden items-center rounded-2xl border border-[#D8C7E8] bg-white px-6 py-5 shadow-[0_8px_30px_rgba(74,45,145,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5A2EA6] hover:shadow-[0_16px_40px_rgba(74,45,145,0.16)] md:flex">

                <div className="sdg-badge flex h-12 min-w-[86px] items-center justify-center rounded-full px-4 text-white shadow-md" style={{ backgroundColor: color }}>
                  <span className="text-[13px] font-bold tracking-[0.18em]">
                    {number}
                  </span>
                </div>

                <div className="mx-6 h-10 w-px bg-[#DDD2EA]" />

                <div className="flex-1">

                  <h3 className="text-[26px] font-medium leading-tight text-[#312A46] transition-colors duration-300 group-hover:text-[#4E2D91]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-7 text-[#6A647A]">
                    {text}
                  </p>

                </div>

              </div>

            </ScrollReveal>

          ))}

        </div>

      </div>
    </section>

    <section className="bg-white px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1304px]">

        {/* Heading */}
        <ScrollReveal>
          <SectionLabel>Our Partners</SectionLabel>

          <h2 className="mt-8 max-w-none text-[clamp(42px,4vw,54px)] font-medium leading-[0.92] tracking-[-0.06em] text-[#4E2D91]">
            Collaboration is how delivery works.
          </h2>

          <p className="mt-8 max-w-none text-[18px] leading-8 text-[#65566D]">
            AIM Foundation&apos;s work is delivered through a network of government,
            clinical, academic and international partners. Each partnership is
            an operational relationship, not a general affiliation.
          </p>
        </ScrollReveal>

        <div className="our-partners-showcase mt-16 grid gap-6 lg:grid-cols-2">
          {partnerGroups.map(([group, partners], groupIndex) => (
            <ScrollReveal
              key={group}
              delay={groupIndex * 120}
              className="partners-group rounded-[28px] border border-[#E4DEEC] bg-white p-6 md:p-9"
            >
              <div className="mb-6 flex items-center gap-4 md:mb-8">
                <div className="h-px flex-1 bg-[#DDD2EA]" />

                <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6B49A8] md:whitespace-nowrap">
                  {group}
                </h3>

                <div className="h-px flex-1 bg-[#DDD2EA]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {partners.map(([name]) => {
                  const logo = partnerLogos[name];
                  return <article key={name} className="partner-tile flex min-h-[188px] flex-col items-center justify-center rounded-2xl border border-[#E4DEEC] bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#6B4A9C]">
                    {logo ? <Image className="h-[92px] w-full object-contain" src={logo} alt={name} width={280} height={140} sizes="(max-width: 640px) 100vw, 280px" /> : <p className="font-[family-name:var(--font-playfair)] text-[clamp(22px,2.4vw,32px)] font-medium leading-[1.05] text-[#43286E]">{name}</p>}
                    <h4 className={`mt-4 text-[13px] font-bold uppercase leading-[1.35] tracking-[.04em] text-[#43286E] ${logo ? "" : "sr-only"}`}>{name}</h4>
                  </article>;
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>

    <section className="team-section px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal >
    
          <h2 className="team-title">Meet Our Team</h2>
        </ScrollReveal>
        <div className="team-groups mt-10 md:mt-14">
          {teamData.groups.map((group, groupIndex) => (
            <section className="team-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="team-grid">
                {group.members.map((member, index) => (
                  <ScrollReveal as="article" className="team-card" delay={(groupIndex + index) * 70} key={member.name} tabIndex="0">
                    <div className="team-card__inner">
                      <div className="team-card__face team-card__face--front">
                        <img src={member.image} alt={member.name} />
                        <div className="team-card__front-caption">
                          <span>{member.role}</span>
                          <p>{member.name}</p>
                        </div>
                      </div>
                      <div className="team-card__face team-card__face--back">
                        <p className="team-card__role">{member.role}</p>
                        <h4>{member.name}</h4>
                        <p className="team-card__credential">{member.credential}</p>
                        <p>{member.bio}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#F7F5F8] px-5 py-16 md:px-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1304px]">
        <ScrollReveal>
          <div className="closing-cta-card overflow-hidden">

            <div className="grid gap-10 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:px-16 md:py-20">

              {/* Left */}
              <div>
                <SectionLabel>Work With Us</SectionLabel>

                <h2
                  className="
                mt-6
                max-w-[700px]
                text-[clamp(2rem,7vw,4.2rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.06em]
                text-[#4E2D91]
                [text-wrap:balance]
              "
                >
                  Partner with
                  <br className="hidden md:block" />
                  AIM Foundation.
                </h2>

                <p className="mt-6 max-w-[560px] text-[16px] leading-8 text-[#55506A] md:mt-8 md:text-[18px]">
                  We welcome conversations with governments, clinical
                  institutions, researchers, technology partners and
                  funders.
                </p>
              </div>

              {/* Right */}
              <div className="flex md:justify-end md:items-end">
                <Link
                  href="/get-involved"
                  className="
                inline-flex
                w-auto
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#4E2D91]
                px-6
                py-3
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#3B2474]
                hover:shadow-xl
                md:gap-3
                md:px-8
                md:py-5
                md:text-[17px]
              "
                >
                  Get Involved
                  <FiArrowUpRight className="text-lg md:text-xl" />
                </Link>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>


  </main>;
}
