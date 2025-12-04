import React from "react";
import Image from "next/image";
import { Lock, Eye, Code } from "lucide-react";

export type ProjectProps = {
  id: string;
  title: string;
  description: string;
  image: string[];
  badge?: "Proyecto Freelance" | "Proyecto Empresarial" | "Proyecto Personal";
  privateCode?: boolean;
  stack?: string[];
  href?: string;
  hrefDeploy?: string;
};

const badgeColors: Record<NonNullable<ProjectProps["badge"]>, string> = {
  "Proyecto Empresarial": "bg-cyan-900",
  "Proyecto Freelance": "bg-blue-600",
  "Proyecto Personal": "bg-purple-700",
};

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  badge,
  privateCode = false,
  stack = [],
  href,
  hrefDeploy,
}) => {
  return (
    <article className="bg-[#0d1117] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      {/* Imagen */}
      <div className="relative w-full h-48 flex-shrink-0">
        <Image
          src={image[0]}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4 relative flex-1 overflow-auto">
        {badge && (
          <span
            className={`absolute top-3 right-3 ${
              badgeColors[badge]
            } text-white text-xs px-3 py-1 rounded-full shadow-md`}
            aria-label={`Tipo de proyecto: ${badge}`}
          >
            {badge}
          </span>
        )}

        <header>
          <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </header>

        {privateCode && (
          <div className="flex items-center gap-2 text-yellow-400 text-xs border border-yellow-600 rounded-md px-3 py-2 bg-yellow-500/10">
            <Lock size={14} /> El código fuente no está disponible públicamente
          </div>
        )}

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="bg-[#1c2128] border border-[#30363d] text-gray-200 text-xs px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-4">
          {hrefDeploy && (
            <a
              href={hrefDeploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-700 border border-gray-700 hover:text-white hover:border-gray-500 text-sm px-4 py-2 rounded-md transition-colors"
            >
              <Eye size={16} /> Ver Demo
            </a>
          )}

          {!privateCode && href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#2ac537]  text-white hover:bg-[#004bb5] text-sm px-4 py-2 rounded-md transition-colors"
            >
              <Code size={16} /> Ver Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
