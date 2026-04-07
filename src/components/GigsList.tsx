import gigsData from "@/data/gigs.json";
import { Calendar, MapPin, Ticket } from "lucide-react";

export default function GigsList() {
  const locale = "en-US";

  return (
    <section id="gigs" className="py-24 px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="font-oswald text-4xl md:text-5xl uppercase text-white mb-4">
          Tour Dates
        </h2>
        <div className="h-1 w-24 bg-huben-red mx-auto"></div>
      </div>

      <div className="space-y-4">
        {gigsData.map((gig) => (
          <div
            key={gig.id}
            className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:bg-zinc-800/80 transition-colors group"
          >
            {/* Date */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0 w-full md:w-1/4">
              <Calendar className="text-huben-red w-6 h-6" />
              <div>
                <p className="text-neutral-400 text-sm uppercase tracking-wider">
                  {new Date(gig.date).toLocaleDateString(locale, {
                    month: "long",
                  })}
                </p>
                <p className="text-white font-oswald text-2xl">
                  {new Date(gig.date).toLocaleDateString(locale, {
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Venue & City */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 w-full md:w-2/4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-neutral-500 w-5 h-5 hidden md:block" />
                <div>
                  <h3 className="text-xl text-neutral-100 font-bold">
                    {gig.venue}
                  </h3>
                  <p className="text-neutral-400">{gig.city}</p>
                </div>
              </div>
            </div>

            {/* Ticket Button */}
            <div className="w-full md:w-1/4 flex justify-start md:justify-end mt-4 md:mt-0">
              <a
                href={gig.ticketLink}
                className="flex items-center space-x-2 border border-huben-red text-huben-red px-6 py-2 rounded uppercase tracking-wider font-semibold hover:bg-huben-red hover:text-white transition-all w-full md:w-auto justify-center"
              >
                <Ticket className="w-5 h-5" />
                <span>Tickets</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
