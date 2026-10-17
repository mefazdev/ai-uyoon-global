"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutPlatformSection from "./components/AboutPlatformSection";
import Footer from "./components/Footer";
import CelebrationOverlay from "./components/CelebrationOverlay";

function HomeContent() {
  const searchParams = useSearchParams();
  const celebrate = searchParams.get("celebrate") === "true";

  return (
    <>
      {celebrate && <CelebrationOverlay />}
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutPlatformSection />
          {/* <TopCoursesSection /> */}
          {/* <ShapeFutureSection /> */}
          {/* <PodcoursesSection /> */}
          {/* <WhatsNewSection /> */}
          {/* <ExpertMentorsSection /> */}
          {/* <TestimonialsSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
