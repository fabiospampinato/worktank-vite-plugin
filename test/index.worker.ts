
// WORKTANK_NAME = MyExampleWorker // Setting a custom name
// WORKTANK_SIZE = 3 // Spawining up-to 3 workers, if needed

/* IMPORT */

import mime2ext from 'mime2ext';

/* MAIN */

const sum = async ( a: number, b: number ) => a + b;
const multiply = async ( a: number, b: number ): Promise<number> => a * b;
const pool = {} as { terminate: Function }; // Dummy export to ~tell TypeScript about the injected "pool" export

/* EXPORT */

export {sum, multiply, mime2ext, pool};
