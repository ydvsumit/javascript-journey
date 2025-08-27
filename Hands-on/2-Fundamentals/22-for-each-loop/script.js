/**
 * for each loop:
 * The forEach() method calls a function and iterates over the elements of an array.
 * The forEach() method can also be used on Maps and Sets.
 *
 * Syntax: array.forEach(function(currentValue, index, arr))
 *
 * Here,
 * - function(currentValue, index, arr) - a function to be run for each element of an array
 * - currentValue - the value of an array
 * - index (optional) - the index of the current element
 * - arr (optional) - the array of the current elements
 */

let students = ["John", "Sara", "Jack"];

// using forEach
students.forEach(myFunction);

function myFunction(item) {
  console.log(item);
}

// with arrow function and callback
students.forEach((element) => {
  console.log("With Arrow Function and Callback = ", element);
});

// Updating the Array Elements:
// using forEach
students.forEach(myNewFunction);

function myNewFunction(item, index, arr) {
  // adding strings to the array elements
  arr[index] = "Hello " + item;
}

console.log(students);

// Test
const arrayItems = ["item1", "item2", "item3"];
const copyItems = [];

// using forEach
arrayItems.forEach(function (item) {
  copyItems.push(item);
});

console.log(copyItems);
