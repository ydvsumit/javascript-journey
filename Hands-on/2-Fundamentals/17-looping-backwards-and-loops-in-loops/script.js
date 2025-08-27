/**
 * Looping Backwards and Loops in Loops
 */

const jonas = [
  "Jonas",
  "Smith",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
];

console.log("jonas array length = ", jonas.length);

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);
}

for (let rep = 1; rep < 6; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
}

// move lifting weight for a separate exercise
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

// Practice:
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

console.log("----------------Part 1: Solution-----------------------");
for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(listOfNeighbours[i]);
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

console.log("----------------Part 2: Solution-----------------------");
for (let neighbour = 0; neighbour < listOfNeighbours.length; neighbour++) {
  for (
    let country = 0;
    country < listOfNeighbours[neighbour].length;
    country++
  ) {
    console.log(`Neighbour: ${listOfNeighbours[neighbour][country]}`);
  }
}
