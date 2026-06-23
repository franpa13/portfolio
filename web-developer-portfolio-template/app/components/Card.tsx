"use client";
import Image from "next/image";
import { useState } from "react";
import { ProjectProps } from "./ProjectCard";
import { techIcons } from "./TechIcons";
import { ChevronLeft, ChevronRight, ArrowUpRight, Lock } from "lucide-react";

const badgeColors: Record<NonNullable<ProjectProps["badge"]>, string> = {
    "Proyecto Empresarial": "bg-gradient-to-r from-cyan-700 to-cyan-500",
    "Proyecto Freelance": "bg-gradient-to-r from-blue-700 to-blue-500",
    "Proyecto Personal": "bg-gradient-to-r from-purple-700 to-purple-500",
};

export const Card = ({ project }: { project: ProjectProps }) => {
    const [current, setCurrent] = useState(0);
    const { image, title, description, badge, stack, hrefDeploy, privateCode } = project;

    const prev = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent((c) => (c - 1 + image.length) % image.length);
    };

    const next = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent((c) => (c + 1) % image.length);
    };

    return (
        <article className="bg-[#0d1117] border border-[#21262d] rounded-2xl overflow-hidden flex flex-col shadow-xl hover:shadow-blue-900/30 hover:border-[#30363d] transition-all duration-300">
            {/* Carousel de imágenes */}
            <div className="relative w-full h-52 bg-[#0a0f1a] shrink-0">
                <Image
                    src={image[current]}
                    alt={`${title} screenshot ${current + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                />

                {image.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Imagen anterior"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 rounded-full p-1.5 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Imagen siguiente"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 rounded-full p-1.5 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {image.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                                    aria-label={`Ir a imagen ${i + 1}`}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-blue-400" : "bg-white/40"}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Dark Card Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Header: badge + título + flecha demo */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                        {badge && (
                            <span className={`inline-block text-xs font-semibold text-white px-2.5 py-0.5 rounded-full mb-2 ${badgeColors[badge]}`}>
                                {badge}
                            </span>
                        )}
                        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
                    </div>

                    {hrefDeploy && (
                        <a
                            href={hrefDeploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver demo de ${title}`}
                            className="shrink-0 mt-1 p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
                        >
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </a>
                    )}
                </div>

                {/* Descripción */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Código privado */}
                {privateCode && (
                    <div className="flex items-center gap-2 text-yellow-400 text-xs border border-yellow-700/50 rounded-md px-3 py-2 bg-yellow-500/10">
                        <Lock size={12} />
                        Código privado
                    </div>
                )}

                {/* Stack con logos */}
                {stack && stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-1">
                        {stack.map((tech) => {
                            const entry = techIcons[tech];
                            return (
                                <span
                                    key={tech}
                                    title={tech}
                                    className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] text-gray-300 text-xs px-2.5 py-1 rounded-md"
                                >
                                    {entry && (
                                        <span style={{ color: entry.color }} className="text-sm leading-none">
                                            {entry.icon}
                                        </span>
                                    )}
                                    {tech}
                                </span>
                            );
                        })}
                    </div>
                )}
            </div>
        </article>
    );
};
