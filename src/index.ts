
/* IMPORT */

import type {Plugin} from 'vite';
import {transform} from 'worktank-esbuild-plugin';

/* MAIN */

const plugin = ({ filter }: { filter: RegExp }) => {

  return <Plugin> {
    name: 'worktank',
    load ( filePath ) {

      if ( !filter.test ( filePath ) ) return;

      return transform ( filePath );

    }
  };

};

/* EXPORT */

export default plugin;
