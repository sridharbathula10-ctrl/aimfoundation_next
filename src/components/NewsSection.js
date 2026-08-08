import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionEyebrow from "./SectionEyebrow";

const coverage = [
  { publication: "Deccan Chronicle", date: "24 August 2025", headline: "Innovate From Telangana For World: Revanth", summary: "Chief Minister A. Revanth Reddy unveiled the state’s BioDesign vision at the APAC BioDesign Innovation Summit 2025, organised by AIM Foundation at AIG Hospitals.", href: "https://www.deccanchronicle.com/southern-states/telangana/innovate-from-telangana-for-world-says-revanth-unveils-states-biodesign-policy-promises-support-for-innovators-1899477" },
  { publication: "Business Standard", date: "24 August 2025", headline: "Hyderabad Rising In Biotech, Pharma, MedTech Innovation: Revanth Reddy", summary: "A Press Trust of India report on the summit and the state government’s commitment to support biodesign innovation with strong data privacy safeguards.", href: "https://www.business-standard.com/amp/india-news/hyderabad-rising-in-biotech-pharma-medtech-innovation-revanth-reddy-125082400609_1.html" },
  { publication: "Deccan Chronicle", date: "11 August 2025", headline: "Hyd Hosts APAC Biodesign Meet", summary: "A preview of the summit, bringing together leading Asia–Pacific programmes to translate medical device ideas from concept to application.", href: "https://www.deccanchronicle.com/southern-states/telangana/hyd-hosts-apac-biodesign-meet-1896893" },
];

function CitationCard({ item, official = false }) {
  return <article className={`news-card ${official ? "news-card--official" : ""}`}><div className="news-card__meta"><span>{item.publication}</span><time>{item.date}</time></div><h3>{item.headline}</h3><p>{item.summary}</p><a href={item.href} target="_blank" rel="noreferrer" className="news-card__link">Read the Article <FiArrowUpRight aria-hidden="true" /></a></article>;
}

export default function NewsSection() {
  const official = { publication: "Government of Andhra Pradesh", date: "20 January 2025", headline: "Janani Mitra Announced For Pilot In Anantapur District", summary: "The Health Minister’s office announced the AI-based Janani Mitra app, supporting nutrition tracking, anaemia detection and direct access for ASHA workers and ANMs.", href: "https://hmfw.ap.gov.in/" };
  return <section className="news-section" aria-labelledby="news-heading"><div className="news-section__inner"><ScrollReveal><SectionEyebrow>Third-party validation</SectionEyebrow><h2 id="news-heading">In the News</h2><p className="news-section__intro">Independent coverage of AIM Foundation&apos;s work in the national and regional press.</p></ScrollReveal><div className="news-grid">{coverage.map((item, index) => <ScrollReveal delay={index * 120} key={item.headline}><CitationCard item={item} /></ScrollReveal>)}</div><div className="news-official"><ScrollReveal><SectionEyebrow>Official announcement</SectionEyebrow><p className="!text-[14px] !leading-[1.55] md:!text-[15px]">From the Health Minister&apos;s office<br />20 January 2025</p></ScrollReveal><ScrollReveal delay={140} direction="left"><CitationCard item={official} official /></ScrollReveal></div><ScrollReveal delay={180}><Link className="news-section__all" href="/events-and-media">View All Coverage <FiArrowUpRight aria-hidden="true" /></Link></ScrollReveal></div></section>;
}
