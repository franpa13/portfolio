import { ProjectProps } from "../components/ProjectCard";

export const projects: ProjectProps[] = [
	{
		id: "vehix",
		title: "Vehix",
		description:
			"Web para una agencia de autos enfocada en mostrar el catalogo de vehiculos, destacar promociones y ofrecer una experiencia moderna para captar potenciales compradores.",
		image: ["/Vehix/vehix1.png", "/Vehix/vehix2.png", "/Vehix/vehix3.png"],
		badge: "Proyecto Personal",
		privateCode: true,
		stack: ["Next Js", "Tailwind CSS", "Shadcn", "Typescript"],
		hrefDeploy: "https://vehix-car.vercel.app/",
	},
	{
		id: "progressus-gym",
		title: "Progressus Gym",
		description:
			"Plataforma web completa para un gimnasio en Córdoba: sistema multirol (admin, entrenador, nutricionista y socio), gestión de planes de entrenamiento, reserva de turnos y tienda online integrada — todo en un solo lugar.",
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
		stack: ["Next Js", "Tailwind CSS", "Typescript", "Material UI", "Zod"],
		hrefDeploy: "https://www.swaplyar.com/es/inicio"
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
		id: "crm-lla-jujuy",
		title: "CRM LLA Jujuy",
		description:
			"CRM a medida para La Libertad Avanza Jujuy: centraliza contactos, seguimiento territorial y coordinación operativa en un dashboard privado. El equipo pasó de hojas de cálculo dispersas a un panel unificado que acelera la toma de decisiones.",
		image: ["/crm-lla/crm-lla.png", "/crm-lla/crm-lla2.png", "/crm-lla/carm-lla3.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Typescript", "Tailwind", "Shadcn"],
		hrefDeploy: "https://dashboard.crmllajujuy.org/"
	},
	{
		id: "nortec-ecommerce",
		title: "Nortec - Ecommerce",
		description:
			"Ecommerce completo para Nortec — catálogo de productos, carrito, checkout y gestión de pedidos. Desarrollé el front y el back end de forma integral para que el negocio pudiera vender online desde el día uno.",
		image: ["https://i.postimg.cc/jjjCNJYQ/nortece.png", "/nortec-web/nortec1.png", "/nortec-web/nortec2.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["Next Js", "Tailwind", "Typescript", "Axios", "Node Js", "Express", "PostgreSQL"],
		hrefDeploy: "https://ecommerce-nortec.vercel.app/"
	},
	{
		id: "nortec-dashboard",
		title: "NortEc Dashboard",
		description:
			"Panel de control completo para la gestión interna de Nortec: stock, ventas, compras y reportes en un dashboard centralizado. Permite al dueño tener visibilidad total del negocio en tiempo real. (Demo — usuario: admin, contraseña: panchi123)",
		image: ["/nortec-admin/nortec.png", "/nortec-admin/nortecadm1.png", "/nortec-admin/nortecadm2.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React Js", "Typescript", "Shadcn", "Zustand", "Tailwind"],
		hrefDeploy: "https://nortec-dash.vercel.app/"
	},





	{
		id: "workupcloud",
		title: "WorkupCloud",
		description:
			"CRM para una empresa en Estados Unidos que necesitaba organizar equipos distribuidos. Desarrollé el módulo de gestión de tareas con asignación por workspace, prioridades, fechas de entrega y flujo de trabajo dinámico — reduciendo la fricción operativa del equipo.",
		image: ["/workoudcloud.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Typescript", "Shadcn", "Zustand", "zod"],
	},
	{
		id: "resurface",
		title: "Resurface",
		description:
			"Plataforma de alquileres vacacionales para un cliente en Estados Unidos, similar a Airbnb. Desarrollé el sistema avanzado de búsqueda y filtros (localidad, tamaño, ambientes, baños) para que los usuarios encuentren exactamente lo que buscan en segundos.",
		image: ["/resurface.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["Next.js", "Shadcn", "Typescript", "Zustand"],
	},
	
	// }, {
	// 	id: "git-search",
	// 	title: "Git Search",
	// 	description:
	// 		"Proyecto donde interactue con la API de Github para poder obtener informacion del usuario que desees buscar",
	// 	image: ["/gitsearch/git.png", "/gitsearch/midu.png"],
	// 	badge: "Proyecto Personal",
	// 	privateCode: false,
	// 	href: "https://github.com/franpa13/GithubProfile",
	// 	stack: ["React Js", "Tailwind Css", "Axios"],
	// 	hrefDeploy: "https://profile-git-jade.vercel.app/"
	// }, {
	// 	id: "todo-app",
	// 	title: "Todo App",
	// 	description:
	// 		"To do list completa donde me encargue de todo el crud completo del backend y frontend.",
	// 	image: ["/todo/todoapp.png", "/todo/todo1.png", "/todo/todo2.png"],
	// 	badge: "Proyecto Personal",
	// 	privateCode: false,
	// 	href: "https://github.com/franpa13/to-do-list?tab=readme-ov-file",
	// 	stack: ["React Js", "Node Js", "Express", "Typescript", "Tailwind", "PostgreSQL", "Axios"],

	// },
	// {
	// 	id: "school-web",
	// 	title: "School Web",
	// 	description:
	// 		"Plataforma diseñada para optimizar la gestión de calificaciones, asistencias y otros aspectos del rendimiento estudiantil, mejorando la interacción entre docentes y alumnos.",
	// 	image: ["/school.png"],
	// 	badge: "Proyecto Personal",
	// 	privateCode: false,
	// 	href: "https://github.com/franpa13/landingPage",
	// 	stack: ["React Js", "Framer Motion", "Tailwind"],
	// 	hrefDeploy: "https://school-web-flax.vercel.app/"
	// },
];

export const allProjects: ProjectProps[] = [...projects];
