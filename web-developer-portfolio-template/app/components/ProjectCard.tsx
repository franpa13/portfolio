import React from "react";
import Image from "next/image";
import { Lock, ViewIcon } from "lucide-react";

export type ProjectProps = {
    title: string;
    description: string;
    image: string;
    badge?: "Proyecto Freelance" | "Proyecto Empresarial" | "Proyecto Personal";
    privateCode?: boolean;
    stack?: string[];
    href?: string
};

export const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    image,
    badge,
    privateCode = false,
    stack = [],
    href
}) => {


    const color =
        badge === "Proyecto Empresarial"
            ? "bg-cyan-900"
            : badge === "Proyecto Freelance"
                ? "bg-blue-600"
                : "bg-purple-700";
    return (
        <div className="bg-[#0d1117]  border-[#155e75]  overflow-hidden   transition-all duration-300 w-100  flex flex-col">
            {/* Imagen */}
            <div className="relative w-full h-48 flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4 relative flex-1 overflow-auto">
                {badge && (
                    <span className={`absolute top-3 right-3 ${color} text-white text-xs px-3 py-1 rounded-full shadow-md`}>
                        {badge}
                    </span>
                )}

                <h3 className="text-xl font-bold text-white mt-4">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>

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

                {privateCode ? (

                    <button
                        disabled
                        className="w-full mt-4 flex items-center justify-center gap-2 bg-[#1c2128] border border-gray-700 text-gray-400 text-sm px-4 py-2 rounded-md cursor-not-allowed"
                    >
                        <Lock size={16} /> Código Privado
                    </button>


                ) : (
                    <a
                        href={href}

                        className="w-full mt-4 flex items-center justify-center gap-2 bg-[#0062eb] border border-gray-700 text-white text-sm px-4 py-2 rounded-md "
                    >
                        <ViewIcon size={16} /> Ver Codigo
                    </a>
                )}
            </div>
        </div>
    );
};