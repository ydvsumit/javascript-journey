const age = 23;
age >= 18
  ? console.log("I like to drink cold-drink")
  : console.log("I like to drink water");

const drink = age >= 18 ? "cold-drink" : "water";
console.log(drink);

let newDrink;
if (age >= 18) {
  newDrink = "cold-drink";
} else {
  newDrink = "water";
}

console.log(newDrink);

console.log(`I like to drink ${age >= 18 ? "cold-drink" : "water"}`);

// Practice:
const country = "Portugal";
const population = 45;

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// alternate way to do with console.log directly
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
