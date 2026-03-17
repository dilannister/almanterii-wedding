import { motion } from "framer-motion";
import { fonts, colors } from "../lib/fonts";
import { GoldDivider, GununganSmall, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

export default function Closing() {
  return (
    <section
      id="closing"
      style={{
        position: "relative",
        padding: "120px 0 100px",
        overflow: "hidden",
        background: `linear-gradient(180deg, #1a0d10 0%, #2a1618 40%, #1a0d10 100%)`,
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(201,164,108,0.08), transparent 70%)" }} />

      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} /></div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 660, margin: "0 auto", padding: "0 24px" }}>
        {/* Gunungan ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}
        >
          <img
            src="/images/gunungan.png"
            style={{
              width: "clamp(80px, 12vw, 160px)",
              height: "auto",
              opacity: 0.9,
              filter: "drop-shadow(0 0 12px rgba(201,164,108,0.3))"
            }}
          />
        </motion.div>

        {/* Main closing text — slow fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p style={{
            fontFamily: fonts.body,
            fontSize: "clamp(15px,2.2vw,18px)",
            color: colors.cream,
            opacity: 0.78,
            fontStyle: "italic",
            lineHeight: 1.9,
            marginBottom: 36,
          }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>

          <p style={{
            fontFamily: fonts.body,
            fontSize: "clamp(14px,2vw,16px)",
            color: colors.cream,
            opacity: 0.6,
            lineHeight: 1.8,
            marginBottom: 40,
          }}>
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginBottom: 40 }}
        >
          <GoldDivider />
        </motion.div>

        {/* Kami yang berbahagia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.21, 1.02, 0.73, 1.02] }}
        >
          <p style={{ fontFamily: fonts.ui, fontSize: 10, letterSpacing: "0.45em", color: colors.cream, opacity: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
            Kami yang berbahagia
          </p>

          <h2 style={{
            fontFamily: fonts.script,
            fontSize: "clamp(52px,12vw,92px)",
            color: colors.gold,
            lineHeight: 1.1,
            textShadow: `0 0 40px rgba(201,164,108,0.4), 0 0 80px rgba(201,164,108,0.18)`,
            marginBottom: 16,
          }}>
            Alman & Terii
          </h2>

          <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.cream, opacity: 0.45, letterSpacing: "0.1em", fontStyle: "italic" }}>
            26 April 2026
          </p>
        </motion.div>

        {/* Floating stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
          style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 56 }}
        >
          {["✦", "✧", "✦"].map((s, i) => (
            <motion.span
              key={i}
              style={{ fontSize: 18, color: colors.gold, opacity: 0.65 }}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.5, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
