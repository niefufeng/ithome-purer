import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    name: "ithome purer",
    description: "纯净 ithome，专注内容",
    version: "1.0.2",
  },
});
