"use client";

import { useEffect } from "react";

const selector = "main h1, main h2, main h3, main p:not(.eyebrow):not(.scroll-text), main a:not(.brand)";

function wrapTextNodes(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("svg, script, style")) continue;
    if (node.nodeValue.trim()) textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    textNode.nodeValue.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/\s/.test(part)) {
        fragment.append(part);
        return;
      }
      const word = document.createElement("span");
      word.className = "scroll-word";
      word.textContent = part;
      fragment.append(word);
    });
    textNode.parentNode.replaceChild(fragment, textNode);
  });
}

export default function TextMotion() {
  useEffect(() => {
    const textElements = Array.from(document.querySelectorAll(selector));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-text-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    textElements.filter((element) => !element.closest(".hero-section, .statistics-section")).forEach((element) => {
      // Next can preserve a previously visited route in its client-side cache.
      // Its text has already been wrapped, but its old observer was disconnected
      // when the page was left. Always observe it again when Home becomes active.
      if (!element.querySelector(".scroll-word")) {
        wrapTextNodes(element);
      }
      element.classList.add("text-motion");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
