/**
 * While Loop:
 * Repeats code as long as conition is true (Initialization -> condition -> increment)
 */

// create this same for loop by using while loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// while loop :
let rep = 6;
while (rep <= 10) {
  console.log(`WHILE LOOP: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

/**
 * Math.trunc(value): method returns the integer part of the given number.
 * Math.trunc(value) is a static method that returns the integer part of a number by removing its fractional digits.
 * It effectively truncates the decimal portion of a number towards zero, regardless of whether the number is positive or negative.
 * - value: The number whose integer part is to be returned.
 */

console.log(Math.trunc(15.56)); // Output: 15
console.log(Math.trunc(0.99)); // Output: 0

console.log(Math.trunc(-15.56)); // Output: -15
console.log(Math.trunc(-0.123)); // Output: -0

console.log(Math.trunc(Infinity)); // Output: Infinity
console.log(Math.trunc(-Infinity)); // Output: -Infinity
console.log(Math.trunc(NaN)); // Output: NaN

/**
 * Math.random(): method is used to generate a pseudo-random number.
 * Characteristics of Math.random():
 * - It returns a floating-point number.
 * - The generated number is always greater than or equal to 0 (inclusive).
 * - The generated number is always less than 1 (exclusive).
 * - The distribution of numbers within this range is approximately uniform.
 */

// To get a random number between 0 and 1 (exclusive of 1):
const randomNumber = Math.random();
console.log(randomNumber); // e.g., 0.789123456789

// To get number of dice :
let dice = Math.trunc(Math.random() * 6) + 1;
console.log("dice number = ", dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end....");
  }
}
