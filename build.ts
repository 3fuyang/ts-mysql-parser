import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url';

import * as esbuild from 'esbuild'

const __dirname = dirname(fileURLToPath(import.meta.url));

await esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist',
  format: 'esm',
  sourcemap: true,
  minify: true,
  bundle: true,
  tsconfig: 'tsconfig.json',
  define: {
    'process.env.NODE_DEBUG': '"false"'
  },
  plugins: [
    {
      name: "NodePolyfillsPlugin",
      setup(build) {
        // Resolve other packages
        build.onResolve(
          {
            filter:
              /^(url)|(process)|(util)|(assert)$/,
          },
          (args) => {
            const pPrefix = [__dirname, "node_modules"];
            let p: string | undefined;
            switch (args.path) {
              case "url":
                p = join(...pPrefix, "url", "url.js");
                break;
              case "process":
                p = join(...pPrefix, "process", "browser.js");
                break;
              case "util":
                p = join(...pPrefix, "util", "util.js");
                break;
              case "assert":
                p = join(...pPrefix, "assert", "build", "assert.js");
                break;
            }
            return { path: p };
          }
        );
      },
    }
  ]
})
