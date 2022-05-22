# WorkTank Vite Plugin

Vite plugin for WorkTank which enables you to execute whole files in a worker pool, transparently.

## Install

```sh
npm install --save worktank-vite-plugin
```

## Usage

For more information read [this](https://github.com/fabiospampinato/worktank-loader).

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
