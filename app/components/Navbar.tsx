"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-1.png"
              alt="AL Uyoon Global"
              width={140}
              height={40}
              className="h-8 sm:h-16 w-auto object-contain transition-transform group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <Link
              href="#courses"
              className="hover:text-black transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#english"
              className="hover:text-black transition-colors"
            >
              Live Coaching
            </Link>
            <Link
              href="/meet-a-mentor"
              className="hover:text-black transition-colors"
            >
              Meet Mentors
            </Link>

          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="#assessment"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            Login
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 flex flex-col gap-4 text-base font-medium shadow-lg animate-in slide-in-from-top-2 duration-200">
          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-blue-600 py-1"
          >
            Courses
          </Link>

          <Link
            href="#mentors"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-blue-600 py-1"
          >
            Live Coaching
          </Link>
          <Link
            href="/meet-a-mentor"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800 hover:text-blue-600 py-1"
          >
            Meet Mentors
          </Link>
          <div className="pt-3 border-t border-gray-100">
            <Link
              href="#assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
