export default function FormField({ label, id, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
        {...props}
      />
    </div>
  );
}
