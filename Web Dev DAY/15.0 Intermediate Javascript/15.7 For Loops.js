//  Control Statements: For Loops

console.log("..........ex1.........");
// ex1
for(i=0; i<6; i++) {
  console.log(i);
}

console.log("........ex2...........");
// ex2
for(i=5; i>0; i--){
  console.log(i);
}


console.log("........ex3...........");
console.log("........usingWhileLoop...........");
// ex3 fizzBuzz using for loop 

// using while loops
let output = [];
let count = 1;
function fizzBuzzUsingWhile(){
while (count<=50){
if (count % 3 ===0 && count % 5 ===0){
    output.push("FizzBuzz");
} else if (count % 3 ===0){
    output.push("Fizz");
} else if (count % 5 ==0){
    output.push("buzz");
} else{
    output.push(count);
}
count++;
}
console.log(output);
}
// fizzBuzzUsingWhile();


console.log("........usingForLoop...........");
// using for loops

function fizzBuzzUsingForLoop(){
    let output = [];
    // let count = 1;
    
    for (let count=1; count<=50; count++){ 
    if (count % 3 ===0 && count % 5 ===0){
        output.push("FizzBuzz");
    } else if (count % 3 ===0){
        output.push("Fizz");
    } else if (count % 5 ==0){
        output.push("buzz");
    } else{
        output.push(count);
    }
    // count++;
    }
    console.log(output);
    }
// fizzBuzzUsingForLoop();
    

// same thing but opposite code in for()
console.log("........reverse output condition forLoop...........");

function fizzBuzzUsingForLoopReverse(){
    let output = [];
    // let count = 1;
    
    for (let count = 5; count > 1; count--){ 
    if (count % 3 ===0 && count % 5 ===0){
        output.push("FizzBuzz");
    } else if (count % 3 ===0){
        output.push("Fizz");
    } else if (count % 5 ==0){
        output.push("buzz");
    } else{
        output.push(count);
    }
    // count++;
    }
    console.log(output);
    }
// fizzBuzzUsingForLoopReverse();








/*
Understanding the for Loop in JavaScript

A for loop in JavaScript is a control flow statement that allows you to execute a block of code multiple times. It is commonly used when the number of iterations is known beforehand.

Syntax of the for Loop

for (initialization; condition; increment/decrement) {
    // Code to be executed in each iteration
}

Breakdown of Components:
	1.	Initialization – This is executed once before the loop starts. It is typically used to declare and initialize a loop variable.
	2.	Condition – Before each iteration, this condition is checked. If true, the loop continues; if false, the loop stops.
	3.	Increment/Decrement – After each iteration, this statement updates the loop variable.

Example 1: Basic for Loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration number:", i);
}

Explanation:
	•	let i = 0; → Initialization: i starts at 0.
	•	i < 5; → Condition: The loop runs while i is less than 5.
	•	i++ → Increment: i increases by 1 after each iteration.

Output:

Iteration number: 0
Iteration number: 1
Iteration number: 2
Iteration number: 3
Iteration number: 4

Example 2: Looping Through an Array

let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

Output:

Apple
Banana
Cherry

Example 3: Loop with Decrement

for (let i = 5; i > 0; i--) {
    console.log(i);
}

Output:

5
4
3
2
1

Example 4: Using break in a for Loop

The break statement is used to exit the loop early.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break;
    }
    console.log(i);
}

Output:

0
1
2
3
4
Breaking the loop at i = 5

Example 5: Using continue in a for Loop

The continue statement skips the current iteration and moves to the next one.

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping iteration:", i);
        continue;
    }
    console.log(i);
}

Output:

0
1
Skipping iteration: 2
3
4

Example 6: Nested for Loop

A for loop inside another for loop is called a nested loop.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

Output:

i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
i=2, j=2
i=2, j=3
i=3, j=1
i=3, j=2
i=3, j=3

Example 7: Looping Backwards

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

Output:

10
9
8
7
6
5
4
3
2
1

Example 8: Looping Through an Object Using for...in

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

Output:

name: John
age: 30
city: New York

Example 9: Looping Through an Array Using for...of

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}

Output:

Red
Green
Blue

When to Use a for Loop?
	•	When the number of iterations is known.
	•	When you need to iterate through an array or object properties.
	•	When performing calculations multiple times.


Main Differences in JavaScript
Syntax:
for: All loop logic (start, condition, update) is in the parentheses.
while: Only the condition is in the parentheses; initialization and updates are separate.

Readability:
for: Cleaner for fixed iterations (e.g., array traversal).
while: Better for conditional looping where the end isn’t tied to a counter.

Flexibility:
for: Less flexible, suited for predictable loops.
while: More flexible, suited for unpredictable or condition-driven loo

Conclusion

The for loop is a powerful tool in JavaScript for repetitive tasks. By understanding its different forms (basic, nested, looping through objects/arrays, and using break/continue), you can efficiently control program flow.

😊
*/