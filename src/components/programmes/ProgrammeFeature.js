"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "../ScrollReveal";
import ProgrammeTags from "./ProgrammeTags";
import Image from "next/image";
import Link from "next/link";
import NutritionMetricCard from "../NutritionMetricCard";
import CohortMetricCard from "../CohortMetricCard";
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
} from "react-icons/fi";

/* =========================================================
   PROGRAMME DIAGRAM
========================================================= */

function ProgrammeDiagram({ id }) {
  if (id === "janani-mitra") {
    return (
      <div
        aria-label="Five of ten MDD-W food groups"
        className="mx-auto w-full max-w-[350px]"
      >
        <NutritionMetricCard />
      </div>
    );
  }

  return (
    <div
      aria-label="Study cohort of 90,000 participants"
      className="mx-auto w-full max-w-[350px]"
    >
      <CohortMetricCard />
    </div>
  );
}

/* =========================================================
   PROGRAMME PHOTO CAROUSEL
========================================================= */

function ProgrammePhoto({ id }) {
  const isJanani = id === "janani-mitra";

  /* =======================================================
     IMAGES
  ======================================================== */

  const photos = isJanani
    ? [
        {
          src: "/images/jm/1.jpeg",
          alt: "ASHA worker supporting Janani Mitra",
        },
        {
          src: "/images/jm/2.jpeg",
          alt: "Janani Mitra community health programme",
        },
        {
          src: "/images/jm/3.png",
          alt: "Janani Mitra field activity",
        },
        {
          src: "/images/jm/4.png",
          alt: "Janani Mitra field activity",
        },
      ]
    : [
        {
          src: "/images/gm/GUT_1.jpeg",
          alt: "Gut Microbiome Study sample collection",
        },
        {
          src: "/images/gm/GUT_2.png",
          alt: "Gut Microbiome Study research activity",
        },
      ];

  /* =======================================================
     SMALL CAROUSEL STATE
  ======================================================== */

  const [currentImage, setCurrentImage] = useState(0);

  /* =======================================================
     MODAL STATE
  ======================================================== */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  /* =======================================================
     PORTAL MOUNT
  ======================================================== */

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  /* =======================================================
     SMALL CAROUSEL AUTO SCROLL

     ONLY SMALL CAROUSEL AUTO SCROLLS
     MODAL DOES NOT AUTO SCROLL
  ======================================================== */

  useEffect(() => {
    if (photos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = prev + 1;

        return next >= photos.length ? 0 : next;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [photos.length]);

  /* =======================================================
     NEXT SMALL IMAGE
  ======================================================== */

  const nextImage = () => {
    setCurrentImage((prev) => {
      const next = prev + 1;

      return next >= photos.length ? 0 : next;
    });
  };

  /* =======================================================
     PREVIOUS SMALL IMAGE
  ======================================================== */

  const previousImage = () => {
    setCurrentImage((prev) => {
      const next = prev - 1;

      return next < 0 ? photos.length - 1 : next;
    });
  };

  /* =======================================================
     OPEN MODAL
  ======================================================== */

  const openModal = () => {
    setModalImage(currentImage);
    setIsModalOpen(true);
  };

  /* =======================================================
     CLOSE MODAL
  ======================================================== */

  const closeModal = () => {
    setIsModalOpen(false);
  };

  /* =======================================================
     NEXT MODAL IMAGE

     MANUAL ONLY
     NO AUTO SCROLL
  ======================================================== */

  const nextModalImage = () => {
    setModalImage((prev) => {
      const next = prev + 1;

      return next >= photos.length ? 0 : next;
    });
  };

  /* =======================================================
     PREVIOUS MODAL IMAGE

     MANUAL ONLY
     NO AUTO SCROLL
  ======================================================== */

  const previousModalImage = () => {
    setModalImage((prev) => {
      const next = prev - 1;

      return next < 0 ? photos.length - 1 : next;
    });
  };

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================== */

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        return;
      }

      if (event.key === "ArrowRight") {
        setModalImage((prev) => {
          const next = prev + 1;

          return next >= photos.length ? 0 : next;
        });
      }

      if (event.key === "ArrowLeft") {
        setModalImage((prev) => {
          const next = prev - 1;

          return next < 0 ? photos.length - 1 : next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, photos.length]);

  /* =======================================================
     PREVENT PAGE SCROLL WHEN MODAL IS OPEN
  ======================================================== */

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
          SMALL IMAGE CAROUSEL
      ====================================================== */}

      <div className="mx-auto w-full max-w-[350px]">

        {/* ===================================================
            CLICKABLE SMALL IMAGE
        ==================================================== */}

        <button
          type="button"
          onClick={openModal}
          aria-label="Open image gallery"
          className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[22px] border border-[#d1c3da] bg-[#402f5a] p-0 text-left shadow-[0_18px_38px_#4c356018]"
        >
{photos.map((photo, index) => (
  <Image
    key={photo.src}
    src={photo.src}
    alt={photo.alt}
    fill
    priority={index === 0}
    sizes="(max-width: 768px) calc(100vw - 48px), 350px"
    className={`object-contain transition-opacity duration-700 ${
      index === currentImage
        ? "opacity-100"
        : "pointer-events-none opacity-0"
    }`}
  />
))}
        </button>

        {/* ===================================================
            CONTROLS BELOW IMAGE
        ==================================================== */}

        <div className="mt-4 flex items-center justify-between">

          {/* SLIDE NUMBER */}

          <div className="flex items-center gap-3 font-mono text-[11px] font-semibold">
            <span className="text-[#6f1748]">
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-[#9d8ca8]" />

            <span className="text-[#6f1748]">
              {String(photos.length).padStart(2, "0")}
            </span>
          </div>

          {/* ARROWS RIGHT */}

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4b2777] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1748]"
            >
              <FiArrowLeft className="text-[16px]" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4b2777] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6f1748]"
            >
              <FiArrowRight className="text-[16px]" />
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          FULL SCREEN IMAGE MODAL

          PORTAL:
          MODAL IS RENDERED DIRECTLY INSIDE BODY
          SO SCROLLREVEAL / GRID WILL NOT AFFECT IT.

          NO AUTO SCROLL
      ====================================================== */}

      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] h-screen w-screen bg-[#160d20]/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            onClick={closeModal}
          >
            {/* =================================================
                MODAL CONTAINER
            ================================================== */}

            <div
              className="relative flex h-screen w-screen items-center justify-center"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >

              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close image gallery"
                className="absolute right-5 top-5 z-[1000000] flex h-12 w-12 items-center justify-center rounded-full bg-[#4b2777] text-white shadow-xl transition-all duration-300 hover:rotate-90 hover:bg-[#6f1748] md:right-8 md:top-8"
              >
                <FiX className="text-[24px]" />
              </button>

              {/* =================================================
                  PREVIOUS MODAL ARROW
              ================================================== */}

              <button
                type="button"
                onClick={previousModalImage}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-[1000000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2777] text-white shadow-xl transition-all duration-300 hover:-translate-x-1 hover:bg-[#6f1748] md:left-8 md:h-14 md:w-14"
              >
                <FiArrowLeft className="text-[20px]" />
              </button>

              {/* =================================================
                  BIG IMAGE

                  ALMOST FULL SCREEN
              ================================================== */}

              <div className="relative h-[92vh] w-[92vw] md:h-[94vh] md:w-[94vw]">

                <Image
                  key={photos[modalImage].src}
                  src={photos[modalImage].src}
                  alt={photos[modalImage].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />

              </div>

              {/* =================================================
                  NEXT MODAL ARROW
              ================================================== */}

              <button
                type="button"
                onClick={nextModalImage}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-[1000000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4b2777] text-white shadow-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#6f1748] md:right-8 md:h-14 md:w-14"
              >
                <FiArrowRight className="text-[20px]" />
              </button>

              {/* =================================================
                  MODAL COUNTER
              ================================================== */}

              <div className="absolute bottom-5 left-1/2 z-[1000000] -translate-x-1/2 rounded-full bg-[#160d20]/70 px-5 py-2 font-mono text-[11px] font-semibold tracking-[.12em] text-white backdrop-blur-md">
                {String(modalImage + 1).padStart(2, "0")}

                <span className="mx-2 text-white/40">
                  /
                </span>

                {String(photos.length).padStart(2, "0")}
              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}

/* =========================================================
   PROGRAMME FEATURE
========================================================= */

export default function ProgrammeFeature({ programme }) {
  const support = programme.details.find(
    ([label]) => label === "How To Support"
  );

  const details = programme.details.filter(
    ([label]) => label !== "How To Support"
  );

  const isJanani = programme.id === "janani-mitra";

  return (
    <article
      className="group mt-[59px]  first:mt-[59px] [&+article]:border-t [&+article]:border-[#c8bdce] [&+article]:pt-[60px] md:mt-[93px] md:[&+article]:pt-[88px]"
      id={programme.id}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className={`grid gap-8 border-b border-[#b6a7c355] pb-8 md:grid-cols-[1.1fr_.9fr] md:gap-[9vw] ${
          isJanani ? "md:pb-10" : "md:pb-[70px]"
        }`}
      >

        <ScrollReveal>
          <h3 className="m-0 max-w-[650px] text-[47px] font-medium leading-[.93] tracking-[-.073em] text-[#53318f] transition duration-300 group-hover:text-[#7a2453] md:text-[clamp(47px,5.4vw,78px)]">
            {programme.name}
          </h3>

          <p className="mt-5 font-mono text-[12px] font-semibold uppercase leading-[1.45] tracking-[.06em] text-[#8d245b]">
            {programme.strapline}
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={120}
          direction="left"
        >
          <ProgrammeTags
            featured
            twoLine
            twoColumn={programme.id === "janani-mitra"}
            items={programme.tags}
          />
        </ScrollReveal>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`grid gap-8 md:grid-cols-[.75fr_1.25fr] md:gap-[9vw] ${
          isJanani
            ? "mt-8 md:mt-10"
            : "mt-11 md:mt-[67px]"
        }`}
      >

        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}

        <div className="order-2 self-start md:order-none">

          {/* PROGRAMME DIAGRAM */}

          <ScrollReveal className="transition duration-500 hover:-translate-y-2">
            <ProgrammeDiagram id={programme.id} />
          </ScrollReveal>

          {/* PROGRAMME PHOTO */}

          <ScrollReveal
            delay={100}
            className="mt-5"
          >
            <ProgrammePhoto id={programme.id} />
          </ScrollReveal>

        </div>

        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}

        <div>

          {/* PROGRAMME DETAILS */}

          {details.map(
            ([label, text], index) => (
              <ScrollReveal
                as="article"
                className="grid gap-[9px] border-t border-[#b6a7c355] py-[22px] transition duration-300 hover:-translate-y-1 hover:border-[#8d245b] hover:bg-[#f8f3f8] hover:px-4 last:border-b md:grid-cols-[175px_1fr] md:gap-[26px] md:py-[25px]"
                delay={index * 50}
                key={label}
              >
                <h4 className="m-0 font-mono text-[12px] font-medium uppercase leading-[1.4] tracking-[.06em] text-[#785b8d]">
                  {label}
                </h4>

                <p className="m-0 text-[17px] font-medium leading-[1.68] tracking-[-.008em] text-[#44354e] md:text-[18px]">
                  {text}
                </p>
              </ScrollReveal>
            )
          )}

          {/* =================================================
              SUPPORT
          ================================================== */}

          {support && (
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
                  {support[1]}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={330}>
                <Link
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#8d245b] pb-1 font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-[#6f1748] transition hover:gap-3 hover:text-[#8d245b]"
                  href="/get-involved"
                >
                  Discuss Supporting {programme.name}

                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </ScrollReveal>

            </div>
          )}

        </div>
      </div>
    </article>
  );
}