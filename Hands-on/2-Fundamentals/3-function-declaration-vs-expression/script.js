/**
 * Function Declaration vs Expression
 * Function Declaration :
 *                      - When we declare a function with name by using function keyword.
 * Function Expression :
 *                      - When we create a functionw without name and using function keyword and then store in a variable.
 */

// if we call the function declaration before initialization, it will work and will get the result.
const age = calcAge1(1991);
console.log(age);

// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// But if we try to get access the function expression before initialization, it will throw an error
// const age0 = calcAge2(1991);
// console.log(age0); // Cannot access 'calcAge2' before initialization

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// Practice :
const worldPopulation = 7900;

// Function Declaration
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const res1 = percentageOfWorld1(1450);
const res2 = percentageOfWorld1(1800);
const res3 = percentageOfWorld1(3600);

console.log(res1, res2, res3);

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const res4 = percentageOfWorld2(1450);
const res5 = percentageOfWorld2(1800);
const res6 = percentageOfWorld2(3600);
