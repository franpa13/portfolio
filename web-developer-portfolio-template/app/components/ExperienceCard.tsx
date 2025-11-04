"use client"
import React, { useState } from "react";
import { Award, FolderKanban, Code2, Workflow, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Tipado de props para proyectos
type Project = {
  name: string;
  description: string;
  highlight?: string;
};

// Tipado de props de la card
export type ExperienceCardProps = {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string;
  achievements?: string[];
  projects?: Project[];
  stack?: string[];
  methodologies?: string[];
  iconCompany?: string;
  hrefCompany?: string;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  date,
  location,
  description,
  achievements = [],
  projects = [],
  stack = [],
  methodologies = [],
  iconCompany = '',
  hrefCompany = '#',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const hasDetails = achievements.length > 0 || projects.length > 0 || stack.length > 0 || methodologies.length > 0;

  return (
    <div className="bg-[#0d1117] border border-purple-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
      {/* Encabezado - siempre visible y clickeable */}
      <div
        className="cursor-pointer"

      >
        <div onClick={toggleAccordion} className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {role}
          </h3>
          <div className="flex items-center gap-2 my-2 xl:my-0 transition-all duration-300">
            <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30">
              Tiempo completo
            </span>
            {hasDetails && (
              isExpanded ? (
                <ChevronUp size={20} className="text-blue-400 transition-all duration-300" />
              ) : (
                <ChevronDown size={20} className="text-blue-400 transition-all duration-300" />
              )
            )}
          </div>
        </div>
        <div className="flex justify-between mt-7 items-center">
          <p className="text-blue-400 font-medium mb-1">{company}</p>

          <Link
            href={hrefCompany}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 lg:w-12 lg:h-12 relative  rounded-lg overflow-hidden border border-blue-500/30"
          >
            <Image
              src={iconCompany}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />

            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-blue-600/90 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Visitar startup
            </span>
          </Link>
        </div>


        <p className="text-gray-400 text-sm mb-4">
          {date} · {location}
        </p>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Contenido expandible */}
      {hasDetails && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
            }`}
        >
          {/* Logros principales */}
          {achievements.length > 0 && (
            <div className="mb-6 text-sm md:text-base">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-3">
                <Award size={16} className="text-yellow-400" /> Logros principales
              </h4>
              <ul className=" list-inside list-none text-gray-300 space-y-3">
                {achievements.map((item, i) => (
                  <li key={i}>- {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Proyectos destacados */}
          {projects.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-3">
                <FolderKanban size={16} className="text-blue-400" /> Proyectos destacados
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-[#161B22] border border-[#21262d] rounded-lg p-4 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
                  >
                    <h5 className="font-medium text-white">{project.name}</h5>
                    <p className="text-gray-400 text-sm mb-2">
                      {project.description}
                    </p>
                    {project.highlight && (
                      <p className="text-xs text-blue-400 font-medium">
                        {project.highlight}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack tecnológico */}
          {stack.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-2">
                <Code2 size={16} className="text-green-400" /> Stack tecnológico
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-3 py-1 rounded-md text-xs border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metodologías */}
          {methodologies.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-2">
                <Workflow size={16} className="text-purple-400" /> Metodologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((method, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-gray-200 px-3 py-1 rounded-md text-xs border border-purple-500/30"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};