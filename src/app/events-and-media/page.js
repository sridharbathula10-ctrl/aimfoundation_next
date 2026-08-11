"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollProgress from "../../components/ScrollProgress";
import ScrollReveal from "../../components/ScrollReveal";
import SectionEyebrow from "../../components/SectionEyebrow";

const API_URL =
  "https://api.nurexify.com/api/elastic/getBlogList?lt=500";

const API_KEY = "21e52971e010cbc03a84cc834ebc27e3";

const CDN_URL = "https://cdn.nurexify.com";

const PLUM = "#50308d";
const DEEP_PLUM = "#43286E";
const ACTIVE_TAB_BACKGROUND = "#f4eef7";
const WHITE = "#ffffff";

const cardBase =
  "group flex flex-col overflow-hidden rounded-2xl border border-[#d8cbe0] bg-white shadow-[0_12px_28px_#4c35600b] transition duration-300 hover:-translate-y-1 hover:border-[#a84679] hover:shadow-[0_20px_38px_#4c356016]";

function SectionLabel({ children }) {
  return <SectionEyebrow>{children}</SectionEyebrow>;
}

/* =========================================================
   GET IMAGE
========================================================= */

function getImage(item) {
  const image =
    item?.post_images?.desktop_banner?.[0]?.original ||
    item?.post_images?.desktop_banner?.[0]?.file_url ||
    item?.post_images?.mobile_banner?.[0]?.original ||
    item?.post_images?.mobile_banner?.[0]?.file_url ||
    item?.post_images?.thumbnail_icon?.[0]?.original ||
    item?.post_images?.thumbnail_icon?.[0]?.file_url ||
    "";

  if (!image) {
    return null;
  }

  // API already returns complete URL
  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  // API returns /uploads/...
  return `${CDN_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

/* =========================================================
   GET DESCRIPTION
========================================================= */

function getDescription(item) {
  const value =
    item?.short_description ||
    item?.post_body ||
    "";

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   PAGE
========================================================= */

export default function EventsAndMediaPage() {
  const [posts, setPosts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Media selected by default
  const [activeTab, setActiveTab] = useState("media");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     API CALL
  ========================================================= */

  useEffect(() => {
    let cancelled = false;

    async function getPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authentication: API_KEY,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();

          console.error(
            "API ERROR:",
            response.status,
            errorText
          );

          throw new Error(
            `API request failed: ${response.status}`
          );
        }

        const result = await response.json();

        /*
         * API response:
         *
         * result.data.searchResult
         */

        const searchResult = Array.isArray(
          result?.data?.searchResult
        )
          ? result.data.searchResult
          : Array.isArray(result?.searchResult)
          ? result.searchResult
          : [];

        console.log(
          "SEARCH RESULT:",
          searchResult
        );

        if (!cancelled) {
          setPosts(searchResult);
        }
      } catch (err) {
        console.error(
          "GET EVENTS AND MEDIA ERROR:",
          err
        );

        if (!cancelled) {
          setError(
            "Failed to load Events and Media."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    getPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================================================
     EVENTS FILTER
  ========================================================= */

  const events = posts.filter((item) => {
    const category = String(
      item?.category_name || ""
    ).trim().toLowerCase();

    const type = String(
      item?.post_type || ""
    ).trim().toLowerCase();

    return (
      category === "event" &&
      type === "event"
    );
  });

  /* =========================================================
     MEDIA FILTER
  ========================================================= */

  const media = posts.filter((item) => {
    const category = String(
      item?.category_name || ""
    ).trim().toLowerCase();

    const type = String(
      item?.post_type || ""
    ).trim().toLowerCase();

    return (
      category === "media" &&
      type === "media"
    );
  });

  /* =========================================================
     CURRENT TAB DATA
  ========================================================= */

  const activeItems =
    activeTab === "media"
      ? media
      : events;
  const selectedImage = selectedItem ? getImage(selectedItem) : null;
  const selectedDescription = selectedItem ? getDescription(selectedItem) : "";

  return (
    <main className="bg-[#fbfafc] text-[#3f3049]">

      <ScrollProgress />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#fffafd] px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-[180px]">

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 opacity-55 [background-image:linear-gradient(#76528c12_1px,transparent_1px),linear-gradient(90deg,#76528c12_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <ScrollReveal className="mx-auto max-w-[1304px]">

          <SectionLabel>
            Events &amp; Media
          </SectionLabel>

          <h1 className="mt-6 max-w-[900px] text-[clamp(42px,5.5vw,74px)] font-medium leading-[.9] tracking-[-.07em] text-[#50308d]">
            Events And Media.
          </h1>

          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.6] text-[#5f5269] md:text-[18px]">
            Explore AIM Foundation&apos;s events,
            announcements and media coverage.
          </p>

        </ScrollReveal>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="bg-[#f4eef7] px-6 py-16 md:px-12 md:py-20">

        <div className="mx-auto max-w-[1304px]">

          {/* =================================================
              HEADING
          ================================================= */}

          <ScrollReveal>

        

          </ScrollReveal>

          {/* =================================================
              TABS
          ================================================= */}

          <ScrollReveal className="mt-8">

            <div
              role="tablist"
              aria-label="Events and Media"
              className="inline-flex rounded-full border border-[#50308d] bg-white p-1"
            >

              {/* =================================================
                  MEDIA
              ================================================= */}

              <button
                type="button"
                role="tab"
                aria-selected={
                  activeTab === "media"
                }
                onClick={() =>
                  setActiveTab("media")
                }
                className="rounded-full px-7 py-3 text-[14px] font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === "media"
                      ? ACTIVE_TAB_BACKGROUND
                      : WHITE,
                }}
              >
                <span
                  style={{
                    color:
                      activeTab === "media"
                        ? DEEP_PLUM
                        : PLUM,
                  }}
                >
                  Media
                </span>
              </button>

              {/* =================================================
                  EVENTS
              ================================================= */}

              <button
                type="button"
                role="tab"
                aria-selected={
                  activeTab === "events"
                }
                onClick={() =>
                  setActiveTab("events")
                }
                className="rounded-full px-7 py-3 text-[14px] font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === "events"
                      ? ACTIVE_TAB_BACKGROUND
                      : WHITE,
                }}
              >
                <span
                  style={{
                    color:
                      activeTab === "events"
                        ? DEEP_PLUM
                        : PLUM,
                  }}
                >
                  Events
                </span>
              </button>

            </div>

          </ScrollReveal>

          {/* =================================================
              ERROR
          ================================================= */}

          {!loading && error && (

            <div className="mt-8 rounded-2xl bg-red-50 p-5 text-center text-sm text-red-700">
              {error}
            </div>

          )}

          {/* =================================================
              LOADING
          ================================================= */}

          {loading ? (

            <div className="py-20 text-center">

              <p className="text-[#65566d]">
                Loading...
              </p>

            </div>

          ) : (

            <>

              {/* =================================================
                  EMPTY
              ================================================= */}

              {activeItems.length === 0 ? (

                <div className="py-20 text-center">

                  <p className="text-[#65566d]">
                    No{" "}
                    {activeTab === "media"
                      ? "media"
                      : "events"}{" "}
                    found.
                  </p>

                </div>

              ) : (

                /* =================================================
                   CARDS
                ================================================= */

                <div
                  className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                  role="tabpanel"
                  aria-label={
                    activeTab === "media"
                      ? "Media"
                      : "Events"
                  }
                >

                  {activeItems.map(
                    (item, index) => {

                      const image =
                        getImage(item);

                      const description =
                        getDescription(item);

                      return (

                        <ScrollReveal
                          as="article"
                          delay={index * 60}
                          role="button"
                          tabIndex={0}
                          aria-label={`Open ${item.title || "article"}`}
                          onClick={() => setSelectedItem(item)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              setSelectedItem(item);
                            }
                          }}
                          key={
                            item.id ||
                            item.post_id ||
                            item.slug ||
                            index
                          }
                          className={`${cardBase} min-h-[380px] cursor-pointer`}
                        >

                          {/* ===================================
                              IMAGE
                          ==================================== */}

                          {image ? (

                            <div className="h-[230px] overflow-hidden md:h-[260px]">

                              <img
                                src={image}
                                alt={
                                  item.title ||
                                  "AIM Foundation"
                                }
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              />

                            </div>

                          ) : (

                            <div className="flex h-[230px] items-center justify-center bg-[#eee5f2] md:h-[260px]">

                              <span
                                className="font-mono text-[10px] uppercase tracking-[.15em]"
                                style={{
                                  color: "#8d6a9f",
                                }}
                              >
                                AIM Foundation
                              </span>

                            </div>

                          )}

                          {/* ===================================
                              CONTENT
                          ==================================== */}

                          <div className="flex flex-1 flex-col p-6">

                            {/* TITLE */}

                            <h3
                              className="line-clamp-2 text-[21px] font-medium leading-[1.12] tracking-[-.035em]"
                              style={{
                                color: PLUM,
                              }}
                            >
                              {item.title}
                            </h3>

                            {/* DESCRIPTION */}

                            {description && (

                              <p className="mt-3 line-clamp-2 text-[13px] leading-[1.6] text-[#5f5269]">
                                {description}
                              </p>

                            )}

                            {/* ===================================
                                MEDIA LINK
                            ==================================== */}

                            {activeTab ===
                              "media" &&
                              item.video_link && (

                                <a
                                  href={
                                    item.video_link
                                  }
                                  onClick={(event) => event.stopPropagation()}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[12px] font-semibold"
                                  style={{
                                    color: PLUM,
                                  }}
                                >
                                  View Media

                                  <FiArrowUpRight
                                    aria-hidden="true"
                                  />

                                </a>

                              )}

                          </div>

                        </ScrollReveal>

                      );
                    }
                  )}

                </div>

              )}

            </>

          )}

        </div>

      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#221a30]/55 p-5"
          role="presentation"
          onMouseDown={() => setSelectedItem(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-dialog-title"
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <h2 id="article-dialog-title" className="text-[clamp(28px,4vw,44px)] font-medium leading-[1.05] tracking-[-.045em]" style={{ color: PLUM }}>
                {selectedItem.title}
              </h2>
              <button type="button" onClick={() => setSelectedItem(null)} className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold" aria-label="Close article">
                Close
              </button>
            </div>
            {selectedImage && <img src={selectedImage} alt="" className="mt-7 h-auto w-full rounded-xl object-contain" />}
            {selectedDescription && <p className="mt-7 whitespace-pre-line text-[16px] leading-[1.75] text-[#44354e]">{selectedDescription}</p>}
            {selectedItem.video_link && <a href={selectedItem.video_link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 border-b pb-1 text-sm font-semibold" style={{ color: PLUM, borderColor: PLUM }}>View Media <FiArrowUpRight aria-hidden="true" /></a>}
          </section>
        </div>
      )}

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#fffafd] px-6 py-16 md:px-12 md:py-20">

        <ScrollReveal className="closing-cta-card mx-auto grid max-w-[1304px] gap-8 overflow-hidden px-7 py-9 md:grid-cols-[1fr_auto] md:items-end md:px-14 md:py-12">

          <div>

            <SectionLabel>
              Stay Connected
            </SectionLabel>

            <h2
              className="mt-5 max-w-[650px] text-[clamp(34px,4vw,58px)] font-medium leading-[.95] tracking-[-.06em]"
              style={{
                color: PLUM,
              }}
            >
              Work with AIM Foundation.
            </h2>

            <p className="mt-5 max-w-[610px] text-[15px] leading-[1.65] text-[#65566d]">
              We welcome conversations with
              governments, clinical institutions,
              researchers, technology partners and
              funders.
            </p>

          </div>

          <a
            className="inline-flex w-fit items-center gap-3 rounded-full px-6 py-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5"
            style={{
              backgroundColor: "#402f5a",
            }}
            href="mailto:contact@aimfoundation.ai"
          >
            Contact Us

            <FiArrowUpRight
              aria-hidden="true"
            />

          </a>

        </ScrollReveal>

      </section>

    </main>
  );
}
