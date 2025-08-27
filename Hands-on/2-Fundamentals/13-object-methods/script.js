/**
 * Object Method:
 * In javascript, an object method is a function stored as a property of an object.
 * So when a function is inside an object, it's called a method.
 */

const jonas = {
  firstName: "Jonas",
  lastName: "Smith",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
  hasDrivingLicense: true,

  // without using this keyword i.e. passing birthYear in params & arguments
  calcAge1: function (birthYear) {
    return 2037 - birthYear;
  },

  // using this keyword
  calcAge2: function () {
    // Here this refer to jonas object
    console.log("this keyword refers to jonas object = ", this);
    return 2037 - this.birthYear;
  },

  // assign a age propery in object via method
  calcAge3: function () {
    // Here this refer to jonas object
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge2()}-year old ${
      jonas.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license.`;
  },
};

// without using this keyword
console.log(jonas.calcAge1(1991));
console.log(jonas["calcAge1"](1991));

// using this keyword
console.log(
  "this keyword refers to jonas object (calcAge2) = ",
  jonas.calcAge2()
);
console.log(
  "this keyword refers to jonas object (calcAge2) = ",
  jonas["calcAge2"]()
);

// invoking method that created a new property by calcAge3 method
console.log(
  "this keyword refers to jonas object (calcAge3) = ",
  jonas.calcAge3()
);
console.log("this keyword refers to jonas object (age) = ", jonas.age);
console.log("this keyword refers to jonas object (age) = ", jonas["age"]);

// Exercise:
// Jonas is a 46-year old teacher, and he has a driver's license.
console.log(jonas.getSummary());

// Practice:
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["US", "UK", "Europe"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.'`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // Even simpler version
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
console.log(myCountry);
