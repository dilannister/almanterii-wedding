import { motion } from "framer-motion";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

function Portrait({ name, role, birthdate, parents, delay, isGroom }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
      style={{
        textAlign: "center",
        flex: 1,
        minWidth: "clamp(200px, 38%, 280px)",
        padding: "0 16px",
      }}
    >
      <div style={{ position: "relative", display: "inline-block", marginBottom: 24 }}>
        <motion.div
          style={{
            width: "clamp(130px,26vw,172px)",
            height: "clamp(130px,26vw,172px)",
            borderRadius: "50%",
            background: `radial-gradient(circle at 38% 36%, rgba(201,164,108,0.22), rgba(75,31,40,0.55))`,
            border: `2px solid rgba(201,164,108,0.38)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
          animate={{ boxShadow: ["0 0 28px rgba(201,164,108,0.14)", "0 0 52px rgba(201,164,108,0.26)", "0 0 28px rgba(201,164,108,0.14)"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ fontFamily: fonts.script, fontSize: "clamp(42px,9vw,62px)", color: colors.gold, textShadow: "0 0 18px rgba(201,164,108,0.5)" }}>
            {name[0]}
          </span>
        </motion.div>
        <motion.div
          style={{ position: "absolute", inset: -10, borderRadius: "50%", border: `1px solid rgba(201,164,108,0.16)`, pointerEvents: "none" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <p style={{ fontFamily: fonts.ui, fontSize: 9, letterSpacing: "0.55em", color: colors.gold, textTransform: "uppercase", marginBottom: 10, opacity: 0.72 }}>
        {role}
      </p>
      <h3 style={{ fontFamily: fonts.heading, fontSize: "clamp(20px,3.8vw,30px)", color: colors.cream, fontWeight: 600, marginBottom: 8, lineHeight: 1.25 }}>
        {name}
      </h3>
      <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.cream, opacity: 0.52, fontStyle: "italic", marginBottom: 16 }}>
        Lahir: {birthdate}
      </p>
      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, rgba(201,164,108,0.25), transparent)`, marginBottom: 14 }} />
      <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.cream, opacity: 0.62, lineHeight: 1.65 }}>
        {`Putr${isGroom ? "a" : "i"} dari`}
        <br />
        {parents}
      </p>
    </motion.div>
  );
}

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      style={{
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        background: sectionBg.maroonGlow,
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, backgroundSize: "80px 80px" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 60% at 50% 50%, rgba(201,164,108,0.07) 0%, transparent 70%)" }} />

      <div style={{ position: "absolute", top: 14, left: 14 }}><KawungCorner size={65} /></div>
      <div style={{ position: "absolute", top: 14, right: 14 }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, left: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} flip /></div>
      <div style={{ position: "absolute", bottom: 14, right: 14, transform: "rotate(180deg)" }}><KawungCorner size={65} /></div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />

      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader pre="Bismillahirrahmanirrahim" title="Mempelai" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ fontFamily: fonts.body, fontSize: "clamp(14px,2.2vw,17px)", color: colors.cream, opacity: 0.68, lineHeight: 1.85, textAlign: "center", marginBottom: 56 }}
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </motion.p>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "clamp(16px,4vw,52px)", flexWrap: "wrap" }}>
          <Portrait
            name="D. Sukma Almansyah"
            role="Mempelai Pria"
            birthdate="25 Desember 1990"
            parents="(Alm) Ade Ibrahim & Ibu Yani Riyani"
            delay={0.1}
            isGroom
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ textAlign: "center", paddingTop: "clamp(55px,11vw,82px)" }}
          >
            <p style={{ fontFamily: fonts.script, fontSize: "clamp(34px,7vw,54px)", color: colors.gold, textShadow: "0 0 18px rgba(201,164,108,0.35)", lineHeight: 1 }}>&</p>
          </motion.div>

          <Portrait
            name="Tri Andini"
            role="Mempelai Wanita"
            birthdate="04 Maret 2002"
            parents="Bapak Nurohmat & Ibu Siti Mulyani"
            delay={0.22}
            isGroom={false}
          />
        </div>
      </div>
    </section>
  );
}
