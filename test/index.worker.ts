
// WORKTANK_OPTIONS={pool:{name:'MyExampleWorker',size:3}}

/* IMPORT */

import mime2ext from 'mime2ext';
import type WorkTank from 'worktank';

/* MAIN */

const sum = async ( a: number, b: number ) => a + b;
const multiply = async ( a: number, b: number ): Promise<number> => a * b;
const pool = {} as WorkTank<any>; // Dummy export to ~tell TypeScript about the injected "pool" export

/* EXPORT */

export {sum, multiply, mime2ext, pool};
