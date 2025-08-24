const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Smith";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;

console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2010);

// Results based on Operator Precedence
console.log(25 - 10 - 5);

let p, q;
p = q = 25 - 10 - 5; // p = q = 10, p = 10
console.log(p, q);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah);

// Practice
let totalPopulation = 1450;
let halfPopulation = totalPopulation / 2;
console.log("Half Population of Total Population is = ", halfPopulation);

halfPopulation++;
console.log("halfPopulation increased by 1 = ", halfPopulation);

const finlandPopulation = 60;
const checkLargerPopulation = halfPopulation > finlandPopulation;
console.log(
  "check larger population is true or false = ",
  checkLargerPopulation
);

const averagePopulation = 33;
const checkPopulation = averagePopulation > halfPopulation;
console.log("check population = ", checkPopulation);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Template Literals
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(`using template literals: ${description}`);
