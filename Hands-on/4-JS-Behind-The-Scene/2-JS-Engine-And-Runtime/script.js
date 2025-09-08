/**
 * JavaScript Engine:
 * - Program that executes javascript code.
 * - Every web browser has own javascript engine.
 * - Popular JS Engines:
 *                      - V8 → used in Google Chrome and Node.js
 *                      - SpiderMonkey → first JS engine, used in Firefox
 *                      - JavaScriptCore (a.k.a. Nitro) → used in Safari
 *                      - Chakra → used in older Microsoft Edge
 *
 * How JavaScript Engine Works ?
 * - Any JS Engine always contains:
 *    1. Call Stack : The call stack is where our code is actually executed using something called execution contexts.
 *    2. Heap : It is an unstructured memory pool which stores all the objects that our application needs.
 *
 * How the code is compiled to machine code?
 * 1. Compilation:
 *    - Entire code is converted into machine code at once and written to a binary file that can be executed by a computer.
 * 2. Interpretation:
 *    - Interpreter runs through the source code & executes it line by line.
 * 3. Just-In-Time (JIT) Compilation:
 *    - Entire code is converted into machine code at once, then executed immediately.
 *
 *
 * CALLBACK QUEUE:
 *                This is the data structure that contains all the call back functions that are ready to be executed.
 *
 * EVENT LOOP:
 *            The event loop takes callback fucntion from the callback queue and put them into the call stack so that they can be executed.
 *
 * WEB API's:
 *            Functionalities provides to the engine, accessible on window object.
 */
