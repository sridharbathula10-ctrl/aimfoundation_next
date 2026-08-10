import Link from "next/link";
import { FiArrowRight, FiHeart, FiThermometer } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import NutritionMetricCard from "./NutritionMetricCard";
import CohortMetricCard from "./CohortMetricCard";
import SectionEyebrow from "./SectionEyebrow";

const programmes = [
  {
    icon: FiHeart,
    number: "01",
    title: "Janani Mitra",
    category: "AI-Enabled Maternal Nutrition",
    description: "A digital maternal nutrition programme delivered through ASHA workers in Andhra Pradesh and Telangana, built on the internationally validated MDD-W method. Vetted by AIG Hospitals clinicians.",
    caption: "A daily dietary-diversity threshold of five food groups.",
    href: "/programmes#janani-mitra",
    link: "Read More About Janani Mitra",
  },
  {
    icon: FiThermometer,
    number: "02",
    title: "Gut Microbiome Study",
    category: "Population Health Research",
    description: "A population-scale study of the gut microbiome in rural Andhra Pradesh, where almost no Indian data exists. The study cohort is 90,000 participants, recruited through the Primary Health Centre network.",
    caption: "A 90,000-participant cohort recruited through the PHC network.",
    href: "/programmes#gut-microbiome-study",
    link: "Read More About The Study",
  },
];

export default function ProgrammesSection() {
  return (
  <section className="home-programmes-section mx-auto w-full max-w-[1400px] bg-[#F2ECF7] px-6 py-14 md:px-[clamp(38px,7vw,88px)]">
      <ScrollReveal><SectionEyebrow>Our Key Initiatives</SectionEyebrow><h2 className="mt-6 text-[clamp(38px,4.3vw,64px)] font-medium leading-[.92] tracking-[-.02em]">Built Under The School,<br />Delivered With Governments</h2><p className="mt-6 text-[17px] leading-[1.65] text-black md:text-[18px]">Each programme is developed under the Amaravati School of Biodesign and delivered in partnership with State Governments and clinical institutions, inside existing public health workflows.</p></ScrollReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        {programmes.map((programme, index) => {
          const Icon = programme.icon;
          return <ScrollReveal as="article" className="home-programme-card group relative flex min-h-[490px] flex-col overflow-hidden rounded-[12px] bg-white p-7 transition-all duration-500 motion-reduce:transition-none md:p-9" delay={index * 120} key={programme.title}>
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#50308d] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" />
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#dfc9f2]/0 blur-3xl transition duration-500 group-hover:bg-[#dfc9f2]/70 motion-reduce:transition-none" />
            <div className="relative flex items-start"><span className="grid h-8 w-8 place-items-center rounded-[6px] bg-[#F2ECF7] text-[#43286E]"><Icon className="text-[15px]" /></span></div>
            <h3 className="relative mt-7 text-[30px] font-semibold tracking-[-.02em] transition-colors duration-300 group-hover:text-[#50308d] motion-reduce:transition-none">{programme.title}</h3><p className="relative mt-2 font-mono text-[10px] font-semibold uppercase tracking-[.08em] text-black">{programme.category}</p><p className="relative mt-6 min-h-[112px] text-[16px] font-medium leading-[1.65] text-black">{programme.description}</p>
            <div className="mt-6">{index === 0 ? <NutritionMetricCard /> : <CohortMetricCard />}</div><p className="mt-6 text-[13px] font-medium leading-[1.45] text-black">{programme.caption}</p>
            <div className="relative mt-auto shrink-0"><Link className="home-programme-link inline-flex whitespace-nowrap items-center gap-1 border-b border-[#50308d] pb-1 text-[13px] font-bold" href={programme.href}>{programme.link} <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none" /></Link></div>
          </ScrollReveal>;
        })}
      </div>
    </section>
  );
}
