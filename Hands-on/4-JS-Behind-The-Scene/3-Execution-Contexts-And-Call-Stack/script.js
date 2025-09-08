/**
 * GLOBAL CONTEXT / DEFAULT CONTEXT:
 *                    - Creation of "Global Execution Context" for "Top-Level-Code" that is "Default Context" also.
 *                    - All the context together makes the call stack.
 * - A top level code is basically code that is not inside any function so only the code that is outside of functions will be executed.
 * - Function should be executed when they are called.
 *
 * EXECUTION CONTEXT:
 *                  - Execution Context is an abstract concept.
 *                  - Environment in which a piece of javascript is executed.
 *                  - Stores all the necessary information for some code to be executed.
 *
 * IMPORTANT NOTE TO BE KNOW:
 * 1. Global Execution Context is created once and stays until the program ends.
 * 2. Exactly one global execution context: Default context, created for code that is not inside any function. (top level code)
 * 3. One execution context "per function": For each function call, a new execution context is created.
 * 4. Every time you call a function, a new Execution Context is pushed onto the Call Stack.
 * 5. When the function finishes, its context is popped.
 *
 * CALL STACK: "Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution.
 *
 */

// Global execution context starts here
var a = 10;

function foo() {
  console.log("Inside foo");
  bar(); // call bar()
}

function bar() {
  console.log("Inside bar");
}

foo(); // call foo()
console.log("Done!");
