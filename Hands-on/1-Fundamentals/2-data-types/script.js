/**
 * Data Types - In JavaScript, a data type defines the kind of value a variable can hold.
 *              JavaScript is a dynamically typed language, meaning you don't explicitly declare the data type of a variable when you declare it;
 *              the type is determined at runtime based on the value assigned.
 *
 * We have 2 types of value in javascript:
 * 1) 7 Primitive Data Types (Number, String, Boolean, Undefined, Null, Symbol, Big Int)
 * 2) Non-Primitive Data Types (Object, Arrays, Function, etc)
 */

const country = "India";
const continent = "Asia";
let beforePopulation = 1450;
let afterPopulation = 1450.75;
let isIsland = true;
const bigNumber = 1234567890123456789012345678901234567890n;
const symbol = Symbol("mySymbol");
let variable = null;

console.log(isIsland); //true

let language;
console.log("declared with let but not initialized = ", language); //undefined

language = [
  "Hindi",
  "English",
  "Bhojpuri",
  "Haryanvi",
  "Kannada",
  "Marathi",
  "Telgu",
  "Tamil",
  "Many More....",
];

console.log("data type of country = ", typeof country); //string
console.log("data type of continent = ", typeof continent); //string
console.log("data type of beforePopulation = ", typeof beforePopulation); //number
console.log("data type of afterPopulation = ", typeof afterPopulation); //number
console.log("data type of isIsland = ", typeof isIsland); //boolean
console.log("data type of language = ", typeof language); //object
console.log("data type of variable = ", typeof variable); //object (due to the language quirk)
console.log("data type of bigNumber = ", typeof bigNumber); //bigint
console.log("data type of symbol = ", typeof symbol); //symbol
console.log("access symbol function(description) = ", symbol.description); //mySymbol
