import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function LetterByLetter({ text, delay = 0 }) {
  return (
    <span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.05 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function ProfileCard({ name, born, parents, side, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initials = name.split(" ").map((n) => n[0]).join("");

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4 md:px-8"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.21, 1.02, 0.73, 1.02] }}
    >
      {/* Portrait */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden flex items-center justify-center text-5xl md:text-6xl font-bold"
          style={{
            background: "linear-gradient(135deg, #4b1f28, #2a1618)",
            border: "3px solid #C9A46C",
            boxShadow: "0 0 30px rgba(201,164,108,0.3), 0 0 60px rgba(201,164,108,0.1), inset 0 0 30px rgba(201,164,108,0.05)",
            color: "#C9A46C",
            fontFamily: "Amelina Script, cursive",
          }}
        >
          {initials}
        </div>
        {/* Gold ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(201,164,108,0.3)",
            transform: "scale(1.08)",
          }}
        />
      </motion.div>

      {/* Name */}
      <h3
        className="text-3xl md:text-4xl mb-2"
        style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
      >
        <LetterByLetter text={name} delay={delay + 0.3} />
      </h3>

      {/* Born */}
      <p
        className="text-sm mb-4 tracking-wider"
        style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.7 }}
      >
        {born}
      </p>

      {/* Divider */}
      <div className="w-12 h-px mb-4" style={{ background: "#C9A46C", opacity: 0.5 }} />

      {/* Parents */}
      <div style={{ fontFamily: "Apple Garamond, Georgia, serif" }}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A46C", opacity: 0.7 }}>
          Putra/Putri dari
        </p>
        <p className="text-sm md:text-base" style={{ color: "#F5E9E2", opacity: 0.85 }}>
          {parents}
        </p>
      </div>
    </motion.div>
  );
}

export default function BrideGroom() {
  return (
    <section
      id="bride-groom"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #1a0d10 50%, #2a1618 100%)" }}
    >
      {/* Background batik pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A46C' fill-opacity='0.03'%3E%3Cpath d='M40 0C18 0 0 18 0 40s18 40 40 40 40-18 40-40S62 0 40 0zm0 70C23.4 70 10 56.6 10 40S23.4 10 40 10s30 13.4 30 30-13.4 30-30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Section Header */}
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
            Mempelai
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            Mempelai Pria & Wanita
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#C9A46C" }} />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Profiles Container */}
        <div
          className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0"
          style={{
            border: "1px solid rgba(201,164,108,0.2)",
            borderRadius: "16px",
            padding: "48px 24px",
            background: "rgba(75,31,40,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Groom */}
          <ProfileCard
            name="Alman"
            born="Surakarta, 14 Maret 1996"
            parents="Bapak Suharto & Ibu Sumarni"
            side="groom"
            delay={0}
          />

          {/* Gold Divider */}
          <div className="flex md:flex-col items-center justify-center gap-4 my-4 md:my-0 md:mx-8">
            <div
              className="w-20 h-px md:w-px md:h-20"
              style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }}
            />
            <div className="flex flex-col items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A46C" }} />
              <div
                className="text-2xl md:text-3xl"
                style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
              >
                &
              </div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A46C" }} />
            </div>
            <div
              className="w-20 h-px md:w-px md:h-20"
              style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }}
            />
          </div>

          {/* Bride */}
          <ProfileCard
            name="Terii"
            born="Yogyakarta, 22 Agustus 1997"
            parents="Bapak Widodo & Ibu Sriyaningsih"
            side="bride"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
