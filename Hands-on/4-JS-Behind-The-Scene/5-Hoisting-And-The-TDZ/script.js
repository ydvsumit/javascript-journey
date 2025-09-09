/**
 * Hoisting:
 *          - Hoisting in JavaScript is a behavior in which a function or variables accessible/usable in the code before they are actually declared.
 *
 * Important Note:
 *                # var keyword is hoisted with a default initialization of undefined.
 *                     •	So accessing them before the line they were declared returns undefined.
 *
 *                # let and const declarations are also Hoisted without a default initialization in Temporal Dead Zone for the time being.
 *                    •	So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.
 *                    •	In case of let and const are allocated memory & different memory location named script or (if in Block) than global.
 *
 * How it works behind the scene?
 * - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the "variable environment object".
 *
 * Temporal Dead Zone:
 *                    - There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.
 *                      OR
 *                    - It is the time since when this let and const variables are hoisted and till it is initialized some value, that time between that is known as Temporal Dead Zone.
 *
 * How hoisting works?
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 *                            |           HOISTED ?               |         INITIAL VALUE ?           |                         SCOPE                   |
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 * 1. Function Declarations   |             YES                   |       Actual Function             | Block in strict mode otherwise Function Scoped  |
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 * 2. Var Variables           |             YES                   |           UNDEFINED               |                     Function                    |
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 * 3. let & const variables   |         NO (Technically Yes,      |       <uninitialized>             |                     Block                       |
 *                            |         but not in practice)      |     TDZ (Temperal Dead Zone)      |                                                 |
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 * 4. Function Expressions    |                             Depends if they created using var or let/const                                              |
 *    & Arrow Functions       |                                                                                                                         |
 * ------------------------------------------------------------------------------------------------------------------------------------------------------
 */

// Variables :

console.log(me); // undefined
// console.log(job);    // ReferenceError: Cannot access 'job' before initialization
// console.log(year);   // ReferenceError: Cannot access 'year' before initialization

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions :

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));      // cann't access before initialization
// console.log(addArrow(2, 3));     // ReferenceError: Cannot access 'addArrow' before initialization
// console.log(addNewDecl(2, 3));   // not function : undefined before initiliazation with var
// console.log(addNewArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = () => a + b;

var addNewDecl = function (a, b) {
  return a + b;
};

var addNewArrow = () => a + b;

// Example :

console.log(numProducts);

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

// Window Object

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
