import { useState } from "react";

const links = ["Beranda", "Katalog", "Kontak"];

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#beranda" className="text-lg font-bold text-teal-700">
          Toko Buku Kecil
        </a>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-slate-600 hover:text-teal-700">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-teal-700 px-3 py-1 text-sm font-medium text-white">
            Keranjang: {cartCount}
          </span>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="rounded-lg border border-slate-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 md:hidden"
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 px-4 py-2 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 hover:text-teal-700"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
