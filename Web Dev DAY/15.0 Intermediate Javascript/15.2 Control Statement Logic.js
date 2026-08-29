// Control Statements in JavaScript


// challenge1
// Building a Love Calculator

// let your = prompt(`What is your name?`)
// let there = prompt(`What is there name?`)
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // +1 because of it goes upto 100
// alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
console.log(loveScore);



// challenge2

// let your = prompt(`What is your name?`);
// let there = prompt(`What is there name?`);
// let loveScore2 = Math.random() * 100;
// loveScore2 = Math.floor(loveScore2) + 1; // +1 because of it goes upto 100
// if (loveScore === 100){
//     alert(`Hi ${your} and ${there}: Your love score is ${loveScore}% you love each ether very much`)
// } else {
//     alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
// }
// console.log(loveScore);



// challenge3

// let your = prompt(`What is your name?`);
// let there = prompt(`What is there name?`);
// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1; // +1 because of it goes upto 100

// if (loveScore > 70){
//     alert(`Hi ${your} and ${there}: Your love score is ${loveScore}% you love each ether very much`)
// } else {
//     alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
// }
// console.log(loveScore);







/*
Control Statements in JavaScript

Control statements in JavaScript determine the flow of execution of the program. They help in decision-making, looping, and altering the flow based on conditions. Control statements are categorized into:

	1.	Conditional Statements (Decision Making)
	•	if
	•	if...else
	•	if...else if...else
	•	switch

	2.	Looping Statements
	•	for
	•	while
	•	do...while
	•	for...in
	•	for...of
  
	3.	Jump Statements
	•	break
	•	continue
	•	return

  */


// 1. Conditional Statements
// a) if Statement
// The if statement executes a block of code only if the specified condition is true.

//Example:
const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
//Output:
// You are eligible to vote.

// b) if…else Statement
// The if...else statement executes one block of code if the condition is true, otherwise, it executes another block.

//Example:
let number = 10;
if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//Output:
// Even Number

// c) if…else if…else Statement
// This statement checks multiple conditions sequentially and executes the block of the first true condition.

//Example:
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Fail");
}

//Output:
// Grade: A

// d) switch Statement
// The switch statement executes different blocks of code based on the value of a variable.

// Example:
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Output:
// Wednesday



// 2. Looping Statements

// a) for Loop
// A for loop is used when the number of iterations is known.
// Example:

for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}

// Output:
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
// Iteration: 5

// b) while Loop
// A while loop runs as long as the given condition is true.
// Example:

let i = 1;
while (i <= 3) {
    console.log("Count: " + i);
    i++;
}

// Output:
// Count: 1
// Count: 2
// Count: 3

// c) do…while Loop
// A do...while loop ensures that the code executes at least once before checking the condition.

// Example:
let j = 1;
do {
    console.log("Value: " + j);
    j++;
} while (j <= 3);

// Output:
// Value: 1
// Value: 2
// Value: 3

// d) for…in Loop
// The for...in loop iterates over object properties.

// Example:
let student = { name: "John", age: 22, grade: "A" };
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Output:
// name: John
// age: 22
// grade: A

// e) for…of Loop
// The for...of loop iterates over iterable objects like arrays.

// Example:
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// Output:
// Red
// Green
// Blue

// 3. Jump Statements

// a) break Statement

// The break statement exits the loop prematurely.

// Example:

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// Output:
// 1
// 2

// b) continue Statement
// The continue statement skips the current iteration and moves to the next.

// Example:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// c) return Statement
// The return statement is used to exit a function and return a value.

// Example:
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// Output:
// 8

// Conclusion
// Control statements in JavaScript help in decision-making, executing loops, and altering the flow of execution. Understanding them is crucial for writing efficient programs. 🚀.
