"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

/* ──────────────────────────── types ──────────────────────────── */
interface FloatingOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FLOATING_ORBS: FloatingOrb[] = [
  { id: 1, x: 15, y: 20, size: 320, duration: 18, delay: 0 },
  { id: 2, x: 75, y: 15, size: 280, duration: 22, delay: 1.5 },
  { id: 3, x: 85, y: 70, size: 350, duration: 20, delay: 3 },
  { id: 4, x: 10, y: 75, size: 260, duration: 24, delay: 0.8 },
  { id: 5, x: 50, y: 85, size: 300, duration: 19, delay: 2 },
  { id: 6, x: 45, y: 10, size: 220, duration: 21, delay: 4 },
];

/* ═══════════════════════ LAUNCH PAGE ═════════════════════════ */
export default function LaunchPageRoute() {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "countdown">("idle");
  const [countdownValue, setCountdownValue] = useState(4);
  const [buttonHover, setButtonHover] = useState(false);

  /* ── countdown ticker → navigate to home ── */
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdownValue <= 0) {
      router.push("/?celebrate=true");
      return;
    }
    const t = setTimeout(() => setCountdownValue((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdownValue, router]);

  const handleLaunch = () => {
    setCountdownValue(3);
    setPhase("countdown");
  };

  /* ═══════════════════════ RENDER ═════════════════════════════ */
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #011d38 0%, #023462 40%, #034a8a 70%, #0460b0 100%)",
      }}
    >
      {/* ── floating orbs ── */}
      {FLOATING_ORBS.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            animation: `floatOrb ${orb.duration}s ease-in-out ${orb.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* ── grid pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ──────────── MAIN CONTENT ──────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* logo */}
        <div
          className="mb-8 bg-white/30 rounded-xl"
        // style={{ animation: "fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <Image
            src="/logo-1.png"
            alt="AL Uyoon Global"
            width={220}
            height={64}
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-lg"
            // style={{ filter: "brightness(0) invert(1)" }}
            priority
          />
        </div>

        {/* heading */}
        <h1
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          style={{
            animation: "fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
            opacity: 0,
          }}
        >
          Something&nbsp;
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          >
            Amazing
          </span>
          <br />
          Is Coming
        </h1>

        {/* ── CTA / countdown ── */}
        {phase === "idle" && (
          <button
            id="launch-now-btn"
            onClick={handleLaunch}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            className="relative group cursor-pointer"
            style={{
              animation: "fadeSlideUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s forwards",
              opacity: 0,
            }}
          >
            <span
              className="absolute -inset-1 rounded-full blur-lg transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                opacity: buttonHover ? 0.6 : 0.3,
              }}
            />
            <span
              className="relative flex items-center gap-3 px-10 py-4 sm:px-14 sm:py-5 rounded-full font-bold text-lg sm:text-xl tracking-wide shadow-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                color: "#011d38",
                transform: buttonHover ? "scale(1.05)" : "scale(1)",
              }}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                style={{ transform: buttonHover ? "translateY(-2px) rotate(-15deg)" : "none" }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8"
                />
              </svg>
              Launch Now
            </span>
          </button>
        )}

        {phase === "countdown" && (
          <div className="flex flex-col items-center">
            <div
              key={countdownValue}
              className="text-8xl sm:text-9xl font-black text-white"
              style={{
                animation: "countdownPop 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
                textShadow: "0 0 60px rgba(255,215,0,0.5), 0 0 120px rgba(255,165,0,0.3)",
              }}
            >
              {countdownValue}
            </div>
            <p className="text-blue-300/70 text-sm mt-4 tracking-widest uppercase animate-pulse">
              Get Ready…
            </p>
          </div>
        )}
      </div>

      {/* ── decorative bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto opacity-10" preserveAspectRatio="none">
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
