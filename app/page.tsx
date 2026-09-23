import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TopCoursesSection from "./components/TopCoursesSection";
import ShapeFutureSection from "./components/ShapeFutureSection";
import PodcoursesSection from "./components/PodcoursesSection";
import WhatsNewSection from "./components/WhatsNewSection";
import ExpertMentorsSection from "./components/ExpertMentorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TopCoursesSection />
        <ShapeFutureSection />
        <PodcoursesSection />
        <WhatsNewSection />
        <ExpertMentorsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
