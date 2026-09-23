"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  thumbnail: string;
}

const VIDEOS: VideoItem[] = [


  {
    id: "v2",
    youtubeId: "W6NZfCO5SIk",
    title: "IELTS Band 8 Speaking Strategies: Real Mock Test Breakdown",
    channel: "AL Uyoon Global Academy",
    thumbnail: "/videos/video2.jpg",
  },
  {
    id: "v3",
    youtubeId: "8S0FDjFBj8o",
    title: "Business Arabic vs Modern Standard Arabic: Key Differences for Expats",
    channel: "AL Uyoon Global Academy",
    thumbnail: "/videos/video3.jpg",
  },
  {
    id: "v4",
    youtubeId: "iCvmsMzlF7o",
    title: "How to Stop Translating in Your Head & Think in English",
    channel: "AL Uyoon Global Academy",
    thumbnail: "/videos/video1.jpg",
  },
];

export default function WhatsNewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevVideo = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? VIDEOS.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === VIDEOS.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = VIDEOS[currentIndex];

  return (
    <section className="relative w-full bg-white py-14 sm:py-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-black tracking-tight text-center mb-8 sm:mb-12">
          What’s New
        </h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevVideo}
            aria-label="Previous video"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.18)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all duration-200"
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

          {/* Main Video Card */}
          <div className="w-full max-w-[1020px] aspect-[16/9] rounded-[24px] sm:rounded-[30px] overflow-hidden relative shadow-[0_16px_40px_rgba(0,0,0,0.14)] bg-black group">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer select-none"
              >
                {/* Thumbnail Image */}
                <Image
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  fill
                  priority
                  sizes="(max-width: 1020px) 100vw, 1020px"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                />

                {/* Top Video Header Bar */}
                <div className="absolute top-0 inset-x-0 p-4 sm:p-5 flex items-center gap-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0059ff] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-white font-extrabold text-xs tracking-tighter">
                      UG
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-white font-semibold text-xs sm:text-sm truncate drop-shadow-sm">
                      {currentVideo.title}
                    </span>
                    <span className="text-white/75 text-[11px] font-normal">
                      {currentVideo.channel}
                    </span>
                  </div>
                </div>

                {/* Center YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-16 h-11 sm:w-18 sm:h-12 bg-[#ff0000] rounded-2xl flex items-center justify-center shadow-[0_6px_20px_rgba(255,0,0,0.4)] group-hover:scale-110 group-hover:bg-[#cc0000] transition-all duration-200">
                    <svg className="w-6 h-6 fill-white ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Bar: Share & Watch on YouTube */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 text-white/90 text-xs sm:text-sm">
                  {/* Share Icon */}
                  <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                    <svg
                      className="w-5 h-5 stroke-[2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>

                  {/* Watch on YouTube link */}
                  <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity font-medium">
                    <span>Watch on</span>
                    <span className="font-extrabold text-white">YouTube</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={nextVideo}
            aria-label="Next video"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.18)] border border-gray-100 flex items-center justify-center text-gray-800 hover:text-black hover:scale-105 active:scale-95 transition-all duration-200"
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
        </div>
      </div>
    </section>
  );
}
