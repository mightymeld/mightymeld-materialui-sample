import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const conditionalPlugins = [];

if (process.env.MIGHTYMELD) {
  conditionalPlugins.push("@mightymeld/runtime/babel-plugin-mightymeld");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [...conditionalPlugins],
      },
    }),
  ],
});
