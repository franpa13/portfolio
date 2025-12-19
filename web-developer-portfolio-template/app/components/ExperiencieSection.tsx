import React from 'react';
import { ExperienceCard, ExperienceCardProps } from './ExperienceCard';
import { SectionHeader } from './SectionHeader';


export const experiences: ExperienceCardProps[] = [
	{
		role: "Frontend Developer",
		company: "SwaplyAr",
		date: "Oct 2025 – Presente",
		location: "Remoto",
		description:
			"Participación en el desarrollo frontend de la plataforma SwaplyAr de intercambio de criptomonedas, enfocándome en la creación de interfaces intuitivas y seguras.",
		achievements: [
			"Implementacion de buenas prácticas de seguridad en el desarrollo frontend",
			"Diseño de componentes escalables para clientes diversos siguiendo modelos de Figma",
			"Colaboración directa con Desarrolladores Backend para integración de APIs asi como con diseñadores UI/UX",
		],
		projects: [
			{
				name: "SwaplyAr",
				description:
					" Plataforma web para intercambio de criptomonedas. Me encargué del desarrollo frontend, implementando un sistema multirol (administrador y usuario). Incluye gestión de transacciones, historial de operaciones, y un módulo de seguridad para autenticación y verificación de usuarios.",
			},

		],
		iconCompany: '/swaplyar.jpg',
		hrefCompany: 'https://www.linkedin.com/company/swaplyar/posts/?feedView=all',
		stack: ["Next.js", "Tailwind", "Typescript"],
		methodologies: ["Scrum"],
	},
	{
		role: "Web Developer",
		company: "Freelancer",
		date: "2023 – Presente",
		location: "Remoto",
		description:
			"Gestión autónoma de proyectos fullstack, diseñando y desarrollando interfaces modernas para clientes independientes.",
		achievements: [
			"Implementación de Zustand para gestión de estado eficiente",
			"Diseño de componentes escalables para clientes diversos",
			"Colaboración directa con clientes para cumplir requerimientos específicos",
		],
		projects: [
			{
				name: "Progressus Gym",
				description:
					"Plataforma web integral para un gimnasio en Córdoba. Me encargué de todo el desarrollo frontend, implementando un sistema multirol (administrador, nutricionista, entrenador y socio). Incluye creación y asignación de planes de entrenamiento, gestión de turnos, y un módulo de e-commerce para compras en línea dentro de la misma aplicación.",
			},
			{
				name: "Nortec Dashboard",
				description:
					"Sistema de gestión de stock, ventas y compras de artículos tecnológicos. Diseñado para un único rol administrativo, permitiendo la administración completa de inventario, operaciones y datos comerciales desde un panel centralizado.",
			},
			{
				name: "Mendoza News",
				description:
					"Portal de noticias para un diario de Mendoza. Me encargué del diseño responsive de la interfaz y de la integración eficiente de múltiples endpoints en el panel de administración, garantizando una experiencia de usuario optimizada y una gestión fluida de contenidos.",
			},
		],
		iconCompany: '/independiente.png',
		stack: ["React","Next.js", "Tailwind", "Zustand", "Material UI"],
		methodologies: ["Scrum"],
	},

	{
		role: "Frontend Developer",
		company: "Novadeha Group",
		date: "Feb 2025 – Mayo 2025",
		location: "Remoto",
		description:
			"Desarrollo de interfaces accesibles y de alto rendimiento con Next.js y TypeScript.",
		achievements: [
			"Implementación de componentes reutilizables y escalables",
			"Implementación de carga optimista para mejorar la interaccion con el usuario",
			"Integración eficiente de APIs para comunicación fluida con backend",
			"Uso de React Google Maps para manejo de mapas interactivos",
		],
		projects: [
			{
				name: "Resurface",
				description:
					"Plataforma de alquileres vacacionales o no similar a Airbnb para un cliente en Estados Unidos. Me enfoqué en el desarrollo del sistema avanzado de filtros (localidad, tamaño, cantidad de baños, entre otros) para optimizar la búsqueda y experiencia del usuario.",
			},
			{
				name: "WorkupCloud",
				description:
					"CRM desarrollado para una empresa en Estados Unidos. El administrador podía crear workspaces y asignar tareas a empleados. Me encargué de la implementación del módulo de gestión de tareas, incluyendo status, fecha de entrega, prioridad y flujo de trabajo dinámico.",
			},
		],
		stack: ["Next.js", "Typescript", "React", "Tailwind", "Zustand"],
		methodologies: ["Scrum"],
		iconCompany: '/novadeha.jpg',
		hrefCompany: "https://www.linkedin.com/company/novadeha-group/posts/?feedView=all"
	},
	{
		role: "Frontend Developer",
		company: "Destored",
		date: "Marzo 2024 – Mayo 2024",
		location: "Remoto",
		description:
			"Desarrollo frontend de aplicaciones web con React, aplicando buenas prácticas de mantenibilidad y escalabilidad.",
		achievements: [
			"Colaboración con equipos multidisciplinarios",
			"Optimización de rendimiento y accesibilidad",
		],
		projects: [
			{
				name: "Yemas del Sol",
				description:
					"Sistema de gestión para una granja exportadora de huevos con dos roles principales (administrador y empleado). Me enfoqué en el desarrollo del dashboard administrativo, implementando visualizaciones interactivas con gráficos para optimizar el control y análisis de la producción.",

			},
		],
		iconCompany: '/destored.jpg',
		stack: ["React", "Tailwind", "Redux", "Material UI"],
		methodologies: ["Scrum"],
		hrefCompany: "https://www.linkedin.com/company/destored/posts/?feedView=all"
	},


];
export const ExperiencieSection = () => {
	return (
		<section id="experience" className="py-3 sm:py-20 px-4 lg:px-4">
			<div className="max-w-6xl mx-auto">

				<SectionHeader
				icon='/gifs/work.gif'
					title=""
					highlightedText="Experiencia Profesional"
					gradientFrom="from-blue-400"
					gradientTo="to-purple-500"
					subtitleColor="#FFD700"
					description="Más de 1.5 años de experiencia desarrollando aplicaciones web modernas, enfocadas en rendimiento, escalabilidad y experiencias de usuario de alto nivel."
	
				/>

				<div className="relative mt-16">
					{/* Línea vertical con fade en extremos */}
					<div className="absolute left-1/2 top-0 h-full w-[1px] hidden lg:block">

						{/* Línea principal */}
						<div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-600" />

						{/* Fade superior */}
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[12px] h-10 bg-gradient-to-b from-[#0d1117] to-transparent blur-md" />

						{/* Fade inferior */}
						<div className="absolute bottom-0 opacity-10 left-1/2 -translate-x-1/2 w-[12px] h-10 bg-gradient-to-t from-[#0d1117] to-transparent blur-md" />

					</div>


					{/* Cards */}
					<div className="flex flex-col gap-4 lg:gap-10">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`relative lg:w-1/2 ${index % 2 === 0
									? "lg:self-start lg:pr-10"
									: "lg:self-end lg:pl-10"
									}`}
							>
								{/* Punto del timeline */}
								<div className={`hidden lg:block absolute top-6 w-6 h-6 rounded-full border-2 border-purple-400 bg-[#0d1117] ${index % 2 === 0 ? "-right-3" : "-left-3"}  `}></div>
								<ExperienceCard {...exp} />
							</div>
						))}
					</div>
				</div>

			</div>
		</section>
	);
};
