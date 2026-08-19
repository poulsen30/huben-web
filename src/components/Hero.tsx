import Image from "next/image";
import GigsList from "@/components/GigsList";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center my-auto">
        <div className="w-56 md:w-[360px] drop-shadow-[0_0_15px_rgba(215,40,40,0.5)]">
          <Image
            src="/images/Logo-final.png"
            alt="HüBEN Logo"
            width={600}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* GigsList (vises automatisk, hvis der er koncerter i gigs.json) */}
      <GigsList />
    </section>
  );
}
