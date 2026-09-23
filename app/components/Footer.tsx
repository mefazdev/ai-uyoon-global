"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative w-full bg-white text-black pt-20 pb-20 overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-24 lg:pb-32">
            {/* Column 1: Logo & Navigation */}
            <div className="flex flex-col items-start">
              <div className="h-10 flex items-center mb-8">
                <Link href="/" className="block">
                  <Image
                    src="/logo.png"
                    alt="AL Uyoon Global"
                    width={150}
                    height={44}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
              </div>
              <ul className="flex flex-col gap-3.5 text-[15px] font-medium text-black">
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/meet-a-mentor" className="hover:text-primary transition-colors">
                    Faculty &amp; Mentors
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Admissions &amp; Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Explore */}
            <div className="flex flex-col items-start">
              <div className="h-10 flex items-center mb-8">
                <h4 className="text-base sm:text-[17px] font-bold text-black tracking-tight">
                  Language Programs
                </h4>
              </div>
              <ul className="flex flex-col gap-3.5 text-[15px] font-medium text-black">
                <li>
                  <Link href="#courses" className="hover:text-primary transition-colors">
                    Spoken Arabic Courses
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-primary transition-colors">
                    English &amp; IELTS Prep
                  </Link>
                </li>
                <li>
                  <Link href="#podcourses" className="hover:text-primary transition-colors">
                    Daily Audio Dialogues
                  </Link>
                </li>
                <li>
                  <Link href="#assessment" className="hover:text-primary transition-colors">
                    Free Level Assessment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Corporate Solutions */}
            <div className="flex flex-col items-start">
              <div className="h-10 flex items-center mb-8">
                <h4 className="text-base sm:text-[17px] font-bold text-black tracking-tight">
                  Corporate Solutions
                </h4>
              </div>
              <div className="flex flex-col items-start">
                <Link
                  href="#corporate"
                  className="text-[15px] font-medium text-black underline underline-offset-4 mb-8 hover:text-primary transition-colors"
                >
                  Bilingual Corporate Training
                </Link>
                <Link
                  href="#train-team"
                  className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white px-7 py-2.5 rounded-md text-[15px] font-medium transition-all duration-200"
                >
                  Train Your Workforce
                </Link>
              </div>
            </div>

            {/* Column 4: Download App */}
            <div className="flex flex-col items-start">
              <div className="h-10 flex items-center mb-8">
                <h4 className="text-base sm:text-[17px] font-bold text-black tracking-tight">
                  Download App
                </h4>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://play.google.com"
                  target="_blank"
                  className="hover:opacity-90 hover:scale-[1.02] transition-all duration-200 inline-block"
                >
                  <Image
                    src="/badges/google-play.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={42}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <Link
                  href="https://apple.com"
                  target="_blank"
                  className="hover:opacity-90 hover:scale-[1.02] transition-all duration-200 inline-block"
                >
                  <Image
                    src="/badges/app-store.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={42}
                    className="h-10 w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Grid: Mission, Socials, Copyright & Company Legal Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
            {/* Column 1: Mission, Socials & Copyright */}
            <div className="flex flex-col items-start">
              <p className="text-black text-[15px] leading-[1.65] max-w-[390px] mb-7 font-normal">
                AL Uyoon Global is the premier language institute dedicated to excellence in Arabic and English communication. We empower students, professionals, and organizations with fluency, confidence, and global career opportunities.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-5 mb-8 text-black">
                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  aria-label="YouTube"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.308 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>

                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>

                {/* X / Twitter */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  aria-label="X"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Link>

                {/* Email */}
                <Link
                  href="mailto:info@aluyoonglobal.com"
                  aria-label="Email"
                  className="hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </Link>
              </div>

              {/* Copyright */}
              <p className="text-black text-sm font-normal">
                © {new Date().getFullYear()} AL Uyoon Global. All rights reserved.
              </p>
            </div>

            {/* Column 2: COMPANY Header + Primary Links */}
            <div className="flex flex-col items-start">
              <h5 className="text-[13px] font-bold text-black uppercase tracking-wider mb-6">
                COMPANY
              </h5>
              <div className="flex flex-col gap-3.5 text-[15px] font-normal text-black">
                <Link href="#terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#guides" className="hover:text-primary transition-colors">
                  User Guides
                </Link>
                <Link href="#refund" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
                <Link href="#affiliate" className="hover:text-primary transition-colors">
                  Affiliate Terms
                </Link>
              </div>
            </div>

            {/* Column 3: Secondary Legal Links (Aligned with Terms of Service) */}
            <div className="flex flex-col items-start">

              <div className="text-[13px] font-bold opacity-0 uppercase tracking-wider mb-6 select-none" aria-hidden="true">
                COMPANY
              </div>
              <div className="flex flex-col gap-3.5 text-[15px] font-normal text-black">
                <Link href="#takedown" className="hover:text-primary transition-colors">
                  Take down policy
                </Link>
                <Link href="#dpa" className="hover:text-primary transition-colors">
                  Data Processing Addendum
                </Link>
                <Link href="#cookies" className="hover:text-primary transition-colors">
                  Cookies Policy
                </Link>
              </div>
            </div>

            {/* Column 4: Blank to balance 4 columns */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="Support contacts" className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/"
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* WhatsApp Icon */}
          <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.302-.78 0.98-.956 1.18-.176.201-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.497-.897-.799-1.503-1.787-1.68-2.088-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.527.15-.176.2-.302.301-.502.101-.2.05-.377-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517-.176-.01-.377-.01-.578-.01s-.527.075-.803.377c-.276.302-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.578-.087 1.78-.728 2.031-1.431.251-.703.251-1.306.176-1.431-.076-.125-.277-.2-.578-.351zM12.042 21.999c-1.81 0-3.585-.487-5.143-1.411l-.369-.219-3.824 1.003 1.021-3.727-.24-.382a9.972 9.972 0 0 1-1.529-5.267c0-5.514 4.486-10 10-10 2.671 0 5.182 1.04 7.071 2.929a9.939 9.939 0 0 1 2.929 7.071c0 5.514-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8 0 1.508.423 2.956 1.224 4.218l.458.721-.611 2.231 2.285-.599.699.415a7.962 7.962 0 0 0 3.945 1.014c4.411 0 8-3.589 8-8 0-4.411-3.589-8-8-8z" />
          </svg>

          {/* Unread Badge (1) */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[#25d366] text-[11px] font-bold flex items-center justify-center shadow-sm border border-gray-100">
            1
          </span>
        </Link>
      </aside>
    </>
  );
}
