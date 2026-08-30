// Basic Arithmetic and the Modulo Operator in Javascript

console.log("Addition:", 3 + 4);
console.log(5 - 4);
console.log(5 * 4);
console.log(4 / 2);
console.log(4 ** 2); // exponential
console.log(10 % 3); // Modulo (Remainder)

// Increment
let x = 500;
console.log(x++); // Output: 5 (returns value before increment)
console.log(x);   // Output: 6 (x is now 6)

let y = 600;
console.log(++y); // Output: 6 (increments first, then returns)
console.log(y);   // Output: 6

// Decrement
let a = 700;
console.log(a--); // Output: 5 (returns value before decrement)
console.log(a);   // Output: 4

let b = 800;
console.log(--b); // Output: 4 (decrements first, then returns)
console.log(b);   // Output: 4

// challenge: 05
// Dog age to human age converter
// formula is: human age = (dog age - 2) * 4 + 21

/*
// simple human calculation code
// run in chrome console

let dogAge = prompt("Hi, Please enter age of your dog");
let humanAge = (( dogAge - 2 ) * 4 )+ 21;
alert(`Your dog is ` + humanAge + ` years old in human years.`);
*/

/*
// improve code
// run in chrome console or web link with html
let dogAge1 = prompt("Hi, Please enter the age of your dog:");
dogAge1 = Number(dogAge1); // Convert input to number

if (isNaN(dogAge1) || dogAge1 <= 0) {
    alert("Please enter a valid positive number!");
} else {
    let humanAge = (dogAge1 - 2) * 4 + 21;
    alert(`Congrats! Your dog's age in human years is: ${humanAge}`);
}
*/











