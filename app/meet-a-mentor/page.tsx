"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Mentor {
  id: string;
  name: string;
  category: string;
  role1: string;
  role2: string;
  languages?: string;
  badge: string;
  bio: string;
  fullBio: string;
  price: string;
  sessionDuration: string;
  rating: number;
  reviewsCount: number;
  studentsCount?: number;
  image: string;
  expertise: string[];
}

const MENTORS: Mentor[] = [
  {
    id: "yousuf-valakkulam",
    name: "Yousuf Valakkulam",
    category: "Leadership & Career",
    role1: "AI Strategy & Implementation Specialist",
    role2: "Executive Leadership & Career Transition Coach",
    languages: "Speaks English (Fluent), Malayalam (Native), Arabic (Basic)",
    badge: "✨ Visionary & Results-Driven",
    bio: "Empowering professionals to master AI integration and navigate high-stakes career transitions with strategic clarity and confidence.",
    fullBio:
      "Yousuf Valakkulam is an executive technology consultant and leadership mentor with 12+ years of experience helping enterprise leaders and ambitious professionals adapt to technological shifts, implement strategic workflows, and position themselves for high-value global leadership roles.",
    price: "₹2,000",
    sessionDuration: "60-min session",
    rating: 4.9,
    reviewsCount: 30,
    studentsCount: 45,
    image: "/courses/course-1.jpeg",
    expertise: ["AI Strategy", "Executive Career Pivot", "Leadership Presence", "Strategic Frameworks"],
  },
  {
    id: "nizar-babu",
    name: "Nizar Babu",
    category: "English & IELTS",
    role1: "Professional",
    role2: "Senior English Language Coach",
    languages: "Speaks English (Native), Malayalam (Native)",
    badge: "✨ Engaging and encouraging",
    bio: "Specialized in spoken fluency, accent refinement, and corporate English communication for high-impact careers.",
    fullBio:
      "Nizar Babu brings over a decade of high-impact language coaching, specializing in conversational English mastery, accent neutralization, and corporate presentation coaching for executives, professionals, and international job aspirants.",
    price: "₹1,500",
    sessionDuration: "60-min session",
    rating: 5,
    reviewsCount: 53,
    studentsCount: 26,
    image: "/courses/course-3.avif",
    expertise: ["Spoken Fluency", "Accent Softening", "Interview Readiness", "Corporate Communication"],
  },
  {
    id: "tariq-al-hashimi",
    name: "Dr. Tariq Al-Hashimi",
    category: "Arabic Language",
    role1: "Arabic Linguistics & Dialect Specialist",
    role2: "Senior Gulf Arabic & Diplomatic Language Coach",
    languages: "Speaks Arabic (Native), English (Fluent)",
    badge: "✨ Practical & Immersive",
    bio: "Helping expats, executives, and diplomats master Gulf & Levantine Arabic for effortless daily and corporate communication.",
    fullBio:
      "Dr. Tariq has taught Arabic across leading institutions in Dubai and Riyadh. His accelerated communicative approach emphasizes spoken colloquial Arabic used in modern business, everyday markets, and government interactions.",
    price: "₹2,200",
    sessionDuration: "60-min session",
    rating: 4.95,
    reviewsCount: 41,
    studentsCount: 38,
    image: "/courses/course-1.jpeg",
    expertise: ["Gulf Dialects", "Business Arabic", "Diplomatic Protocol", "Everyday Fluency"],
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    category: "English & IELTS",
    role1: "Certified IELTS Master Trainer",
    role2: "Former British Council Examiner & ESL Coach",
    languages: "Speaks English (Native), French (Conversational)",
    badge: "✨ High-Impact & Structured",
    bio: "Over 12 years preparing students for IELTS Academic & General Band 8.0+ with tailored mock interviews and band-boosting feedback.",
    fullBio:
      "Sarah Jenkins is a certified language specialist who has guided over 1,400 students across the globe to achieve top percentiles on IELTS, TOEFL, and Cambridge English examinations, specializing in speaking and writing criteria.",
    price: "₹2,500",
    sessionDuration: "60-min session",
    rating: 4.9,
    reviewsCount: 64,
    studentsCount: 52,
    image: "/courses/course-2.webp",
    expertise: ["IELTS Speaking Mock", "IELTS Writing Task 1 & 2", "Exam Strategies", "Grammar Precision"],
  },
  {
    id: "ahmed-mansoor",
    name: "Dr. Ahmed Mansoor",
    category: "Arabic Language",
    role1: "Business Arabic & GCC Etiquette Consultant",
    role2: "Corporate Bilingual Negotiator & Advisor",
    languages: "Speaks Arabic (Native), English (Fluent)",
    badge: "✨ Strategic & Culturally Nuanced",
    bio: "Training corporate teams and leaders to conduct high-stakes business meetings, tenders, and presentations across Saudi Arabia and the UAE.",
    fullBio:
      "Dr. Ahmed Mansoor consults for multinational corporations operating in GCC territories, equipping executives with bilingual negotiation dexterity and nuanced Arabian workplace etiquette.",
    price: "₹2,800",
    sessionDuration: "60-min session",
    rating: 5,
    reviewsCount: 38,
    studentsCount: 30,
    image: "/courses/course-3.avif",
    expertise: ["Bilingual Negotiations", "GCC Corporate Culture", "Executive Presentations", "Legal Arabic Terms"],
  },
  {
    id: "david-miller",
    name: "David Miller",
    category: "English & IELTS",
    role1: "Voice, Accent & Pronunciation Coach",
    role2: "Public Speaking & Executive Presentation Trainer",
    languages: "Speaks English (Native - Neutral Accent)",
    badge: "✨ Warm, Inspiring & Clear",
    bio: "Assisting international speakers to eliminate communication anxiety, neutralize heavy accents, and deliver commanding presentations.",
    fullBio:
      "David Miller is a renowned voice and elocution coach who works with TEDx speakers, executives, and educators to develop confident vocal resonance, clear diction, and natural English cadence.",
    price: "₹1,800",
    sessionDuration: "60-min session",
    rating: 4.88,
    reviewsCount: 29,
    studentsCount: 34,
    image: "/courses/course-2.webp",
    expertise: ["Accent Neutralization", "Vocal Cadence", "Public Speaking", "Overcoming Anxiety"],
  },
];

