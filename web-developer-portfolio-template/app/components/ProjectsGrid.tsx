"use client";
import React from "react";
import { ProjectProps } from "./ProjectCard";
import Image from "next/image";

interface ProjectsGridProps {
  items: ProjectProps[];
}

const badgeColors: Record<NonNullable<ProjectProps["badge"]>, string> = {
  "Proyecto Empresarial": "bg-gradient-to-r from-cyan-700 to-cyan-500 shadow-lg",
  "Proyecto Freelance": "bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg",
  "Proyecto Personal": "bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg",
};

export const ProjectsGrid = ({ items }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {items.map((project, i) => (
        <a
          key={i}
          href={project.hrefDeploy ?? project.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-[1.03] duration-300"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Imagen */}
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Badge */}
            {project.badge && (
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white select-none ${badgeColors[project.badge]}`}
                aria-label={`Tipo de proyecto: ${project.badge}`}
              >
                {project.badge}
              </span>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-400 flex flex-col justify-start p-3">
              <h3 className="text-lg font-semibold text-white drop-shadow-md">{project.title}</h3>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-3 mt-3">
                {project.stack?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/25 text-white text-xs font-medium px-3 py-1 rounded-lg backdrop-blur-md shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Descripción corta */}
              <p className="mt-4 text-sm text-gray-300  ">
                {project.description}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
