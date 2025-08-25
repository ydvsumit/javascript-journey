/**
 * Equality Operators: == vs ===
 *
 * Strict Equality Operator(===):
 *                                - It checks teh value with their data types.
 *                                - It does not perform type coercion.
 * Loose Equality Operator(==):
 *                                - It checks only the values & returns true or false
 *                                - It does type coercion.
 */

const age = 18;
if (age === 18) {
  console.log("You just became an adult (strict)");
}

if (age == 18) {
  console.log("You just became an adult (loose)");
}

//Example 1:
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // string

if (favourite === 23) {
  // "23" == 23 -> true
  // "23" === 23 -> false (if we convert prompt by using Number() then it will work)
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}

// Example 2:
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
console.log(numNeighbours);
console.log(typeof numNeighbours);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
