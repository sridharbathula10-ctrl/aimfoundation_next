"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const navigation = [["Home", "/"], ["Programmes", "/programmes"], ["Who We Are", "/who-we-are"], ["Events & Media", "/events-and-media"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(`${href}/`);
  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 16);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="header-inner">
    <Link className="brand" href="/" aria-label="AIM Foundation home"><Image className="brand-logo" src="/images/aim-med-logo.webp" alt="" width={1600} height={800} priority /></Link>
    <nav className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">{navigation.map(([label, href]) => <Link key={href} href={href} className={isActive(href) ? "is-active" : ""} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link className={`mobile-involved ${isActive("/get-involved") ? "is-active" : ""}`} href="/get-involved" aria-current={isActive("/get-involved") ? "page" : undefined} onClick={() => setOpen(false)}>Get Involved <span>↗</span></Link></nav>
    <Link className={`header-cta ${isActive("/get-involved") ? "is-active" : ""}`} href="/get-involved" aria-current={isActive("/get-involved") ? "page" : undefined}>Get Involved <span>↗</span></Link><button type="button" className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /></button>
  </div></header>;
}
