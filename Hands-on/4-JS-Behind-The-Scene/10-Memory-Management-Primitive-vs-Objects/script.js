/**
 * Memory Management: Primitive vs Objects :=>
 * - Unlike other language, "Memory is automatically managed" by JavaScript behind the scens.
 * - Every value we create in javascript goes through a "Memory Lifecycle".
 * - Memory Lifecycle => 1. Allocate Memory -> 2. Use Memory -> 3. Release Memory
 *
 * 1. Allocate Memory:=> let temp = 23.7
 *    - When we assign a value to a new variable, JS Engine automatically allocates (reserves) a "piece of memory to store the value".
 *
 * 2. Use Memory:=> temp = temp + 5;
 *                  round(temp);
 *    - The value is "written, read and updated" in the allocated piece of memory.
 *
 * 3. Release Memory:=>
 *    - temp is removed from memory.
 *    - When no longer needed, the value is deleted from memory to freeup resource.
 *    - The released memory is used for new values.
 *
 *
 * Primitives vs Objects:=>
 *
 * # Primitives =>
 *                - Reference by Value
 *                - Primitives (Number, String, Boolean, Undefined, Null, Symbol, BigInt) stored in "Call Stack".
 *
 * # Objects =>
 *              - Reference by Memory
 *              - Objects (Object Literals {....}, Arrays, Functions and manymore) are stored in "HEAP".
 *              - A variable that holds objects that means in execution context he hold reference of object.
 */

const name = "Jonas";
const age = calcAge(1991);
let newAge = age;
newAge++;

const address = {
  city: "Faro",
  country: "Portugal",
};

const newLocation = address;
newLocation.city = "Lisbon"; // updated in original object because it hold the same reference address of original object in memory

console.log(address);

function calcAge(birthYear) {
  const now = 2025;
  const x = now - birthYear;
  return x;
}
