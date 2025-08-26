/**
 * Array:
 * An array is a special variable in javascript that can hold multiple values in a single place, Instead of creating separate vairables for each values, you can use an array.
 *
 * Note :
 * As we know, const is immutable but here array is non-primitive with const, so it is mutable.
 * - const is immutable with primitive data types
 * - const is mutable with non-primitive data types
 * That means, we can change, add, remove any value in array but not able to replace whole array.
 */

// Way to create an array:
const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "Peter";

// 1st way :
const friends = ["Michel", "Steven", "Peter"];
console.log(friends);

// 2nd way:
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Access values from an array by using index
console.log(friends[0]);
console.log(friends[2]);

// check how many elements is present in an array
console.log(friends.length);
// check the last element of an array
console.log(friends[friends.length - 1]);

// Array is declare with const but as we know it is non-primitive data type, we can change a value in array but not whole array
friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Smith", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsArr = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(yearsArr[0]);
const age2 = calcAge(yearsArr[1]);
const age3 = calcAge(yearsArr[yearsArr.length - 1]);
console.log(age1, age2, age3);

// Practice :
const populations = [65, 45, 35, 25];
console.log(populations);
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages1 = percentageOfWorld1(populations[0]);
const percentages2 = percentageOfWorld1(populations[1]);
const percentages3 = percentageOfWorld1(populations[2]);
const percentages4 = percentageOfWorld1(populations[3]);

const percentages = [percentages1, percentages2, percentages3, percentages4];
