// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { viteStaticCopy } from "vite-plugin-static-copy";
var __electron_vite_injected_dirname = "C:\\Users\\marcos\\OneDrive\\Desktop\\Projetos\\ficha-alunos";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [
      externalizeDepsPlugin(),
      viteStaticCopy({
        targets: [
          {
            src: "resources/*",
            dest: "resources"
          }
        ]
      })
    ]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      "process.platform": JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: resolve(__electron_vite_injected_dirname, "./src/renderer/tailwind.config.js")
          })
        ]
      }
    },
    resolve: {
      alias: {
        "@renderer": resolve(__electron_vite_injected_dirname, "src/renderer/src")
      }
    },
    plugins: [react()],
    optimizeDeps: {
      exclude: ["path", "url", "source-map-js"]
      // Excluir módulos Node do bundle
    }
  }
});
export {
  electron_vite_config_default as default
};
