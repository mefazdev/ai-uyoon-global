"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ROTATING_WORDS = [
  "Fluency",
  "Confidence",
  "Arabic",
  "English",
  "Bilingualism",
  "Career Growth",
  "Pronunciation",
  "Global Reach",
  "Mastery",
];

const DUMMY_HERO_VIDEOS = {
  mainShowcase: "LXb3EKWsInQ", // 4K Cinematic Nature & Motion Demo
  mentor1: "W6NZfCO5SIk",      // Programming & Tech Instructor / Arabic Coach
  mentor2: "iCvmsMzlF7o",      // Inspirational Speaker & English Coach
  mentor3: "8S0FDjFBj8o",      // Founder / Master Linguist Keynote
};

const getYouTubeEmbedUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1`;

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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="text-center font-extrabold text-4xl sm:text-5xl md:text-[62px] lg:text-[68px] tracking-tight leading-[1.12] text-black max-w-4xl mx-auto">
          A New{" "}
          <span
            key={currentWord}
            className="animate-word-in text-primary font-extrabold inline-block"
          >
            {currentWord}
          </span>{" "}
          of You,
          <br />
          Every Day.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          The Premier Arabic &amp; English Language Academy Built For Career Growth, Professionals &amp; Real-World Fluency
        </p>

        {/* Primary CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#courses"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white text-base sm:text-[17px] font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Start Your Language Journey</span>
            <svg
              className="w-4 h-4 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center -space-x-2.5">
            <Image
              src="/avatars/avatar1.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src="/avatars/avatar2.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src="/avatars/avatar3.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <Image
              src="/avatars/avatar4.jpg"
              alt="Learner"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            10,000+ Students Mastered Arabic &amp; English with AL Uyoon Global
          </span>
        </div>

        {/* Interactive Video Interface Showcase */}
        <div className="mt-10 sm:mt-12 w-full max-w-[1080px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_275px] gap-4 sm:gap-5 items-stretch">
            {/* Left: Main Showcase Card */}
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-gray-100/80 aspect-[16/10] sm:min-h-[380px] lg:min-h-[440px] bg-gradient-to-b from-[#70aeff] via-[#2f7ffa] to-[#0c66ee] flex items-center justify-center group">
              {/* Live Embedded YouTube Player */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <iframe
                  src={getYouTubeEmbedUrl(DUMMY_HERO_VIDEOS.mainShowcase)}
                  className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="AL Uyoon Global Main Showcase"
                />
              </div>

              {/* Ambient Centered Branding Banner fallback / overlay */}
              <div className="relative z-10 flex flex-col items-center text-center px-6 pointer-events-none drop-shadow-md">
                <p className="text-white/95 font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight lowercase select-none">
                  start your journey with <span className="font-extrabold normal-case">AL Uyoon Global</span>
                </p>
              </div>
            </div>

            {/* Right: 3 Stacked Mentor Video Cards */}
            <div className="flex flex-col justify-between gap-3.5 sm:gap-4 h-full">
              {/* Card 1: Arabic Language Instructor */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md bg-black h-[135px] sm:h-[138px] group hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src={getYouTubeEmbedUrl(DUMMY_HERO_VIDEOS.mentor1)}
                  className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Arabic Language Instructor"
                />
              </div>

              {/* Card 2: English & IELTS Coach */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md bg-black h-[135px] sm:h-[138px] group hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src={getYouTubeEmbedUrl(DUMMY_HERO_VIDEOS.mentor2)}
                  className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="English & IELTS Coach"
                />
              </div>

              {/* Card 3: Founder & Master Linguist */}
              <div className="relative rounded-[20px] overflow-hidden shadow-md bg-black h-[135px] sm:h-[138px] group hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src={getYouTubeEmbedUrl(DUMMY_HERO_VIDEOS.mentor3)}
                  className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] object-cover pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Founder & Master Linguist"
                />
                {/* Founder Badge Overlay */}
                <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-white tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  FOUNDER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Benefit Pill Cards */}
        <div className="mt-8 sm:mt-10 w-full max-w-[1080px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Arabic Courses */}
            <Link
              href="#courses"
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {/* Arabic / Language Icon */}
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-white stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight">
                  Arabic Courses
                </span>
              </div>
              {/* White Circular Arrow */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>

            {/* Card 2: English & IELTS */}
            <Link
              href="#english"
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {/* Book / Graduation Cap Icon */}
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 13.47L12 18.13l8.55-4.66V17L12 21.66 3.45 17v-3.53z" />
                  </svg>
                </div>
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight">
                  English
                </span>
              </div>
              {/* White Circular Arrow */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#0059ff] shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>

            {/* Card 3: 1-on-1 Mentors */}
            <Link
              href="/meet-a-mentor"
              className="bg-[#e8effc] hover:bg-[#dfe8fb] rounded-full px-5 sm:px-6 py-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="flex items-center gap-4">
                {/* Blue Circular Icon Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {/* Users / Mentors Icon */}
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
                <span className="text-black font-extrabold text-lg sm:text-xl tracking-tight">
                  1-on-1 Mentors
                </span>
              </div>
              {/* White Circular Arrow */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-[#0059ff] shadow-sm group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
