"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Landing Gym",
    description: "Landing page moderna para gimnasio.",
    image: "/projects/gym.png",
  },
  {
    title: "Dashboard Fitness",
    description: "Dashboard con estadísticas en tiempo real.",
    image: "/projects/dashboard.png",
  },
  {
    title: "Ecommerce FitWear",
    description: "Tienda de ropa deportiva full responsive.",
    image: "/projects/ecommerce.png",
  },
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const current = projects[index];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* CONTENEDOR 3D */}
      <div className="relative w-[350px] h-[250px] perspective">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          exit={{ opacity: 0, rotateY: -45, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-700 shadow-2xl 
          overflow-hidden flex flex-col"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={current.image}
            alt={current.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 flex flex-col gap-1 text-white">
            <h2 className="text-lg font-semibold">{current.title}</h2>
            <p className="text-sm opacity-70">{current.description}</p>
          </div>
        </motion.div>
      </div>

      {/* BOTONES */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={next}
          className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
