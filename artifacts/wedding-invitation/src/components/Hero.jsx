import { memo } from "react";
import { motion } from "framer-motion";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { GoldDivider, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

// Reduced to 6 static particles — CSS animation, no Framer Motion loops
const PARTICLE_CSS = `
  @keyframes particlePulse {
    0%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
    50%       { opacity: 0.55; transform: scale(1.8) translateY(-18px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-particle { animation: none !important; opacity: 0 !important; }
  }
`;

const PARTICLES = [
  { id: 0, x: 12,  y: 18, size: 3, dur: 4.2 },
  { id: 1, x: 28,  y: 55, size: 2, dur: 5.1 },
  { id: 2, x: 52,  y: 28, size: 3, dur: 3.8 },
  { id: 3, x: 68,  y: 72, size: 2, dur: 6.0 },
  { id: 4, x: 80,  y: 40, size: 3, dur: 4.6 },
  { id: 5, x: 90,  y: 20, size: 2, dur: 5.5 },
];

const Hero = memo(function Hero() {
  const scrollToNext = () => {
    document.getElementById("quran-verse")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: sectionBg.dark,
      }}
    >
      <style>{PARTICLE_CSS}</style>

      {/* Batik bg — static, no parallax on mobile */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: BATIK_KAWUNG_DARK,
        backgroundSize: "80px 80px",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 45% at 50% 52%, rgba(201,164,108,0.1) 0%, transparent 70%)",
      }} />

      {/* CSS-animated particles — no JS RAF */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }} aria-hidden="true">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.gold}, transparent)`,
              animation: `particlePulse ${p.dur}s ease-in-out ${p.id * 0.7}s infinite`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Corner kawung ornaments */}
      <div style={{ position: "absolute", top: 16, left: 16 }} aria-hidden="true"><KawungCorner size={70} /></div>
      <div style={{ position: "absolute", top: 16, right: 16 }} aria-hidden="true"><KawungCorner size={70} flip /></div>
      <div style={{ position: "absolute", bottom: 16, left: 16, transform: "rotate(180deg)" }} aria-hidden="true"><KawungCorner size={70} flip /></div>
      <div style={{ position: "absolute", bottom: 16, right: 16, transform: "rotate(180deg)" }} aria-hidden="true"><KawungCorner size={70} /></div>

      {/* Gold border lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      {/* Content — one-time entry animations only */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "80px 24px", maxWidth: 720, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.5em", color: colors.gold, textTransform: "uppercase", marginBottom: 16 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.86, y: 36 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.38, ease: [0.21, 1.02, 0.73, 1.02] }}
          style={{
            fontFamily: fonts.script, fontSize: "clamp(60px,13vw,118px)", color: colors.gold,
            lineHeight: 1.1, marginBottom: 12,
            textShadow: "0 0 35px rgba(201,164,108,0.4), 0 0 70px rgba(201,164,108,0.15)",
          }}
        >
          Alman & Terii
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ margin: "20px auto 24px", maxWidth: 340 }}
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2vw,17px)", color: colors.cream, opacity: 0.78, fontStyle: "italic", lineHeight: 1.8, marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(13px,1.8vw,16px)", color: colors.cream, opacity: 0.62, lineHeight: 1.75, marginBottom: 36, maxWidth: 540, margin: "0 auto 36px" }}
        >
          Dengan penuh rasa syukur kepada Allah SWT, kami bermaksud menyelenggarakan pernikahan kami dan mengundang Bapak/Ibu/Saudara/i untuk hadir serta memberikan doa restu.
        </motion.p>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          style={{
            padding: "13px 40px", borderRadius: 9999,
            border: `1px solid ${colors.gold}`, background: "transparent",
            color: colors.gold, fontFamily: fonts.ui, fontWeight: 500,
            fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
          whileHover={{ backgroundColor: "rgba(201,164,108,0.1)", boxShadow: "0 0 24px rgba(201,164,108,0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          Lihat Undangan
        </motion.button>
      </div>

      {/* Scroll hint — CSS animation */}
      <div
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        <div style={{
          width: 1, height: 44,
          background: `linear-gradient(180deg, ${colors.gold}, transparent)`,
          animation: "scrollHint 2s ease-in-out infinite",
        }} />
      </div>
      <style>{`
        @keyframes scrollHint { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
      `}</style>
    </section>
  );
});

export default Hero;
