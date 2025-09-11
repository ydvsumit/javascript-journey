/**
 * call() Method:
 *              - call calls the function immediately.
 *              - you can explicitly set "this" and pass arguments one by one.
 *              - Syntax: functionName.call(thisArg, arg1, arg2, .....)
 */
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = {
  name: "John",
};

greet.call(person, "Hello", "!"); // "Hello John!"

/**
 * apply() Method:
 *              - apply also calls the function immediately.
 *              - But arguments are passes as an array.
 *              - Syntax: functionName.apply(thisArg, [arg1, arg2, .....])
 */

greet.apply(person, ["Hi", "!!"]); // "Hi John!!"

/**
 * bind() Method:
 *              - bind does not calls the function immediately.
 *              - Instead, it returns a "new function" with "this" fixed to what you specify.
 *              - Syntax: const anyVariableName = functionName.bind(thisArg, arg1, arg2, ...)
 *                        anyVariableName()
 */

const boundGreet = greet.bind(person, "Hey", "!!!");

boundGreet(); // "Hey John!!!"

/**
 * thisArg --> What we want "this" to refer to inside the function OR it means inside a function, "this" will point to that object we want to refer.
 * arg1, arg2, ... --> The actual parameters for the function.
 *
 * Also call/apply/bind method can not change "this" behavior for arrow function.
 */
