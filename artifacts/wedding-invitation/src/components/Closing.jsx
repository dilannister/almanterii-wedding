import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative py-24 md:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #1a0d10 40%, #2a1618 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,164,108,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Gold ornament lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }} />

      <div className="relative max-w-2xl mx-auto px-4 text-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="text-5xl mb-8" style={{ color: "rgba(201,164,108,0.4)" }}>"</div>

          <p
            className="text-lg md:text-2xl leading-relaxed mb-6 italic"
            style={{
              fontFamily: "Apple Garamond, Georgia, serif",
              color: "#F5E9E2",
              opacity: 0.85,
            }}
          >
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.
          </p>

          <p
            className="text-xs tracking-[0.3em] uppercase mb-12"
            style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            Q.S. Ar-Rum: 21
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A46C" }} />
            ))}
          </div>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 1.02, 0.73, 1.02] }}
        >
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(245,233,226,0.6)", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            Dengan Penuh Cinta
          </p>

          <h2
            className="text-5xl md:text-7xl"
            style={{
              fontFamily: "Amelina Script, cursive",
              color: "#C9A46C",
              textShadow: "0 0 40px rgba(201,164,108,0.4), 0 0 80px rgba(201,164,108,0.2)",
            }}
          >
            Alman & Terii
          </h2>

          <p
            className="mt-6 text-sm"
            style={{ color: "rgba(245,233,226,0.5)", fontFamily: "Apple Garamond, Georgia, serif" }}
          >
            12 April 2025
          </p>
        </motion.div>

        {/* Final flourish */}
        <motion.div
          className="mt-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="flex gap-3">
            {["✨", "💛", "✨"].map((em, i) => (
              <motion.span
                key={i}
                className="text-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                {em}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A46C, transparent)" }} />
    </section>
  );
}
