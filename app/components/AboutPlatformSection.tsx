"use client";

import Link from "next/link";

const KEY_INITIATIVES = [
  {
    title: "Global Membership",
    description: "Global membership for Arabic professionals and enthusiasts",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: "Community",
  },
  {
    title: "Expert-Led Training",
    description: "Expert-led lectures, workshops, and training programmes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    badge: "Education",
  },
  {
    title: "Research Collaborations",
    description: "Academic and research collaborations",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    badge: "Academics",
  },
  {
    title: "University Partnerships",
    description: "Partnerships with universities and language institutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    badge: "Alliance",
  },
  {
    title: "Specialised Programmes",
    description: "Specialised Arabic programmes for individuals and institutions",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    badge: "Institutions",
  },
  {
    title: "Academic Journeys & Exchange",
    description: "Academic journeys and cultural exchange programmes",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: "Exchange",
  },
];

export default function AboutPlatformSection() {
  return (
    <section id="about" className="scroll-mt-20 relative w-full bg-[#f8fafc] py-16 sm:py-24 border-y border-gray-100 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            About Us
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] font-extrabold text-black tracking-tight leading-[1.2]">
            A Global Platform for Arabic Language Education &amp; Linguistic Excellence
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            It is an international initiative of <span className="font-semibold text-primary">Al Uyoon Academy</span>, bringing together Arabic educators, academicians, researchers, professionals, and enthusiasts worldwide to promote Arabic language education, research, and cultural exchange.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision Card */}
          <div className="relative group bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(2,52,98,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none transition-all duration-300 group-hover:scale-110" />

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                {/* <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Purpose</span> */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">Vision</h3>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-[17px] leading-relaxed">
              To build a global community of Arabic experts and enthusiasts and contribute to the advancement and international presence of the Arabic language.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative group bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(2,52,98,0.1)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none transition-all duration-300 group-hover:scale-110" />

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                {/* <span className="text-xs font-bold uppercase tracking-wider text-primary">Strategic Focus</span> */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">Mission</h3>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-[17px] leading-relaxed">
              To provide innovative educational and professional opportunities through training, academic programmes, knowledge sharing, research, and international collaboration in Arabic language and education.
            </p>
          </div>
        </div>

        {/* Key Initiatives Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">What We Drive</span>
            <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Key Initiatives
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Transformative programs expanding global Arabic competency, academic research, and international partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {KEY_INITIATIVES.map((initiative, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#e8effc] text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {initiative.icon}
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {initiative.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {initiative.title}
                  </h4>

                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Explore Initiative</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action banner */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-primary to-[#012547] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              Join the Global Arabic Linguistic Community
            </h4>
            <p className="mt-2 text-white/80 text-sm sm:text-base max-w-xl">
              Connect with leading educators, researchers, and institutions shaping the future of Arabic language education worldwide.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              href="#courses"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm sm:text-base shadow-md hover:bg-gray-100 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
