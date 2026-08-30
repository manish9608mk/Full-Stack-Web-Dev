
// chatGPT notes

//01. Basic Function Declaration (Traditional Method)
// A simple function using the function keyword.
function add2Numbers (){
  console.log(300+400);
}
add2Numbers()


function add(x,y){
  return x+y
}
 console.log( add(2,4));



//02. Function Expression
// A function stored in a variable.
let = function (x, y){
  return x +y
}
console.log(add(5,5));  



//03. Arrow Functions (ES6)
// A concise way to write functions.
let multiply = (a,b) => a*b;
console.log(multiply(9,9));



//04. Anonymous Function
// An unnamed function used for specific operations.
let divide = (function(a,b){
  return a/b
}) (40,20)
console.log(divide);




//05. Immediately Invoked Function Expression (IIFE)
// A function that executes immediately after being defined.
(function(a,b){
console.log(a+b);
}) (50,40);




//06.  Function with Default Parameters
// Providing default values if parameters are missing.
function add(a=0, b=0){
  return a+b;
}
console.log(6); // Uses default value for b
console.log(add(6,6)); 




//07. Using arguments Object (For Older JS Versions)
// Handles multiple parameters dynamically.
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 50)); 




//08. Using rest Operator (Modern Approach)
// A modern way to handle multiple inputs. like adding multiple items in cart 
function add(...numbers){
  // ... (this 3 dots are called as rest operator)
  return numbers.reduce((acc, num) => acc + num, 0 );
}
console.log(add(2,3,4,5));




//09. Higher-Order Function (Returning a Function)
// A function that returns another function.

// function add(x){
//   return function(y){
//     return x+y;
//   };
// }
// const addfive = add(5);
// console.log(addfive(20));

// is code wajah se output [Function (anonymous)] aa raha hai because If your output is [Function (anonymous)], it means that somewhere in your code, you are logging the function itself instead of calling it.





//10. Callback Function
// Passing a function as an argument.
// A callback function is a function that is passed as an argument to another function and is executed later inside that function. Callbacks are commonly used in JavaScript for handling asynchronous operations, event handling, and functional programming.

function calculate(a,b, callback){
  return callback(a,b);
}
const sum = (x,y) => x + y;
console.log(calculate(20, 30, sum));

//call back function woh hota hai jab ham kisi function ko call karte hain ussi time ek function aur bana dete hain and issi function ko callback bolte hain 
Example:
function mahi(){
  console.log(`cricket`);
}
mahi(
  function dhoni(){
    console.log(`ipl`);
  }
);



//11. Promise-Based Function (Asynchronous Addition)
// Using Promise to simulate asynchronous addition.
function addAsync(a,b){
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve(a+b);
    },2000);
  });
}
addAsync(3,7).then(console.log); //Output (After 2 second)




//12. Async/Await with Addition
// Using modern async/await syntax.

async function addAsync(a, b) {
  return new Promise(resolve => {
      setTimeout(() => resolve(a + b), 1000);
  });
}

(async () => {
  const result = await addAsync(5, 10);
  console.log(result);
})();  // Output (After 1 second):










