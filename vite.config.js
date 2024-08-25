import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      external: [
        "@fontsource-variable/dm-sans/files/dm-sans-latin-400-normal.woff2?url",
        "@fontsource-variable/dm-sans",
      ],
    },
  },
});
