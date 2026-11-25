import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind CSS v4 dipasang sebagai plugin Vite
export default defineConfig({ plugins: [react(), tailwindcss()] });
