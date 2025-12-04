"use client";

import React from "react";
import Image from "next/image";
import { Code2, ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { allProjects } from "../const/const";
import { Carousel } from "../components/Carousel";
import { techIcons } from "../components/TechIcons";

const badgeColors = {
    "Proyecto Freelance": "from-yellow-500 to-yellow-400 border-yellow-400 text-yellow-300",
    "Proyecto Empresarial": "from-purple-500 to-purple-400 border-purple-400 text-purple-300",
    "Proyecto Personal": "from-blue-500 to-blue-400 border-blue-400 text-blue-300",
};

export default function  UniquePageProject() {
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
        <main className="max-w-4xl mx-auto my-20 rounded-xl p-10 shadow-[0_0_40px_rgba(59,130,246,0.3)] relative z-10 bg-[#0d1117]">
            {/* Back button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-500 font-semibold transition"
                aria-label="Volver atrás"
            >
                <ChevronLeft size={20} />
                Volver
            </button>

            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h1 className="text-white text-4xl font-extrabold tracking-tight">{project.title}</h1>

                <div className="flex items-center gap-4 flex-wrap">
                    {project.badge && (
                        <span
                            className={`inline-block text-xs font-semibold px-4 py-1 rounded-full bg-gradient-to-r ${badgeColors[project.badge]} border`}
                        >
                            {project.badge}
                        </span>
                    )}
                    {project.privateCode && (
                        <div className="flex items-center gap-1 text-gray-400" title="Código Privado">
                            <Code2 size={20} />
                            <span className="text-sm">Privado</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Carousel de imágenes */}
            <section className="mb-10">
                <Carousel
                    items={project.image}
                    renderItem={(src, i) => (
                        <div className="relative w-full h-72 sm:h-[420px] rounded-xl overflow-hidden">
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

            {/* Descripción */}
            <p className="text-gray-300 text-lg leading-relaxed mb-12">{project.description}</p>

            {/* Stack */}
            <section className="flex flex-wrap gap-2 my-12">
                {project.stack?.map((tech) => (
                    <span
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1 bg-neutral-800 dark:bg-neutral-900 text-white rounded-lg text-sm"
                        style={{ borderLeft: `4px solid ${techIcons[tech]?.color}` }}
                    >
                        <span className="text-lg">
                            {techIcons[tech]?.icon}
                        </span>
                        {tech}
                    </span>
                ))}
            </section>

            {/* Links */}
            <section className="flex flex-wrap gap-6">

                {project.href && (
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center justify-center gap-3 
        px-4 py-2 
        bg-gradient-to-r from-blue-600 to-blue-700 
        rounded-lg font-medium text-white
        hover:from-blue-500 hover:to-blue-600 
        transition-all duration-300 group
      "
                    >
                        {/* ICONO CODE2 */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>

                        Código Fuente
                    </a>
                )}

                {project.hrefDeploy && (
                    <a
                        href={project.hrefDeploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
        inline-flex items-center justify-center gap-3 
        px-4 py-2 
        bg-gradient-to-r from-purple-600 to-purple-700 
        rounded-lg font-medium text-white
        hover:from-purple-500 hover:to-purple-600 
        transition-all duration-300 group
      "
                    >
                        {/* ICONO EXTERNAL-LINK */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 transition-transform group-hover:scale-110"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 3l-9 9" />
                        </svg>

                        Ver Demo
                    </a>
                )}

            </section>

        </main>
    );
};


