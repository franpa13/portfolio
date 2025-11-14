"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InteractiveCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotación en base a la posición del mouse
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);

    x.set(posX);
    y.set(posY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
      }}
      className="
        w-80 h-52 rounded-2xl bg-gradient-to-br 
        from-zinc-800 to-zinc-900 border border-zinc-700 
        shadow-xl cursor-pointer transition-transform 
        duration-300 flex items-center justify-center
        text-white select-none
      "
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold">Frontend Developer</h2>
        <p className="text-sm opacity-70 mt-1">Interacción 3D al mover el mouse</p>
      </div>
    </motion.div>
  );
}
