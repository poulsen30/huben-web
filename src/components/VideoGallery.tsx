"use client";

import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function VideoGallery() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const galleryImages = [
    "/images/photogallery/Gallery_0001.png",
    "/images/photogallery/Gallery_2.png",
    "/images/photogallery/Gallery_3.png",
    "/images/photogallery/Gallery_4.png",
    "/images/photogallery/Gallery_5.png",
    "/images/photogallery/Gallery_6.png",
    "/images/photogallery/Gallery_7.png",
    "/images/photogallery/Gallery_8.png",
    "/images/photogallery/Gallery_9.jpg",
    "/images/photogallery/Gallery_10.png",
    "/images/photogallery/Gallery_11.png",
    "/images/photogallery/Gallery_112.png",
    "/images/photogallery/HUBEN_lineup1.png",
  ];

  // Auto-scroll the gallery every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="media" className="py-24 bg-zinc-900 w-full border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl uppercase text-white mb-4">
            Live & Media
          </h2>
          <div className="h-1 w-24 bg-huben-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Venstre Box: Video */}
          <div className="group relative aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-huben-red transition-colors flex items-center justify-center shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/KMEFiaPBZU4"
              title="HüBEN YouTube Video"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Højre Box: Image Carousel */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-huben-red transition-colors shadow-lg group">
            {/* Viser det aktuelle billede */}
            <div className="w-full h-full relative">
              {galleryImages.map((src, idx) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <Image
                    src={src}
                    alt={`HüBEN Gallery Image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Pile */}
            <div className="absolute inset-x-0 inset-y-0 flex items-center justify-between z-20 px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handlePrev}
                className="bg-black/60 hover:bg-huben-red text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="bg-black/60 hover:bg-huben-red text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indikatorer (dots) i bunden */}
            <div className="absolute bottom-4 inset-x-0 w-full flex justify-center space-x-2 z-20">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentIdx ? "w-6 bg-huben-red" : "w-2 bg-white/50 hover:bg-white"
                    }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
