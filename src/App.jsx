import { useState, useEffect } from "react";
import { books } from "./data/books";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import FormField from "./components/FormField";
import Button from "./components/Button";

export default function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);

  // useEffect: judul tab ikut berubah setiap isi keranjang berubah
  useEffect(() => {
    document.title = cart.length ? `(${cart.length}) Toko Buku Kecil` : "Toko Buku Kecil";
  }, [cart]);

  const shown = books.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));
  const total = cart.reduce((sum, b) => sum + b.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar cartCount={cart.length} />

      <main className="mx-auto max-w-5xl px-4">
        <section id="beranda" className="py-12 sm:py-16 lg:py-24">
          <h1 className="max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Buku pemrograman untuk belajar dari nol
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Pilih buku sesuai levelmu, tambahkan ke keranjang, dan mulai belajar hari ini.
          </p>
          <a
            href="#katalog"
            className="mt-6 inline-block rounded-lg bg-teal-700 px-5 py-2.5 font-semibold text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Lihat katalog
          </a>
        </section>

        <section id="katalog" className="scroll-mt-16 pb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Katalog buku</h2>
            <div className="w-full sm:w-64">
              <FormField
                id="cari"
                label="Cari buku"
                placeholder="Ketik judul..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {shown.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((book) => (
                <BookCard key={book.id} book={book} onAdd={(b) => setCart([...cart, b])} />
              ))}
            </div>
          ) : (
            <p className="mt-6 rounded-lg border border-dashed border-slate-300 p-6 text-center text-slate-500">
              Tidak ada buku dengan judul "{query}". Coba kata kunci lain.
            </p>
          )}

          <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            <p className="font-medium">
              {cart.length} buku di keranjang · Total Rp {total.toLocaleString("id-ID")}
            </p>
            <Button variant="outline" disabled={cart.length === 0} onClick={() => setCart([])}>
              Kosongkan keranjang
            </Button>
          </div>
        </section>

        <section id="kontak" className="scroll-mt-16 pb-16">
          <h2 className="text-2xl font-bold text-slate-900">Hubungi kami</h2>
          <form onSubmit={handleSubmit} className="mt-4 flex max-w-md flex-col gap-4">
            <FormField id="nama" label="Nama" required />
            <FormField id="email" label="Email" type="email" required />
            <Button type="submit">Kirim pesan</Button>
            {sent && <p className="text-sm font-medium text-emerald-700">Pesan terkirim. Terima kasih!</p>}
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        Proyek praktik React JS Dasar + Tailwind CSS
      </footer>
    </div>
  );
}
