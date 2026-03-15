import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-04-12T08:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function CountBox({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
    >
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(75,31,40,0.8), rgba(42,22,24,0.6))",
          border: "1px solid rgba(201,164,108,0.3)",
          boxShadow: "0 0 20px rgba(201,164,108,0.1), inset 0 0 20px rgba(201,164,108,0.05)",
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(201,164,108,0.08) 0%, transparent 70%)",
          }}
        />
        <span
          className="text-3xl sm:text-4xl md:text-5xl font-bold relative z-10"
          style={{
            fontFamily: "Apple Garamond, Georgia, serif",
            color: "#C9A46C",
            textShadow: "0 0 20px rgba(201,164,108,0.5)",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p
        className="mt-3 text-xs tracking-[0.3em] uppercase"
        style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.7 }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isPast = TARGET_DATE <= new Date();

  return (
    <section
      id="countdown"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,164,108,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4">
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
            Menghitung Hari
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            {isPast ? "Hari Bahagia Telah Tiba" : "Hitung Mundur"}
          </h2>
          <p
            className="mt-4 text-sm"
            style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.7 }}
          >
            12 April 2025
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#C9A46C" }} />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Countdown Boxes */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <CountBox value={time.days} label="Hari" delay={0} />

          <motion.div
            className="text-2xl md:text-4xl mb-6"
            style={{ color: "#C9A46C" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.div>

          <CountBox value={time.hours} label="Jam" delay={0.1} />

          <motion.div
            className="text-2xl md:text-4xl mb-6"
            style={{ color: "#C9A46C" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.div>

          <CountBox value={time.minutes} label="Menit" delay={0.2} />

          <motion.div
            className="text-2xl md:text-4xl mb-6"
            style={{ color: "#C9A46C" }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.div>

          <CountBox value={time.seconds} label="Detik" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
