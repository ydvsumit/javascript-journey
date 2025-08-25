/**
 * Type Conversion and Type Coercion :
 *
 * Type Conversion -
 *                  Type conversion is when we manually convert from one type to another.
 *                  When we explicitly want to convert from one datatype to another datatype.
 *                  Example : Number(), String(), Many more....
 *
 * Type Coercion -
 *                  When JavaScript automatically convert type behind the scene for us is called Type Coercion.
 *                  It happens implicitly, completely hidden from us.
 *                  Example : you can try with concatenate two values one string and another number with plus operator, then it will convert it to string and if you use minus operator then it do vice-versa.
 */

// Type Conversion
const inputYear = "1991";
console.log("type conversion = ", Number(inputYear), inputYear);
console.log("type conversion = ", Number(inputYear) + 18);

console.log("type conversion = ", Number("Jonas"));
console.log("checking datatype = ", typeof NaN);

console.log("type conversion = ", String(23), 23);

// Type Coercion
console.log("type coercion = ", "I am " + 23 + " years old");
console.log("type coercion = ", "23" - "10" - 3);
console.log("type coercion = ", "23" / "2");

let n = "1" + 1;
n = n - 1;
console.log("checking n in type coercion = ", n);

//Predict the results
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //"617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
console.log("25" - 10); //15
