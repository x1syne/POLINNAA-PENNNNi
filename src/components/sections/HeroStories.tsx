"use client";

import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";

const STORY_DURATION_MS = 5000;
const STORY_SHIFT_MS = 430;

type HeroStory = {
  src: string;
  alt: string;
  label: string;
};

type HeroStoriesProps = {
  slides: HeroStory[];
};

export function HeroStories({ slides }: HeroStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const orderedSlides = useMemo(() => {
    if (!slides.length) {
      return [];
    }

    const visibleCount = Math.min(slides.length, 7);
    return Array.from({ length: visibleCount }, (_, offset) => slides[(activeIndex + offset) % slides.length]);
  }, [activeIndex, slides]);

  const viewerSlide = viewerIndex === null ? null : slides[viewerIndex];
  const visibleViewerIndex = viewerIndex ?? 0;

  useEffect(() => {
    if (slides.length < 2 || viewerIndex !== null) {
      return;
    }

    let shiftTimer: number | undefined;
    const progressTimer = window.setTimeout(() => {
      setIsAdvancing(true);
      shiftTimer = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % slides.length);
        setIsAdvancing(false);
      }, STORY_SHIFT_MS);
    }, STORY_DURATION_MS);

    return () => {
      window.clearTimeout(progressTimer);
      if (shiftTimer) {
        window.clearTimeout(shiftTimer);
      }
    };
  }, [activeIndex, slides.length, viewerIndex]);

  useEffect(() => {
    if (viewerIndex === null || slides.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setViewerIndex((current) => (current === null ? null : (current + 1) % slides.length));
    }, STORY_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [slides.length, viewerIndex]);

  if (!slides.length) {
    return null;
  }

  return (
    <>
      <div className="stories-strip overflow-hidden lg:hidden" aria-label="Фото салона">
        <div className={isAdvancing ? "stories-strip-rail stories-strip-rail-shift" : "stories-strip-rail"}>
          {orderedSlides.map((slide, displayIndex) => {
            const sourceIndex = slides.findIndex((item) => item.src === slide.src);

            return (
              <button
                className={displayIndex === 0 && isAdvancing ? "story-button story-button-exit" : "story-button"}
                key={slide.src}
                type="button"
                onClick={() => {
                  setActiveIndex(sourceIndex);
                  setViewerIndex(sourceIndex);
                }}
                aria-label={`Открыть фото: ${slide.label}`}
              >
                <span className={displayIndex === 0 ? "story-ring story-ring-active" : "story-ring"}>
                  <span className="relative block size-[68px] overflow-hidden rounded-full bg-accent-soft">
                    <Image className="image-fill transition duration-500 group-active:scale-95" src={slide.src} alt="" width={136} height={136} sizes="68px" priority={displayIndex < 5} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {viewerSlide ? (
        <div className="story-viewer fixed inset-0 z-[90] bg-black lg:hidden" role="dialog" aria-modal="true">
          <div className="story-progress-row" aria-hidden="true">
            {slides.map((slide, index) => (
              <span className="story-progress-track" key={slide.src}>
                <span className={index < visibleViewerIndex ? "story-progress-fill story-progress-fill-done" : index === visibleViewerIndex ? "story-progress-fill story-progress-fill-active" : "story-progress-fill"} />
              </span>
            ))}
          </div>

          <button className="story-viewer-close" type="button" onClick={() => setViewerIndex(null)} aria-label="Закрыть фото">
            <X size={20} weight="bold" />
          </button>

          <button className="story-viewer-zone left-0" type="button" aria-label="Предыдущее фото" onClick={() => setViewerIndex((current) => (current === null ? null : (current - 1 + slides.length) % slides.length))} />
          <button className="story-viewer-zone right-0" type="button" aria-label="Следующее фото" onClick={() => setViewerIndex((current) => (current === null ? null : (current + 1) % slides.length))} />

          <div className="story-viewer-image" key={viewerSlide.src}>
            <Image className="object-contain" src={viewerSlide.src} alt={viewerSlide.alt} fill sizes="100vw" priority />
          </div>
        </div>
      ) : null}
    </>
  );
}
