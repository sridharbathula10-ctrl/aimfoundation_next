"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../ScrollReveal";
import ProgrammeTags from "./ProgrammeTags";
import BiodesignMethodCard from "../BiodesignMethodCard";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
} from "react-icons/fi";

const details = [
  [
    "What It Is",
    "A translational healthcare technology innovation and training platform in partnership with the Government of Andhra Pradesh, taught on the Stanford Biodesign method: identify clinical needs, invent solutions, implement them in practice.",
  ],
  [
    "Where It Is",
    "Ratan Tata Innovation Hub, Amaravati: an 8,000 sq. ft. facility committed to the programme.",
  ],
  [
    "Partners",
    "Government of Andhra Pradesh, Stanford Mussallem Center for Biodesign, Biodesign Australia, Biodesign Israel, AIG Hospitals, Indian School of Business, IIT Delhi.",
  ],
  [
    "Purpose",
    "To bring clinicians, engineers, startups and institutions together to design and validate healthcare solutions relevant to Indian public health needs, and to train fellows in the biodesign method.",
  ],
  [
    "Role In AIM",
    "The School is AIM Foundation's flagship. The programmes below are built under it.",
  ],
];

const supportText =
  "Support funds fellowship cohorts, prototyping facilities and the international faculty exchange that anchors the biodesign method in Amaravati.";

const heading =
  "text-[47px] font-medium leading-[.93] tracking-[-.073em] md:text-[clamp(47px,5.4vw,78px)]";

const schoolImages = [
  {
    src: "/images/bi/1.jpeg",
    alt: "Ratan Tata Innovation Hub, Amaravati",
  },
  {
    src: "/images/bi/2.png",
    alt: "Amaravati School of Biodesign",
  },
];

