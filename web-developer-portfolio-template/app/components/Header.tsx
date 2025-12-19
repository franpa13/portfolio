"use client";
import React, { useEffect, useState, useRef } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "experience", label: "Experiencia" },
  { id: "work", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export const Header = () => {
  const [active, setActive] = useState("hero"); // solo lógica
  const isScrollingRef = useRef(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    isScrollingRef.current = true;
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const mostVisible = visible.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );

        setActive(mostVisible.target.id);
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hidden lg:block fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex gap-2 px-5 py-3 rounded-2xl bg-[#0d1117]/50 backdrop-blur-lg border border-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
        <nav className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleAnchorClick(e, item.id)}
              className="
                relative px-4 py-2 text-sm rounded-lg
                text-gray-100 duration-300
                hover:text-white
                hover:bg-white/5
                hover:scale-[1.06]
                transition-all
                hover:shadow-[0_0_18px_rgba(139,92,246,0.45)]
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
