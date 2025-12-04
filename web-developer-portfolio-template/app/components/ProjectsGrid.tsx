"use client";
import React from "react";
import { ProjectProps } from "./ProjectCard";

import { Card } from "./Card";

interface ProjectsGridProps {
  items: ProjectProps[];
}



export const ProjectsGrid = ({ items }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {items.map((project) => (
        <Card key={project.title} project={project}></Card>
      ))}
    </div>
  );
};
