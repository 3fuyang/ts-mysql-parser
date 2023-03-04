import * as esbuild from 'esbuild'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  format: 'esm',
  bundle: true,
  plugins: [
    NodeModulesPolyfillPlugin()
  ],
  sourcemap: true,
  tsconfig: 'tsconfig.json'
})
