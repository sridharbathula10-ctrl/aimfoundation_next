import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import HeroWhyItWorksCard from "./HeroWhyItWorksCard";
import SectionEyebrow from "./SectionEyebrow";

export default function HeroSection() {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero__inner">
        <div className="homepage-hero__content">
          <SectionEyebrow>AI &amp; MedTech Alliance Foundation</SectionEyebrow>

        <h1>
          Healthcare Innovation,
          <br />
          Built For India&apos;s Public
          <br />
          Health System.
        </h1>

        <p className="homepage-hero__intro">
          AIM Foundation is a Section 8 not-for-profit that designs,
          validates and delivers healthcare innovation with State
          Governments and clinical institutions.
        </p>

        <p className="homepage-hero__intro homepage-hero__intro--secondary">
          Our flagship, the Amaravati School of Biodesign, anchors this
          work. Every programme AIM builds sits under the School and is
          delivered through existing public health infrastructure.
        </p>

        <Link
          className="homepage-hero__cta"
          href="/get-involved"
        >
          Get Involved
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        </div>

        <div className="homepage-hero__visual-column">
          <div className="homepage-hero__artwork">
            <Image
              src="/images/aim-hero-robot.png"
              alt="AI-enabled robotic hand holding a DNA helix"
              width={1717}
              height={916}
              priority
            />
          </div>
          <HeroWhyItWorksCard mobile />
        </div>
      </div>
    </section>
  );
}
