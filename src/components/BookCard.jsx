import Button from "./Button";

export default function BookCard({ book, onAdd }) {
  const isBeginner = book.level === "Pemula";

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <span
        className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
          isBeginner ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
        }`}
      >
        {book.level}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{book.title}</h3>
      <p className="text-sm text-slate-500">{book.author}</p>
      <p className="mt-auto pt-4 font-semibold text-slate-900">
        Rp {book.price.toLocaleString("id-ID")}
      </p>
      <Button className="mt-3" onClick={() => onAdd(book)}>
        Tambah ke keranjang
      </Button>
    </article>
  );
}
