/**
 * Handling Click Events:
 * Event Listener : An event listener is a way to run code when something happens on a web page like when a user clicks a button, moves the mouse or type in a input box.
 * Syntax :
 *          element.addEventListener("event", callback function)
 *
 *        - element -> The HTML element you're watching.
 *        - event -> The event type (like "click", "mouseover", "keydown" etc)
 *        - function/event handler function -> The code to run when the event happens.
 */

document.querySelector(".check").addEventListener("click", function () {
  // if we not use type conversion then num is string
  const num = Number(document.querySelector(".num").value);
  console.log(num, typeof num);
});

console.log(document.querySelector(".txt").textContent);
