"use client";

import { useEffect, useState } from "react";

const CDN_URL = "https://cdn.nurexify.com";

function imageUrl(post) {
  const images = [
    ...(post.post_images?.thumbnail_icon || []),
    ...(post.post_images?.desktop_banner || []),
    ...(post.post_images?.mobile_banner || []),
  ].map((image) => image.file_url || image.original).filter((image) => /\.(avif|gif|jpe?g|png|webp)(?:\?.*)?$/i.test(image));
  const image = images[0];
  if (!image) return "";
  if (!image.startsWith("http")) return `${CDN_URL}/${image.replace(/^\//, "")}`;
  return image.replace("https://cdn.nurexify.com", CDN_URL);
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

function PostCard({ post }) {
  const image = imageUrl(post);
  return <article className="group overflow-hidden rounded-2xl border border-[#d8cbe0] bg-white shadow-[0_12px_28px_#4c35600b] transition duration-300 hover:-translate-y-1 hover:border-[#a84679]">
    <div className="aspect-[16/9] bg-[#e9dff0] bg-cover bg-center" style={image ? { backgroundImage: `url(${image})` } : undefined} aria-hidden="true" />
    <div className="p-6"><div className="flex items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[.12em] text-[#8d6a9f]"><span>{post.post_type}</span><time>{formatDate(post.published_on)}</time></div><h3 className="mt-7 text-[26px] font-medium leading-[1.04] tracking-[-.045em] text-[#50308d]">{post.title}</h3>{post.video_link && <a className="mt-6 inline-block border-b border-[#50308d] pb-1 text-[13px] font-semibold text-[#50308d]" href={post.video_link} target="_blank" rel="noreferrer">View coverage ↗</a>}</div>
  </article>;
}

export default function MediaTabs() {
  const [activeTab, setActiveTab] = useState("events");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/posts")
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Unable to load posts.");
        setPosts(result.posts);
      })
      .catch((requestError) => setError(requestError.message));
  }, []);

  const tabPosts = posts.filter(activeTab === "events" ? (post) => post.post_type === "Event" : (post) => post.post_type === "Media" || post.post_type === "Blog");

  return <>
    <div className="mt-12 flex w-fit rounded-full border border-[#cdbbd6] bg-white p-1" role="tablist" aria-label="Posts by type">
      {[['events', 'Events'], ['media', 'Media']].map(([id, label]) => <button key={id} type="button" role="tab" aria-selected={activeTab === id} onClick={() => setActiveTab(id)} className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition ${activeTab === id ? "bg-[#f4eef7] text-[#3f1f57]" : "text-[#50308d] hover:bg-[#f4eef7]"}`}>{label}</button>)}
    </div>
    {error && <p role="alert" className="mt-8 text-[#a84679]">{error}</p>}
    {!error && !posts.length && <p className="mt-8 text-[#5f5269]">Loading posts…</p>}
    {!error && posts.length > 0 && <div role="tabpanel" className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tabPosts.map((post) => <PostCard key={post.id || post.post_id} post={post} />)}</div>}
  </>;
}
