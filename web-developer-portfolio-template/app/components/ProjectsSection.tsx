"use client";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import "keen-slider/keen-slider.min.css";

import { Carousel } from "./Carousel";
import { personalProjects, projects } from "../const/const";
import { SectionHeader } from "./SectionHeader";

export const ProjectsSection = () => {



	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#0D1117] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				{/* Título y descripción */}
				<SectionHeader
					subtitle=""
					title=""
					highlightedText="Proyectos Destacados"
					description="Una selección de mis trabajos más destacados, desde plataformas
						empresariales hasta proyectos técnicos personales."
					subtitleColor="#FFD700"
					gradientFrom="from-blue-300"
					gradientTo="to-purple-400"
				/>
				

				{/* Carrusel Proyectos Profesionales */}
				<span className="text-2xl w-full text-start border-l-4 border-[#62a3f9]  px-2 py-1 font-bold my-12 block">

					Proyectos Profesionales
				</span>
				<Carousel
					items={projects}
					renderItem={(project) => <ProjectCard {...project} />}
				/>

				{/* Carrusel Proyectos Personales */}
				<span className="text-2xl w-full text-start border-l-4 border-purple-700 px-2 py-1 font-bold my-12 block">
					Proyectos Técnicos/Personales
				</span>
				<Carousel
					items={personalProjects}
					renderItem={(project) => <ProjectCard {...project} />}
				/>
			</div>
		</section >
	);
};
