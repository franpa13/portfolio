import Image from "next/image"
import { ProjectProps } from "./ProjectCard"
import Link from "next/link";
import { techIcons } from "./TechIcons";
const badgeColors: Record<NonNullable<ProjectProps["badge"]>, string> = {
    "Proyecto Empresarial": "bg-gradient-to-r from-cyan-700 to-cyan-500 shadow-lg",
    "Proyecto Freelance": "bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg",
    "Proyecto Personal": "bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg",
};
export const Card = ({ project }: { project: ProjectProps }) => {
    return (
        <Link
            href={`/${project.id}`}
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-[1.03] duration-300"
        >
            <div className=" rounded-2xl  shadow-2xl relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Imagen */}
                <Image
                    src={project.image[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 hover:opacity-70 transition-opacity duration-400 flex flex-col justify-start p-3">
                    <h3 className="text-lg font-semibold text-white drop-shadow-md">{project.title}</h3>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-3 mt-3">
                        {project.stack?.map((tech, index) => (
                            <span
                                key={index}
                            >
                                {techIcons[tech]?.icon}
                            </span>
                        ))}
                    </div>

                    {/* Descripción corta */}
                    <p className="mt-4 text-sm text-gray-300  ">
                        {project.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
