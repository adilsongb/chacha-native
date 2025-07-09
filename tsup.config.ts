// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // ponto de entrada da sua lib
  format: ["esm", "cjs"], // gera ESM + CommonJS
  dts: true, // gera .d.ts (tipos)
  sourcemap: false, // útil no debug
  clean: true, // limpa a pasta build antes
  outDir: "build", // onde salva o build
  minify: true,
  skipNodeModulesBundle: true,
});
