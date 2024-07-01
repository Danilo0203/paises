import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/CountryApp/pages"),
      "@components": path.resolve(__dirname, "./src/CountryApp/components"),
      "@routes": path.resolve(__dirname, "./src/CountryApp/routes"),
    },
  },
});
