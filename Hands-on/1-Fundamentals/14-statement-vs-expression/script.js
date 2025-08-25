/**
 * Statement vs Expression:
 * Statements -
 *            The statement is like a bigger piece of code that is executed and which does not produce a value on itself.
 *            Example: Basically we wrtie a whole program as a sequence of actions and these actions are statements. (if-else statement)
 * Expression -
 *            An expression is a piece of code that produces a value.
 *            Example: 3 + 4, 1991, ture && false && !true,
 *            Note:  In template literals `` we can insert only expression.
 */

// Statements
if (23 > 10) {
  const str = "23 is bigger";
  console.log(str);
}

//Expression
3 + 4;
1991;
ture && false && !true;

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
