"use client";

import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import ScrollReveal from "../ScrollReveal";
import SectionEyebrow from "../SectionEyebrow";

const shell =
  "mx-auto max-w-[1304px] px-6 md:px-12";

const heading =
  "text-[clamp(34px,4vw,54px)] font-medium leading-[0.94] tracking-[-0.06em] text-[#4E2D91]";


const pilotSlides = [
  { image: "/images/ashaworker.png", alt: "Community healthcare worker supporting telemedicine delivery", label: "Care at the last mile" },
  { image: "/images/amt.jpeg", alt: "Telemedicine consultation", label: "Connected government facilities" },
  { image: "/images/gms.png", alt: "AIM Foundation field programme", label: "Learning carried forward" },
];

export function CompletedPilot() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const showSlide = (direction) => setCurrentSlide((slide) => (slide + direction + pilotSlides.length) % pilotSlides.length);
  const slide = pilotSlides[currentSlide];

  useEffect(() => {
    const interval = window.setInterval(() => showSlide(1), 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#ede7f1] py-20 md:py-[106px]" aria-labelledby="pilot-heading">
      <div className={`${shell} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.76fr)] lg:items-end lg:gap-20`}>
        <ScrollReveal>
          <SectionEyebrow>Completed Pilot · Telemedicine</SectionEyebrow>
          <h2 className={`${heading} mt-[22px]`} id="pilot-heading">Delivered End To End,<br /><span className="font-[family-name:var(--font-playfair)] font-medium tracking-[-.075em] not-italic">Then Carried Forward</span></h2>
          <div className="mt-10 max-w-[650px] md:mt-12">
            <p className="m-0 font-[family-name:var(--font-playfair)] text-[18px] font-medium leading-[1.5] text-[#3f3049] md:text-[20px]">AIM Foundation ran a telemedicine pilot through government health facilities in Andhra Pradesh, delivering over 1,487 consultations, 10 PHCs onboarded, 61 VHCs covered. Trained 20 doctors, 40+ ANMs.</p>
            <p className="mb-0 mt-[23px] text-[15px] font-medium leading-[1.63] text-[#52425d]">The pilot has concluded, and its learnings inform how current programmes are designed for delivery inside public health systems.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={140} direction="left" className="pilot-carousel">
          <div className="pilot-carousel__image-wrap">
            <img key={slide.image} className="pilot-carousel__image" src={slide.image} alt={slide.alt} />
            <p className="pilot-carousel__label">{slide.label}</p>
          </div>
          <div className="pilot-carousel__controls">
            <span aria-live="polite">{String(currentSlide + 1).padStart(2, "0")} <i /> {String(pilotSlides.length).padStart(2, "0")}</span>
            <div>
              <button type="button" onClick={() => showSlide(-1)} aria-label="Previous slide"><FiArrowLeft /></button>
              <button type="button" onClick={() => showSlide(1)} aria-label="Next slide"><FiArrowRight /></button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


export function ProgrammesCta() {
  return (
    <section className="bg-[#F7F5F8] py-16 md:py-24 lg:py-32">
      <div className={shell}>
        <div className="closing-cta-card overflow-hidden">

          <div className="grid gap-10 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:px-16 md:py-20">

            {/* Left */}
            <ScrollReveal>
              <SectionEyebrow>Support AIM Foundation</SectionEyebrow>

              <h2
                className="mt-6 max-w-[720px] text-[clamp(2rem,7vw,4.2rem)] font-medium leading-[0.94] tracking-[-0.06em] text-[#4E2D91] [text-wrap:balance]"
              >
                Every Programme Has
                <br className="hidden md:block" />
                <span className="font-[family-name:var(--font-playfair)] font-medium tracking-[-0.05em] not-italic">
                  A Named Requirement
                </span>
              </h2>

              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#65566D] md:mt-8 md:text-[18px]">
                Tell us which programme interests you and we&apos;ll send the
                corresponding budget, implementation approach, and outcome
                framework.
              </p>
            </ScrollReveal>

            {/* Right */}
            <ScrollReveal
              delay={140}
              direction="left"
              className="flex md:justify-end"
            >
              <Link
                href="/get-involved"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#4E2D91] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B2474] hover:shadow-xl md:gap-3 md:px-10 md:py-5 md:text-lg"
              >
                Get Involved
                <FiArrowUpRight className="text-lg md:text-xl" />
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
