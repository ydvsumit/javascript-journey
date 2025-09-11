// const jessica = {
//   firstName: "Jessica",
//   lastName: "William",
//   age: 27,
// };

// assign jessica object to a new variable
// const marriedJessica = jessica;

/**
 * - change the lastName in newly assigned marriedJessica Object
 * - As we know, const is immutable, here we are not reassign same variable instead of we can able to change or add the data inside an object or arrays.
 */

// marriedJessica.lastName = "Davis";

/**
 * - here we can see, lastName changed in marriedJessica object but in original object also
 *   because it copy the same object in new variable but it reference to the same memory address of object in HEAP
 */

// console.log("Before : ", jessica);
// console.log("After : ", marriedJessica);

// --------------------------------------By using Function, But it do the same----------------------------------------------------------
// if we do this by creating a function, it do the same because in params, jessica object refer to the same memory address in HEAP.
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

// const marriedJessicaObj = marryPerson(jessica, "Davis");
// console.log("Before : ", jessica);
// console.log("After : ", marriedJessica);

// if we want to change any value in a new object without impacting previous one with new memory address in HEAP.
// ---------------------------------------Solutin : 1 (using Spread Operator - Not a Proper Solution)------------------------------------
const jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

// here we are able to change the lastName without reflecting original one
// console.log(jessica, jessicaCopy);

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

/**
 * but these new family details is reflected in current and original one.
 * Because family is an object in original and it has non-primitive so it take memory in HEAP and while copying and updating, the same memory (object reference) address refer by the new one.
 *
 * Shallow Copy:
 * - It's copy the "first level object" property but not nested object(here family object), this is called "Shallow Copy".
 */
// console.log("Before : ", jessica);
// console.log("After : ", jessicaCopy);

// ------------------------------------------Solutin : 2 (Deep Copy/Clone of Objects)-------------------------------------------------------
/**
 * StructuredClone():
 *                    - So, we have a function for deep copy or deep clone of an any object that is called "StructuredClone()".
 * Note:
 *      - We can see below, it does deep copy i.e. nested object copy into new variable with new address and it does not change any value in original object.
 *      - We can perform any changes in new one without impacting original object.
 *      - Few years ago, it's bit harder because back then we had to use an extenal library like "lodash", if we want to do deep clones.
 */
// Deep Copy/Clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");

console.log("original : ", jessica);
console.log("Clone : ", jessicaClone);
