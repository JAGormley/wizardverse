import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [react(), TanStackRouterVite({ autoCodeSplitting: true })],
});
