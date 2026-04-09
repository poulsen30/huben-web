export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h3 className="font-oswald text-3xl text-white mb-6 uppercase tracking-wider">
          HüBEN
        </h3>
        <p className="text-zinc-600 text-sm mb-3">
          Booking: <a href="info@hubenband.dk" className="hover:text-huben-red">info@hubenband.dk</a>
        </p>
        <p className="text-zinc-700 text-sm text-center">
          &copy; {new Date().getFullYear()} HüBEN. All rights reserved. <br />
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
