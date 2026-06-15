"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const cards = [
  { title: "OCHI", image: "images/demo_img7.png" },
  { title: "ORION", image: "images/demo_img9.png" },
  { title: "NODEX", image: "images/demo_img5.png" },
  { title: "OCHI", image: "images/demo_img6.png" },
  { title: "LEETX", image: "images/demo_img1.png" },
  { title: "NODEX", image: "images/demo_img3.png" },
  { title: "FRONTEND-GEN-AGENT", image: "images/demo_img11.png" },
  { title: "ORION", image: "images/demo_img10.png" },
  { title: "ORION", image: "images/demo_img8.png" },
  { title: "LEETX", image: "images/demo_img2.png" },
  { title: "NODEX", image: "images/demo_img4.png" },
];

const CLONE_COUNT = 3; // cards cloned on each side
const GAP = 24;
const AUTO_DELAY = 1800;

// Build: [last N clones] + [real cards] + [first N clones]
const clonesBefore = cards.slice(-CLONE_COUNT);
const clonesAfter = cards.slice(0, CLONE_COUNT);
const allSlides = [...clonesBefore, ...cards, ...clonesAfter];
const REAL_START = CLONE_COUNT; // index in allSlides where real cards begin

export default function MyCarousel() {
  // Start visually on first real card
  const [index, setIndex] = useState(REAL_START);
  const [animated, setAnimated] = useState(true);

  const [cardWidth, setCardWidth] = useState(400);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHoveredRef = useRef(false);
  const isJumping = useRef(false);

  const STEP = cardWidth + GAP;
  const totalSlides = allSlides.length;
  const realLastIndex = REAL_START + cards.length - 1;

  // Measure
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
      if (cardRef.current) setCardWidth(cardRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // After landing on a clone, silently jump to the real counterpart
  useEffect(() => {
    if (isJumping.current) return;

    if (index < REAL_START) {
      // landed on a before-clone → jump to real card at end
      const target = REAL_START + cards.length - CLONE_COUNT + (index - 0);
      isJumping.current = true;
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex(target);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true);
            isJumping.current = false;
          });
        });
      }, 620); // wait for slide animation to finish
      return () => clearTimeout(t);
    }

    if (index > realLastIndex) {
      // landed on an after-clone → jump to real card at start
      const target = REAL_START + (index - realLastIndex - 1);
      isJumping.current = true;
      const t = setTimeout(() => {
        setAnimated(false);
        setIndex(target);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimated(true);
            isJumping.current = false;
          });
        });
      }, 620);
      return () => clearTimeout(t);
    }
  }, [index, realLastIndex]);

  const centerOffset = containerWidth / 2 - cardWidth / 2;
  const translateX = centerOffset - index * STEP;

  const goTo = useCallback((i: number) => {
    setAnimated(true);
    setIndex(i);
  }, []);

  const slideNext = useCallback(() => goTo(index + 1), [index, goTo]);
  const slidePrev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Real index (0-based) for dot highlighting
  const realIndex = ((index - REAL_START) % cards.length + cards.length) % cards.length;

  const startAutoSlide = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => {
          setAnimated(true);
          return prev + 1;
        });
      }
    }, AUTO_DELAY);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => { if (autoTimerRef.current) clearInterval(autoTimerRef.current); };
  }, [startAutoSlide]);

  const resetTimer = useCallback(() => startAutoSlide(), [startAutoSlide]);

  const handlePrev = () => { slidePrev(); resetTimer(); };
  const handleNext = () => { slideNext(); resetTimer(); };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
    isDragging.current = false;
    dragStartX.current = null;
  };

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) handleNext();
    else if (delta < -50) handlePrev();
    dragStartX.current = null;
    resetTimer();
  };

  return (
    <div className="relative w-full py-12">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full md:w-30 w-6 z-10
        bg-gradient-to-r from-white via-white/60 to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full md:w-30 w-6 z-10
        bg-gradient-to-l from-white via-white/60 to-transparent" />

      {/* Overflow container */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <div
          className="flex gap-6 cursor-grab active:cursor-grabbing select-none"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: animated
              ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
            willChange: "transform",
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => {
            isDragging.current = false;
            isHoveredRef.current = false;
          }}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {allSlides.map((item, idx) => {
            const isActive = idx === index;
            return (
              <div
                key={idx}
                ref={idx === 0 ? cardRef : undefined}
                className="flex-shrink-0 w-[60vw] max-w-[400px] min-w-[200px]"
              >
                <div
                  className="relative h-70 w-full rounded-2xl bg-zinc-200 overflow-hidden group cursor-pointer"
                  style={{
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                  }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover opacity-90"
                      alt={item.title}
                      draggable={false}
                    />
                  </div>

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400 ease-out" />

                  {/* Expanding circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex items-center justify-center
                        w-10 h-10 rounded-full bg-[#2B2B2B] text-white
                        transition-all duration-400 ease-out
                        group-hover:w-20 group-hover:h-20"
                    >
                      <div className="flex-shrink-0 w-4 h-4">
                        <svg
                          className="w-full h-full transition-transform duration-400 ease-out group-hover:rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H8M17 7v9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[1.1rem] font-neo text-[#222222] mt-3 md:ml-2 ml-4">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nav arrows + dots */}
      <div className="flex md:mt-18 mt-8   items-center justify-center gap-3 mt-8 px-[10vw]">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-zinc-300 items-center justify-center
            text-zinc-700 hover:bg-zinc-100 transition-colors duration-200 cursor-pointer md:flex hidden"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-zinc-300 items-center justify-center
            text-zinc-700 hover:bg-zinc-100 transition-colors duration-200 cursor-pointer md:flex hidden"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5 ml-2">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(REAL_START + idx); resetTimer(); }}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: idx === realIndex ? "20px" : "6px",
                height: "6px",
                background: idx === realIndex ? "#2B2B2B" : "#D1D5DB",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}