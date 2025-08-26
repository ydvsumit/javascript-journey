// Function Calling Other Function:

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Practice :

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentageOfWorld = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
  return description;
}

console.log(describePopulation("Portugal", 45));
console.log(describePopulation("UK", 60));
console.log(describePopulation("US", 35));
