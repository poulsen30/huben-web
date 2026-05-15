import Image from "next/image";
import GigsList from "@/components/GigsList";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 pb-4 overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          suppressHydrationWarning
          className="object-cover w-full h-full opacity-65 mix-blend-screen"
        >
          <source src="/images/Sequence 02.mp4" type="video/mp4" />
          Dit browser understøtter ikke video tagget.
        </video>
        {/* Fallback overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center mb-24">
        <div className="w-56 md:w-[320px] drop-shadow-[0_0_15px_rgba(215,40,40,0.5)]">
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
          Shoegazing in the City of Smiles
        </p>
      </div>

      {/* GigsList rykket op her */}
      <GigsList />
    </section>
  );
}
