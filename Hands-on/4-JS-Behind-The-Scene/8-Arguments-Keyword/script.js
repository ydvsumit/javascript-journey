/**
 * Arguments Keyword:
 * - Arguments is a special object available inside regular functions (not arrow functions).
 * - It looks like an array (but not a real array), but it's actually an array like object.
 * - It has "indexed value" and a "length" property, but it doesn't have array methods like .map or .forEach() etc.
 * - It contains all the values that were passed to the function when it was invoked.
 *
 * In Non-Strict Mode: -> Parameters and Arguments are synced and linked.
 * In Strict Mode: -> Parameters and Arguments are not synced. They are separated.
 *
 */
// Arguments Keywords only exist in regular function
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 4, 3); // we can call more arguments also

const addArrow = (a, b) => {
  console.log(arguments); // showing error
  return a + b;
};
addArrow(2, 5);

function showArgs(a, b, c) {
  console.log(arguments); // array-like object of all args
  console.log(arguments[0]); // first argument → 10
  console.log(arguments[1]); // second argument → 20
  console.log(arguments.length); // total args → 3
}

showArgs(10, 20, 30);

function demo(x, y) {
  console.log(x, y); // 1 2
  console.log(arguments[2]); // 3 (even though not defined in params)
}

demo(1, 2, 3);
