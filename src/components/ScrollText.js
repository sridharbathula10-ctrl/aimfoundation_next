"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollText({ as: Element = "p", text, className = "", delay = 0 }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setIsVisible(true);
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element ref={elementRef} className={`scroll-text ${isVisible ? "is-visible" : ""} ${className}`} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span className="scroll-text__word" style={{ transitionDelay: `${delay + Math.min(index, 18) * 35}ms` }} key={`${word}-${index}`}>{word}</span>
        ))}
      </span>
    </Element>
  );
}
