import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { fonts, colors } from "../lib/fonts";

  export default function MusicPlayer({ audioRef, title }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-4 z-[200] flex flex-col items-end gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "rgba(42,22,24,0.95)",
              border: "1px solid rgba(201,164,108,0.3)",
              borderRadius: 16,
              padding: "12px 16px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <p style={{
              fontFamily: fonts.body,
              fontSize: 12,
              color: colors.cream,
              opacity: 0.7,
              marginBottom: 8,
              whiteSpace: "nowrap",
              letterSpacing: "0.05em",
            }}>
              🎵 Lana Del Rey - Young and Beautiful
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={toggle}
                style={{
                  width: 36, height: 36,
                  borderRadius: "50%",
                  background: "rgba(201,164,108,0.2)",
                  border: "1px solid rgba(201,164,108,0.4)",
                  color: colors.gold,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </button>
              <button
                onClick={toggleMute}
                style={{
                  width: 36, height: 36,
                  borderRadius: "50%",
                  background: "rgba(201,164,108,0.2)",
                  border: "1px solid rgba(201,164,108,0.4)",
                  color: colors.gold,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Music Button */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: 48, height: 48,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(75,31,40,0.95), rgba(42,22,24,0.95))",
          border: "1px solid rgba(201,164,108,0.45)",
          color: colors.gold,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          boxShadow: playing
            ? "0 0 20px rgba(201,164,108,0.35), 0 4px 16px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          outline: "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        animate={playing ? { boxShadow: ["0 0 12px rgba(201,164,108,0.25)", "0 0 28px rgba(201,164,108,0.5)", "0 0 12px rgba(201,164,108,0.25)"] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Music size={18} />
      </motion.button>
    </motion.div>
  );
}
