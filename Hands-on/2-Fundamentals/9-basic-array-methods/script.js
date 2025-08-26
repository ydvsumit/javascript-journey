const friends = ["Michel", "Steven", "Peter"];

// Add element in Array:

/**
 * Push() :
 *        - This methods add the element at the end of the array.
 *        - You can pass multiple elements as comma-separated arguments.
 *        - The push() method returns a Number representing the new length of the array.
 */

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength); // return length on created new array

/**
 * unshift() :
 *           - Add element at the begining of the array.
 *           - Similarly push method, unshift also return the length of new array.
 */

const newLengthAdded = friends.unshift("John");
console.log(friends);
console.log(newLengthAdded); // return length on created new array

// Remove elements from Array:

/**
 * pop() :
 *        - Opposite of push method i.e. remove the last element of the array.
 *        - It's return the "removed element".
 */
const popped = friends.pop(); //last element removed from array
console.log(friends);
console.log(popped);

/**
 * shift() :
 *          - It's remove the first element of array and returns that removed element.
 */
const removeFirst = friends.shift(); // remove 1st element from array
console.log(friends);
console.log(removeFirst);

// Other Array Methods:

/**
 * indexOf():
 *          - It is very useful method that tell us in which position a certain element is in the array.
 *          - If it doesn’t find the element → it returns -1.
 */
console.log("find indexOf = ", friends.indexOf("Steven"));
console.log("find indexOf = ", friends.indexOf("Bob"));

/**
 * includes() :
 *            - It's return true or false based on that certain element is present or not in the array.
 *            - It's use strict equality that means it does not do type coercion.
 */
console.log("find includes = ", friends.includes("Steven"));
console.log("find includes = ", friends.includes("Bob"));

friends.push(23);
console.log("find includes = ", friends.includes(23)); // "23" -> false | 23 -> true (strict equality)

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// Practice:
const neighbours = ["Inida", "Russia", "US", "UK", "Sweden", "Europe"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();

if (neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const positionSweden = neighbours.indexOf("Sweden");
neighbours[positionSweden] = "Republic of Sweden";
console.log(neighbours);
