import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-zinc-950 w-full relative border-t border-zinc-900 border-b">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Venstre side: Band beskrivelse */}
        <div className="md:col-span-8 flex flex-col space-y-6">
          <h2 className="font-oswald text-4xl uppercase text-white mb-2">
            The Band
          </h2>
          <div className="h-1 w-16 bg-huben-red mb-4"></div>

          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
            HüBEN is an emerging band from <strong className="font-semibold text-white">Aarhus, Denmark</strong>,
            shaped by <span className="text-white">90s-inspired indie</span> and <span className="text-white">grunge</span>, live shows,
            and new original songs. <strong className="font-semibold text-white">English lyrics, Danish moments, raw guitars.</strong>
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed font-light mt-4">
            We are constantly evolving and experimenting with new sounds, instruments and
            genre fusion on a solid indie based sound.
          </p>
        </div>

        {/* Højre side: Grobund Bandakademi */}
        <div className="md:col-span-4 flex flex-col items-start md:items-center space-y-6 bg-zinc-900/40 p-8 rounded-xl border border-zinc-800">
          <p className="text-neutral-400 text-sm text-center font-medium uppercase tracking-widest">
            Supported By
          </p>
          <a
            href="https://www.grobundbandakademi.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-4 transition-all"
          >
            <div className="relative w-48 h-auto p-4 bg-black/50 rounded-lg group-hover:bg-black transition-colors ring-1 ring-zinc-800 group-hover:ring-huben-red/50">
              <Image
                src="/images/grobund.png"
                alt="Grobund Bandakademi Aarhus"
                width={300}
                height={150}
                className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-zinc-500 text-center max-w-[250px] group-hover:text-zinc-300 transition-colors">
              Hüben is a part of Grobund Bandakademi in Aarhus.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
