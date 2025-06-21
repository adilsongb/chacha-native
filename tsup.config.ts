// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],         // ponto de entrada da sua lib
  format: ['esm', 'cjs'],          // gera ESM + CommonJS
  dts: true,                       // gera .d.ts (tipos)
  sourcemap: true,                 // útil no debug
  clean: true,                     // limpa a pasta build antes
  outDir: 'build',                 // onde salva o build
  skipNodeModulesBundle: true
});
