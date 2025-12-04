"use client";
import React from "react";
import { projects } from "../const/const";
import { SectionHeader } from "./SectionHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export const ProjectsSection = () => {

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
      </div>
    </section>
  );
};
