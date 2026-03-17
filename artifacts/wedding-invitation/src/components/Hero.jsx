import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { GoldDivider, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i, x: 5 + (i * 6.5) % 90, y: 8 + (i * 5.8) % 84, size: 2 + (i % 3), delay: i * 0.5,
}));

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

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
      {/* Parallax batik */}
      <div style={{
        position: "absolute", inset: 0,
        transform: `translateY(${scrollY * 0.25}px)`,
        backgroundImage: BATIK_KAWUNG_DARK,
        backgroundSize: "80px 80px",
      }} />

      {/* Radial gold glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 45% at 50% 52%, rgba(201,164,108,0.1) 0%, transparent 70%)",
      }} />

      {/* Floating particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {particles.map((p) => (
          <motion.div key={p.id}
            style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: "50%", background: `radial-gradient(circle, ${colors.gold}, transparent)` }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.5, 2, 0.5], y: [0, -24, 0] }}
            transition={{ duration: 4 + (p.id % 3), delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Corner kawung ornaments */}
      <div style={{ position: "absolute", top: 16, left: 16 }}><KawungCorner size={70} /></div>
      <div style={{ position: "absolute", top: 16, right: 16 }}><KawungCorner size={70} flip /></div>
      <div style={{ position: "absolute", bottom: 16, left: 16, transform: "rotate(180deg)" }}><KawungCorner size={70} flip /></div>
      <div style={{ position: "absolute", bottom: 16, right: 16, transform: "rotate(180deg)" }}><KawungCorner size={70} /></div>

      {/* Gold border lines */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "80px 24px", maxWidth: 720, margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.5em", color: colors.gold, textTransform: "uppercase", marginBottom: 16 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.84, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.4, ease: [0.21, 1.02, 0.73, 1.02] }}
          style={{
            fontFamily: fonts.script, fontSize: "clamp(60px,13vw,118px)", color: colors.gold,
            lineHeight: 1.1, marginBottom: 12,
            textShadow: "0 0 35px rgba(201,164,108,0.45), 0 0 70px rgba(201,164,108,0.18)",
          }}
        >
          Alman & Terii
        </motion.h1>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.9, delay: 1 }} style={{ margin: "20px auto 24px", maxWidth: 340 }}>
          <GoldDivider />
        </motion.div>

        {/* Quran quote */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2vw,17px)", color: colors.cream, opacity: 0.78, fontStyle: "italic", lineHeight: 1.8, marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}
        >
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
        </motion.p>


        <motion.button
          onClick={() => document.getElementById("quran-verse")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{
            padding: "13px 40px", borderRadius: 9999,
            border: `1px solid ${colors.gold}`, background: "transparent",
            color: colors.gold, fontFamily: fonts.ui, fontWeight: 500,
            fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", cursor: "pointer",
          }}
          whileHover={{ scale: 1.04, backgroundColor: "rgba(201,164,108,0.1)", boxShadow: "0 0 28px rgba(201,164,108,0.32)" }}
          whileTap={{ scale: 0.97 }}
        >
          Scroll Down
        </motion.button>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)" }}
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: 1, height: 44, background: `linear-gradient(180deg, ${colors.gold}, transparent)` }} />
      </motion.div>
    </section>
  );
}
