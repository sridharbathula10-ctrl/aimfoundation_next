import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import HeroWhyItWorksCard from "./HeroWhyItWorksCard";
import SectionEyebrow from "./SectionEyebrow";

export default function HeroSection() {
  return (
    <section className="hero-section relative flex h-screen min-h-[760px] max-h-[920px] flex-col overflow-hidden bg-[#fffafd] text-[#402f5a] md:block max-md:h-auto max-md:max-h-none max-md:min-h-0 max-md:pb-7">

      {/* Background */}
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(#d9c8e0_1px,transparent_1px),linear-gradient(90deg,#d9c8e0_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 pt-[140px] md:px-12 md:pt-[185px]">

        <SectionEyebrow className="animate-[text-enter_.75s_ease-out_both]">AI &amp; MedTech Alliance Foundation</SectionEyebrow>

        <h1 className="mt-5 max-w-[900px] text-[clamp(40px,4.15vw,65px)] font-medium leading-[.98]">
          Healthcare Innovation,
          <br />
          Built For India&apos;s Public
          <br />
          Health System.
        </h1>

        <p className="hero-intro-copy mt-6 max-w-[500px] text-[#5f5269]">
          AIM Foundation is a Section 8 not-for-profit that designs,
          validates and delivers healthcare innovation with State
          Governments and clinical institutions.
        </p>

        <p className="hero-intro-copy mt-4 max-w-[500px] text-[#5f5269]">
          Our flagship, the Amaravati School of Biodesign, anchors this
          work. Every programme AIM builds sits under the School and is
          delivered through existing public health infrastructure.
        </p>

        <Link
          className="hero-involved-cta group mt-9 inline-flex items-center gap-2 rounded-full px-4 py-3 text-[13px] font-semibold"
          href="/get-involved"
        >
          Get Involved
          <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Mobile Why Card */}
        <div className="mt-8 flex justify-center md:hidden">
          <HeroWhyItWorksCard mobile />
        </div>

      </div>

      {/* Desktop Why Card */}
      <div className="hidden md:block">
        <HeroWhyItWorksCard />
      </div>

      {/* Robot */}
      <div className="relative z-10 order-3 mt-8 -mx-[27%] -mb-10 w-[155%] animate-[hero-image-enter_1s_ease-out_both,hero-image-float_7s_ease-in-out_1s_infinite] md:absolute md:inset-auto md:right-[-12vw] md:bottom-[-12%] md:mt-0 md:mx-0 md:my-0 md:w-[min(82vw,1280px)]">

        <div className="absolute inset-[22%_11%_3%_13%] -z-10 rounded-full bg-[#e4cdef]/60 blur-[75px]" />

        <Image
          className="block h-auto w-full"
          src="/images/aim-hero-robot.png"
          alt="AI-enabled robotic hand holding a DNA helix"
          width={1717}
          height={916}
          priority
        />
      </div>

    </section>
  );
}
