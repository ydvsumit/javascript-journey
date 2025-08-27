/**
 * for-in-loop: The JavaScript for...in loop iterates over the keys of an object.
 * Syntax:
 *        for (key in object) {// body of for...in};
 *
 * # object - The object whose keys we want to iterate over.
 * # key - A variable that stores a single key belonging to object.
 */

const student = {
  name: "Monica",
  class: 7,
};

// loop through the keys of student object
for (let key in student) {
  // display the key-value pairs
  console.log(`${key} => ${student[key]}`);
}

// Output:
// name => Monica
// class => 7

let person = {
  name: "Jonas",
  age: 26,
  country: "Portugal",
};

for (let key in person) {
  console.log(key + " : " + person[key]);
}
