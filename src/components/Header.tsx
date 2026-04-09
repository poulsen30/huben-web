import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
      <div className="flex space-x-6 pointer-events-auto">
        <a
          href="https://www.instagram.com/huben_band/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-white hover:scale-110 transition-all drop-shadow-md"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@HubenBand"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-huben-red hover:scale-110 transition-all drop-shadow-md"
          aria-label="YouTube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9a3.2 3.2 0 0 0 2.3 2.3c1.3.3 4.2.4 7.2.4s5.9-.1 7.2-.4a3.2 3.2 0 0 0 2.3-2.3c.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9a3.2 3.2 0 0 0-2.3-2.3c-1.3-.3-4.2-.4-7.2-.4s-5.9.1-7.2.4A3.2 3.2 0 0 0 4.8 4.8c-1.3.4-2.3 1.4-2.3 2.3Z" />
            <path d="M10 8l6 4-6 4Z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-neutral-300 hover:text-[#1DB954] hover:scale-110 transition-all drop-shadow-md"
          aria-label="Spotify"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
