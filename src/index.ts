
/* IMPORT */

import {transform} from 'worktank-esbuild-plugin';
import type {Plugin as EsbuildPlugin} from 'esbuild';
import type {Plugin as VitePlugin} from 'vite';

/* MAIN */

const plugin = ({ filter, plugins }: { filter: RegExp, plugins: EsbuildPlugin[] }): VitePlugin => {

  return {
    name: 'worktank',
    load ( filePath ) {

      if ( !filter.test ( filePath ) ) return;

      return transform ( filePath, plugins );

    }
  };

};

/* EXPORT */

export default plugin;
