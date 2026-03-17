import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, GoldDivider, GununganSmall, KawungCorner, BATIK_KAWUNG_LIGHT } from "../lib/shared";

const TARGET = new Date("2026-04-26T09:00:00");

function getDiff() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function CountBox({ value, label, delay }) {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      initial={{ opacity: 0, y: 36, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
    >
      <div style={{
        width: "clamp(68px,15vw,100px)",
        height: "clamp(68px,15vw,100px)",
        borderRadius: 14,
        background: `linear-gradient(145deg, rgba(75,31,40,0.14), rgba(75,31,40,0.28))`,
        border: `1px solid rgba(75,31,40,0.3)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,164,108,0.08), transparent 70%)" }} />
        <span style={{ fontFamily: fonts.heading, fontSize: "clamp(26px,6vw,44px)", fontWeight: 700, color: colors.maroon, position: "relative", zIndex: 1 }}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p style={{ marginTop: 10, fontFamily: fonts.ui, fontSize: 9, letterSpacing: "0.3em", color: colors.maroon, opacity: 0.6, textTransform: "uppercase" }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function SaveTheDate() {
  const [time, setTime] = useState(getDiff());
  useEffect(() => {
    const t = setInterval(() => setTime(getDiff()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="save-the-date"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.light,
      }}
    >
      <div style={{ position: "absolute", top: 14, left: 14 }}>
        <img src="/ornaments/kawung.png" style={{ width: 65, opacity: 0.8 }} />
      </div>

      <div style={{ position: "absolute", top: 14, right: 14 }}>
        <img src="/ornaments/kawung.png" style={{ width: 65, transform: "scaleX(-1)", opacity: 0.8 }} />
      </div>

      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}>
        <img src="/ornaments/kawung.png" style={{ width: 65, opacity: 0.8 }} />
      </div>

      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}>
        <img src="/ornaments/kawung.png" style={{ width: 65, transform: "scaleX(-1)", opacity: 0.8 }} />
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.maroon}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader pre="Save The Date" title="Hitung Mundur" light />

        {/* Gunungan */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
        >
          <motion.img
            src="/images/gunungan.png"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              width: "clamp(90px, 14vw, 180px)",
              height: "auto",
              filter: "drop-shadow(0 0 16px rgba(201,164,108,0.4))"
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2.2vw,17px)", color: colors.maroon, opacity: 0.72, lineHeight: 1.85, textAlign: "center", marginBottom: 32, fontStyle: "italic" }}
        >
          Kami akan memulai perjalanan baru sebagai suami dan istri pada hari yang berbahagia:
        </motion.p>

        {/* Date highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
          style={{ textAlign: "center", marginBottom: 36 }}
        >
          <p style={{ fontFamily: fonts.heading, fontSize: "clamp(28px,6vw,52px)", color: colors.maroon, fontWeight: 700, letterSpacing: "0.04em" }}>
            26 April 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 40 }}
        >
          <GoldDivider light />
        </motion.div>

        {/* Countdown boxes */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(6px,2vw,20px)", flexWrap: "wrap" }}>
          {[
            { value: time.days, label: "Hari", delay: 0 },
            { value: time.hours, label: "Jam", delay: 0.1 },
            { value: time.minutes, label: "Menit", delay: 0.2 },
            { value: time.seconds, label: "Detik", delay: 0.3 },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(6px,2vw,20px)" }}>
              <CountBox {...item} />
              {i < 3 && (
                <motion.span
                  style={{ fontFamily: fonts.heading, fontSize: "clamp(22px,5vw,36px)", color: colors.maroon, opacity: 0.45, marginBottom: 28 }}
                  animate={{ opacity: [0.45, 0.15, 0.45] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >
                  :
                </motion.span>
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(13px,2vw,16px)", color: colors.maroon, opacity: 0.65, lineHeight: 1.85, textAlign: "center", marginTop: 36, fontStyle: "italic", maxWidth: 480, margin: "36px auto 0" }}
        >
          Kami berharap kehadiran serta doa restu dari keluarga dan sahabat tercinta untuk menyempurnakan kebahagiaan kami.
        </motion.p>
      </div>
    </section>
  );
}
