# ts-mysql-parser

``` shell
npm install @fwio/ts-mysql-parser
```

Based on [@stevenmiller888](https://github.com/stevenmiller888)'s [ts-mysql-parser](https://www.npmjs.com/package/ts-mysql-parser).

Compared to the upstream, this fork:
- Uses `pnpm` and updates dependencies.
- Uses [esbuild](https://esbuild.github.io/) for bundling.
- Polyfills `node.js` modules with [assert](https://github.com/browserify/commonjs-assert), [process](https://github.com/defunctzombie/node-process), [url](https://github.com/defunctzombie/node-url) and [util](https://github.com/browserify/node-util), for use in the browser.
