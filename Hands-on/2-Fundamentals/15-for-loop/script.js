/**
 * For Loop :
 *  A for loop in javascript is a control structure that allows you to repeat a block of code multiple times - typically when you know how many time you want the loop to run.
 *  Syntax : for(initialization; condition; increment){.....}
 */

//Instead of writing like this, we can use for loop

// console.log("Lifting weights repition 1 🏋️‍♂️");
// console.log("Lifting weights repition 2 🏋️‍♂️");
// console.log("Lifting weights repition 3 🏋️‍♂️");
// console.log("Lifting weights repition 4 🏋️‍♂️");
// console.log("Lifting weights repition 5 🏋️‍♂️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repition ${rep} 🏋️‍♂️`);
}

// Practice :
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
