"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaGitAlt, FaNode } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { IoLogoFigma } from "react-icons/io5";
import { SiJira } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { SectionHeader } from "./SectionHeader";
import { useEffect, useState } from "react";

export const WebCapabilitiesSection = () => {
	const stack = [
		{ icon: FaHtml5, name: "HTML5", color: "#E34F26" },
		{ icon: IoLogoCss3, name: "CSS3", color: "#1572B6" },
		{ icon: BiLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
		{ icon: BiLogoTypescript, name: "TypeScript", color: "#3178C6" },
		{ icon: FaReact, name: "React Js", color: "#61DAFB" },
		{ icon: RiNextjsLine, name: "Next.js", color: "#FFFFFF" },
		{ icon: BsBootstrap, name: "Bootstrap", color: "#702cf4" },
		{ icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
		{ icon: SiRedux, name: "Redux", color: "#593d88" },
		{ icon: FaNode, name: "Node.js", color: "#339933" },
		{ icon: SiExpress, name: "Express", color: "#FFFFFF" },
		{ icon: SiMysql, name: "MySQL", color: "#4479A1" },
		{ icon: BiLogoPostgresql, name: "PostgreSQL", color: "#336791" },
		{ icon: FaGitAlt, name: "Git", color: "#F05032" },
		{ icon: SiJira, name: "Jira", color: "#336791" },
		{ icon: IoLogoFigma, name: "Figma", color: "#ff7237" }
	];

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		// Verificar al montar el componente
		checkScreenSize();

		// Escuchar cambios de tamaño
		window.addEventListener('resize', checkScreenSize);

		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// Optimización: reducir elementos en pantallas pequeñas
	const optimizedStack = isSmallScreen ? stack : [...stack, ...stack];
	const duration = isSmallScreen ? 5 : 10;
	const iconSize = isSmallScreen ? 34 : 42;
	const minWidth = isSmallScreen ? "90px" : "150px";

	return (
		<section id="tech" className="py-5 my-24 relative overflow-hidden">
			{/* Elementos decorativos de fondo */}


			<div className="max-w-full  mx-auto relative z-10">
				<SectionHeader
				icon="/gifs/tecnologia.gif"
	
					title=""
					highlightedText="Tecnologías que uso día a día"
					description="Principales tecnologías que forman parte de mi día a día como desarrollador."
					subtitleColor="#FFD700"
					gradientFrom="from-blue-400"
					gradientTo="to-purple-500"
					className="px-4"
				/>

				{/* Marquee optimizado para diferentes tamaños de pantalla */}
				<div className="overflow-hidden py-0 lg:py-4 relative">


					<motion.div
						className="flex md:gap-6 items-center"
						animate={{ x: ["0%", "-50%"] }}
						transition={{
							repeat: Infinity,
							duration: duration,
							ease: "linear"
						}}
					>
						{optimizedStack.map(({ icon: Icon, name, color }, i) => (
							<motion.button
								key={i}
								className="flex flex-col items-center rounded-md justify-center p-3  group transition-all duration-300 relative overflow-hidden"
								style={{ minWidth }}
								whileHover={{
									y: -5,
									scale: 1.05,
									transition: { duration: 10 }
								}}
							>
								{/* Efecto de brillo al hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								<Icon size={iconSize} color={color} className="z-10" />
								<span className="text-xs text-gray-300 mt-2 font-medium z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{name}
								</span>
							</motion.button>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
// "use client";
// import { motion } from "framer-motion";
// import { FaHtml5, FaReact, FaGithub, FaGitAlt, FaNode } from "react-icons/fa";
// import { IoLogoCss3 } from "react-icons/io";
// import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
// import { RiNextjsLine } from "react-icons/ri";
// import { SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";
// import { GiSkills } from "react-icons/gi";

// export const WebCapabilitiesSection = () => {
// 	const stack = [
// 		{ icon: FaHtml5, name: "HTML5", color: "#E34F26" },
// 		{ icon: IoLogoCss3, name: "CSS3", color: "#1572B6" },
// 		{ icon: BiLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
// 		{ icon: BiLogoTypescript, name: "TypeScript", color: "#3178C6" },
// 		{ icon: FaReact, name: "React", color: "#61DAFB" },
// 		{ icon: TbBrandReactNative, name: "React Native", color: "#61DAFB" },
// 		{ icon: RiNextjsLine, name: "Next.js", color: "#FFFFFF" },
// 		{ icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
// 		{ icon: FaNode, name: "Node.js", color: "#339933" },
// 		{ icon: SiExpress, name: "Express", color: "#FFFFFF" },
// 		{ icon: SiMysql, name: "MySQL", color: "#4479A1" },
// 		{ icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
// 		{ icon: FaGitAlt, name: "Git", color: "#F05032" },

// 	];

// 	const repeatedStack = [...stack, ...stack]; // duplicamos para efecto marquee

// 	return (
// 		<section className="py-16 bg-[#161b22] sm:py-24 px-0 relative overflow-hidden">
// 			{/* Elementos decorativos de fondo */}
// 			<div className="absolute inset-0 overflow-hidden">
// 				<div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
// 				<div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
// 			</div>

// 			<div className="max-w-full mx-auto relative z-10">
// 				<div className="flex flex-col gap-4 items-center justify-center mb-16">
// 					<motion.div
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.5 }}
// 						viewport={{ once: true }}
// 						className="flex items-center gap-3 text-[#FFD700] mb-2"
// 					>
// 						<GiSkills className="text-2xl" />
// 						<span className="text-sm font-medium tracking-wider">TECNOLOGÍAS</span>
// 					</motion.div>

// 					<motion.h2
// 						className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white"
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.5, delay: 0.1 }}
// 						viewport={{ once: true }}
// 					>
// 						Habilidades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack</span>
// 					</motion.h2>

// 					<motion.p
// 						className="text-base sm:text-lg text-gray-400 max-w-2xl text-center mt-4 leading-relaxed"
// 						initial={{ opacity: 0, y: 20 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						transition={{ duration: 0.5, delay: 0.2 }}
// 						viewport={{ once: true }}
// 					>
// 						Principales tecnologías que forman parte de mi día a día como desarrollador
// 					</motion.p>
// 				</div>

// 				{/* Marquee continuo con íconos */}
// 				<div className="overflow-hidden py-4 relative">
// 					<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#161a20] to-transparent z-10"></div>
// 					<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#161a20] to-transparent z-10"></div>

// 					<motion.div
// 						className="flex gap-8 items-center"
// 						animate={{ x: ["0%", "-50%"] }}
// 						transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
// 					>
// 						{repeatedStack.map(({ icon: Icon, name, color }, i) => (
// 							<motion.div
// 								key={i}
// 								className="flex flex-col items-center justify-center  p-1 min-w-[150px] rounded  group  transition-all duration-500 relative overflow-hidden"
// 								whileHover={{
// 									y: -5,
// 									scale: 1.05,
// 									transition: { duration: 0.2 }
// 								}}
// 							>
// 								{/* Efecto de brillo al hover */}
// 								<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5  to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// 								<Icon size={42} color={color} className="z-10" />
// 								<span className="text-xs text-gray-300 mt-3 font-medium z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// 									{name}
// 								</span>
// 							</motion.div>
// 						))}
// 					</motion.div>
// 				</div>

// 				{/* Sección de habilidades categorizadas (nuevo) */}
// 				<motion.div
// 					className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
// 					initial={{ opacity: 0, y: 30 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5, delay: 0.3 }}
// 					viewport={{ once: true }}
// 				>
// 					<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
// 						<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
// 							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
// 							Frontend
// 						</h3>
// 						<div className="flex flex-wrap gap-2">
// 							{stack.slice(0, 5).map(({ name }) => (
// 								<span key={name} className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
// 									{name}
// 								</span>
// 							))}
// 						</div>
// 					</div>

// 					<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
// 						<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
// 							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
// 							Backend
// 						</h3>
// 						<div className="flex flex-wrap gap-2">
// 							{stack.slice(8, 11).map(({ name, color }) => (
// 								<span key={name} className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
// 									{name}
// 								</span>
// 							))}
// 						</div>
// 					</div>

// 					<div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
// 						<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
// 							<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
// 							Herramientas
// 						</h3>
// 						<div className="flex flex-wrap gap-2">
// 							{stack.slice(11, 14).map(({ name, color }) => (
// 								<span key={name} className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
// 									{name}
// 								</span>
// 							))}
// 						</div>
// 					</div>
// 				</motion.div>
// 			</div>
// 		</section>
// 	);
// };