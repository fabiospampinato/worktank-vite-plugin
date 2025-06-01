# WorkTank Vite Plugin

Vite plugin for [WorkTank](https://github.com/fabiospampinato/worktank) which enables you to execute whole files in a worker pool, transparently.

For more information read the readme for [worktank-esbuild-plugin](https://github.com/fabiospampinato/worktank-esbuild-plugin).

## Install

```sh
npm install worktank-vite-plugin
```

## Usage

Let's configure the bundler, mainly we need to tell the "worktank" plugin which files to process:

```ts
import {defineConfig} from 'vite';
import worktank from 'worktank-vite-plugin';

export default defineConfig ({
  plugins: [
    worktank ({
      filter: /\.worker\.(js|ts)$/ // Files matching this regex will be processed
    })
  ]
});
```

## License

MIT © Fabio Spampinato
