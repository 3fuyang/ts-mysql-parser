import { defineConfig } from 'rollup'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    nodePolyfills(),
    json(),
    esbuild(),
    typescript()
  ]
})
