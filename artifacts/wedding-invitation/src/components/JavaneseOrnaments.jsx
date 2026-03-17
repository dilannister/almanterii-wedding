import { motion } from "framer-motion";

// 🌸 FLOWER FALL
const FLOWERS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  size: 28 + (i % 3) * 8,
  x: 10 + (i * 10) % 80,
  delay: i * 2,
  duration: 18 + (i % 3) * 4,
  drift: (i % 2 === 0 ? 1 : -1) * (8 + (i % 2) * 6),
}));

// 🍃 LEAF (STATIC)
const LEAVES = [
  { top: "18%", left: "6%", size: 90, opacity: 0.12 },
  { bottom: "20%", right: "8%", size: 100, opacity: 0.12 },
];

export default function JavaneseOrnaments() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* 🌸 FLOWERS */}
      {FLOWERS.map((item) => (
        <motion.img
          key={item.id}
          src="/ornaments/flower.png"
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{
            y: "110vh",
            x: [0, item.drift, -item.drift],
            rotate: [0, 10, -10],
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: 24,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${item.x}vw`,
            width: item.size,
            filter: "drop-shadow(0 0 6px rgba(201,164,108,0.25))",
          }}
        />
      ))}

      {/* 🍃 LEAVES */}
      {LEAVES.map((item, i) => (
        <img
          key={i}
          src="/ornaments/leaf.png"
          style={{
            position: "absolute",
            width: item.size,
            opacity: item.opacity,
            ...item,
            filter: "drop-shadow(0 0 10px rgba(201,164,108,0.2))",
          }}
        />
      ))}
    </div>
  );
}