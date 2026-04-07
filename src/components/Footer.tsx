export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h3 className="font-oswald text-2xl text-white mb-6 uppercase tracking-wider">
          Follow HüBEN
        </h3>
        <div className="flex space-x-6 mb-8">
          <a
            href="https://www.instagram.com/huben_band/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white hover:scale-110 transition-all"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://www.youtube.com/@HubenBand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-huben-red hover:scale-110 transition-all"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9a3.2 3.2 0 0 0 2.3 2.3c1.3.3 4.2.4 7.2.4s5.9-.1 7.2-.4a3.2 3.2 0 0 0 2.3-2.3c.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9a3.2 3.2 0 0 0-2.3-2.3c-1.3-.3-4.2-.4-7.2-.4s-5.9.1-7.2.4A3.2 3.2 0 0 0 4.8 4.8c-1.3.4-2.3 1.4-2.3 2.3Z"/><path d="M10 8l6 4-6 4Z"/></svg>
          </a>
          <a
            href="#"
            className="text-neutral-400 hover:text-[#1DB954] hover:scale-110 transition-all"
            aria-label="Spotify"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </a>
        </div>
        <p className="text-zinc-600 text-sm mb-2">
          Booking: <a href="mailto:booking@hubenband.dk" className="hover:text-huben-red">booking@hubenband.dk</a>
        </p>
        <p className="text-zinc-700 text-xs text-center">
          &copy; {new Date().getFullYear()} HüBEN. All rights reserved. <br/>
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
