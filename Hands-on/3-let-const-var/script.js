/**
 * let, const, var:
 * let -  let create variables that can reassigned in another value
 *        Mutable (we can reassign after declaration)
 *        Block Scoped
 *        Hoisting does not occur in let but technically yes, let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.
 *
 * const - const create constant variables that can not be reassigned another value
 *         when we declare the const variable at that time we need to initialize the const variable
 *         Immutable
 *         Block Scoped
 *         Hoisting does not occur in let but technically yes, let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.
 *
 * var  - var create variable that can be reassigned another value
 *        Mutable
 *        Developer's should not use var anymore
 *        either function scoped or global scope
 *        Hoisting occurs in var
 *
 * Temporal Dead Zone: There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the Temporal Dead Zone.
 */

let language = "Hindi";
const country = "India";
const continent = "Asia";
const isIsland = true;

language = "Hindi & English";

console.log(language);

//Hoisting with var - we can declare and initialize but when we try to console it before it's undefined because by default var set to undefined
//Example 1:
console.log(number); // undefined

var number = 10;

console.log(number); // 10

//Example 2:
console.log(fname); //undefined

var fname = "Sumit";
console.log(fname); //"Sumit"

fname = "Yadav"; // we can reassign
console.log(fname); //"Yadav"

//Example 3:
console.log(data); //undefined
var data;
console.log(data); //undefined
data = "Hello World";
console.log(data); //"Hello World"

/**
 * Temporal Dead Zone (let & const)
 * The newNumber variable is in a temporal dead zone where JavaScript knows of its existence
 * (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization).
 *
 * Variables declared with let or const are hoisted WITHOUT a default initialization.
 * So accessing them before the line they were declared throws ReferenceError:
 * Cannot access 'variable' before initialization.
 *
 * for var:=> (shown in above code)
 * But variables declared with var are hoisted WITH a default initialization of undefined.
 * So accessing them before the line they were declared returns undefined.
 */
console.log(newNumber); // ReferenceError: Cannot access 'number' before initialization

let newNumber = 10;

console.log(newNumber); //10
