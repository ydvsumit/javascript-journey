/**
 * JavaScript is High-Level, Object-Oriented, Multi-Paradigm programming language.
 *  - High Level means we don't need to worry about complext stuff like memory management.
 *  - Object Oriented means that javascript is based on objects for storing most kind of data.
 *  - Multi-Paradigm states that we can use different styles of programming.
 *  - Programming Language states that instruct computer to do things.
 *
 * How JavaScript works behind the scenes?
 * JavaScript is a :-
 *  1. High Level
 *  2. Prototype-Based Object Oriented
 *  3. Mutli-Paradigm
 *  4. Just-in-time Compiled
 *  5. Dynamic
 *  6. Single Threaded
 *  7. Garbage Collected Programming
 *  8. With First Class Functions and a
 *  9. Non-Blocking Event Loop Concurrency Model.
 */

/**
 * 1. High Level:
 *    We have high-level programming language like python and javascript where
 *        - developer does not have to worry to manage resources like memory management (like hardware, RAM or CPU such as memory to do its work) and everything happens automatically.
 *        - these languages have so-called "Abstractions" that take all of that work away from us.
 */

/**
 * 2. Prototype-Based Object Oriented:
 *    - Almost everything in javascript is an object except for "Primitive Values".
 *    - But "Arrays" for example are just "Object".
 */

/**
 * 3. Mutli-Paradigm:
 *    - In programming, Paradigm is an approach and overall mindset of structuring our code which will ultimately direct the coding style and technique in a project that uses a certain paradigm.
 *      OR
 *    - An approach and mindset of structuring code which will direct your coding style and technique.
 *    - Three Popular Paradigm:
 *      a) Procedural Programming (which is basically just organizing the code in a very linear way and then with some function in between)
 *      b) Object-Oriented Programming (OOP)
 *      c) Functional Programming (FP)
 *
 *     # Classify Paradigm: Imperative vs Declarative
 */

/**
 * 4. Just-In-Time Compiled:
 *    - Computer processor only understands 0 & 1.
 *    - Ultimately, every single program need to be written in 0 & 1, which is also called machine code.
 *      For example, suppose a function app is written in human readable code after that computer converts it to machine code automatically that happens inside the JS Engine and this process called compiling.
 *      (we can say: Abstractions over 0 & 1)
 *    - And since that's not really pracitcal to write, we simply write human readable javascript code which is an abstraction over machine code.
 */

/**
 * 5. Dynamic:
 *    - It means "Dynamically-tyed language".
 *    - No data type deinitions
 *    - Types becomes known at runtime when javasript engine execute our code.
 */

// Data type of variable can easily be changed or automatically changed.
let x = 23;
let y = 19;
x = "Hello";

console.log(x);

/**
 * 6. & 9. Single Threaded & Non-Blocking Event Loop:
 *  # Concurrency Model:
 *    - How the JS Engine handles multiple tasks happening at the same time.
 *
 *    Ques... why do we need concurrency model?
 *
 *  # Single-Threaded: (Thread: set of instructions)
 *    - Javascript run in one single thread, so it can do one thing at a time.
 *
 *    Ques... So what about a long running task ? For example, fetch data from remote server
 *
 *    - Sounds like, it would "block the single thread". However, we want "Non-Blocking" behavior.
 *
 *    Ques... How do we achieve that ?
 *
 *  # Event Loop:
 *    - By using an "Event Loop", take a long running tasks, executes them in the background and puts them back in the main thread once they are finished.
 *
 */

function displayMessage() {
  // This message appeared after a 2-second delay!
  console.log("Hello JavaScript");
}

// Call the displayMessage function after 2000 milliseconds (2 seconds)
setTimeout(displayMessage, 2000);

setTimeout(function () {
  console.log("Hello from Browser");
}, 3000);

/**
 * 7. Garbage Collected Programming:
 *    - One of the powerfull tools that takes memory management away from developers is garbage collection.
 *    - Which is basically an algorithm inside the javascript engine which automatically remove old and unused objects from the computer memory.
 */

/**
 * 8. First Class Functions:
 *    - Functions are simply "treated as variables". We can pass function into other functions and return functions from functions.
 *
 * In JavaScript, functions are first-class citizens:
 * That means you can:
 *    1. Assign functions to variables
 *    2. Pass them as arguments to other functions
 *    3. Return them from functions
 *    4. Store them in objects/arrays
 */

// 1. Assign functions to variables
const greet = function (name) {
  return `Hello, ${name}`;
};

console.log(greet("Sumit")); // Hello, Sumit

// 2. Pass them as arguments to other functions
function sayHello(name) {
  return `Hello, ${name}`;
}

function greetUser(greetFn, userName) {
  console.log(greetFn(userName));
}

greetUser(sayHello, "Nilesh"); // Output: Hello, Nilesh

// 3. Returning a function from another function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// 4. Storing functions in objects/arrays
const operations = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
};

console.log(operations.add(2, 3)); // 5
console.log(operations.multiply(2, 3)); // 6

const funcs = [(x) => x + 1, (x) => x * 2];

console.log("index-0", funcs[0](5)); // 6
console.log("index-1", funcs[1](5)); // 10
