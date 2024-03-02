import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, dirname } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-project/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname(import.meta.url), "index.html"),
        404: resolve(dirname(import.meta.url), "public/404.html"),
      },
    },
  },
});
