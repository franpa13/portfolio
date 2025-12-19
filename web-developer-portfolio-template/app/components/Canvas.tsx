"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    // color stored as "r,g,b" (e.g. "255,255,255")
    color: string;
    // opacity value 0..1
    opacity: number;
    update: () => void;
    draw: () => void;
}

export const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const maxParticles = width > 768 ? 80 : 35;

        class CanvasParticle implements Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;

                // Asignar una opacidad aleatoria entre 0.2 y 0.7
                this.opacity = 0.18; // 0.3 → 0.55


                // Colores posibles para las partículas
                const colors = [
                    "80,150,255",   // azul suave
                    "170,130,255",
                     "128,128,128"       // violeta suave
                ];
                // Asignar un color aleatorio
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX *= -1;
                if (this.y < 0 || this.y > height) this.speedY *= -1;
            }

            draw() {
                if (ctx) {
                    // Dibujar con el color y la opacidad de la partícula
                    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 5);
                    ctx.fill();
                }
            }

        }

        for (let i = 0; i < maxParticles; i++) {
            particles.push(new CanvasParticle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();


                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        // line alpha depends on distance; adjust baseLineAlpha to change max opacity
                        const baseLineAlpha = 0.8; // change this to make lines more/less opaque
                        const alpha = (1 - distance / 130) * baseLineAlpha;
                        ctx.strokeStyle = `rgba(${particles[j].color}, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#010206",
            }}
        />
    );
};
