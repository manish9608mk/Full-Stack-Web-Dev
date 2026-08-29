//from grok ai

/* Data Types in JavaScript
JavaScript has two categories of data types: Primitive and Non-Primitive (Reference).
Primitive Data Types
These are immutable (cannot be changed) and stored directly in memory.
*/


/*
NUMBER
Represents both integer and floating-point numbers.

Special values: Infinity, -Infinity, NaN.
*/
let integer = 42;
let float = 3.14;
let infinity = 1 / 0;
let nan = "text" / 2;

console.log(integer); // Output: 42
console.log(float);   // Output: 3.14
console.log(infinity); // Output: Infinity
console.log(nan);     // Output: NaN
console.log(typeof integer); // Output: "number"

/*
STRING
Represents a sequence of characters, enclosed in single ('), double ("), or backticks (`).

Backticks allow template literals with ${}.
*/
let single = 'Hello';
let double = "World";
let template = `Hi, ${single} ${double}!`;

console.log(single);   // Output: Hello
console.log(double);   // Output: World
console.log(template); // Output: Hi, Hello World!
console.log(typeof single); // Output: "string"

/*
Boolean
Represents true or false.
*/
let isActive = true;
let isDone = false;

console.log(isActive); // Output: true
console.log(isDone);   // Output: false
console.log(typeof isActive); // Output: "boolean"

/* 
Undefined
A variable that has been declared but not assigned a value.
*/
let x;
console.log(x); // Output: undefined
console.log(typeof x); // Output: "undefined"

/*
Null
Represents the intentional absence of any value.
*/
let empty = null;
console.log(empty); // Output: null
console.log(typeof empty); // Output: "object" (historical JS bug)

/*
Symbol (Introduced in ES6)
Represents a unique identifier, often used as object property keys.
*/
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // Output: false (Symbols are unique)
console.log(typeof sym1);   // Output: "symbol"

/*
BigInt (Introduced in ES2020)
Represents large integers with arbitrary precision, created by appending n.
*/
let bigNum = 123456789012345678901234567890n;
console.log(bigNum); // Output: 123456789012345678901234567890n
console.log(typeof bigNum); // Output: "bigint"



/*
Non-Primitive (Reference) Data Types
These are mutable and stored as references in memory.
*/

/*
Object
A collection of key-value pairs.
*/
let user = {
  name: "Bob",
  age: 25,
  isStudent: false
};
console.log(user.name); // Output: Bob
console.log(user["age"]); // Output: 25
console.log(typeof user); // Output: "object"

// Modifying object
user.age = 26;
console.log(user.age); // Output: 26

/*
Array
An ordered list of values, technically an object.
*/
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers.length); // Output: 5
console.log(typeof numbers); // Output: "object"

// Modifying array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]


/*
Function
A reusable block of code, also an object.
*/
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(typeof greet);   // Output: "function"

/*
3. Type Checking with typeof
The typeof operator returns a string indicating the type of a value.
*/
console.log(typeof 42);          // Output: "number"
console.log(typeof "Hello");     // Output: "string"
console.log(typeof true);        // Output: "boolean"
console.log(typeof undefined);   // Output: "undefined"
console.log(typeof null);        // Output: "object" (quirk in JS)
console.log(typeof {});          // Output: "object"
console.log(typeof []);          // Output: "object"
console.log(typeof function(){}); // Output: "function"
console.log(typeof Symbol());    // Output: "symbol"
console.log(typeof 123n);        // Output: "bigint"

/*
4. Type Conversion
JavaScript automatically converts types (implicit coercion) or allows explicit conversion.
*/
//a. Implicit Conversion
let num = 5;
let str = "10";
console.log(num + str); // Output: "510" (number to string)
console.log(num * str); // Output: 50 (string to number

//b. Explicit Conversion
// String to Number
let strNum = "123";
console.log(Number(strNum)); // Output: 123
console.log(parseInt("123.45")); // Output: 123
console.log(parseFloat("123.45")); // Output: 123.45

// Number to String
let num2 = 456;
console.log(String(num2)); // Output: "456"
console.log(num2.toString()); // Output: "456"

// Boolean conversion
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("text")); // Output: true

