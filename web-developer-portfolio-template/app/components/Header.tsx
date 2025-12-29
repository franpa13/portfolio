"use client";

import React, { useEffect, useRef, useState } from "react";
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


  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const setActiveFromEntries = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveId(visible.target.id);
    };

    const observer = new IntersectionObserver(setActiveFromEntries, {
      threshold: [0.3, 0.6],
    });

    sections.forEach((s) => observer.observe(s));

    // initial check (center of viewport)
    const center = window.scrollY + window.innerHeight / 2;
    const initial = sections.find((s) => {
      const top = s.offsetTop;
      const bottom = top + s.offsetHeight;
      return center >= top && center <= bottom;
    });
    if (initial) setActiveId(initial.id);

    const onScroll = () => {
      if (isScrollingRef.current) return;
      const center = window.scrollY + window.innerHeight / 2;
      const sec = sections.find((s) => {
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        return center >= top && center <= bottom;
      });
      if (sec) setActiveId(sec.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="hidden lg:block fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex gap-2 px-5 py-3 rounded-2xl bg-[#0d1117]/80 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.15)]">
        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(item.id);
                    if (!target) return;
                    isScrollingRef.current = true;
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveId(item.id);
                    setTimeout(() => {
                      isScrollingRef.current = false;
                      window.history.replaceState(null, "", `#${item.id}`);
                    }, 800);
                  }}
                  aria-current={activeId === item.id ? "page" : undefined}
                  className={`group flex items-center gap-2
                    px-4 py-2 rounded-xl
                    text-sm font-medium
                    text-gray-300
                    transition-all duration-300
                    hover:text-white hover:bg-white/5 hover:scale-[1.05] hover:shadow-[0_0_18px_rgba(139,92,246,0.45)]
                    ${activeId === item.id ? "text-white bg-white/5 scale-[1.05] shadow-[0_0_18px_rgba(139,92,246,0.45)]" : ""}`}
                >
                  <Icon
                    size={18}
                    className={`transition-all duration-300 ${activeId === item.id ? "text-white -rotate-6" : "text-gray-400 group-hover:text-white group-hover:-rotate-6"}`}
                  />

                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-0
                        bg-gradient-to-r from-violet-500 to-blue-500
                        transition-all duration-300
                        ${activeId === item.id ? "w-full" : "group-hover:w-full"}`}
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
