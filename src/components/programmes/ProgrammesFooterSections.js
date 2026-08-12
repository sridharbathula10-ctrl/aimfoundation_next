"use client";

import Link from "next/link";
import {
    FiArrowLeft,
    FiArrowRight,
    FiArrowUpRight,
    FiX,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ScrollReveal from "../ScrollReveal";
import SectionEyebrow from "../SectionEyebrow";

const shell =
    "mx-auto max-w-[1304px] px-6 md:px-12";

const heading =
    "text-[clamp(34px,4vw,54px)] font-medium leading-[0.94] tracking-[-0.06em] text-[#4E2D91]";

/* =========================================================
   TELEMEDICINE IMAGES
========================================================= */

const pilotSlides = [
    {
        image: "/images/te/1.jpeg",
        alt: "Community healthcare worker supporting telemedicine delivery",
    },
    {
        image: "/images/te/2.jpeg",
        alt: "Telemedicine consultation",
    },
    {
        image: "/images/te/3.jpeg",
        alt: "AIM Foundation field programme",
    },
    {
        image: "/images/te/4.jpeg",
        alt: "AIM Foundation field programme",
    },
];

/* =========================================================
   COMPLETED PILOT
========================================================= */

export function CompletedPilot() {
    /* =======================================================
       SMALL CAROUSEL
    ======================================================== */

    const [currentSlide, setCurrentSlide] = useState(0);

    /* =======================================================
       MODAL
    ======================================================== */

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSlide, setModalSlide] = useState(0);

    /* =======================================================
       PORTAL
    ======================================================== */

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        };
    }, []);

    /* =======================================================
       SMALL CAROUSEL NEXT / PREVIOUS
    ======================================================== */

    const showSlide = (direction) => {
        setCurrentSlide((prev) => {
            const next =
                (prev + direction + pilotSlides.length) %
                pilotSlides.length;

            return next;
        });
    };

    /* =======================================================
       MODAL NEXT / PREVIOUS
    ======================================================== */

    const showModalSlide = (direction) => {
        setModalSlide((prev) => {
            const next =
                (prev + direction + pilotSlides.length) %
                pilotSlides.length;

            return next;
        });
    };

    /* =======================================================
       OPEN MODAL
    ======================================================== */

    const openModal = () => {
        setModalSlide(currentSlide);
        setIsModalOpen(true);
    };

    /* =======================================================
       CLOSE MODAL
    ======================================================== */

    const closeModal = () => {
        setIsModalOpen(false);
    };

    /* =======================================================
       SMALL CAROUSEL AUTO SCROLL
  
       AUTO CHANGES ONLY SMALL IMAGE
    ======================================================== */

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentSlide((prev) => {
                const next = prev + 1;

                return next >= pilotSlides.length
                    ? 0
                    : next;
            });
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    /* =======================================================
       KEYBOARD CONTROLS FOR MODAL
    ======================================================== */

    useEffect(() => {
        if (!isModalOpen) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
                return;
            }

            if (event.key === "ArrowLeft") {
                setModalSlide((prev) => {
                    const next = prev - 1;

                    return next < 0
                        ? pilotSlides.length - 1
                        : next;
                });
            }

            if (event.key === "ArrowRight") {
                setModalSlide((prev) => {
                    const next = prev + 1;

                    return next >= pilotSlides.length
                        ? 0
                        : next;
                });
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

    /* =======================================================
       LOCK PAGE SCROLL WHEN MODAL OPEN
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

    /* =======================================================
       CURRENT SMALL IMAGE
    ======================================================== */

    const slide = pilotSlides[currentSlide];

    return (
        <>
            {/* =====================================================
          COMPLETED PILOT SECTION
      ====================================================== */}

            <section
                className="bg-[#ede7f1] py-20 md:py-[106px]"
                aria-labelledby="pilot-heading"
            >
                <div
                    className={`${shell} grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,.76fr)] lg:items-end lg:gap-20`}
                >

                    {/* =================================================
              LEFT CONTENT
          ================================================== */}

                    <ScrollReveal>

                        <SectionEyebrow>
                            Completed Pilot · Telemedicine
                        </SectionEyebrow>

                        <h2
                            className={`${heading} mt-[22px]`}
                            id="pilot-heading"
                        >
                            Delivered End To End,
                            <br />

                            <span className="font-[family-name:var(--font-playfair)] font-medium tracking-[-.075em] not-italic">
                                Then Carried Forward
                            </span>
                        </h2>

                        <div className="mt-10 max-w-[650px] md:mt-12">

                            <p className="m-0 font-[family-name:var(--font-playfair)] text-[18px] font-medium leading-[1.5] text-[#3f3049] md:text-[20px]">
                                AIM Foundation ran a telemedicine pilot through government
                                health facilities in Andhra Pradesh, delivering over 1,487
                                consultations, 10 PHCs onboarded, 61 VHCs covered. Trained
                                20 doctors, 40+ ANMs.
                            </p>

                            <p className="mb-0 mt-[23px] text-[15px] font-medium leading-[1.63] text-[#52425d]">
                                The pilot has concluded, and its learnings inform how current
                                programmes are designed for delivery inside public health
                                systems.
                            </p>

                        </div>

                    </ScrollReveal>

                    {/* =================================================
              RIGHT IMAGE CAROUSEL
          ================================================== */}

                    <ScrollReveal
                        delay={140}
                        direction="left"
                        className="pilot-carousel"
                    >

                        {/* =================================================
                IMAGE WRAPPER

                ONLY ONE IMAGE IS RENDERED
                THIS FIXES THE SLIDE CHANGE ISSUE
            ================================================== */}

                        <button
                            type="button"
                            onClick={openModal}
                            aria-label="Open telemedicine image gallery"
                            className="pilot-carousel__image-wrap group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
                        >
                            <img
                                key={slide.image}
                                src={slide.image}
                                alt={slide.alt}
                                className="h-full w-full object-contain"
                            />
                        </button>

                        {/* =================================================
                CONTROLS
            ================================================== */}

                        <div className="pilot-carousel__controls">

                            {/* COUNTER */}

                            <span aria-live="polite">
                                {String(currentSlide + 1).padStart(
                                    2,
                                    "0"
                                )}

                                <i />

                                {String(pilotSlides.length).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            {/* ARROWS */}

                            <div>

                                <button
                                    type="button"
                                    onClick={() => showSlide(-1)}
                                    aria-label="Previous slide"
                                >
                                    <FiArrowLeft />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => showSlide(1)}
                                    aria-label="Next slide"
                                >
                                    <FiArrowRight />
                                </button>

                            </div>

                        </div>

                    </ScrollReveal>

                </div>
            </section>

            {/* =====================================================
          FULL SCREEN MODAL

          MODAL DOES NOT AUTO SCROLL
      ====================================================== */}

            {mounted &&
                isModalOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[999999] h-screen w-screen bg-[#160d20]/95 backdrop-blur-sm"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Telemedicine image gallery"
                        onClick={closeModal}
                    >

                        <div
                            className="relative flex h-screen w-screen items-center justify-center"
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        >

                            {/* =================================================
                  CLOSE
              ================================================== */}

                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Close image gallery"
                                className="absolute right-5 top-5 z-[1000000] flex h-12 w-12 items-center justify-center rounded-full bg-[#4E2D91] text-white shadow-xl transition-all duration-300 hover:rotate-90 hover:bg-[#6f1748] md:right-8 md:top-8"
                            >
                                <FiX className="text-[24px]" />
                            </button>

                            {/* =================================================
                  PREVIOUS
              ================================================== */}

                            <button
                                type="button"
                                onClick={() => showModalSlide(-1)}
                                aria-label="Previous image"
                                className="absolute left-4 top-1/2 z-[1000000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4E2D91] text-white shadow-xl transition-all duration-300 hover:-translate-x-1 hover:bg-[#6f1748] md:left-8 md:h-14 md:w-14"
                            >
                                <FiArrowLeft className="text-[20px]" />
                            </button>

                            {/* =================================================
                  LARGE IMAGE
              ================================================== */}

                            <div className="relative h-[90vh] w-[90vw] md:h-[94vh] md:w-[94vw]">

                                <img
                                    key={pilotSlides[modalSlide].image}
                                    src={pilotSlides[modalSlide].image}
                                    alt={pilotSlides[modalSlide].alt}
                                    className="h-full w-full object-contain"
                                />

                            </div>

                            {/* =================================================
                  NEXT
              ================================================== */}

                            <button
                                type="button"
                                onClick={() => showModalSlide(1)}
                                aria-label="Next image"
                                className="absolute right-4 top-1/2 z-[1000000] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4E2D91] text-white shadow-xl transition-all duration-300 hover:translate-x-1 hover:bg-[#6f1748] md:right-8 md:h-14 md:w-14"
                            >
                                <FiArrowRight className="text-[20px]" />
                            </button>

                            {/* =================================================
                  MODAL COUNTER
              ================================================== */}

                            <div className="absolute bottom-5 left-1/2 z-[1000000] -translate-x-1/2 rounded-full bg-[#160d20]/70 px-5 py-2 font-mono text-[11px] font-semibold tracking-[.12em] text-white backdrop-blur-md">
                                {String(modalSlide + 1).padStart(
                                    2,
                                    "0"
                                )}

                                <span className="mx-2 text-white/40">
                                    /
                                </span>

                                {String(pilotSlides.length).padStart(
                                    2,
                                    "0"
                                )}
                            </div>

                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

/* =========================================================
   PROGRAMMES CTA
========================================================= */

export function ProgrammesCta() {
    return (
        <section className="bg-[#F7F5F8] py-16 md:py-24 lg:py-32">

            <div className={shell}>

                <div className="closing-cta-card overflow-hidden">

                    <div className="grid gap-10 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:px-16 md:py-20">

                        {/* LEFT */}

                        <ScrollReveal>

                            <SectionEyebrow>
                                Support AIM Foundation
                            </SectionEyebrow>

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

                        {/* RIGHT */}

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