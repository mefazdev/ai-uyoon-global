"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCard {
  id: string;
  subtitle: string;
  title: string;
  image: string;
  link: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    id: "spoken-arabic",
    subtitle: "I want to speak with confidence in",
    title: "SPOKEN GULF ARABIC",
    image: "/categories/languages.jpeg",
    link: "#courses",
  },
  {
    id: "ielts-toefl",
    subtitle: "I am aiming for top scores in",
    title: "IELTS & TOEFL SUCCESS",
    image: "/categories/education.jpeg",
    link: "#courses",
  },
  {
    id: "business-english",
    subtitle: "I want to lead global teams in",
    title: "BUSINESS ENGLISH",
    image: "/categories/business.jpeg",
    link: "#courses",
  },
  {
    id: "modern-standard-arabic",
    subtitle: "I want to master reading & writing in",
    title: "MODERN STANDARD ARABIC",
    image: "/categories/arts.jpeg",
    link: "#courses",
  },
  {
    id: "accent-neutralization",
    subtitle: "I want native-level clarity in",
    title: "ACCENT & PRONUNCIATION",
    image: "/categories/softskills.jpeg",
    link: "#courses",
  },


];

export default function ShapeFutureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Smooth continuous auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8; // px per frame

    const step = () => {
      if (!isPaused && !isDraggingRef.current && container) {
        container.scrollLeft += speed;
        // When scrolled past half the duplicated content, seamlessly reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Drag-to-scroll mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  // Double the list for seamless infinite loop
  const displayCards = [...CATEGORIES, ...CATEGORIES];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold text-black tracking-tight leading-tight">
          Shape Your Global Career.
        </h2>

        {/* Section Subtitle */}
        <p className="mt-4 text-center text-gray-700 text-sm sm:text-base md:text-[17px] max-w-3xl mx-auto font-normal leading-relaxed">
          Master Arabic and English to unlock global careers. Build fluency, ace exams, and lead internationally.   </p>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div
        className="mt-8 sm:mt-12 w-full relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseUpOrLeave();
        }}
      >
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none px-4 sm:px-8 py-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayCards.map((card, index) => (
            <Link
              key={`${card.id}-${index}`}
              href={card.link}
              className="flex-none w-[270px] sm:w-[300px] md:w-[320px] h-[430px] sm:h-[470px] md:h-[490px] rounded-[26px] overflow-hidden relative group shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] bg-neutral-900"
            >
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 270px, (max-width: 768px) 300px, 320px"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlay for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 pb-7 sm:pb-8 pt-12 px-5 flex flex-col items-center text-center z-10">
                <p className="text-white/85 text-xs sm:text-sm font-medium mb-1.5 drop-shadow-sm">
                  {card.subtitle}
                </p>
                <h3 className="text-white font-extrabold text-base sm:text-lg md:text-[21px] tracking-tight leading-snug uppercase drop-shadow-md">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
