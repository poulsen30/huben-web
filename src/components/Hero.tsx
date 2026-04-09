import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-40 mix-blend-screen"
        >
          <source src="/images/Sequence 02.mp4" type="video/mp4" />
        </video>
        {/* Fallback overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <div className="w-64 md:w-[500px] drop-shadow-[0_0_15px_rgba(215,40,40,0.5)]">
          <Image
            src="/images/Logo-final.png"
            alt="HüBEN Logo"
            width={600}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <p className="font-oswald text-xl md:text-3xl tracking-widest text-neutral-300 uppercase">
          HüBEN - Shoegazing in the City of Smiles
        </p>

        <a
          href="#gigs"
          className="mt-8 px-8 py-4 bg-huben-red text-white uppercase tracking-wider font-bold rounded hover:bg-red-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,40,40,0.6)]"
        >
          Upcoming Concerts
        </a>
      </div>
    </section>
  );
}
