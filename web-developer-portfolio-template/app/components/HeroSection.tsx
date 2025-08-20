import React from "react";
import SocialLinks from "./SocialLinks";
import { Rocket, Laptop, Code2 } from "lucide-react";
import { SiReact } from "@icons-pack/react-simple-icons";
export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Fondo animado con grilla */}
			<div className="absolute inset-0 grid-background opacity-20">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Íconos flotantes */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ Icon: Code2, delay: "0s", position: "top-20 left-1/4" },
					{ Icon: Rocket, delay: "2s", position: "top-40 right-1/3" },
					{ Icon: Laptop, delay: "0s", position: "bottom-32 left-1/3" },
					{ Icon: SiReact, delay: "3s", position: "bottom-20 right-1/4" },
				].map((item, index) => (
					<div
						key={index}
						className={`absolute ${item.position} animate-float opacity-40 text-blue-400`}
						style={{ animationDelay: item.delay }}
					>
						{/* Tamaño responsivo: pequeño en sm, mediano en md, grande en lg */}
						<item.Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
					</div>
				))}
			</div>


			{/* Contenido principal */}
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Nombre */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
						<h1 className="relative text-3xl md:text-4xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
							Francisco Javier Paredes
						</h1>
					</div>

					{/* Rol y descripción */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-6">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">
									Desarrollador Web
								</h2>
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
							</div>
							<p className="text-sm lg:text-base sm:text-lg text-gray-400 max-w-xl px-1 sm:px-0">
								Especializado en Desarrollo Frontend, creando experiencias digitales únicas con tecnologías web modernas.
							</p>


						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
						<a href="#work" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
							<span className="relative px-6 sm:px-8 py-2 lg:py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								Ver mis proyectos
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-2 lg:py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
						>
							Contactame
						</a>
					</div>
					{/* Redes sociales */}
					<SocialLinks />
				</div>
			</div>

			{/* Indicador scroll */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-400 text-sm mb-2 text-center">
					Desplázate para explorar
				</span>
				<svg
					className="w-6 h-6 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	);
};


// import React from 'react';
// import SocialLinks from './SocialLinks';

// export const HeroSection = () => {
// 	return (
// 		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
// 			{/* Animated Background Grid */}
// 			<div className="absolute inset-0 grid-background opacity-20">
// 				<div className="grid-overlay animate-pulse-slow"></div>
// 			</div>

// 			{/* Floating Tech Icons */}
// 			<div className="absolute inset-0 overflow-hidden">
// 				{[
// 					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
// 					{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
// 					{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
// 					{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
// 				].map((item, index) => (
// 					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
// 						<span className="text-4xl">{item.icon}</span>
// 					</div>
// 				))}
// 			</div>

// 			{/* Hero Content */}
// 			<div className="relative z-10 max-w-5xl mx-auto px-4">
// 				<div className="text-center space-y-6">
// 					{/* Name Section */}
// 					<div className="relative inline-block px-4 sm:px-0">
// 						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
// 						<h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
// 							Francisco Javier Paredes
// 						</h1>
// 					</div>

// 					{/* Role & Description */}
// 					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
// 						<div className="flex flex-col items-center gap-4">
// 							<div className="flex items-center gap-3">
// 								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
// 								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">Frontend Developer</h2>
// 								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
// 							</div>
// 							<p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
// 								Creando experiencias digitales excepcionales con tecnologías web modernas, Cuento con más de un año de experiencia como desarrollador Frontend, especializado en el uso de frameworks como React.js, Next.js y Tailwind CSS, trabajando en la creación de interfaces dinámicas y escalables.
// 							</p>
// 						</div>

// 						{/* Tech Stack Pills */}
// 						{/* <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
// 							{['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL'].map((tech) => (
// 								<span
// 									key={tech}
// 									className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
// 								>
// 									{tech}
// 								</span>
// 							))}
// 						</div> */}
// 					</div>

// 					{/* CTA Buttons */}
// 					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
// 						<a href="#work" className="group relative inline-flex items-center justify-center">
// 							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
// 							<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
// 								View My Work
// 								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// 									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// 								</svg>
// 							</span>
// 						</a>
// 						<a
// 							href="#contact"
// 							className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
// 						>
// 							Get in Touch
// 						</a>
// 					</div>

// 					{/* Social Links */}
// 					<SocialLinks />
// 				</div>
// 			</div>

// 			{/* Scroll Indicator */}
// 			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
// 				<span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
// 				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// 					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
// 				</svg>
// 			</div>
// 		</div>
// 	);
// };
