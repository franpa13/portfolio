import { ProjectProps } from "../components/ProjectCard";

export const projects: ProjectProps[] = [
	{
		title: "Progressus Gym",
		description:
			"Plataforma web para un gimnasio en Córdoba, con sistema multirol y gestión de planes, turnos y compras en línea.",
		image: "/progressus.png",
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React", "Zustand", "Tailwind CSS", "Axios", "Material UI"],
		hrefDeploy: "https://progressus-client.vercel.app/"
	},
	{
		title: "SwaplyAr",
		description:
			" Plataforma web para intercambio de criptomonedas. Me encargué del desarrollo frontend, implementando un sistema multirol (administrador y usuario). Incluye gestión de transacciones, historial de operaciones, y un módulo de seguridad para autenticación y verificación de usuarios.",
		image: "/swaplyarweb.png",
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["Next Js", "Tailwind CSS", "Typescript", "Material UI"],
		hrefDeploy: "https://www.swaplyar.com/es/inicio"
	},
	{
		title: "Resurface",
		description:
			"Plataforma de alquileres vacacionales o no similar a Airbnb para un cliente en Estados Unidos. Me enfoqué en el desarrollo del sistema avanzado de filtros (localidad, tamaño, cantidad de baños, entre otros) para optimizar la búsqueda y experiencia del usuario.",
		image: "/resurface.png",
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["Next.js", "Shadcn", "Typescript", "Zustand"],

	}, {
		title: "Nortec - Ecommerce",
		description:
			"Ecommerce para Nortec donde me encargue del back y front con Next Js y Node Js ",
		image: "https://i.postimg.cc/jjjCNJYQ/nortece.png",
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["Next Js", "Tailwind", "Typescript"],
		hrefDeploy: "https://ecommerce-nortec.vercel.app/"
	},
	{
		title: "NortEc Dashboard",
		description:
			"Sistema de gestión de stock, ventas y compras de artículos tecnológicos. Diseñado para un único rol administrativo, permitiendo la administración completa de inventario, operaciones y datos comerciales desde un panel centralizado.",
		image: "/nortecc.png",
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React Js", "Typescript", "Shadcn", "Zustand"],
		hrefDeploy: "https://nortec-dash.vercel.app/"
	}, {
		title: "Yemas Del Sol",
		description:
			"Sistema de gestión para una granja exportadora de huevos con dos roles principales (administrador y empleado). Me enfoqué en el desarrollo del dashboard administrativo, implementando visualizaciones interactivas con gráficos para optimizar el control y análisis de la producción.",
		image: "/yemas.png",
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Material UI", "Redux", "recharts"],
		hrefDeploy: "https://www.yemasdelsol.com/"
	},
	{
		title: "WorkupCloud",
		description:
			"CRM desarrollado para una empresa en Estados Unidos. El administrador podía crear workspaces y asignar tareas a empleados. Me encargué de la implementación del módulo de gestión de tareas, incluyendo status, fecha de entrega, prioridad y flujo de trabajo dinámico.",
		image: "/workoudcloud.png",
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Typescript", "Shadcn", "Zustand", "zod"],
	},
	{
		title: "Mendoza News",
		description:
			"Portal de noticias para un diario de Mendoza. Me encargué del diseño responsive de la interfaz y de la integración eficiente de múltiples endpoints en el panel de administración, garantizando una experiencia de usuario optimizada y una gestión fluida de contenidos.",
		image: "/MendozaNews.png",
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Redux", "React Scroll"],
		hrefDeploy: "https://mnews.com.ar/"
	}

];
export const personalProjects: ProjectProps[] = [
		{
		title: "Todo App",
		description:
			"To do list completa donde me encargue de todo el crud completo del backend y frontend.",
		image: "/todoapp.png",
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/to-do-list?tab=readme-ov-file",
		stack: ["React Js", "Node Js", "Express", "Typescript"],

	},
	{
		title: "Cafeteria Rimberio",
		description:
			"Landing Page para la Cafetería Rimberio con un diseño moderno y responsive. Cuenta con 3 secciones principales: Inicio, Contacto y Productos, donde se destaca la oferta de la cafetería y permite a los usuarios explorar el menú y obtener información de contacto fácilmente.",
		image: "/rimberio.png",
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/landingPage",
		stack: ["React Js", "Framer Motion", "Tailwind Css"],
		hrefDeploy: "https://landing-page-smoky-rho.vercel.app/"
	},
	{
		title: "School Web",
		description:
			"Plataforma diseñada para optimizar la gestión de calificaciones, asistencias y otros aspectos del rendimiento estudiantil, mejorando la interacción entre docentes y alumnos.",
		image: "/school.png",
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/landingPage",
		stack: ["React Js", "Framer Motion", "Tailwind Css"],
		hrefDeploy: "https://school-web-flax.vercel.app/"
	}, {
		title: "Git Search",
		description:
			"Proyecto donde interactue con la API de Github para poder obtener informacion del usuario que desees buscar",
		image: "/git.png",
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://profile-git-jade.vercel.app/",
		stack: ["React Js", "Tailwind Css", "Axios"],
		hrefDeploy: "https://profile-git-jade.vercel.app/"
	},

]