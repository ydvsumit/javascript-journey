/**
 * Truthy and Falsy Values:
 * 5 falsy values -
 *                - 0 (zero)
 *                - " " (empty string)
 *                - undefined
 *                - null
 *                - NaN (Not a Number)
 *
 * Everything else apart from this is truthy values.
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Heightis defined");
} else {
  console.log("Height is UNDEFINED");
}
