// components/CursorCanvas.tsx
"use client";

import { useEffect, useRef, useCallback } from "react";

export const CursorCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const circleRef = useRef({ x: -100, y: -100 });
  const circleSizeRef = useRef(20); // Tamaño base del círculo
  const targetCircleSizeRef = useRef(8); // Tamaño objetivo para la transición
  const animationRef = useRef<number>(0);

  /* =================================================================
      ANIMACIÓN PRINCIPAL
  ================================================================= */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Aplicar delay suave al círculo (interpolación)
    const delayFactor = 0.1;
    circleRef.current.x += (mouseRef.current.x - circleRef.current.x) * delayFactor;
    circleRef.current.y += (mouseRef.current.y - circleRef.current.y) * delayFactor;

    // Transición suave del tamaño del círculo
    const sizeTransitionFactor = 0.15;
    circleSizeRef.current += (targetCircleSizeRef.current - circleSizeRef.current) * sizeTransitionFactor;

    // Dibujar cursor con círculo alrededor SOLO cuando está visible
    if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
      ctx.save();

      // Círculo exterior con gradiente de colores del HeroSection
      const gradient = ctx.createLinearGradient(
        circleRef.current.x - circleSizeRef.current,
        circleRef.current.y - circleSizeRef.current,
        circleRef.current.x + circleSizeRef.current,
        circleRef.current.y + circleSizeRef.current
      );
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)"); // blue-500
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.8)"); // purple-500
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.8)"); // pink-500

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.shadowColor = "rgba(59, 130, 246, 0.6)";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(circleRef.current.x, circleRef.current.y, circleSizeRef.current, 0, Math.PI * 2);
      ctx.stroke();

      // Punto central con color azul similar al HeroSection
      ctx.fillStyle = "rgba(168, 85, 247, 0.8)"; // blue-500
      ctx.shadowColor = "rgba(59, 130, 246, 0.7)";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  /* =================================================================
      DETECCIÓN DE ELEMENTOS CLICKEABLES
  ================================================================= */
  const checkClickableElements = useCallback((x: number, y: number) => {
    // Obtener el elemento en la posición del cursor
    const element = document.elementFromPoint(x, y);
    
    if (element) {
      // Verificar si el elemento o sus padres son clickeables
      const isClickable = 
        element instanceof HTMLAnchorElement ||
        element instanceof HTMLButtonElement ||
        (element instanceof HTMLInputElement && (element.type === 'submit' || element.type === 'button')) ||
        element.hasAttribute('onclick') ||
        (element instanceof HTMLElement && element.style.cursor === 'pointer') ||
        window.getComputedStyle(element).cursor === 'pointer' ||
        element.closest('a, button, [role="button"], [onclick]');
      
      if (isClickable) {
        targetCircleSizeRef.current = 15; // Tamaño más pequeño para elementos clickeables
      
      } else {
        targetCircleSizeRef.current = 30; // Tamaño normal
      }
    } else {
      targetCircleSizeRef.current = 30; // Tamaño normal por defecto
    }
  }, []);

  /* =================================================================
      EVENTOS DEL MOUSE
  ================================================================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      // Actualizar la posición del cursor
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Verificar elementos clickeables en la nueva posición
      checkClickableElements(e.clientX, e.clientY);
      
      // Inicializar la posición del círculo si es la primera vez
      if (circleRef.current.x < 0) {
        circleRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Verificar elementos clickeables cuando el mouse pasa sobre ellos
      checkClickableElements(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      // Ocultar cursor cuando sale de la ventana
      mouseRef.current = { x: -100, y: -100 };
      circleRef.current = { x: -100, y: -100 };
      targetCircleSizeRef.current = 30; // Resetear al tamaño normal
    };

    const handleMouseEnter = () => {
      // Mostrar cursor cuando entra a la ventana
      mouseRef.current = { x: -100, y: -100 };
    };

    // Ocultar cursor nativo en toda la página
    document.documentElement.style.cursor = 'none';

    // Agregar event listeners para detectar cambios en elementos
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('focusin', () => checkClickableElements(mouseRef.current.x, mouseRef.current.y));
    document.addEventListener('focusout', () => checkClickableElements(mouseRef.current.x, mouseRef.current.y));

    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      // Restaurar cursor nativo
      document.documentElement.style.cursor = 'auto';
      
      // Remover event listeners
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('focusin', () => checkClickableElements(mouseRef.current.x, mouseRef.current.y));
      document.removeEventListener('focusout', () => checkClickableElements(mouseRef.current.x, mouseRef.current.y));
      
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", handleResize);
    };
  }, [animate, checkClickableElements]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        cursor: "none",
      }}
    />
  );
};