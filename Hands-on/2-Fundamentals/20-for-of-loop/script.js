/**
 * for-of-loop: The for...of loop is used to iterate through the values of an iterable.
 * - Used to loop through values of iterable objects (like - arrays, strings, maps, sets etc)
 * - The for-of-loop can be used to iterate over an array.
 * - The for...of loop cannot be used to iterate over an object.
 *
 * Syntax :
 * for (element of iterable) { // body of for...of }
 * # iterable - an iterable object (array, set, strings, etc).
 * # element - items in the iterable
 */

// for-of-loop with Array :
// Example 1:
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("each fruit of fruits array = ", fruit);
}

// Example 2:
const students = ["John", "Sara", "Jack"];

// using for...of
for (let element of students) {
  // display the values
  console.log("each student name of sudents array = ", element);
}

// for-of-loop with Strings :
const string = "code";

// using for...of loop
for (let i of string) {
  console.log("letters of string = ", i);
}

// for-of-loop with Set :
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
  console.log("each element of Set = ", i);
}

// for-of-loop with Map :
// define Map
let map = new Map();

// inserting elements
map.set("name", "Jack");
map.set("age", "27");

// looping through Map
for (let [key, value] of map) {
  console.log(key + "- " + value);
}
