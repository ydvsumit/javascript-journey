/**
 * Dot vs Bracket Notation :
 *
 * Dot Notation - jonas.fname - ("Jonas")
 * Bracket Notation - jonas["firstName"] - ("Jonas")
 *
 * In bracket notation, if anything we are trying to find via prompt so the variable name that is given in prompt replace by the variable value.
 */

const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
};

console.log(jonas);

// Dot Notation :
console.log(jonas.firstName);

// Bracket Notation :
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey)    --> that is invalid, we can do this using dot notation

const interestedIn = prompt(
  "What do you want know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonas";
console.log(jonas);

// Challenge
// "jonas has 3 friends, and his best friend is called Michel"
// Also if you want, you can check precedence of dot(.) operator and [] operator in precedence table

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and  his best friend is called ${jonas.friends[0]}`
);

// Practice :
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["US", "UK", "Europe"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.'`
);

myCountry.population = myCountry["population"] + 2;
console.log("After Increase by using dot notation = ", myCountry.population);

myCountry["population"] = myCountry["population"] - 2;
console.log(
  "After decrease by using bracket notation = ",
  myCountry["population"]
);
