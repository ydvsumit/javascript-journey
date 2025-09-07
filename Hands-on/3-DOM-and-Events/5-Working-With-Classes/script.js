/**
 * Working With Classes:
 * # To selecting the class to manipulate, use like this syntax:
 *              document.querySelectorAll(".show-modal")
 *              document.querySelector(".modal")
 * # Dot(.) is only for the "selector".
 * # if we want to remove or add any class from classList, we don't need to use dot(.), just give the name only.
 *
 * Listen Keyboard Events OR Global Events:
 *  - Usually it listen on whole document because they don't happen on one specific element.
 *
 * Three types of events for the keyboard:
 *    1. key-up: This one only happens when we lift or finger off the keyboard, basically on off the key.
 *    2. key-press: Key press is fired continuously as we keep our finger on a certain key.
 *    3. Key-down: (Hit any key on keyboard)-> It is fired as soon as we just press down key.
 *
 * -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * querySelector vs querySelectorAll vs getElementById:
 *
 *  - Sometimes, we are using "getElementById" instead of using querySelector because now we not writing selector, we just only pass the "name of the ID" (without #) that we are looking for.
 *  - getElementById is supposed to be a little bit faster than querySelector.
 *
 * querySelector(".class"):
 *                        - The first element that matches a CSS selector.
 *                        - Selector Format: uses css-styles selector (#id, .class, tags etc.)
 * querySelectorAll(".class"):
 *                        - Select all elements that matches a css selector.
 *                        - Selector Format: uses css-styles selector (#id, .class, tags etc.)
 *
 * getElementById("id"):
 *                        - Selects an first element by its unique ID.
 *                        - Selector Format: Just the ID name (without #).
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */

// select element that matches className
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

console.log(modal, overlay, btnCloseModal);

// select all elements that matches className
const btnsOpenModal = document.querySelectorAll(".show-modal");
// returns a NodeList, little bit like array but not like an exactly an array
// if we want to do something with these modal we can loop over this NodeList
console.log(btnsOpenModal);

// select a paragraph by using unique id
const element = document.getElementById("heading");
console.log(element);
