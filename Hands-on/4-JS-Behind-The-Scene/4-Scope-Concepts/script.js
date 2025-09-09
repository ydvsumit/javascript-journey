/**
 * Scoping:
 *          - How our program's variables are organized and accessed.
 *          - Scoping is controlled by placement of functions and blocks in the code.
 *          - Where do variables live? or where can we access a certain variable and where not?
 *
 * Lexical:
 *        - Determined by the position in the source code. (it's lexical environment)
 *        - Lexical -> fixed at definition time.
 *
 * Lexical Scoping:
 *                - Lexical Scoping is a type of object oriented programming according to which a child can access parent scope and global scope.
 *                - Based on where it was written in the code (NOT where it is called from)
 *                - where we can access variables are based on exactly where in the code functions and blocks are written.
 *                - Note: Lexical like hierarchy or a sequence of order of child to parent.
 *
 * Scope Chain:
 *            - It is the process in which, JavaScript engine searches for the value of the variables in the scope of the functions. However, the search is in a lexical manner. First of all the engine looks out in the current scope of the current function. If not found, it finds it in the parent function.
 *            - Scope chain is directly proportional to lexical or context environment. (created when a function is created)
 *            - In Short: Order in which variables and function are written in the code. And also has nothing to do with order in which function were called.
 *
 * Variable Environment:
 *                      - The variable environment is a component of an execution context that stores variables, function declarations and arguments within a particular scope.
 *                      - Each time a JavaScript function or global script is executed, an execution context is created and a variable environment is a part of that context.
 *
 * Scope:
 *      - Scope is the place in our code where variables and functions are declared.
 *      - Scope defines the encapsulated area of our code in which local and global variables are accessible.
 *      - Local variables are scoped inside of encapsulation and can not be accessed outside of it.
 *      - Whereas, global variables are accessed in any scope of encapsulation.
 *      - Scope means where you can access a specific variable of function in your code.
 *
 * Scope has Three Types:
 *      1. Global Scope
 *      2. Function Scope
 *      3. Block Scope (ES6)
 *
 * 1. Global Scope:
 *                - Outside of any function or block
 *                - Variables declared in global scope are accessible everywhere.
 *
 * 2. Function Scope:
 *                  - Variables are accessible only inside function, NOT outside.
 *                  - Also called "Local Scope".
 *                  - If we are trying to access, throw an reference error.
 *
 * 3. Block Scope (ES6):
 *                      - Variables are accessible only inside block (block scoped).
 *                      - For Example: if-else, for loop, etc.
 *                      - However, this only applies to "let" & "const" variables.
 *                      - Functions are also block scoped (only in strict mode).
 */

// "use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = "Steven"; // if it's found in it's scope then it's not perform lookup
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        console.log(a + b);
        return a + b;
      }
      output = "New Output";
    }
    // console.log(str); // let & const are block scoped so no access outside
    console.log(millenial); // var is function scope not block scoped so can access outside
    add(2, 3); // showing add is not defined when we used 'use strict'
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1981);

// Both have not access outside of it's scope:
// console.log(age);
// printAge();
