"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/* ─────────────────── types ─────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: "circle" | "square" | "star" | "triangle";
}

const COLORS = [
  "#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4",
  "#FFEAA7", "#DDA0DD", "#FF8C42", "#98D8C8", "#F7DC6F",
  "#BB8FCE", "#85C1E9", "#FF4757", "#2ED573", "#FFA502",
];

function burst(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -5 - Math.random() * 15,
    size: Math.random() * 14 + 5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    speedX: (Math.random() - 0.5) * 6,
    speedY: Math.random() * 3 + 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 12,
    opacity: 1,
    shape: (["circle", "square", "star", "triangle"] as const)[
      Math.floor(Math.random() * 4)
    ],
  }));
}

/* ═══════════════ CELEBRATION OVERLAY ═══════════════ */
export default function CelebrationOverlay() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [visible, setVisible] = useState(true);
  const animRef = useRef<number | null>(null);
  const waveRef = useRef(0);

  /* ── particle physics loop ── */
  const animate = useCallback(() => {
    setParticles((prev) =>
      prev
        .map((p) => ({
          ...p,
          x: p.x + p.speedX * 0.12,
          y: p.y + p.speedY * 0.18,
          speedY: p.speedY + 0.04,
          rotation: p.rotation + p.rotationSpeed,
          opacity: p.y > 85 ? Math.max(0, p.opacity - 0.02) : p.opacity,
        }))
        .filter((p) => p.opacity > 0 && p.y < 110)
    );
    animRef.current = requestAnimationFrame(animate);
  }, []);

  /* ── launch waves of confetti ── */
  useEffect(() => {
    // initial burst
    setParticles(burst(120));
    animRef.current = requestAnimationFrame(animate);

    // second wave
    const w1 = setTimeout(() => {
      waveRef.current = 1;
      setParticles((prev) => [...prev, ...burst(80).map((p) => ({ ...p, id: p.id + 500 }))]);
    }, 800);

    // third wave
    const w2 = setTimeout(() => {
      waveRef.current = 2;
      setParticles((prev) => [...prev, ...burst(60).map((p) => ({ ...p, id: p.id + 1000 }))]);
    }, 1600);

    // fade out entire overlay
    const fadeOut = setTimeout(() => setVisible(false), 4500);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      clearTimeout(w1);
      clearTimeout(w2);
      clearTimeout(fadeOut);
    };
  }, [animate]);

  if (!visible) return null;

  /* ── shape renderers ── */
  const renderShape = (p: Particle) => {
    switch (p.shape) {
      case "star":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
          </svg>
        );
      case "triangle":
        return (
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
            <path d="M12 2L22 22H2z" />
          </svg>
        );
      case "square":
        return (
          <div style={{ width: p.size, height: p.size, backgroundColor: p.color, borderRadius: 2 }} />
        );
      default:
        return (
          <div style={{ width: p.size, height: p.size, backgroundColor: p.color, borderRadius: "50%" }} />
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* golden flash */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(255,215,0,0.15) 0%, transparent 70%)",
          animation: "celebrationFlash 1.5s ease-out forwards",
        }}
      />

      {/* welcome banner */}
      {/* <div
        className="absolute top-1/3 left-1/2 flex flex-col items-center"
        style={{
          transform: "translate(-50%, -50%)",
          animation: "welcomeBannerIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards, welcomeBannerOut 0.6s ease-in 3s forwards",
        }}
      >
        <span className="text-5xl sm:text-7xl mb-3">🎉</span>
        <span
          className="text-2xl sm:text-4xl font-extrabold tracking-wide px-8 py-3 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(2,52,98,0.92), rgba(4,96,176,0.92))",
            color: "#fff",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 80px rgba(255,215,0,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          Welcome to AL Uyoon Global!
        </span>
      </div> */}

      {/* confetti */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
          }}
        >
          {renderShape(p)}
        </div>
      ))}
    </div>
  );
}
