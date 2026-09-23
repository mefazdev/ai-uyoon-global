"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  isFeatured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Rostova",
    role: "Marketing Director (Relocated to Dubai)",
    avatar: "/avatars/avatar4.jpg",
    rating: 5,
    quote:
      "Moving to Dubai required me to learn conversational Gulf Arabic quickly. The interactive sessions and real-world dialogues at AL Uyoon Global gave me the confidence to lead client meetings in Arabic within 4 months!",
    isFeatured: false,
  },
  {
    id: "t2",
    name: "Marcus Sterling",
    role: "Regional Sales Lead, Qatar",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
    quote:
      "The Bilingual Corporate Communication program bridged a massive gap for our regional division. We can now present seamlessly in both English and Arabic with authentic cultural nuance.",
    isFeatured: true,
  },
  {
    id: "t3",
    name: "Dr. Julian Vance",
    role: "Academic Fellow (IELTS Band 8.5)",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
    quote:
      "Sarah Jenkins' IELTS coaching was phenomenal. The personalized writing critiques and rigorous speaking mocks directly helped me achieve an overall 8.5 band on my first attempt.",
    isFeatured: false,
  },
  {
    id: "t4",
    name: "Sophia Chen",
    role: "Senior Consultant, Riyadh",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
    quote:
      "What sets AL Uyoon Global apart is their focus on practical spoken fluency. Instead of boring grammar drills, every lesson gave me phrases I could use at work the very next morning.",
    isFeatured: false,
  },
];

export default function TestimonialsSection() {
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
    const cardWidth = container.querySelector(".testimonial-card-item")?.clientWidth || 380;
    const scrollAmount = (cardWidth + 24) * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#fafbfc] py-16 sm:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-black tracking-tight text-center mb-12 sm:mb-16">
          What Our Community Say
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Prev Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonials"
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all duration-200"
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
          )}

          {/* Navigation Next Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              aria-label="Next testimonials"
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.14)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Cards Scrollable Row */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4 pt-1 px-1 -mx-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className={`testimonial-card-item flex-none w-[300px] sm:w-[350px] md:w-[390px] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 snap-start select-none bg-white ${item.isFeatured
                    ? "border-2 border-black/85 shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                    : "border border-gray-150 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                  }`}
              >
                <div>
                  {/* Top Bar: Profile Avatar & Gold Stars */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0 bg-gray-100">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* 5 Rating Stars */}
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#f59e0b]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-gray-800 text-sm sm:text-[15px] font-normal leading-[1.65]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-5 border-t border-gray-100">
                  <h4 className="text-black font-extrabold text-base sm:text-[17px] tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium mt-0.5">
                    {item.role}
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
