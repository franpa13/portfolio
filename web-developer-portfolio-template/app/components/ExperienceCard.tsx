"use client"
import React, { useState } from "react";
import { Award, FolderKanban, Code2, Workflow, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techIcons } from "./TechIcons";

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
  achievements = [],
  projects = [],
  stack = [],
  methodologies = [],
  iconCompany = "",
  hrefCompany = "#",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const hasDetails =
    achievements.length > 0 ||
    projects.length > 0 ||
    stack.length > 0 ||
    methodologies.length > 0;

  return (
    <div
      onClick={toggleAccordion}
      className="bg-[#0f141b] border border-[#242b36] rounded-xl px-5 sm:px-6 py-4 mb-6 transition-colors duration-200 hover:border-[#364154]"
    >
      {/* Encabezado - siempre visible y clickeable */}
      <div className="cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{role}</h3>
          <div className="flex items-center gap-2 my-2 xl:my-0">
            <span className="text-gray-300 text-xs px-2 py-1 rounded-md border border-[#313a47] bg-[#121924]">
              Tiempo completo
            </span>
            {hasDetails &&
              (isExpanded ? (
                <ChevronUp size={18} className="text-gray-400 transition-all duration-200" />
              ) : (
                <ChevronDown size={18} className="text-gray-400 transition-all duration-200" />
              ))}
          </div>
        </div>

        <div className="flex justify-between mt-4 items-center">
          <p className="text-gray-100 font-medium mb-1">{company}</p>

          <Link
            href={hrefCompany}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 lg:w-11 lg:h-11 relative rounded-md overflow-hidden border border-[#313a47]"
          >
            <Image src={iconCompany} alt={`${company} logo`} fill className="object-cover" />
          </Link>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          {date} - {location}
        </p>
      </div>

      {/* Contenido expandible */}
      {hasDetails && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          {/* Logros principales */}
          {achievements.length > 0 && (
            <div className="mb-6 text-sm md:text-base">
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <Award size={16} className="text-gray-400" /> Logros principales
              </h4>
              <ul className="list-inside list-none text-gray-300 space-y-2">
                {achievements.map((item, i) => (
                  <li key={i}>- {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Proyectos destacados */}
          {projects.length > 0 && (
            <div className="mb-6">
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <FolderKanban size={16} className="text-gray-400" /> Proyectos destacados
              </h4>
              <div className="flex flex-wrap gap-4">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-[#121821] border border-[#262f3b] rounded-lg p-4 transition-colors duration-200 hover:border-[#3a4658]"
                  >
                    <h5 className="font-medium text-white">{project.name}</h5>
                    <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                    {project.highlight && (
                      <p className="text-xs text-gray-300 font-medium">{project.highlight}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stack tecnologico */}
          {stack.length > 0 && (
            <div className="mb-4">
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Code2 size={16} className="text-gray-400" /> Stack tecnologico
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#121924] border border-[#313a47] px-2 py-1 rounded text-gray-200"
                    title={tech}
                  >
                    {techIcons[tech]?.icon ?? tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metodologias */}
          {methodologies.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Workflow size={16} className="text-gray-400" /> Metodologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((method, i) => (
                  <span
                    key={i}
                    className="bg-[#121924] text-gray-200 px-3 py-1 rounded-md text-xs border border-[#313a47]"
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
