"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function Carousel<T>({ items, renderItem }: CarouselProps<T>) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
  loop: true,
  slides: { perView: 1, spacing: 16 }, // UNA imagen por slide
  breakpoints: {
    "(min-width: 640px)": { slides: { perView: 1, spacing: 20 } }, // opcional: aún 1 por slide en móvil o tablets
    "(min-width: 1024px)": { slides: { perView: 1, spacing: 24 } }, // opcional: aún 1 por slide en desktop
  },
  created() {
    setLoaded(true);
  },
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel);
  },
});

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, i) => (
          <div key={i} className="keen-slider__slide rounded-xl overflow-hidden shadow-lg border border-[#21262d]">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            aria-label="Slide anterior"
            className="absolute top-1/2 left-2 md:left-6 transform -translate-y-1/2 bg-[#0c264e] border border-gray-800 rounded-full p-2 shadow-md hover:bg-[#2a2f36] transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            aria-label="Slide siguiente"
            className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 bg-[#0c264e] border border-gray-800 rounded-full p-2 shadow-md hover:bg-[#2a2f36] transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Paginación simple */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === idx ? "bg-blue-500" : "bg-gray-600"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