export default function FlagshipSchool() {
  const [currentImage, setCurrentImage] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  /* =========================================================
     MAIN CAROUSEL AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % schoolImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     OPEN MODAL
  ========================================================= */

  const openModal = () => {
    setModalImage(currentImage);
    setIsModalOpen(true);
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* =========================================================
     MAIN CAROUSEL NEXT
  ========================================================= */

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % schoolImages.length
    );
  };

  /* =========================================================
     MAIN CAROUSEL PREVIOUS
  ========================================================= */

  const previousImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + schoolImages.length) %
        schoolImages.length
    );
  };

  /* =========================================================
     MODAL NEXT
     
     NO AUTO SCROLL HERE
  ========================================================= */

  const nextModalImage = () => {
    setModalImage(
      (prev) => (prev + 1) % schoolImages.length
    );
  };

  /* =========================================================
     MODAL PREVIOUS
     
     NO AUTO SCROLL HERE
  ========================================================= */

  const previousModalImage = () => {
    setModalImage(
      (prev) =>
        (prev - 1 + schoolImages.length) %
        schoolImages.length
    );
  };

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        nextModalImage();
      }

      if (event.key === "ArrowLeft") {
        previousModalImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isModalOpen]);

  /* =========================================================
     LOCK BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* =====================================================
          MAIN SECTION
      ====================================================== */}

      <section
        className="bg-[#f2edf5] py-[84px] md:py-[135px]"
        aria-labelledby="school-heading"
      >
        <div className="mx-auto w-[calc(100%-48px)] max-w-[1304px] md:w-[min(100%-96px,1304px)]">

          {/* =================================================
              EYEBROW
          ================================================== */}

          <ScrollReveal>
            <p className="eyebrow eyebrow--dark !text-[13px] md:!text-[15px]">
              <span />
              Flagship · Amaravati School of Biodesign
            </p>
          </ScrollReveal>

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="mt-7 grid gap-8 border-b border-[#b6a7c355] pb-11 md:mt-9 md:grid-cols-[1.1fr_.9fr] md:gap-[9vw] md:pb-[30px]">

            <ScrollReveal>
              <h2
                id="school-heading"
                className={`${heading} transition duration-300 hover:text-[#7a2453]`}
              >
                Amaravati School
                <br />

                <span className="font-[family-name:var(--font-playfair)] font-medium tracking-[-.075em] not-italic">
                  of Biodesign
                </span>
              </h2>

              <p className="mt-5 font-mono text-[12px] font-semibold uppercase leading-[1.45] tracking-[.06em] text-[#8d245b]">
                Flagship · Translational Healthcare Technology Innovation
              </p>
            </ScrollReveal>

            <ScrollReveal
              delay={120}
              direction="left"
            >
              <ProgrammeTags
                featured
                items={[
                  "SDG 3 · Good Health and Well-being",
                  "SDG 9 · Industry, Innovation and Infrastructure",
                  "SDG 17 · Partnerships for the Goals",
                ]}
              />
            </ScrollReveal>

          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================== */}

          <div className="mt-4 grid gap-8 md:mt-[30px] md:grid-cols-[.75fr_1.25fr] md:gap-[9vw]">

            {/* =================================================
                LEFT COLUMN
            ================================================== */}

            <div className="order-2 self-start md:order-none">

              {/* BIODESIGN METHOD */}

              <ScrollReveal className="transition duration-500 hover:-translate-y-2">
                <BiodesignMethodCard />
              </ScrollReveal>

              {/* =================================================
                  IMAGE CAROUSEL
              ================================================== */}

              <ScrollReveal delay={100}>
                <div className="mt-5">

                  {/* IMAGE */}

                  <button
                    type="button"
                    onClick={openModal}
                    aria-label="Open image gallery"
                    className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[20px] border border-[#d1c3da] bg-[#402f5a] p-0 text-left shadow-[0_16px_34px_#4c356012]"
                  >
                    {schoolImages.map(
                      (image, index) => (
             <Image
  key={image.src}
  src={image.src}
  alt={image.alt}
  fill
  priority={index === 0}
  sizes="(max-width: 768px) calc(100vw - 48px), 330px"
  className={`object-contain transition-opacity duration-700 ${
    index === currentImage
      ? "opacity-100"
      : "pointer-events-none opacity-0"
  }`}
/>
                      )
                    )}
                  </button>

                  {/* =================================================
                      CONTROLS BELOW IMAGE
                  ================================================== */}

                  <div className="relative mt-4 min-h-[44px]">

                    {/* NUMBER */}

                    <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-3 font-mono text-[11px] font-semibold">

                      <span className="text-[#6f1748]">
                        {String(
                          currentImage + 1
                        ).padStart(2, "0")}
                      </span>

                      <span className="h-px w-8 bg-[#9d8ca8]" />

                      <span className="text-[#6f1748]">
                        {String(
                          schoolImages.length
                        ).padStart(2, "0")}
                      </span>

                    </div>

                    {/* ARROWS */}

                    <div className="flex items-end justify-end gap-2">

                      <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4b2777] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1748]"
                      >
                        <FiArrowLeft />
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4b2777] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1748]"
                      >
                        <FiArrowRight />
                      </button>

                    </div>

                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================== */}

            <div className="school-detail-list">

              {details.map(
                ([label, text], index) => (
                  <ScrollReveal
                    as="article"
                    className="school-detail-card grid gap-[9px] border-t border-[#b6a7c355] py-[22px] transition duration-300 hover:-translate-y-1 hover:border-[#8d245b] hover:bg-[#f8f3f8] hover:px-4 last:border-b md:grid-cols-[175px_1fr] md:gap-[26px] md:py-[25px]"
                    delay={index * 50}
                    key={label}
                  >

                    <h3 className="m-0 font-mono text-[12px] font-medium uppercase leading-[1.4] tracking-[.06em] text-[#785b8d]">
                      {label}
                    </h3>

                    <p className="m-0 text-[17px] font-medium leading-[1.68] tracking-[-.008em] text-[#44354e] md:text-[18px]">
                      {text}
                    </p>

                  </ScrollReveal>
                )
              )}

              {/* SUPPORT */}

              <div className="mt-7 border-t border-[#b6a7c355] pt-7">

                <ScrollReveal
                  className="relative isolate overflow-hidden rounded-[18px] bg-[#2a1d3d] p-6 text-[#fbf8fc] shadow-[0_18px_38px_#2a1d3d24]"
                  delay={280}
                >

                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-16 -z-10 h-44 w-44 rounded-full bg-[#c65492]/30 blur-[55px]"
                  />

                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[.14em] text-[#f0b3d1]">
                    How To Support
                  </p>

                  <p className="mt-4 max-w-[600px] text-[16px] font-medium leading-[1.65] text-[#eee5f2]">
                    {supportText}
                  </p>

                </ScrollReveal>

                <ScrollReveal delay={330}>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 border-b border-[#8d245b] pb-1 font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#6f1748] transition hover:gap-3 hover:text-[#8d245b]"
                    href="/get-involved"
                  >
                    Discuss Supporting The School
                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE MODAL
          MANUAL ONLY — NO AUTO SCROLL
      ====================================================== */}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#160d20]/90 p-4 backdrop-blur-sm md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >

          {/* MODAL WRAPPER */}

          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close image gallery"
              className="absolute right-2 top-2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-[#402f5a] md:right-4 md:top-4"
            >
              <FiX className="text-[22px]" />
            </button>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={previousModalImage}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2777] text-white shadow-lg transition-all duration-300 hover:-translate-x-1 hover:bg-[#6f1748] md:left-5"
            >
              <FiArrowLeft className="text-[20px]" />
            </button>

            {/* =================================================
                MODAL IMAGE
            ================================================== */}

            <div className="relative h-[75vh] w-[82vw] max-w-[1100px] md:h-[85vh]">

              <Image
                key={schoolImages[modalImage].src}
                src={schoolImages[modalImage].src}
                alt={schoolImages[modalImage].alt}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />

            </div>

            {/* NEXT */}

            <button
              type="button"
              onClick={nextModalImage}
              aria-label="Next image"
              className="absolute right-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2777] text-white shadow-lg transition-all duration-300 hover:translate-x-1 hover:bg-[#6f1748] md:right-5"
            >
              <FiArrowRight className="text-[20px]" />
            </button>

            {/* =================================================
                MODAL COUNTER
            ================================================== */}

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] font-semibold tracking-[.1em] text-white/80 md:bottom-4">
              {String(modalImage + 1).padStart(
                2,
                "0"
              )}

              <span className="mx-2 text-white/40">
                /
              </span>

              {String(
                schoolImages.length
              ).padStart(2, "0")}
            </div>

          </div>
        </div>
      )}
    </>
  );
}