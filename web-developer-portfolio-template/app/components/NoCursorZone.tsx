// components/NoCursorZone.tsx
"use client";

import React, { useEffect } from 'react';
import { useCursor } from '../hooks/useCursorContext';


interface NoCursorZoneProps {
  children: React.ReactNode;
  className?: string;
}

export const NoCursorZone: React.FC<NoCursorZoneProps> = ({ 
  children, 
  className = "" 
}) => {
  const { setCursorVisible } = useCursor();

  useEffect(() => {
    // Asegurarse de que el cursor esté visible al desmontar
    return () => {
      setCursorVisible(true);
    };
  }, [setCursorVisible]);

  return (
    <div
      className={className}
      onMouseEnter={() => setCursorVisible(false)}
      onMouseLeave={() => setCursorVisible(true)}
    >
      {children}
    </div>
  );
};