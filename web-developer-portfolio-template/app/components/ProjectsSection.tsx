"use client";
import React, { useState } from "react";
import { personalProjects, projects } from "../const/const";
import { SectionHeader } from "./SectionHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export const ProjectsSection = () => {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <section id="work" className="py-3  px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle=""
          title=""
          highlightedText="Proyectos Destacados"
          description="Una selección de mis trabajos más destacados, desde plataformas empresariales hasta proyectos técnicos personales."
          subtitleColor="#FFD700"
          gradientFrom="from-blue-300"
          gradientTo="to-purple-400"
        />

        {/* Proyectos Profesionales */}
        <span className="lg:text-2xl w-full text-start border-l-4 border-[#62a3f9] px-2 py-1 font-semibold my-8 block">
          Proyectos Profesionales
        </span>

        <ProjectsGrid items={projects} />

        {/* Título con flecha toggle */}
        <button
          onClick={() => setShowPersonal(!showPersonal)}
          className="flex items-center gap-2 lg:text-2xl  w-full  text-center border-l-4 border-purple-700 px-2 py-1 font-semibold  mt-8 cursor-pointer bg-transparent rounded transition"
          aria-expanded={showPersonal}
          aria-controls="personal-projects"
        >
          Ver más
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${showPersonal ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Grid oculto/visible con transición */}
        <div
          id="personal-projects"
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showPersonal ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ProjectsGrid items={personalProjects} />
        </div>

      </div>
    </section>
  );
};
