"use client";

import React from "react";
import Image from "next/image";
import { Code2, ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { allProjects } from "../const/const";
import { Carousel } from "../components/Carousel";
import { techIcons } from "../components/TechIcons";
const badgeColors = {
  "Proyecto Freelance":
    "from-amber-400/80 to-yellow-500/80 border-amber-400/60 text-white",

  "Proyecto Empresarial":
    "from-violet-500/80 to-purple-600/80 border-violet-500/60 text-violet-300",

  "Proyecto Personal":
    "from-sky-500/80 to-blue-600/80 border-sky-500/60 text-sky-300",
};


export default function UniquePageProject() {
  const params = useParams();
  const router = useRouter();
  const idProject = params["id-project"];
  const project = allProjects.find((p) => p.id === idProject);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center text-gray-400">
        <h2 className="text-xl font-semibold">Proyecto no encontrado</h2>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto my-10 sm:my-16 relative z-10 lg:my-20 rounded-xl p-4 sm:p-6 lg:p-8 bg-[#0d1117] shadow-[0_0_40px_rgba(59,130,246,0.3)]">
      
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-blue-400 hover:text-blue-500 font-semibold transition"
      >
        <ChevronLeft size={18} />
        Volver
      </button>

      {/* Header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          {project.title}
        </h1>

        <div className="flex items-center gap-3 flex-wrap">
          {project.badge && (
            <span
  className={`inline-block px-4 py-1 rounded-full text-xs font-semibold 
  bg-gradient-to-r ${badgeColors[project.badge]} border
  shadow-[0_0_12px_rgba(59,130,246,0.25)]`}
>

              {project.badge}
            </span>
          )}
          {project.privateCode && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Code2 size={18} />
              Privado
            </div>
          )}
        </div>
      </header>

      {/* Carousel */}
      <section className="mb-10">
        <Carousel
          items={project.image}
          renderItem={(src, i) => (
            <div className="relative w-full h-56 sm:h-72 lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`${project.title} imagen ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          )}
        />
      </section>

      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
        {project.description}
      </p>

      {/* Stack */}
      <section className="flex flex-wrap gap-2 mb-10">
        {project.stack?.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-neutral-800 rounded-lg text-white"
            style={{ borderLeft: `4px solid ${techIcons[tech]?.color}` }}
          >
            <span className="text-base">{techIcons[tech]?.icon}</span>
            {tech}
          </span>
        ))}
      </section>

      {/* Links */}
      <section className="flex flex-col sm:flex-row gap-4">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-500 hover:to-blue-600 transition"
          >
            Código Fuente
          </a>
        )}

        {project.hrefDeploy && (
          <a
            href={project.hrefDeploy}
            target="_blank"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:from-purple-500 hover:to-purple-600 transition"
          >
            Ver Demo
          </a>
        )}
      </section>
    </main>
  );
}
