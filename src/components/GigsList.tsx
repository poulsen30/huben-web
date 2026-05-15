"use client";

import { useState } from "react";
import gigsData from "@/data/gigs.json";
import { Calendar, MapPin, Ticket, X, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function GigsList() {
  const locale = "en-US";
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <>
      <section id="gigs" className="pt-8 pb-4 px-4 max-w-4xl mx-auto w-full relative z-20">
        <div className="text-center mb-8">
          <h2 className="font-oswald text-2xl md:text-3xl uppercase text-neutral-300 mb-2">
            Upcoming Concerts
          </h2>
          <div className="h-1 w-16 bg-huben-red mx-auto"></div>
        </div>

        <div className="space-y-4">
          {gigsData.map((gig) => (
            <div
              key={gig.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:bg-zinc-800/80 transition-colors group relative gap-4 md:gap-6"
            >
              {/* Left Group: Date & Venue */}
              <div className="flex flex-row items-center gap-4 md:gap-12 flex-grow w-full md:w-auto justify-between md:justify-start">
                {/* Date */}
                <div className="flex items-center space-x-4 md:min-w-[140px]">
                  <Calendar className="text-huben-red w-8 h-8 shrink-0" />
                  <div>
                    <p className="text-neutral-400 text-sm uppercase tracking-wider">
                      {new Date(gig.date).toLocaleDateString(locale, {
                        month: "long",
                        timeZone: "UTC",
                      })}
                    </p>
                    <p className="text-white font-oswald text-2xl">
                      {new Date(gig.date).toLocaleDateString(locale, {
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </p>
                  </div>
                </div>

                {/* Venue & City */}
                <div className="flex items-center space-x-4">
                  {(gig as any).mapLink ? (
                    <a
                      href={(gig as any).mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-huben-red transition-colors shrink-0 hidden md:block"
                      title="Vis på Google Maps"
                    >
                      <MapPin className="w-8 h-8" />
                    </a>
                  ) : (
                    <MapPin className="text-neutral-500 w-8 h-8 hidden md:block shrink-0" />
                  )}
                  <div>
                    <h3 className="text-xl text-neutral-100 font-bold tracking-wide">
                      {gig.venue}
                    </h3>
                    <p className="text-neutral-400">{gig.city}</p>
                  </div>
                </div>
              </div>

              {/* Buttons (Poster + Ticket) */}
              <div className="flex flex-row items-center justify-start md:justify-end space-x-4 md:space-x-8 shrink-0 w-full md:w-auto mt-2 md:mt-0">
                {/* Poster Thumbnail Button */}
                {(gig as any).poster && (
                  <button
                    onClick={() => setSelectedPoster((gig as any).poster)}
                    className="relative w-24 h-[48px] border border-zinc-600 rounded overflow-hidden hover:border-huben-red transition-all cursor-pointer group shrink-0"
                    aria-label="View Concert Poster"
                  >
                    <Image 
                      src={(gig as any).poster} 
                      alt="Concert Poster Thumbnail" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform" 
                    />
                  </button>
                )}

                {/* Ticket Button */}
                <a
                  href={gig.ticketLink}
                  className="flex items-center justify-center space-x-2 border border-huben-red text-huben-red px-3 md:px-6 h-[48px] rounded uppercase tracking-wider font-semibold hover:bg-huben-red hover:text-white transition-all flex-grow md:flex-grow-0 whitespace-nowrap shrink-0"
                >
                  <Ticket className="w-5 h-5 shrink-0" />
                  <span className="text-sm md:text-base">More Info</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Poster Modal */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative w-full max-w-2xl h-[85vh] rounded-lg overflow-hidden border-2 border-zinc-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <button 
              onClick={() => setSelectedPoster(null)}
              className="absolute top-4 left-4 text-white hover:text-huben-red transition-colors bg-black/70 p-2 rounded-full z-[60]"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={selectedPoster}
              alt="Concert Poster"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
