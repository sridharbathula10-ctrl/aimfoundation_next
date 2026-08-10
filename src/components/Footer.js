import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const links = [["Home", "/"], ["Programmes", "/programmes"], ["Who We Are", "/who-we-are"], ["Events & Media", "/events-and-media"], ["Get Involved", "/get-involved"]];
export default function Footer() {
  return <footer className="site-footer"><div className="footer-glow" /><div className="footer-inner">
    <div className="footer-intro"><Link className="brand brand--footer" href="/" aria-label="AIM Foundation home"><Image className="brand-logo" src="/images/aim-med-logo.webp" alt="" width={1600} height={800} /></Link><p>Building healthcare innovation for India&apos;s public health system.</p><a className="footer-mail" href="mailto:contact@aimfoundation.ai">contact@aimfoundation.ai <span>↗</span></a><p className="footer-cin">CIN U86201TS2024NPL192456</p><p className="footer-registration">Registered under Sections 12A and 80G</p></div>
    <div className="footer-nav"><p className="footer-label">Explore</p>{links.map(([label, href]) => <Link key={href} href={href}>{label}<span>↗</span></Link>)}</div>
    <div className="footer-contact"><p className="footer-label">Registered Office</p><address>C 206, Trendset Rythme, Survey No. 7,<br />White Field Road, Kondapur,<br />Telangana 500 084, India</address><div className="social-links"><a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a><a href="#instagram" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a></div></div>
  </div><div className="footer-base"><p>© AIM Foundation (AI &amp; MedTech Alliance Foundation). All rights reserved.</p></div></footer>;
}