const CATEGORIES = [
  "All Category",
  "Arabic Language",
  "English & IELTS",
  "Leadership & Career",
];

export default function MeetAMentorPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMentorForBooking, setActiveMentorForBooking] = useState<Mentor | null>(null);
  const [activeMentorForProfile, setActiveMentorForProfile] = useState<Mentor | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingDate, setBookingDate] = useState("Tomorrow, 10:00 AM");

  const filteredMentors =
    selectedCategory === "All Category"
      ? MENTORS
      : MENTORS.filter((m) => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 ">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-black leading-tight">
              <span className="text-primary">Meet</span> a Mentor
            </h1>
            <p className="mt-3.5 text-gray-600 text-sm sm:text-base font-normal leading-relaxed">
              Connect with experienced mentors for personalised guidance. Get the clarity and direction you need to move forward.
            </p>
          </div>

          {/* Filter Dropdown Bar */}
          <div className="relative mb-6 sm:mb-8 flex justify-start">
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-2.5 bg-white border border-gray-200/90 hover:border-gray-300 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <span>{selectedCategory}</span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 z-30 mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 py-1.5 focus:outline-none animate-in fade-in-50 zoom-in-95 duration-150">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === cat
                        ? "bg-blue-50 text-primary font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mentors Stacked Cards */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-[24px] sm:rounded-[28px] border border-gray-200/80 p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col lg:flex-row items-start gap-5 sm:gap-7 justify-between"
              >
                {/* Left: Mentor Picture Container */}
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-2xl overflow-hidden relative flex-shrink-0 bg-[#e2e8f0]/60 border border-gray-100 shadow-sm mx-auto sm:mx-0">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    sizes="(max-width: 640px) 140px, 160px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Middle: Details & Meta */}
                <div className="flex-1 min-w-0 flex flex-col gap-2 w-full">
                  {/* Mentor Name */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    {mentor.name}
                  </h2>

                  {/* Meta Items with Icons */}
                  <div className="flex flex-col gap-1.5 mt-0.5 text-xs sm:text-[13.5px] text-gray-700 font-normal">
                    {/* Role 1: User icon */}
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0 stroke-[2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="truncate">{mentor.role1}</span>
                    </div>

                    {/* Role 2: Briefcase / Book icon */}
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0 stroke-[2]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="truncate">{mentor.role2}</span>
                    </div>

                    {/* Role 3: Languages Spoken icon */}
                    {mentor.languages && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400 flex-shrink-0 stroke-[2]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className="truncate">{mentor.languages}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlight Badge */}
                  <div className="mt-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11.5px] sm:text-xs font-semibold bg-linear-to-r from-primary/10 to-red-50 text-[#be185d]">
                      {mentor.badge}
                    </span>
                  </div>

                  {/* Bio snippet */}
                  <p className="mt-1.5 text-xs sm:text-[13.5px] text-gray-600 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {mentor.bio}
                  </p>

                  {/* Learn more button */}
                  <button
                    onClick={() => setActiveMentorForProfile(mentor)}
                    className="mt-1 text-xs sm:text-sm font-bold text-gray-900 underline underline-offset-4 hover:text-primary self-start transition-colors"
                  >
                    Learn more
                  </button>
                </div>

                {/* Right: Pricing, Ratings & Actions */}
                <div className="w-full lg:w-[220px] flex flex-col items-center lg:items-end justify-between self-stretch flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                  {/* Price Header */}
                  <div className="text-center lg:text-right">
                    <div className="text-2xl sm:text-[30px] font-extrabold text-black tracking-tight leading-none">
                      {mentor.price}
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-1">
                      {mentor.sessionDuration}
                    </div>
                  </div>

                  {/* Ratings & Reviews Stats */}
                  <div className="gap-2.5 my-3.5 text-[12px] sm:text-[15px]">
                    <div className="flex items-center gap-1 font-bold text-gray-900 mx-auto w-fit">
                      <span>{mentor.rating}</span>
                      <svg className="w-5 h-5 " viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-gray-500 text-[13px]">
                      {mentor.reviewsCount} reviews
                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="w-full flex flex-col gap-2.5">
                    <button
                      onClick={() => {
                        setActiveMentorForBooking(mentor);
                        setBookingConfirmed(false);
                      }}
                      className="w-full bg-primary hover:bg-[#004cd6] active:scale-[0.98] text-white text-sm font-bold py-3 px-5 rounded-xl shadow-md shadow-blue-500/20 text-center transition-all duration-200"
                    >
                      Book trial session
                    </button>
                    <button
                      onClick={() => setActiveMentorForProfile(mentor)}
                      className="w-full bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-800 text-sm font-semibold py-2.5 px-5 rounded-xl border border-gray-200 text-center transition-all duration-200"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {activeMentorForBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveMentorForBooking(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Session Requested!</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Your 60-minute trial session with <strong>{activeMentorForBooking.name}</strong> is scheduled for <strong>{bookingDate}</strong>. We sent the meeting details to your email.
                </p>
                <button
                  onClick={() => setActiveMentorForBooking(null)}
                  className="w-full bg-primary hover:bg-[#004cd6] text-white font-bold py-3 rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-xl overflow-hidden relative bg-gray-100 flex-shrink-0">
                    <Image
                      src={activeMentorForBooking.image}
                      alt={activeMentorForBooking.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{activeMentorForBooking.name}</h3>
                    <p className="text-xs text-gray-500">{activeMentorForBooking.role2}</p>
                    <p className="text-sm font-extrabold text-primary mt-0.5">{activeMentorForBooking.price} / 60-min</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase  mb-1.5">
                      Select Available Time Slot
                    </label>
                    <select
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="Tomorrow, 10:00 AM">Tomorrow, 10:00 AM - 11:00 AM</option>
                      <option value="Tomorrow, 02:30 PM">Tomorrow, 02:30 PM - 03:30 PM</option>
                      <option value="Tomorrow, 06:00 PM">Tomorrow, 06:00 PM - 07:00 PM</option>
                      <option value="Friday, 11:00 AM">Friday, 11:00 AM - 12:00 PM</option>
                      <option value="Saturday, 04:00 PM">Saturday, 04:00 PM - 05:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase  mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zain Salah"
                      defaultValue="Zain Salah"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      defaultValue="zain@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="w-full bg-primary hover:bg-[#004cd6] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all mt-2"
                  >
                    Confirm &amp; Reserve Session
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* View Profile Modal */}
      {activeMentorForProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveMentorForProfile(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-gray-100">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden relative bg-gray-100 flex-shrink-0 shadow-md">
                <Image
                  src={activeMentorForProfile.image}
                  alt={activeMentorForProfile.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#fce7f3] text-[#be185d] mb-2">
                  {activeMentorForProfile.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900">{activeMentorForProfile.name}</h3>
                <p className="text-sm font-medium text-gray-600 mt-1">{activeMentorForProfile.role2}</p>
                <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 text-sm">
                  <span className="font-bold text-gray-900 flex items-center gap-1">
                    {activeMentorForProfile.rating} <span className="text-amber-400">★</span>
                  </span>
                  <span className="text-gray-500">({activeMentorForProfile.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase text-xs tracking-wider">About the Mentor</h4>
                <p className="text-gray-700 leading-relaxed">{activeMentorForProfile.fullBio}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Core Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {activeMentorForProfile.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-primary border border-blue-100 px-3 py-1 rounded-lg text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1.5 uppercase text-xs tracking-wider">Language Fluency</h4>
                <p className="text-gray-700">{activeMentorForProfile.languages}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-500 block">Session Fee</span>
                  <span className="text-2xl font-extrabold text-black">{activeMentorForProfile.price}</span>
                  <span className="text-xs text-gray-500 ml-1">/ 60-min</span>
                </div>

                <button
                  onClick={() => {
                    const m = activeMentorForProfile;
                    setActiveMentorForProfile(null);
                    setActiveMentorForBooking(m);
                    setBookingConfirmed(false);
                  }}
                  className="bg-primary hover:bg-[#004cd6] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
                >
                  Book trial session
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
