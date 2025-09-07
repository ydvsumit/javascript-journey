/**
 * Manipulating CSS:
 * if we want to change or manipulate in body, we can directly use it like
 *  - document.querySelector("body").style
 *
 * To manipulate CSS:
 *                    document.querySelector("body").style.backgroundColor = "green"
 * Note:
 *      - in CSS we can use background-color, but in JavaScript we should use camalCase like backgroundColor
 *      - whenever, we are manipulating "style", we always need to specify a "string". We can give it to number.
 *
 */

document.querySelector("body").style.backgroundColor = "red";

// here, when we are changing a style, we cann't give number, we need to provide it to in string
document.querySelector("h1").style.fontSize = "30px";
