import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

interface ViteConfigType {
  mode: string;
  command: string;
}

// https://vitejs.dev/config/
export default (args: ViteConfigType) => {
  const generateScopedName =
    args.mode === "production" ? "[hash:base64:2]" : "[local]_[hash:base64:2]";
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "src/assets"),
        },
        {
          find: "@pages",
          replacement: path.resolve(__dirname, "src/pages"),
        },
        {
          find: "@redux",
          replacement: path.resolve(__dirname, "src/redux"),
        },
        {
          find: "@utils",
          replacement: path.resolve(__dirname, "src/utils"),
        },
      ],
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: generateScopedName,
      },
    },
  });
};
