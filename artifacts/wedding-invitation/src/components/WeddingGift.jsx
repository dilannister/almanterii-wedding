import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const gifts = [
  {
    type: "Transfer Bank",
    icon: "🏦",
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Alman Pratama",
    color: "#0056b3",
  },
  {
    type: "Dompet Digital",
    icon: "📱",
    bank: "GoPay / OVO",
    accountNumber: "0812-3456-7890",
    accountName: "Alman & Terii",
    color: "#00b56a",
  },
];

function GiftCard({ gift, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(gift.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      className="relative rounded-2xl p-6 md:p-8 overflow-hidden card-glow"
      style={{
        background: "linear-gradient(135deg, rgba(75,31,40,0.6), rgba(42,22,24,0.8))",
        border: "1px solid rgba(201,164,108,0.25)",
        backdropFilter: "blur(10px)",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
      whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(201,164,108,0.15)" }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"
        style={{ background: gift.color }}
      />

      {/* Icon */}
      <div className="text-4xl mb-4">{gift.icon}</div>

      {/* Type Badge */}
      <span
        className="text-xs tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-4 inline-block"
        style={{
          background: "rgba(201,164,108,0.15)",
          color: "#C9A46C",
          border: "1px solid rgba(201,164,108,0.3)",
          fontFamily: "Apple Garamond, Georgia, serif",
        }}
      >
        {gift.type}
      </span>

      {/* Bank Name */}
      <h3
        className="text-xl md:text-2xl mt-3 mb-4"
        style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
      >
        {gift.bank}
      </h3>

      {/* Divider */}
      <div className="h-px mb-4" style={{ background: "rgba(201,164,108,0.2)" }} />

      {/* Account Name */}
      <div className="mb-3">
        <p
          className="text-xs tracking-wider uppercase mb-1"
          style={{ color: "rgba(245,233,226,0.5)", fontFamily: "Apple Garamond, Georgia, serif" }}
        >
          Nama Rekening
        </p>
        <p
          className="text-base"
          style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif" }}
        >
          {gift.accountName}
        </p>
      </div>

      {/* Account Number */}
      <div className="mb-6">
        <p
          className="text-xs tracking-wider uppercase mb-1"
          style={{ color: "rgba(245,233,226,0.5)", fontFamily: "Apple Garamond, Georgia, serif" }}
        >
          Nomor Rekening
        </p>
        <div className="flex items-center gap-3">
          <p
            className="text-lg font-bold tracking-wider"
            style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            {gift.accountNumber}
          </p>
        </div>
      </div>

      {/* Copy Button */}
      <motion.button
        onClick={handleCopy}
        className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm tracking-wider w-full justify-center"
        style={{
          background: copied ? "rgba(201,164,108,0.3)" : "rgba(201,164,108,0.15)",
          border: "1px solid rgba(201,164,108,0.4)",
          color: "#C9A46C",
          fontFamily: "Apple Garamond, Georgia, serif",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {copied ? (
          <>
            <Check size={14} />
            Tersalin!
          </>
        ) : (
          <>
            <Copy size={14} />
            Salin Nomor
          </>
        )}
      </motion.button>
    </motion.div>
  );
}

export default function WeddingGift() {
  return (
    <section
      id="wedding-gift"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #1a0d10 50%, #2a1618 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A46C' fill-opacity='0.03'%3E%3Cpath d='M30 5 L55 50 L5 50 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            Wedding Gift
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            Hadiah Pernikahan
          </h2>
          <p
            className="mt-4 text-sm max-w-md mx-auto leading-relaxed"
            style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.7 }}
          >
            Doa dan kehadiran Anda adalah hadiah terbaik bagi kami. Namun jika Anda ingin memberikan sesuatu, berikut informasinya:
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <span style={{ color: "#C9A46C", fontSize: "18px" }}>💝</span>
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Gift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gifts.map((gift, i) => (
            <GiftCard key={i} gift={gift} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
