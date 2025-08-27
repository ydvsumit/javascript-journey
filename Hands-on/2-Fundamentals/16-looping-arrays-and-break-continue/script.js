/**
 * Looping Arrays, Break and Continue
 * conitnue :
 *          - Continue is to exit the current iteration of the loop and continue to next one.
 * break    :
 *          - Break is used to completely terminate the whole loop.
 */

const jonas = [
  "Jonas",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
  true,
];

const types1 = [];
const types2 = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // 1st way:
  types1[i] = typeof jonas[i];
  //2nd way:
  types2.push(typeof jonas[i]);
}

console.log(types1);
console.log(types2);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue
console.log("----------------ONLY STRINGS-----------------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

// break
console.log("----------------BREAK WITH NUMBER-----------------");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

// Practice :

// Calculate Percentages
const populations = [65, 45, 35, 25];
console.log(populations);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Instead of doing like this, we can use for loop
const percentages1 = percentageOfWorld1(populations[0]);
const percentages2 = percentageOfWorld1(populations[1]);
const percentages3 = percentageOfWorld1(populations[2]);
const percentages4 = percentageOfWorld1(populations[3]);

const percentages = [percentages1, percentages2, percentages3, percentages4];
console.log("Percentages Array = ", percentages);

// Check that percentages2 and percetages values is same or not after pushing via for loop
const percentage2 = [];
for (let i = 0; i < 4; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}

console.log("Percentages2 Array = ", percentage2);
