import { memo } from "react";

// CSS-only floating ornaments — zero Framer Motion, zero JS animation loop
// Uses pure @keyframes via inline <style>: no scroll listeners, no RAF
const ORNAMENTS = [
  { id: 0, x: 8,  delay: 0,    duration: 22, drift: 12,  size: 30, type: "kawung" },
  { id: 1, x: 22, delay: 5,    duration: 28, drift: -10, size: 22, type: "parang" },
  { id: 2, x: 42, delay: 2,    duration: 25, drift: 8,   size: 26, type: "kawung" },
  { id: 3, x: 62, delay: 8,    duration: 30, drift: -14, size: 20, type: "parang" },
  { id: 4, x: 80, delay: 14,   duration: 26, drift: 10,  size: 28, type: "kawung" },
  { id: 5, x: 90, delay: 18,   duration: 32, drift: -8,  size: 18, type: "parang" },
];

// Inline SVGs for two ornament types — no image requests
function KawungSVG({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="20" rx="8" ry="12" stroke="rgba(201,164,108,0.55)" strokeWidth="1" fill="none"/>
      <ellipse cx="30" cy="20" rx="8" ry="12" stroke="rgba(201,164,108,0.55)" strokeWidth="1" fill="none"/>
      <ellipse cx="20" cy="10" rx="12" ry="8" stroke="rgba(201,164,108,0.55)" strokeWidth="1" fill="none"/>
      <ellipse cx="20" cy="30" rx="12" ry="8" stroke="rgba(201,164,108,0.55)" strokeWidth="1" fill="none"/>
      <circle cx="20" cy="20" r="3" fill="rgba(201,164,108,0.35)"/>
    </svg>
  );
}

function ParangSVG({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 36 Q20 4 36 4" stroke="rgba(201,164,108,0.55)" strokeWidth="1.2" fill="none"/>
      <path d="M4 28 Q20 8 36 12" stroke="rgba(201,164,108,0.45)" strokeWidth="0.8" fill="none"/>
      <path d="M4 20 Q20 12 36 20" stroke="rgba(201,164,108,0.35)" strokeWidth="0.6" fill="none"/>
    </svg>
  );
}

const JavaneseOrnaments = memo(function JavaneseOrnaments() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatDown {
          0%   { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(var(--drift)) rotate(30deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .javanese-ornament { animation: none !important; opacity: 0 !important; }
        }
        /* Hide on very small/slow screens via battery saver heuristic */
        @media (max-width: 480px) {
          .javanese-ornament:nth-child(n+4) { display: none; }
        }
      `}</style>

      {ORNAMENTS.map((o) => (
        <div
          key={o.id}
          className="javanese-ornament"
          style={{
            position: "absolute",
            left: `${o.x}vw`,
            top: 0,
            "--drift": `${o.drift}px`,
            animation: `floatDown ${o.duration}s linear ${o.delay}s infinite`,
            willChange: "transform",
            filter: "drop-shadow(0 0 4px rgba(201,164,108,0.2))",
          }}
        >
          {o.type === "kawung"
            ? <KawungSVG size={o.size} />
            : <ParangSVG size={o.size} />}
        </div>
      ))}
    </div>
  );
});

export default JavaneseOrnaments;
