"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

type AnimateScrollProviderProps = {
  children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

export default function AnimateScrollProvider({ children }: AnimateScrollProviderProps) {
  const main = useRef(null);
  const path = usePathname();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const gsapSelectors = document.querySelectorAll("[data-gsap]");

      gsapSelectors.forEach((selector, index) => {
        const type = selector.getAttribute("data-gsap");
        const timeline = gsap.timeline({
          defaults: { ease: "power3.inOut", duration: 1 },
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play",
          },
        });

        switch (type) {
          case "up":
            timeline.fromTo(
              selector,
              { opacity: 0, y: 200 },
              { y: 0, opacity: 1, immediateRender: false },
            );
            break;
          case "down":
            timeline.fromTo(
              selector,
              { opacity: 0, y: -200 },
              { y: 0, opacity: 1, immediateRender: false },
            );
            break;
          case "left":
            timeline.fromTo(
              selector,
              { opacity: 0, x: 200 },
              { x: 0, opacity: 1, immediateRender: false },
            );
            break;
          case "right":
            timeline.fromTo(
              selector,
              { opacity: 0, x: -200 },
              { x: 0, opacity: 1, immediateRender: false },
            );
            break;
          case "flip":
            timeline.fromTo(
              selector,
              { opacity: 0, rotateX: 90 },
              { rotateX: 0, opacity: 1, delay: index * 0.2, immediateRender: false },
            );
            break;
          default:
            break;
        }
      });
    }, main);

    return () => ctx.revert();
  }, [path]);

  return <>{children}</>;
}
