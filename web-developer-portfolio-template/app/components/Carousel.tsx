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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, i) => (
          <div key={i} className="keen-slider__slide">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {/* Botones navegación */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-[#0c264e] border border-gray-800 rounded-full p-2 shadow-md hover:bg-[#2a2f36] transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-[#0c264e] border border-gray-800 rounded-full p-2 shadow-md hover:bg-[#2a2f36] transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </>
      )}
    </div>
  );
}
