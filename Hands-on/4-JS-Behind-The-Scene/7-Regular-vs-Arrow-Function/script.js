/**
 * Important Note : (based on strict mode)
 *                - if we create a method (Regular Function) in a object and inside method.
 *                - we create another regular function inside the main regular function and use "this keyword" and invoke the same function inside the method, then as per rule this keyword throw an error.
 *
 * "this" behavior in Regular Function vs Arrow Function :-> we know that when we should use these functions and avoid
 */
"use strict";

const person = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log("Regular Function = ", this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log("isMillenial Function = ", this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log("Arrow Function = ", this);
    console.log(`Hey ${this.firstName}`);
  },
};

person.greet(); // refers to surrounding scope, not to object literal {...}
// console.log(this.firstName);
// person.calcAge();

// To solve this  issue we have 2 solutions:
// -------------------------------------------------Solution 1:-------------------------------------------------
const person1 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log("Regular Function 1 = ", this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillenial = function () {
      console.log("isMillenial Function 1 = ", self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log("Arrow Function 1 = ", this);
    console.log(`Hey ${this.firstName}`);
  },
};

person1.calcAge();

// -------------------------------------------------Solution 2:-------------------------------------------------
const person2 = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log("Regular Function 2 = ", this);
    console.log(2037 - this.year);

    const self = this; // self or that
    const isMillenial = () => {
      console.log("isMillenial Function 2 = ", self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log("Arrow Function 2 = ", this);
    console.log(`Hey ${this.firstName}`);
  },
};

person2.calcAge();
