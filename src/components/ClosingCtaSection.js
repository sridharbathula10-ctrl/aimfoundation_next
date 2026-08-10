import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionEyebrow from "./SectionEyebrow";

export default function ClosingCtaSection() {
  return (
    <section
      className="bg-[#F7F5F8] px-5 py-16 md:px-12 md:py-24 lg:py-32"
      aria-labelledby="closing-cta-heading"
    >
      <div className="mx-auto max-w-[1304px]">
        <div className="closing-cta-card overflow-hidden">

          <div className="grid gap-10 px-6 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:px-16 md:py-20">

            {/* Left */}
            <ScrollReveal>

              <SectionEyebrow>Support AIM Foundation</SectionEyebrow>

              <h2
                id="closing-cta-heading"
                className="mt-6 max-w-[720px] text-[clamp(2rem,8vw,4.2rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#4E2D91] [text-wrap:balance]"
              >
                Support Programmes That Governments Already Deliver
              </h2>

              <p className="mt-6 max-w-[620px] text-[16px] leading-8 text-[#65566D] md:mt-8 md:text-[18px]">
                AIM Foundation operates programmes that need specific
                support to deliver at scale. Each one has a named
                requirement and a clear account of what your support
                will fund.
              </p>

            </ScrollReveal>

            {/* Button */}
            <ScrollReveal
              delay={180}
              direction="left"
              className="flex md:justify-end"
            >
              <Link
                href="/get-involved"
                className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#4E2D91] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#3B2474] hover:shadow-xl md:gap-3 md:px-10 md:py-5 md:text-lg"
              >
                Get Involved
                <FiArrowUpRight className="text-xl" />
              </Link>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
