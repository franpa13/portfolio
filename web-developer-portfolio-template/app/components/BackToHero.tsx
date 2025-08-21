"use client"
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToHero = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // aparece después de salir de Hero (ej: 200px de scroll)
            setShow(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!show) return null;

    return (
        <a
            href="#hero"
            className="fixed bottom-6 right-3 lg:right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 
                 text-white p-2  l:p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
            <ArrowUp className="w-6 h-6" />
        </a>
    );
};
