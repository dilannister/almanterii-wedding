import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { fonts, colors, sectionBg } from "../lib/fonts";
import { SectionHeader, BATIK_KAWUNG_DARK } from "../lib/shared";

function GiftCard({ gift, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText((gift.number || "").replace(/-/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: 20,
        padding: "32px 26px",

        // 🔥 FIX: LEBIH TERANG TANPA NGERUSAK FONT
        background:
          "linear-gradient(145deg, rgba(255,245,230,0.12), rgba(255,220,180,0.08))",

        border: "1px solid rgba(201,164,108,0.25)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
      }}
    >
      {/* 🔥 GUNUNGAN (BARU) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
        <img
          src="/ornaments/gunungan.png"
          onError={(e) => (e.target.style.display = "none")}
          style={{ width: 38, opacity: 0.9 }}
        />
      </div>

      {/* ICON (ASLI LU, JANGAN DIHAPUS) */}
      <div style={{ marginBottom: 14 }}>
        {gift.icon?.startsWith("/") ? (
          <img src={gift.icon} style={{ width: 44, opacity: 0.95 }} />
        ) : (
          <span style={{ fontSize: 34 }}>{gift.icon}</span>
        )}
      </div>

      {/* TYPE */}
      <p
        style={{
          fontFamily: fonts.ui,
          fontSize: 10,
          letterSpacing: "0.3em",
          color: colors.gold,
          opacity: 0.7,
          marginBottom: 10,
        }}
      >
        {gift.type}
      </p>

      {/* TITLE */}
      <h3
        style={{
          fontFamily: fonts.heading,
          fontSize: 22,
          color: colors.gold,
          marginBottom: 16,
        }}
      >
        {gift.title}
      </h3>

      <div
        style={{
          height: 1,
          background: "rgba(201,164,108,0.2)",
          marginBottom: 16,
        }}
      />

      {/* NAME */}
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 15,
          color: colors.cream,
          opacity: 0.85,
          marginBottom: 6,
        }}
      >
        {gift.name}
      </p>

      {/* NUMBER */}
      <p
        style={{
          fontFamily: fonts.heading,
          fontSize: 20,
          letterSpacing: "0.05em",
          color: colors.cream,
          marginBottom: 18,
        }}
      >
        {gift.number}
      </p>

      {/* BUTTON */}
      <motion.button
        onClick={handleCopy}
        whileTap={{ scale: 0.96 }}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: 10,
          border: "1px solid rgba(201,164,108,0.4)",
          background: copied ? "rgba(201,164,108,0.25)" : "transparent",
          color: colors.gold,
          fontFamily: fonts.ui,
          fontSize: 11,
          letterSpacing: "0.15em",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        {copied ? (
          <>
            <Check size={14} /> Tersalin
          </>
        ) : (
          <>
            <Copy size={14} /> Salin
          </>
        )}
      </motion.button>
    </motion.div>
  );
}

export default function WeddingGift() {
  const gifts = [
    {
      type: "Transfer Bank",
      title: "Bank BCA",
      name: "Tri Andini",
      number: "7391383778",
    },
    {
      type: "E-Wallet",
      title: "GoPay",
      name: "Tri Andini",
      number: "0857-1533-3423",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 0",
        background: sectionBg.maroonGlow,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: BATIK_KAWUNG_DARK,
          backgroundSize: "80px 80px",
          opacity: 0.4,
        }}
      />

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <SectionHeader pre="Wedding Gift" title="Hadiah Pernikahan" />

        <p
          style={{
            textAlign: "center",
            fontFamily: fonts.body,
            color: colors.cream,
            opacity: 0.7,
            marginBottom: 40,
            lineHeight: 1.8,
          }}
        >
          Doa restu Anda merupakan hadiah terindah bagi kami.  
          Namun apabila ingin memberikan tanda kasih:
        </p>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 20,
          }}
        >
          {gifts.map((gift, i) => (
            <GiftCard key={i} gift={gift} delay={i * 0.15} />
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 40,
            fontFamily: fonts.body,
            fontSize: 14,
            opacity: 0.5,
          }}
        >
          Terima kasih atas doa dan perhatian Anda.
        </p>
      </div>
    </section>
  );
}