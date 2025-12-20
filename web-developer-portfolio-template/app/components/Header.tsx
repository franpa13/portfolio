"use client";

import React, { useEffect, useRef } from "react";
import {

  Briefcase,
  FolderKanban,
  Mail,
  User,
} from "lucide-react";

const NAV_ITEMS = [
{ id: "hero", label: "Sobre mí", icon: User },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "work", label: "Proyectos", icon: FolderKanban },
  { id: "contact", label: "Contacto", icon: Mail },
];

export const Header = () => {
  const isScrollingRef = useRef(false);


  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      () => {
        if (isScrollingRef.current) return;
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hidden lg:block fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex gap-2 px-5 py-3 rounded-2xl bg-[#0d1117]/60 backdrop-blur-lg border border-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
            
                className="
                  group flex items-center gap-2
                  px-4 py-2 rounded-xl
                  text-sm font-medium
                  text-gray-300
                  transition-all duration-300
                  hover:text-white
                  hover:bg-white/5
                  hover:scale-[1.05]
                  hover:shadow-[0_0_18px_rgba(139,92,246,0.45)]
                "
              >
                <Icon
                  size={18}
                  className="
                    text-gray-400
                    transition-all duration-300
                    group-hover:text-white
                    group-hover:-rotate-6
                  "
                />

                <span className="relative">
                  {item.label}
                  <span
                    className="
                      absolute -bottom-1 left-0 h-[2px] w-0
                      bg-gradient-to-r from-violet-500 to-blue-500
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