/*
// from grok ai notes 

Arithmetic Operators in JavaScript
JavaScript supports the following basic arithmetic operators:
Addition (+): Adds two numbers or concatenates strings.

Subtraction (-): Subtracts one number from another.
Multiplication (*): Multiplies two numbers.
Division (/): Divides one number by another.
Modulo (%): Returns the remainder of a division.
Exponentiation (**): Raises a number to the power of another (introduced in ES6).
Increment (++): Increases a number by 1.
Decrement (--): Decreases a number by 1.

Let’s explore these with code examples and outputs.
1. Addition (+)
The + operator adds two numbers. If used with strings, it concatenates them.
javascript

// Numeric addition
let a = 5;
let b = 3;
let sum = a + b;
console.log(sum); // Output: 8

// String concatenation
let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1 + str2;
console.log(greeting); // Output: "Hello, world!"

// Mixed types (coercion)
let num = 10;
let str = "5";
let mixed = num + str;
console.log(mixed); // Output: "105" (number coerced to string)

Explanation: When one operand is a string, JavaScript converts the other to a string and concatenates. For pure numeric addition, both operands must be numbers.
2. Subtraction (-)
The - operator subtracts one number from another.
javascript

let x = 10;
let y = 4;
let difference = x - y;
console.log(difference); // Output: 6

// With coercion
let strNum = "8";
let result = x - strNum;
console.log(result); // Output: 2 (string "8" coerced to number)

Explanation: Unlike addition, subtraction coerces strings to numbers if they represent valid numeric values. If coercion fails (e.g., "abc" - 5), you get NaN.
3. Multiplication (*)
The * operator multiplies two numbers.
javascript

let m = 6;
let n = 3;
let product = m * n;
console.log(product); // Output: 18

// With coercion
let strNum = "4";
let result = m * strNum;
console.log(result); // Output: 24 (string "4" coerced to number)

Explanation: Like subtraction, multiplication coerces strings to numbers when possible.
4. Division (/)
The / operator divides the first number by the second.
javascript

let p = 15;
let q = 3;
let quotient = p / q;
console.log(quotient); // Output: 5

// Division by zero
let zeroDiv = p / 0;
console.log(zeroDiv); // Output: Infinity

// With coercion
let strNum = "2";
let result = p / strNum;
console.log(result); // Output: 7.5

Explanation: Dividing by zero returns Infinity. Strings are coerced to numbers, and non-numeric strings result in NaN.
5. Modulo (%) - The Remainder Operator
The modulo operator returns the remainder after dividing one number by another. It’s particularly useful for checking divisibility, cycling through values, or extracting patterns.
How Modulo Works
Formula: a % b = remainder of a ÷ b.

If a is smaller than b, the result is a (no division occurs).
The sign of the result matches the sign of the dividend (a).

javascript

// Basic examples
let num1 = 10;
let num2 = 3;
let remainder = num1 % num2;
console.log(remainder); // Output: 1 (10 ÷ 3 = 3 remainder 1)

// When dividend < divisor
let small = 4;
let large = 7;
console.log(small % large); // Output: 4 (4 ÷ 7 = 0 remainder 4)

// Negative numbers
console.log(-10 % 3); // Output: -1 (-10 ÷ 3 = -3 remainder -1)
console.log(10 % -3); // Output: 1 (10 ÷ -3 = -3 remainder 1)

// Practical use: Even or odd check
let checkNum = 17;
console.log(checkNum % 2); // Output: 1 (odd)
checkNum = 20;
console.log(checkNum % 2); // Output: 0 (even)

Explanation:
10 % 3: 10 divided by 3 is 3 (integer part), with 1 left over (10 - 3*3 = 1).
4 % 7: Since 4 < 7, no division occurs, so the remainder is 4.

Negative numbers: The result’s sign follows the dividend, not the divisor.

Real-World Example: Cycling Values
Modulo is great for looping through a range (e.g., a carousel).
javascript

for (let i = 0; i < 10; i++) {
    let position = i % 3; // Cycles through 0, 1, 2
    console.log(`i: ${i}, position: ${position}`);
}
//  Output:
// i: 0, position: 0
// i: 1, position: 1
// i: 2, position: 2
// i: 3, position: 0
// i: 4, position: 1
// i: 5, position: 2
// i: 6, position: 0
// i: 7, position: 1
// i: 8, position: 2
// i: 9, position: 0


6. Exponentiation (**)
The ** operator raises a base to an exponent.
javascript

let base = 2;
let exp = 3;
let power = base ** exp;
console.log(power); // Output: 8 (2 * 2 * 2)

// With decimals
console.log(3 ** 2.5); // Output: 15.588457268119896

Explanation: Introduced in ES6, ** is equivalent to Math.pow(base, exp) but more concise.
7. Increment (++)
Increases a variable’s value by 1. Can be prefix (++x) or postfix (x++).
javascript

let x = 5;
console.log(x++); // Output: 5 (returns value before increment)
console.log(x);   // Output: 6 (x is now 6)

let y = 5;
console.log(++y); // Output: 6 (increments first, then returns)
console.log(y);   // Output: 6

Explanation:
Postfix (x++): Returns the current value, then increments.

Prefix (++x): Increments first, then returns the new value.

8. Decrement (--)
Decreases a variable’s value by 1. Works like increment.
javascript

let a = 5;
console.log(a--); // Output: 5 (returns value before decrement)
console.log(a);   // Output: 4

let b = 5;
console.log(--b); // Output: 4 (decrements first, then returns)
console.log(b);   // Output: 4

Key Points About Modulo and Arithmetic Operators
Type Coercion: Most operators (except + with strings) attempt to convert operands to numbers.

Order of Operations: Follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction).

Modulo Edge Cases: Watch for negative numbers and zero divisors (x % 0 returns NaN).

javascript

console.log(5 + 3 * 2); // Output: 11 (multiplication first: 3 * 2 = 6, then 5 + 6)
console.log((5 + 3) * 2); // Output: 16 (parentheses first: 5 + 3 = 8, then 8 * 2)
console.log(10 % 0); // Output: NaN (undefined remainder)



Summary
Arithmetic operators (+, -, *, /, **) handle basic math.
Modulo (%) gives the remainder, useful for patterns and checks.
Increment (++) and decrement (--) modify values efficiently.




Category	        Methods & Operators
Basic Arithmetic	+, -, *, /, %, **
Rounding Methods	Math.round(), Math.floor(), Math.ceil(), Math.trunc()
Power & Root	    Math.pow(), Math.sqrt()
Random Numbers	    Math.random(), Math.floor(Math.random() * range)
Trigonometry	    Math.sin(), Math.cos(), Math.tan()
Logarithms	        Math.log(), Math.log10()
Constants	        Math.PI, Math.E

*/