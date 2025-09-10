/**
 * "this" Keyword:
 *                - The "this" keyword is a special reference that represents the context in which a function is executed.
 *                - It tells you who is calling the function or which object function belongs to.
 *
 * OR In Short:
 *                - The this keyword in JavaScript is a special identifier whose value depends on how and where a function is called.
 *                - It doesn’t behave like variables — instead, it’s dynamically set at runtime.
 *                - It's value depends on how the function is invoked , not where it's written.
 *
 * "this" keyword behavior for Regular Function:
 *        - "this" keyword is not static that means it's "dynamic binding" --> this change based on how the function is called.
 *
 * "this" keyword behavior for Arrow Function:
 *        - It does not change "this" behavior based on how you call them.
 *        - This is a "lexical" (inherited from surrounding scope, fixed at creation).
 *
 * "this" Keyword Behavior:
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * |    Context          |     Strict Mode (Browser)         |    Non-Strict Mode (Browser)      |   Strict Mode (NodeJS)      |    Non-Strict Mode (NodeJS)       |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | Global scope        |          undefined                |     window (global object)        |     empty object - {}       |       empty object - {}           |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | Regular Function    | undefined (becuase in strict      |     window (global object)        | undefined (inside module    | global (NodeJS globall object     |
 * |                     | mode, default this is not auto    |                                   | scope, no automatic global  | if not in ES Module Stict Mode)   |
 * |                     | converted to window)              |                                   | fallback)                   |                                   |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | Arrow Function      | Lexically inherits this from      |   Same -> lexically inherited     | Same -> lexically inherited | Same -> lexically inherited       |
 * | (By Default:        | surrounding scope (does not have  |                                   |                             |                                   |
 * | Browser -> window   | its own this)                     |                                   |                             |                                   |
 * | NodeJS -> {} )      |                                   |                                   |                             |                                   |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | Inside Object Method| Refers to object calling method   |     Same -> Refers to Object      | Same -> Refers to Object    | Same -> Refers to Object          |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | Constructor Function| this = newly created object       |     Same -> this = new object     | Same-> this = new object    | Same -> this = new object instance|
 * | (called with new)   |        instance                   |                    instance       |               instance      |                                   |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * | call/apply/bind     | this explicitly set to the object |   Same -> explicit binding works  | Same -> explicit binding    | Same -> explicit binding works    |
 * |                     | you pass - e.g.-> func.call(obj)  |           the same                |         works the same      |         the same                  |
 * |----------------------------------------------------------------------------------------------------------------------------------------------------------------
 *
 */
// "use strict";

// this = undefined {in strict mode} otherwise window in the browser
console.log("global scope = ", this); // window object

/**
 * Declared/Regular function have own this keyword
 * And in strict mode it's undefined or without strict mode it's window object
 */
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log("Declared/Regular Function ", this);
};
calcAge(1991);

/**
 * Arrow function didn't have own this keyword {lexical this keyword}
 * this = window in the browser {in strict mode}
 * this = <this of surrounding function (lexical this)>
 */
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log("Arrow Function ", this);
};
calcAgeArrow(1981);

/**
 * this keyword in objects methods:
 * Method 👉 this = <Object that is calling the method>
 */
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const smith = {
  year: 2017,
};

// here, we reassign the method into another object that means this refers to current object now
smith.calcAge = jonas.calcAge;
smith.calcAge();

const f = jonas.calcAge; // function is just like value so assign into another
f(); // not attached with object so it showing error
