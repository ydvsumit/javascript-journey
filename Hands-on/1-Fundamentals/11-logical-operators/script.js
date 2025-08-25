/**
 * Logical Operators & Boolean Logic:
 * AND (&&) Operator: (Exaxmple Value: A = true, B = true):=>
 *                  - True when all true
                    - When both true then it will true
                    - When both false then it will false
                    - When one of them is true or false then it will false
*
* OR (||) Operator: (Exaxmple Value: A = true, B = false)
                  - True when one is true
                  - When both true then it will true
                  - When both false then it will false
                  - When one of them is true or false then it will true

* NOT A (!A) or NOT B (!B) Operator: (Exaxmple Value: A = true, B = false)
                                    - Inverts ture/false value
                                    - When both true then it will true
                                    - if (!A) given, and A is true then it will make it false and vice-versa
                                    - if (!B) given, and B is true then it will make it false and vice-versa
 */

const hasDrivingLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
  onsole.log("Jonas is able to drive!");
} else {
  console.log("Someone else should drive...");
}
