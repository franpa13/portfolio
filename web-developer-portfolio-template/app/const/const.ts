import { ProjectProps } from "../components/ProjectCard";

export const projects: ProjectProps[] = [
	{
		id: "lizzu",
		title: "Lizzu Multimarcas",
		description:
			"Web para una agencia de autos enfocada en mostrar el catálogo de vehículos, destacar promociones y ofrecer una experiencia moderna para captar potenciales compradores.",
		image: ["/lizzu/lizzu1.png", "/lizzu/lizzu2.png", "/lizzu/lizzu3.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["Next Js", "Tailwind CSS", "Shadcn", "Typescript"],
		hrefDeploy: "https://lizzu.vercel.app/",
	}, {
		id: "swaplyar",
		title: "SwaplyAr",
		description:
			"Plataforma web para intercambio de criptomonedas. Me encargué del desarrollo frontend, implementando un sistema multirol (administrador y usuario). Incluye gestión de transacciones, historial de operaciones, y un módulo de seguridad para autenticación y verificación de usuarios.",
		image: ["/swaplyAr/swaplyarweb.png", "/swaplyAr/swaply1.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["Next Js", "Tailwind CSS", "Typescript", "Material UI", "Zod"],
		hrefDeploy: "https://www.swaplyar.com/es/iniciar-sesion-o-registro",
	}, {
		id: "yemas-del-sol",
		title: "Yemas Del Sol",
		description:
			"Sistema de gestión para una granja exportadora de huevos con dos roles principales (administrador y empleado). Me enfoqué en el desarrollo del dashboard administrativo, implementando visualizaciones interactivas con gráficos para optimizar el control y análisis de la producción.",
		image: ["/yemas/yemas.png", "/yemas/yemas1.png", "/yemas/yemas2.png"],
		badge: "Proyecto Empresarial",
		privateCode: true,
		stack: ["React Js", "Material UI", "Redux", "recharts"],
		hrefDeploy: "https://www.yemasdelsol.com/",
	},
	{
		id: "cafeteria-rimberio",
		title: "Cafetería Rimberio",
		description:
			"Landing Page para la Cafetería Rimberio con un diseño moderno y responsive. Cuenta con 3 secciones principales: Inicio, Contacto y Productos, donde se destaca la oferta de la cafetería y permite a los usuarios explorar el menú y obtener información de contacto fácilmente.",
		image: ["/cafeteria/rimberio.png", "/cafeteria/cafe1.png", "/cafeteria/cafe.png"],
		badge: "Proyecto Personal",
		privateCode: false,
		href: "https://github.com/franpa13/landingPage",
		stack: ["React Js", "Framer Motion", "Tailwind"],
		hrefDeploy: "https://landing-page-smoky-rho.vercel.app/",
	},
	// {
	// 	id: "nortec-ecommerce",
	// 	title: "Nortec - Ecommerce",
	// 	description:
	// 		"Ecommerce completo para Nortec — catálogo de productos, carrito, checkout y gestión de pedidos. Desarrollé el front y el back end de forma integral para que el negocio pudiera vender online desde el día uno.",
	// 	image: ["https://i.postimg.cc/jjjCNJYQ/nortece.png", "/nortec-web/nortec1.png", "/nortec-web/nortec2.png"],
	// 	badge: "Proyecto Freelance",
	// 	privateCode: true,
	// 	stack: ["Next Js", "Tailwind", "Typescript", "Axios", "Node Js", "Express", "PostgreSQL"],
	// 	hrefDeploy: "https://ecommerce-nortec.vercel.app/",
	// },
	// {
	// 	id: "nortec-dashboard",
	// 	title: "NortEc Dashboard",
	// 	description:
	// 		"Panel de control completo para la gestión interna de Nortec: stock, ventas, compras y reportes en un dashboard centralizado. Permite al dueño tener visibilidad total del negocio en tiempo real. (Demo — usuario: admin, contraseña: panchi123)",
	// 	image: ["/nortec-admin/nortec.png", "/nortec-admin/nortecadm1.png", "/nortec-admin/nortecadm2.png"],
	// 	badge: "Proyecto Freelance",
	// 	privateCode: true,
	// 	stack: ["React Js", "Typescript", "Shadcn", "Zustand", "Tailwind"],
	// 	hrefDeploy: "https://nortec-dash.vercel.app/",
	// },
	{
		id: "progressus-gym",
		title: "Progressus Gym",
		description:
			"Plataforma web completa para un gimnasio en Córdoba: sistema multirol (admin, entrenador, nutricionista y socio), gestión de planes de entrenamiento, reserva de turnos y tienda online integrada — todo en un solo lugar.",
		image: ["/progressus/progressus.png", "/progressus/progressus1.png", "/progressus/progressus3.png"],
		badge: "Proyecto Freelance",
		privateCode: true,
		stack: ["React", "Zustand", "Tailwind CSS", "Axios", "Material UI", "Framer Motion"],
		hrefDeploy: "https://progressus-client.vercel.app/",
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
		hrefDeploy: "https://dashboard.crmllajujuy.org/",
	}

];

export const allProjects: ProjectProps[] = [...projects];
