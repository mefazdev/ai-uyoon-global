"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ROTATING_WORDS = [
  "Confidence",
  "Career Growth",
  "Pronunciation",
  "Global Reach",
  "Mastery",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentWord = ROTATING_WORDS[wordIndex];

  return (
    <section className="relative w-full bg-white pt-10 sm:pt-14 pb-16 overflow-hidden">
      {/* ── Ambient Background Glows & Floating Atmosphere ── */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none animate-hero-float" />
      <div className="absolute top-16 -right-28 w-[420px] h-[420px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none animate-hero-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#023462 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />




      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Global Platform Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-primary text-xs sm:text-sm font-semibold mb-5 shadow-xs transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-sm"
          style={{ animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span>A Global Platform for Arabic Language Education &amp; Linguistic Excellence</span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-center font-extrabold text-4xl sm:text-5xl md:text-[62px] lg:text-[68px] tracking-tight leading-[1.12] text-black max-w-4xl mx-auto"
          style={{
            animation: "fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
            opacity: 0,
          }}
        >
          A New{" "}
          <span
            key={currentWord}
            className="animate-word-in text-primary font-extrabold inline-block"
          >
            {currentWord}
          </span>{" "}
          <br />
          Every Day.
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          style={{
            animation: "fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s forwards",
            opacity: 0,
          }}
        >
          The Premier Arabic &amp; English Language Platform Built For Career Growth, Professionals &amp; Real-World Fluency
        </p>

        {/* Primary CTA Button */}
        <div
          className="mt-8 flex justify-center"
          style={{
            animation: "fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
            opacity: 0,
          }}
        >
          <Link
            href="#courses"
            className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white text-base sm:text-[17px] font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none animate-shine-sweep" />
            <span className="relative z-10">Start Your Language Journey</span>
            <svg
              className="relative z-10 w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Social Proof */}
        <div
          className="mt-6 flex items-center justify-center gap-3"
          style={{
            animation: "fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s forwards",
            opacity: 0,
          }}
        >
          <div className="flex items-center -space-x-2.5">
            <Image
              src="/avatars/avatar1.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer"
            />
            <Image
              src="/avatars/avatar2.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer"
            />
            <Image
              src="/avatars/avatar3.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer"
            />
            <Image
              src="/avatars/avatar4.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-200 hover:scale-125 hover:z-20 cursor-pointer"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-1.5">
            <span className="text-amber-500 font-bold tracking-tighter">★★★★★</span>
            <span>2,000+ Students Mastered Arabic with AL Uyoon Global</span>
          </span>
        </div>

        {/* Bottom 3 Benefit Pill Cards */}
        <div className="mt-8 sm:mt-10 w-full max-w-[1080px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Arabic Courses */}
            <div
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 border border-transparent hover:border-blue-200/60 group cursor-pointer"
              style={{
                animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.65s forwards",
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-white stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors duration-200">
                  Arabic Courses
                </span>
              </div>
            </div>

            {/* Card 2: English & IELTS */}
            <div
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 border border-transparent hover:border-blue-200/60 group cursor-pointer"
              style={{
                animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s forwards",
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 13.47L12 18.13l8.55-4.66V17L12 21.66 3.45 17v-3.53z" />
                  </svg>
                </div>
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors duration-200">
                  Global membership
                </span>
              </div>
            </div>

            {/* Card 3: 1-on-1 Mentors */}
            <div
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 border border-transparent hover:border-blue-200/60 group cursor-pointer"
              style={{
                animation: "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.85s forwards",
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-white stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors duration-200">
                  1-on-1 Mentors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
