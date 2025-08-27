/**
 * do while loop:
 * Similar to while loop, but it runs the code atleast once, even if the condition is false.
 * (Initialization -> Increment -> Condition)
 */

let rep = 1;
do {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
} while (rep <= 5);

// for false, it runs atleast once as I mentioned above
let repNew = 6;
do {
  console.log(`Lifting weights repetition ${repNew} 🏋️‍♂️`);
  repNew++;
} while (false);
