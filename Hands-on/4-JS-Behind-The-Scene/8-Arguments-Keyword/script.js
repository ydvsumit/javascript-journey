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
