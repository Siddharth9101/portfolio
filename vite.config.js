import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "7d69f1ae-2b14-44ca-b8b3-8711bd5c4a41-00-2qzgrj1jf49l4.pike.replit.dev",
    ],
  },
});
