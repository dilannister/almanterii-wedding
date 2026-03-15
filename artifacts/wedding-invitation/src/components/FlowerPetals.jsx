import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { flowerConfig } from "../config/flowerConfig";

function Petal({ index }) {
  const size = flowerConfig.size + Math.random() * 10;
  const initialX = Math.random() * 100;
  const duration = flowerConfig.speed + Math.random() * 10;
  const delay = Math.random() * 10;
  const rotateEnd = (Math.random() - 0.5) * 360;
  const xDrift = (Math.random() - 0.5) * 150;

  return (
    <motion.div
      style={{
        position: "absolute",
        top: -size * 2,
        left: `${initialX}vw`,
        width: size,
        height: size,
        pointerEvents: "none",
      }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, xDrift],
        rotate: [0, rotateEnd],
        opacity: [flowerConfig.opacity, flowerConfig.opacity * 0.8, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <ellipse cx="20" cy="20" rx="8" ry="18" fill="#F5E9E2" opacity="0.85" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="20" rx="8" ry="18" fill="#F5E9E2" opacity="0.75" transform="rotate(30 20 20)" />
        <ellipse cx="20" cy="20" rx="8" ry="18" fill="#fff8f0" opacity="0.65" transform="rotate(90 20 20)" />
        <ellipse cx="20" cy="20" rx="8" ry="18" fill="#fff8f0" opacity="0.55" transform="rotate(150 20 20)" />
        <circle cx="20" cy="20" r="4" fill="#C9A46C" opacity="0.9" />
      </svg>
    </motion.div>
  );
}

export default function FlowerPetals() {
  if (!flowerConfig.enabled) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
        overflow: "hidden",
      }}
    >
      {Array.from({ length: flowerConfig.petalCount }).map((_, i) => (
        <Petal key={i} index={i} />
      ))}
    </div>
  );
}
