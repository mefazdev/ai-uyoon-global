"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  category: string;
  tag: string;
  instructor: string;
  duration: string;
  drops: string;
  image: string;
}

const COURSES: Course[] = [
  {
    id: "spoken-gulf-arabic",
    title: "Spoken Gulf Arabic ",
    category: "Arabic Mastery",
    tag: '',
    instructor: "Ustadh Tariq Al-Hashimi",
    duration: "2hr 40 min",
    drops: "36 Drops",
    image: "/courses/course-1.jpeg",
  },
  {
    id: "ielts-mastery",
    title: "Academic & General Test Prep",
    category: "English Exam Prep",
    tag: "HIGH RATED",
    instructor: "Sarah Jenkins",
    duration: "3hr 15 min",
    drops: "48 Drops",
    image: "/courses/course-2.webp",
  },
  {
    id: "business-arabic",
    title: "Business Arabic ",
    category: "Arabic Mastery",
    tag: "EXECUTIVE",
    instructor: "Dr. Ahmed Mansoor",
    duration: "2hr 10 min",
    drops: "32 Drops",
    image: "/courses/course-3.avif",
  },
  {
    id: "english-fluency",
    title: " English Fluency ",
    category: "English Mastery",
    tag: "POPULAR",
    instructor: "David Miller",
    duration: "2hr 25 min",
    drops: "40 Drops",
    image: "/courses/course-1.jpeg",
  },

];

export default function TopCoursesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.querySelector(".course-card-item")?.clientWidth || 360;
    const scrollAmount = (cardWidth + 24) * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="courses" className="relative w-full bg-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Top  Courses Of The Week
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Prev Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous courses"
            className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)] border border-gray-100 flex items-center justify-center text-gray-800 transition-all duration-200 ${canScrollLeft
              ? "opacity-100 hover:scale-105 hover:text-black cursor-pointer active:scale-95"
              : "opacity-35 pointer-events-none cursor-default"
              }`}
          >
            <svg
              className="w-5 h-5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next courses"
            className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)] border border-gray-100 flex items-center justify-center text-gray-800 transition-all duration-200 ${canScrollRight
              ? "opacity-100 hover:scale-105 hover:text-black cursor-pointer active:scale-95"
              : "opacity-35 pointer-events-none cursor-default"
              }`}
          >
            <svg
              className="w-5 h-5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards Scrollable Grid */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 px-1 -mx-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="course-card-item flex-none w-[290px] sm:w-[340px] md:w-[380px] aspect-square rounded-[34px] overflow-hidden relative group cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1.5 snap-start select-none bg-neutral-900"
              >
                {/* Background Image */}
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 290px, (max-width: 768px) 340px, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Dark Vignette Overlay for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35 pointer-events-none" />

                {/* Top Badge */}


                {/* Middle: Course Category & Title */}
                <div className="absolute inset-x-0 bottom-24 px-6 z-20">

                  <h3 className="text-white font-bold text-lg sm:text-[21px] leading-snug drop-shadow-md">
                    {course.title}
                  </h3>
                </div>

                {/* Bottom Bar: Instructor Info + Play Button */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 p-6 sm:p-7">
                  {/* Left: Instructor name & Duration */}
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm sm:text-[15px] tracking-tight">
                      {course.instructor}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/80 text-xs sm:text-[13px] font-medium mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 stroke-[2] text-white/85"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>
                        {course.duration}/{course.drops}
                      </span>
                    </div>
                  </div>

                  {/* Right: Circular White Play Button */}
                  <button
                    aria-label="Play course preview"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg text-black group-hover:scale-110 active:scale-95 transition-transform duration-200"
                  >
                    <svg
                      className="w-5 h-5 fill-black ml-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button: EXPLORE ALL LANGUAGE COURSES */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="#courses"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
