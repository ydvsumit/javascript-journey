/**
 * Functions:
 * A function is simple a piece of code that we can reuse over and over again in our code.
 *
 * DRY Principle: Do Not Repeat Yourself
 * Avoid duplicating the same code in multiple places — instead, write reusable logic.
 * The goal is to make code cleaner, reusable, and easier to maintain.
 */

// Regular Named Function Declaration
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

// Passing Parameters in function at time of declaration
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// Passing Arguments at time of calling / running / invoking the function
fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Practice :
function describeCountry(country, population, capitalCity) {
  const result = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return result;
}

const res1 = describeCountry("India", 145, "Delhi");
const res2 = describeCountry("UK", 65, "London");
const res3 = describeCountry("Finland", 6, "Helsinki");

console.log(res1);
console.log(res2);
console.log(res3);
