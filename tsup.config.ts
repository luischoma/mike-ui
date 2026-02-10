import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    kommander: 'src/components/kommander/index.ts'
  },

  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  tsconfig: 'tsconfig.json',
  external: ['react', 'react-dom'],
  treeshake: true
})
