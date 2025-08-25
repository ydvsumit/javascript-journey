/**
 * Use Strict Mode:
 * Strict mode is a special mode that we can activate in javascript which makes it easier for us to write a secure javascript code.
 * Strict mode is a special mode in javascript that makes the code run with "extra rules and checks".
 * It helps catch "common mistakes" and makes you code "more secure and cleaner".
 * To enable strict mode by adding this line at the top of your script or function: "use strict"
 */

"use strict";

let hasDrivingLicense = false;
const passTest = true;

// Here, if i can do any mistakes in any variables name it will throw an error, similarly it help more to reduce mistakes

if (passTest) hasDrivingLicense = true;
if (hasDrivingLicense) console.log("I can drive :D");

// Now another thing that srict mode does is to short list of variable names that are reserved for features that might be added to the language a but later.
// For example: let's try to define a variable called inerface

const interface = "Audio"; // Uncaught Syntax Error: Unexpected strict mode reserved word
const private = 534; // we can't use reserved keywords to our variable names
// const if = 23;  // Unexpected token 'if'
