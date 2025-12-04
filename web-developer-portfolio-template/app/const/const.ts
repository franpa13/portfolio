import { ProjectProps } from "../components/ProjectCard";

export const projects: ProjectProps[] = [
	{
		id: "progressus-gym",
		title: "Progressus Gym",
		description:
			"Plataforma web para un gimnasio en Córdoba, con sistema multirol y gestión de planes, turnos y compras en línea.",
		image: ["/progressus/progressus.png", "/progressus/progressus1.png", "/progressus/progressus3.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React", "Zustand", "Tailwind CSS", "Axios", "Material UI", "Framer Motion"],
		hrefDeploy: "https://progressus-client.vercel.app/"
	},
	{
		id: "swaplyar",
		title: "SwaplyAr",
		description:
			" Plataforma web para intercambio de criptomonedas. Me encargué del desarrollo frontend, implementando un sistema multirol (administrador y usuario). Incluye gestión de transacciones, historial de operaciones, y un módulo de seguridad para autenticación y verificación de usuarios.",
		image: ["/swaplyAr/swaplyarweb.png", "/swaplyAr/swaply1.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["Next Js", "Tailwind CSS", "Typescript", "Material UI" , "Zod"],
		hrefDeploy: "https://www.swaplyar.com/es/inicio"
	},
	// {
	// 	id: "resurface",
	// 	title: "Resurface",
	// 	description:
	// 		"Plataforma de alquileres vacacionales o no similar a Airbnb para un cliente en Estados Unidos. Me enfoqué en el desarrollo del sistema avanzado de filtros (localidad, tamaño, cantidad de baños, entre otros) para optimizar la búsqueda y experiencia del usuario.",
	// 	image: ["/resurface.png"],
	// 	badge: "Proyecto Empresarial",
	// 	privateCode: true,
	// 	stack: ["Next.js", "Shadcn", "Typescript", "Zustand"],

	// }
	{
		id: "nortec-ecommerce",
		title: "Nortec - Ecommerce",
		description:
			"Ecommerce para Nortec donde me encargue del back y front con Next Js y Node Js ",
		image: ["https://i.postimg.cc/jjjCNJYQ/nortece.png", "/nortec-web/nortec1.png", "/nortec-web/nortec2.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["Next Js", "Tailwind", "Typescript", "Axios" , "Node Js", "Express", "PostgreSQL"],
		hrefDeploy: "https://ecommerce-nortec.vercel.app/"
	},
	{
		id: "nortec-dashboard",
		title: "NortEc Dashboard",
		description:
			"Sistema de gestión de stock, ventas y compras de artículos tecnológicos. Diseñado para un único rol administrativo, permitiendo la administración completa de inventario, operaciones y datos comerciales desde un panel centralizado. USUARIO: admin , CONTRASEÑA: panchi123",
		image: ["/nortec-admin/nortec.png", "/nortec-admin/nortecadm1.png", "/nortec-admin/nortecadm2.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React Js", "Typescript", "Shadcn", "Zustand" , "Tailwind"],
		hrefDeploy: "https://nortec-dash.vercel.app/"
	},
	{
		id: "yemas-del-sol",
		title: "Yemas Del Sol",
		description:
			"Sistema de gestión para una granja exportadora de huevos con dos roles principales (administrador y empleado). Me enfoqué en el desarrollo del dashboard administrativo, implementando visualizaciones interactivas con gráficos para optimizar el control y análisis de la producción.",
		image: ["/yemas/yemas.png", "/yemas/yemas1.png", "/yemas/yemas2.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Material UI", "Redux", "recharts"],
		hrefDeploy: "https://www.yemasdelsol.com/"
	},
	// {
	// 	id: "workupcloud",
	// 	title: "WorkupCloud",
	// 	description:
	// 		"CRM desarrollado para una empresa en Estados Unidos. El administrador podía crear workspaces y asignar tareas a empleados. Me encargué de la implementación del módulo de gestión de tareas, incluyendo status, fecha de entrega, prioridad y flujo de trabajo dinámico.",
	// 	image: ["/workoudcloud.png"],
	// 	badge: "Proyecto Empresarial",
	// 	privateCode: true,
	// 	stack: ["React Js", "Typescript", "Shadcn", "Zustand", "zod"],
	// },
	{
		id: "mendoza-news",
		title: "Mendoza News",
		description:
			"Portal de noticias para un diario de Mendoza. Me encargué del diseño responsive de la interfaz y de la integración eficiente de múltiples endpoints en el panel de administración, garantizando una experiencia de usuario optimizada y una gestión fluida de contenidos.",
		image: ["/MendozaNews.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Redux", "React Scroll"],
		hrefDeploy: "https://mnews.com.ar/"
	},
	{
		id: "tecno-cart",
		title: "Tecno Cart",
		description:
			"Ecommerce completo que desarrolle con carrito de compras, filtros y busqueda de productos. Realizado en el curso fullstack avanzado de Software Factory. Implementa Docker, Dominio, TDD y Storybook",
		image: ["/tecno-cart/tecno1.png", "/tecno-cart/tecno2.png", "/tecno-cart/tecno3.png", "/tecno-cart/tecno4.png", "/tecno-cart/tecno5.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/ecommerce-gestor",
		stack: ["React Js", "Tailwind Css", "Axios", "Node Js", "Express", "PostgreSQL", "Storybook", "TDD", "Docker"],
		hrefDeploy: "https://github.com/franpa13/ecommerce-gestor"
	},{
		id: "todo-app",
		title: "Todo App",
		description:
			"To do list completa donde me encargue de todo el crud completo del backend y frontend.",
		image: ["/todo/todoapp.png", "/todo/todo1.png", "/todo/todo2.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/to-do-list?tab=readme-ov-file",
		stack: ["React Js", "Node Js", "Express", "Typescript" , "Tailwind", "PostgreSQL", "Axios"],

	},
	{
		id: "cafeteria-rimberio",
		title: "Cafeteria Rimberio",
		description:
			"Landing Page para la Cafetería Rimberio con un diseño moderno y responsive. Cuenta con 3 secciones principales: Inicio, Contacto y Productos, donde se destaca la oferta de la cafetería y permite a los usuarios explorar el menú y obtener información de contacto fácilmente.",
		image: ["/cafeteria/rimberio.png", "/cafeteria/cafe1.png", "/cafeteria/cafe.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/landingPage",
		stack: ["React Js", "Framer Motion", "Tailwind"],
		hrefDeploy: "https://landing-page-smoky-rho.vercel.app/"
	},
	{
		id: "school-web",
		title: "School Web",
		description:
			"Plataforma diseñada para optimizar la gestión de calificaciones, asistencias y otros aspectos del rendimiento estudiantil, mejorando la interacción entre docentes y alumnos.",
		image: ["/school.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/landingPage",
		stack: ["React Js", "Framer Motion", "Tailwind"],
		hrefDeploy: "https://school-web-flax.vercel.app/"
	}, {
		id: "git-search",
		title: "Git Search",
		description:
			"Proyecto donde interactue con la API de Github para poder obtener informacion del usuario que desees buscar",
		image: ["/gitsearch/git.png", "/gitsearch/midu.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/GithubProfile",
		stack: ["React Js", "Tailwind Css", "Axios"],
		hrefDeploy: "https://profile-git-jade.vercel.app/"
	}


];

export const allProjects: ProjectProps[] = [...projects];