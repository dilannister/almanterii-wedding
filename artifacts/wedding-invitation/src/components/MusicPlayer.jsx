import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { fonts, colors } from "../lib/fonts";

// CSS pulse replaces the Framer Motion continuous animate loop
const PULSE_STYLE = `
  @keyframes musicPulse {
    0%, 100% { box-shadow: 0 0 12px rgba(201,164,108,0.25), 0 4px 16px rgba(0,0,0,0.4); }
    50%       { box-shadow: 0 0 26px rgba(201,164,108,0.5),  0 4px 16px rgba(0,0,0,0.4); }
  }
  .music-btn-playing { animation: musicPulse 2.5s ease-in-out infinite; }
`;

const MusicPlayer = memo(function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setPlaying((p) => !p);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted((m) => !m);
  };

  return (
    <>
      <style>{PULSE_STYLE}</style>
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 16,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8,
        }}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "rgba(42,22,24,0.95)",
                border: "1px solid rgba(201,164,108,0.3)",
                borderRadius: 16,
                padding: "12px 16px",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
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
                🎵 Musik Pengiring
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={toggle}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
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
                    width: 36, height: 36, borderRadius: "50%",
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

        <button
          onClick={() => setExpanded((e) => !e)}
          className={playing ? "music-btn-playing" : ""}
          style={{
            width: 48, height: 48,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(75,31,40,0.95), rgba(42,22,24,0.95))",
            border: "1px solid rgba(201,164,108,0.45)",
            color: colors.gold,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            outline: "none",
            transition: "transform 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Music size={18} />
        </button>
      </div>
    </>
  );
});

export default MusicPlayer;
