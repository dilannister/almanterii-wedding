import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Particle({ x, y, size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: "radial-gradient(circle, #C9A46C, transparent)",
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.5, 0.5],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 5,
}));

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    const el = document.getElementById("bride-groom");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0d10 0%, #2a1618 40%, #4b1f28 70%, #2a1618 100%)" }}
    >
      {/* Parallax Batik Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A46C' fill-opacity='0.04'%3E%3Cpath d='M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 88C29.0 88 12 71 12 50S29 12 50 12s38 17 38 38-17 38-38 38z'/%3E%3Ccircle cx='50' cy='50' r='12' fill='%23C9A46C' fill-opacity='0.03'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Gold Glow Center */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,164,108,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Gold ornament lines */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p
            className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
            style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            The Wedding of
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.21, 1.02, 0.73, 1.02] }}
        >
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none mb-4"
            style={{
              fontFamily: "Amelina Script, cursive",
              color: "#C9A46C",
              textShadow: "0 0 30px rgba(201,164,108,0.5), 0 0 60px rgba(201,164,108,0.2)",
            }}
          >
            Alman & Terii
          </h1>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 my-6 md:my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A46C" }} />
            ))}
          </div>
          <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
        </motion.div>

        <motion.p
          className="text-base md:text-lg mb-4"
          style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.85 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Sabtu, 12 April 2025
        </motion.p>

        <motion.p
          className="text-sm mb-10 tracking-wider"
          style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Pura Mangkunegaran, Surakarta, Jawa Tengah
        </motion.p>

        <motion.button
          onClick={handleOpenInvitation}
          className="relative px-10 py-4 rounded-full text-sm tracking-widest uppercase overflow-hidden group"
          style={{
            border: "1px solid #C9A46C",
            color: "#C9A46C",
            fontFamily: "Apple Garamond, Georgia, serif",
            background: "transparent",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(201,164,108,0.15)",
            boxShadow: "0 0 30px rgba(201,164,108,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          Lihat Undangan
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#C9A46C", opacity: 0.6 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(180deg, #C9A46C, transparent)" }} />
      </motion.div>
    </section>
  );
}
