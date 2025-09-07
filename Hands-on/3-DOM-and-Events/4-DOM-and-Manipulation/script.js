"use strict";

// Selecting and Manipulating Elements
console.log(document.querySelector(".message").textContent);

// you can see the changes in UI
document.querySelector(".message").textContent = "👍 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// for now it's showing blank because there is nothing in console
document.querySelector(".guess").value = 18;

console.log(document.querySelector(".guess").value);

document.querySelector(".guess").value = 18;

// Add event listener
document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  console.log(input, typeof input);
  let score = document.querySelector(".score").textContent;
  console.log(score);
});

// Manipulating CSS
document.querySelector("body").style.backgroundColor = "#60b347";
document.querySelector(".number").style.width = "30rem";

// create a secret number by using Math.trunc
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".number").textContent = secretNumber;
