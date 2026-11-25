const variants = {
  primary: "bg-teal-700 text-white hover:bg-teal-800",
  outline: "border border-teal-700 text-teal-700 hover:bg-teal-50",
};

export default function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
