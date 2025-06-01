
/* IMPORT */

import {sum, multiply, mime2ext, pool} from './index.worker';

/* MAIN */

const test = async (): Promise<void> => {

  console.assert ( 10 === await sum ( 5, 5 ) );
  console.assert ( 25 === await multiply ( 5, 5 ) );
  console.assert ( 'mp3' === await mime2ext ( 'audio/mp3' ) );

  console.log ( 'Test passed successfully!' );

  pool.terminate ();

};

/* RUN */

test ();