/*
// function grok notes 

Let’s dive into functions in JavaScript! Functions are one of the fundamental building blocks in JavaScript, allowing you to encapsulate reusable code, perform tasks, and structure your programs effectively. I’ll explain what functions are, how they work, their syntax, different types, and provide detailed examples with code and outputs.

What is a Function in JavaScript?
A function is a block of code designed to perform a specific task. It can take inputs (called parameters), process them, and optionally return an output. Functions help you avoid repetition, make code modular, and improve readability.

Functions in JavaScript can be:
Named: Defined with a name for later use.

Anonymous: Defined without a name, often used as callbacks or immediately invoked.

Arrow Functions: A concise syntax introduced in ES6 (2015).

1. Function Declaration
The most common way to define a function is using the function keyword.
Syntax:
javascript

function functionName(parameter1, parameter2) {
    // Code to execute
    return result; // Optional
}

functionName: The name you give the function (used to call it later).
parameter1, parameter2: Inputs the function can accept (optional).
return: Specifies the value the function outputs (optional; if omitted, it returns undefined).

Example 1: Basic Function
javascript

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

Output:
Hello, Alice!

Explanation:
The function greet takes a parameter name.
It concatenates "Hello, " with the name and an exclamation mark.
console.log calls the function with "Alice" and prints the result.

2. Function Expression
A function can also be assigned to a variable. This is called a function expression, and it can be anonymous.
Syntax:
javascript

const functionName = function(parameter1, parameter2) {
    // Code to execute
    return result;
};

Example 2: Function Expression
javascript

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3));

Output:
15

Explanation:
multiply is a variable holding an anonymous function.
The function takes two parameters, a and b, and returns their product.
Calling multiply(5, 3) computes 5 * 3.

Key Difference from Declaration:
Function declarations are hoisted (can be called before they’re defined in code), while function expressions are not.

3. Arrow Functions (ES6)
Arrow functions provide a shorter syntax and have a different behavior with this (lexical binding).
Syntax:
javascript

const functionName = (parameter1, parameter2) => {
    // Code to execute
    return result;
};

If there’s only one parameter, parentheses are optional.
If the function body is a single expression, curly braces and return can be omitted.

Example 3: Arrow Function
javascript

const add = (x, y) => x + y;

console.log(add(4, 6));

Output:
10

Explanation:
add is an arrow function that takes x and y and returns their sum.
Since it’s a single expression, we omit {} and return.

Example 4: Arrow Function with Multiple Lines
javascript

const describe = (name, age) => {
    let message = name + " is " + age + " years old.";
    return message;
};
console.log(describe("Bob", 25));

Output:
Bob is 25 years old.

4. Default Parameters
You can assign default values to parameters if no argument is provided.
Example 5: Default Parameters
javascript

function welcome(user = "Guest") {
    return "Welcome, " + user + "!";
}
console.log(welcome());         // No argument
console.log(welcome("Charlie")); // With argument

Output:
Welcome, Guest!
Welcome, Charlie!

Explanation:
If welcome is called without an argument, user defaults to "Guest".
If an argument is provided, it overrides the default.

5. Returning Values
Functions can return values using the return statement. If no return is specified, the function returns undefined.
Example 6: Returning Values
javascript

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

console.log(divide(10, 2));
console.log(divide(5, 0));

Output:
5
Error: Division by zero!

Explanation:
The function checks if b is zero to avoid division errors.
It returns either the quotient or an error message.

6. Immediately Invoked Function Expression (IIFE)
An IIFE is a function that runs as soon as it’s defined.
Example 7: IIFE
javascript

(function() {
    console.log("This runs immediately!");
})();

Output:
This runs immediately!

Explanation:
The function is wrapped in parentheses and followed by () to execute it instantly.
Useful for initializing code or avoiding global variable pollution.

7. Functions as Arguments (Higher-Order Functions)
Functions can be passed as arguments to other functions.
Example 8: Higher-Order Function
javascript

function applyOperation(x, y, operation) {
    return operation(x, y);
}
const subtract = (a, b) => a - b;
console.log(applyOperation(10, 4, subtract));

Output:
6

Explanation:
applyOperation takes two numbers and a function (operation).
It applies the operation (here, subtract) to the numbers.

8. Scope and Closures
Functions have their own scope, and inner functions can access outer function variables (closures).
Example 9: Closure
javascript

function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

Output:
1
2

Explanation:
counter returns an inner function that increments count.
count persists in memory due to closure, so each call to increment increases it.

Summary
Function Declaration: function name() {} – Hoisted, reusable.
Function Expression: const name = function() {} – Assigned to variables.
Arrow Functions: () => {} – Concise, lexical this.
Default Parameters: Set fallback values.
Return: Outputs a value; otherwise, undefined.
IIFE: Runs immediately.
Higher-Order Functions: Accept functions as arguments.
Closures: Inner functions retain access to outer scope.


*/