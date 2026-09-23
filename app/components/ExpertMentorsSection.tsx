"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Mentor {
  id: string;
  name: string;
  title: string;
  image: string;
}

const MENTORS: Mentor[] = [
  {
    id: "tariq",
    name: "Dr. Tariq Al-Hashimi",
    title: "Head of Arabic Linguistics & Dialects",
    image: "/courses/course-1.jpeg",
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    title: "Senior Certified IELTS & ESL Trainer",
    image: "/courses/course-2.webp",
  },
  {
    id: "nizar",
    name: "Nizar Babu",
    title: "Master Corporate English Coach",
    image: "/courses/course-3.avif",
  },
  {
    id: "ahmed",
    name: "Dr. Ahmed Mansoor",
    title: "GCC Business Arabic & Etiquette Specialist",
    image: "/courses/course-1.jpeg",
  },
  {
    id: "david",
    name: "David Miller",
    title: "Accent Neutralization & Fluency Specialist",
    image: "/courses/course-2.webp",
  },
];

export default function ExpertMentorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Smooth continuous marquee scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8; // px per frame

    const step = () => {
      if (!isPaused && !isDraggingRef.current && container) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Drag-to-scroll handlers
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

  // Duplicated list for seamless infinite marquee loop
  const displayMentors = [...MENTORS, ...MENTORS];

  return (
    <section id="mentors" className="relative w-full bg-black py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title & See All Link */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold text-white tracking-tight leading-tight">
            Meet Our Expert Mentors
          </h2>

          <Link
            href="#mentors"
            className="group flex items-center gap-1.5 text-white/90 hover:text-white text-sm sm:text-base font-semibold transition-colors"
          >
            <span>See All</span>
            <svg
              className="w-4 h-4 stroke-[2.5] text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full -mx-4 sm:-mx-6 lg:-mx-8"
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
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none px-4 sm:px-6 lg:px-8 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayMentors.map((mentor, index) => (
              <div
                key={`${mentor.id}-${index}`}
                className="flex-none w-[270px] sm:w-[290px] md:w-[300px] h-[400px] sm:h-[420px] rounded-[28px] overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col"
              >
                {/* Image Container (75%) */}
                <div className="relative w-full h-[73%] bg-[#f8fafc] overflow-hidden flex items-end justify-center">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 270px, 300px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Info Container (27%) */}
                <div className="h-[27%] px-5 sm:px-6 py-4 flex flex-col justify-center bg-white border-t border-gray-100">
                  <h3 className="text-[#0f172a] font-bold text-base sm:text-lg leading-snug tracking-tight truncate">
                    {mentor.name}
                  </h3>
                  <p className="text-[#64748b] text-xs sm:text-[13px] font-medium mt-1 truncate">
                    {mentor.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
