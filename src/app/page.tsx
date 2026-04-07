import Hero from "@/components/Hero";
import GigsList from "@/components/GigsList";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <GigsList />
      <VideoGallery />
      <Footer />
    </main>
  );
}
