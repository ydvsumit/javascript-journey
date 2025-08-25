/**
 * Arrow Function
 * An arrow function is simply and special form of function expression that is shorter and therefore faster to write.
 */

// 1st way:
const calcAge = (birthYear) => {
  return 2037 - birthYear;
};

// 2nd way:
const calcNewAge = (birthYear) => 2037 - birthYear;

const age = calcAge(1991);
const ageNew = calcNewAge(1991);

console.log(age, ageNew);

const yearsUnitRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires  in ${retirement} years`;
};

console.log(yearsUnitRetirement(1991, "Jonas"));
console.log(yearsUnitRetirement(1980, "Bob"));

// Practice:
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const res1 = percentageOfWorld3(1500);
const res2 = percentageOfWorld3(800);
const res3 = percentageOfWorld3(2100);

console.log(res1, res2, res3);
