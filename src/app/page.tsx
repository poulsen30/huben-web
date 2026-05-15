import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <VideoGallery />
      <Footer />
    </main>
  );
}
