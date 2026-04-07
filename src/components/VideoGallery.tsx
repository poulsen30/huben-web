import { PlayCircle } from "lucide-react";

export default function VideoGallery() {
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Placeholder YouTube IDs
      title: "Live at Train, Aarhus 21/2 2026",
    },
    {
      id: "y6120QOlsfU",
      title: "Live at Turkis, Aarhus 20/10 2025",
    },
  ];

  return (
    <section id="media" className="py-24 bg-zinc-900 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl uppercase text-white mb-4">
            Video & Audio
          </h2>
          <div className="h-1 w-24 bg-huben-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group relative aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-huben-red transition-colors flex items-center justify-center">
              {/* Dette er en placeholder. I virkeligheden vil bruge en iframe her, fx:
              <iframe src={`https://www.youtube.com/embed/${video.id}`} className="w-full h-full" ... />
              */}
              <div className="absolute inset-0 bg-zinc-800/50 flex flex-col items-center justify-center space-y-4">
                <PlayCircle className="w-16 h-16 text-huben-red/80 group-hover:text-huben-red transition-colors group-hover:scale-110" />
                <p className="text-white font-oswald text-xl">{video.title}</p>
                <p className="text-neutral-500 text-sm">YouTube Placeholder ({video.id})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
