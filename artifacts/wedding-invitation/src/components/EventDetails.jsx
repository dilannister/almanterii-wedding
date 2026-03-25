import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, KawungCorner, BATIK_KAWUNG_DARK } from "../lib/shared";

const events = [
  {
    type: "akad",
    title: "Akad Nikah",
    subtitle: "Ijab Kabul",
    date: "Minggu, 26 April 2026",
    time: "09.00 WIB",
    address: "JL Al-Innayah Karang Ampel RT003/RW004 No.15\nKp Rawa Kalong\nDesa Karang Satria\nKecamatan Tambun Utara\nKabupaten Bekasi",
    mapsLink: "https://share.google/rB1z28aq7zzRBFh7p", // ✅ FIX
    slideFrom: "left",
  },
  {
    type: "resepsi",
    title: "Resepsi Pernikahan",
    subtitle: "Wedding Reception",
    date: "Minggu, 26 April 2026",
    time: "10.00 WIB – Selesai",
    address: "JL Al-Innayah Karang Ampel RT003/RW004 No.15\nKp Rawa Kalong\nDesa Karang Satria\nKecamatan Tambun Utara\nKabupaten Bekasi",
    mapsLink: "https://share.google/rB1z28aq7zzRBFh7p", // ✅ FIX
    slideFrom: "right",
  },
];

function EventCard({ event, index }) {
  const fromLeft = event.slideFrom === "left";
  const isAkad = event.type === "akad";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -70 : 70,
        scale: isAkad ? 0.9 : 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: isAkad ? 1.2 : 0.9,
        delay: isAkad ? 0.1 : 0.3,
        ease: [0.21, 1.02, 0.73, 1.02],
      }}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "40px 32px",
        background: `linear-gradient(145deg, rgba(75,31,40,0.6), rgba(42,22,24,0.78))`,
        border: `1px solid rgba(201,164,108,0.22)`,
        backdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 55px rgba(201,164,108,0.18)" }}
    >
      {/* glow pojok */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 100,
          height: 100,
          background: "radial-gradient(circle at top right, rgba(201,164,108,0.1), transparent)",
          borderRadius: "0 20px 0 0",
        }}
      />

      {/* ICON + TITLE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isAkad ? 14 : 10,
          marginBottom: 10,
        }}
      >
        <motion.img
          src="/ornaments/gunungann.png"
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: isAkad ? 1 : 0.8,
            delay: isAkad ? 0.3 : 0.5,
          }}
          style={{
            width: isAkad ? 36 : 30,
            opacity: isAkad ? 0.85 : 0.75,
            filter: isAkad
              ? "drop-shadow(0 0 12px rgba(201,164,108,0.5))"
              : "drop-shadow(0 0 8px rgba(201,164,108,0.3))",
          }}
        />

        <h3
          style={{
            fontFamily: fonts.heading,
            fontSize: 26,
            color: colors.gold,
            margin: 0,
          }}
        >
          {event.title}
        </h3>
      </div>

      <p
        style={{
          fontFamily: fonts.ui,
          fontSize: 10,
          letterSpacing: "0.3em",
          color: colors.cream,
          opacity: 0.5,
          textTransform: "uppercase",
          marginBottom: 22,
        }}
      >
        {event.subtitle}
      </p>

      <div style={{ height: 1, background: "rgba(201,164,108,0.2)", marginBottom: 22 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { Icon: Calendar, text: event.date },
          { Icon: Clock, text: event.time },
          { Icon: MapPin, text: event.address, multiline: true },
        ].map(({ Icon, text, multiline }, i) => (
          <div key={i} style={{ display: "flex", gap: 12 }}>
            <Icon size={14} style={{ color: colors.gold, marginTop: 3 }} />
            <p style={{ fontFamily: fonts.body, fontSize: 15, color: colors.cream, lineHeight: 1.6 }}>
              {multiline
                ? text.split("\n").map((l, j, arr) => (
                    <span key={j}>
                      {l}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))
                : text}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 BUTTON PREMIUM */}
      <motion.a
        href={event.mapsLink} // ✅ FIX FINAL
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(201,164,108,0.4)",
        }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginTop: 26,
          padding: "10px 18px",
          borderRadius: 999,
          background: "rgba(201,164,108,0.1)",
          border: "1px solid rgba(201,164,108,0.4)",
          fontFamily: fonts.ui,
          fontSize: 11,
          letterSpacing: "0.2em",
          color: colors.gold,
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "all 0.3s ease",
        }}
      >
        <MapPin size={14} />
        Buka di Google Maps
      </motion.a>
    </motion.div>
  );
}

export default function EventDetails() {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0",
        background: sectionBg.dark,
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: BATIK_KAWUNG_DARK, backgroundSize: "80px 80px" }} />

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader pre="Rangkaian Acara" title="Detail Acara" />

        <div style={{ display: "grid", gap: 24 }}>
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}