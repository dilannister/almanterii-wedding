import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function EnvelopeOpening({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      {!opened ? (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#2a1618" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left Panel */}
            <motion.div
              className="absolute inset-0 w-1/2 left-0"
              style={{
                background: "linear-gradient(135deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)",
                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A46C' fill-opacity='0.06'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 52C17.8 52 8 42.2 8 30S17.8 8 30 8s22 9.8 22 22-9.8 22-22 22z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                  linear-gradient(135deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)
                `,
              }}
              animate={opened ? { x: "-100%" } : { x: 0 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Right Panel */}
            <motion.div
              className="absolute inset-0 left-1/2 w-1/2"
              style={{
                background: "linear-gradient(225deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)",
                backgroundImage: `
                  url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A46C' fill-opacity='0.06'%3E%3Cpath d='M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 52C17.8 52 8 42.2 8 30S17.8 8 30 8s22 9.8 22 22-9.8 22-22 22z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                  linear-gradient(225deg, #2a1618 0%, #4b1f28 50%, #2a1618 100%)
                `,
              }}
              animate={opened ? { x: "100%" } : { x: 0 }}
              transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Gold Seam */}
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2 z-10"
              style={{
                background: "linear-gradient(180deg, transparent, #C9A46C, #F5E9E2, #C9A46C, transparent)",
                boxShadow: "0 0 20px #C9A46C, 0 0 40px #C9A46C80",
              }}
              animate={opened ? { opacity: 0, scaleY: 0 } : { opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Center Content */}
            <motion.div
              className="relative z-20 text-center px-6"
              animate={opened ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="text-sm tracking-widest mb-4 uppercase"
                style={{ color: "#C9A46C", fontFamily: "Apple Garamond, Georgia, serif" }}
              >
                Undangan Pernikahan
              </div>

              <h1
                className="text-5xl md:text-7xl mb-2"
                style={{ fontFamily: "Amelina Script, cursive", color: "#C9A46C" }}
              >
                Alman & Terii
              </h1>

              <div
                className="my-6 flex items-center gap-4"
                style={{ color: "#C9A46C" }}
              >
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A46C)" }} />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.9 8.26L20.51 8.26L15.3 12.14L17.2 18.39L12 14.51L6.8 18.39L8.7 12.14L3.49 8.26L10.1 8.26L12 2Z" fill="#C9A46C" />
                </svg>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #C9A46C, transparent)" }} />
              </div>

              <p
                className="text-sm tracking-wider mb-8"
                style={{ color: "#F5E9E2", fontFamily: "Apple Garamond, Georgia, serif", opacity: 0.8 }}
              >
                Dengan penuh syukur dan kebahagiaan
              </p>

              <motion.button
                onClick={handleOpen}
                className="relative px-10 py-4 rounded-full text-sm tracking-widest uppercase overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #C9A46C, #F5E9E2, #C9A46C)",
                  color: "#2a1618",
                  fontFamily: "Apple Garamond, Georgia, serif",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px rgba(201, 164, 108, 0.5)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(201, 164, 108, 0.8)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Buka Undangan
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
