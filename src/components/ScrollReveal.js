"use client";

import { useEffect, useRef, useState } from "react";

const hiddenStates = {
  up: "translate-y-10 opacity-0",
  down: "-translate-y-10 opacity-0",
  left: "translate-x-10 opacity-0",
  right: "-translate-x-10 opacity-0",
};

export default function ScrollReveal({
  as: Element = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      {...props}
      ref={elementRef}
      className={`will-change-transform transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenStates[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Element>
  );
}
