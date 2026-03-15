import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const placeholders = [
  { id: 1, bg: "linear-gradient(135deg, #4b1f28, #2a1618)", text: "Foto 1", emoji: "💑" },
  { id: 2, bg: "linear-gradient(135deg, #2a1618, #4b1f28)", text: "Foto 2", emoji: "🌸" },
  { id: 3, bg: "linear-gradient(135deg, #3d1820, #1a0d10)", text: "Foto 3", emoji: "💛" },
  { id: 4, bg: "linear-gradient(135deg, #1a0d10, #4b1f28)", text: "Foto 4", emoji: "🌺" },
  { id: 5, bg: "linear-gradient(135deg, #4b1f28, #1a0d10)", text: "Foto 5", emoji: "✨" },
  { id: 6, bg: "linear-gradient(135deg, #2a1618, #3d1820)", text: "Foto 6", emoji: "🌹" },
  { id: 7, bg: "linear-gradient(135deg, #3d1820, #4b1f28)", text: "Foto 7", emoji: "💫" },
  { id: 8, bg: "linear-gradient(135deg, #1a0d10, #2a1618)", text: "Foto 8", emoji: "🌼" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #2a1618 0%, #1a0d10 50%, #2a1618 100%)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4">
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
            Gallery
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "Amelina Script, cursive", color: "#F5E9E2" }}
          >
            Galeri Kenangan
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A46C" }} />
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              style={{
                background: item.bg,
                border: "1px solid rgba(201,164,108,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.21, 1.02, 0.73, 1.02] }}
              whileHover={{ scale: 1.04 }}
              onClick={() => setSelected(item)}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(75,31,40,0.7)" }}
              >
                <span className="text-3xl mb-2">{item.emoji}</span>
                <span
                  className="text-xs tracking-wider"
                  style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
                >
                  {item.text}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl">{item.emoji}</span>
                <p
                  className="mt-2 text-xs"
                  style={{ color: "rgba(201,164,108,0.6)", fontFamily: "Apple Garamond, Georgia, serif" }}
                >
                  {item.text}
                </p>
              </div>

              {/* Gold shimmer border on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ border: "2px solid transparent" }}
                whileHover={{ borderColor: "rgba(201,164,108,0.5)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(26,13,16,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                background: selected.bg,
                border: "2px solid rgba(201,164,108,0.5)",
                boxShadow: "0 0 60px rgba(201,164,108,0.3)",
              }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.21, 1.02, 0.73, 1.02] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-7xl">{selected.emoji}</div>

              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,164,108,0.2)", color: "#C9A46C" }}
                onClick={() => setSelected(null)}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
