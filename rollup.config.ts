import { defineConfig } from 'rollup'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'
import typescript from '@rollup/plugin-typescript'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    // nodeResolve(),
    json(),
    esbuild(),
    nodePolyfills(),
    typescript()
  ]
})
