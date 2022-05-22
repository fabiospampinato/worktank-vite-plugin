
/* IMPORT */

import {defineConfig} from 'vite';
import worktank from '../dist/index.js';

/* MAIN */

const config = defineConfig ({
  build: {
    lib: {
      name: 'test',
      entry: 'index.ts'
    }
  },
  plugins: [
    worktank ({
      filter: /\.worker\.(js|ts)$/ // Files matching this regex will be processed
    })
  ]
});

/* EXPORT */

export default config;
