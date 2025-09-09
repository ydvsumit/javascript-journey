/**
 * GLOBAL CONTEXT / DEFAULT CONTEXT:
 *                    - Creation of "Global Execution Context" for "Top-Level-Code" that is "Default Context" also.
 *                    - All the context together makes the call stack.
 * - A top level code is basically code that is not inside any function so only the code that is outside of functions will be executed.
 * - Function should be executed when they are called.
 *
 * EXECUTION CONTEXT:
 *                  - The execution context (EC) is the environment where javascript code is evaluated and executed. It defines what variables, functions and objects are accessible at a given time during code execution.
 *                  - Execution Context is an abstract concept.
 *                  - Environment in which a piece of javascript is executed.
 *
 * Types of Executiin Context:
 *                  1. Global Execution Context (GEC) / Global Context / Default Context
 *                  2. Function Execution Context
 *                  3. Eval Execution Context (rarely used)
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
 * Execution Context Stack:
 *                        - JavaScript manages execution contexts using a Call Stack.
 *                        - Following -> LIFO (Last In, First Out)
 *
 * Steps that execution context stack follows:
 *                                            1. When the script starts -> GEC is pushed to stack.
 *                                            2. When a function is called -> FEC is created and pushes on top.
 *                                            3. When the function finishes -> FEC is popped from stack.
 *                                            4. Finally, GEC is popped out when the program ends.
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
