"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type HeroSlide = {
  src: string;
  alt: string;
  label: string;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
};

const SLIDE_MS = 5000;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = useMemo(() => slides[activeIndex] ?? slides[0], [activeIndex, slides]);

  useEffect(() => {
    if (reduceMotion || slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  if (!activeSlide) {
    return null;
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-card bg-accent-soft shadow-strong">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.src}
            className="relative aspect-[4/5] sm:min-h-[520px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.52, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Image
              className="image-fill"
              src={activeSlide.src}
              alt={activeSlide.alt}
              width={980}
              height={1180}
              priority={activeIndex === 0}
              sizes="(max-width: 1180px) 92vw, 44vw"
            />
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              aria-label={`Показать фото: ${slide.label}`}
              aria-pressed={isActive}
              className={cn(
                "relative size-[66px] shrink-0 rounded-full p-[4px] transition duration-200 sm:size-[74px]",
                "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ring)]",
                isActive ? "scale-105 bg-accent shadow-soft" : "bg-white/78 hover:bg-white",
              )}
              data-active={isActive ? "true" : "false"}
              data-testid="hero-carousel-dot"
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span className="relative block size-full overflow-hidden rounded-full bg-white">
                <Image className="image-fill" src={slide.src} alt="" width={132} height={132} sizes="(max-width: 640px) 66px, 74px" />
              </span>
              {isActive && !reduceMotion ? (
                <motion.svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[-4px] rotate-[-90deg]"
                  viewBox="0 0 88 88"
                  key={`${activeIndex}-${slide.src}`}
                >
                  <motion.circle
                    cx="44"
                    cy="44"
                    r="41"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeLinecap="round"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                </motion.svg>
              ) : null}
            </button>
          );
        })}
      </div>

    </div>
  );
}
