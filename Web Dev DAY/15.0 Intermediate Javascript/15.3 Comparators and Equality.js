// Comparators and Equality in JavaScript

// big difference between === and ==
// example1

let a = 2;
let b = `2`;
console.log(typeof(a)); 
console.log(typeof(b));

// ===
if (a === b){
  console.log(`yes`);
} else{
  console.log(`no`);
}
// ==
if (a == b){
  console.log(`yes`);
} else{
  console.log(`no`);
}
// kkb: both === and == sign are using check for equality but, === are also checking a data types whereas == doesnot care about the data types 




// example2

let your = prompt(`What is your name?`);
let there = prompt(`What is there name?`);
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // +1 because of it goes upto 100

if (loveScore > 70 ){
    alert(`Hi ${your} and ${there}: Your love score is ${loveScore}% you love each ether very much`)
} else {
    alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
}
console.log(loveScore);
















// In JavaScript, comparators and equality operators are used to compare values, determining their relationship (e.g., greater than, equal to) or whether they are the same. These operators return a boolean (true or false) and are fundamental to control statements and logical operations.

// Types of Operators

// Comparison Operators: <, >, <=, >=
// Equality Operators: ==, != (loose), ===, !== (strict)


/*
Control Statements and Logic in JavaScript

Control statements determine the flow of a program—whether code executes, how many times it runs, or which path it follows. Logic in JavaScript involves evaluating conditions using logical operators (&&, ||, !, etc.) and comparison operators (==, ===, <, >, etc.) to make decisions within these control structures.

Logical Operators
Logical operators are used to combine or modify conditions:

&& (AND) - True if both conditions are true
|| (OR) - True if at least one condition is true
! (NOT) - Inverts the truth value

Comparison Operators
These compare values and return true/false:

== (Equal to, loose comparison)
=== (Strict equal, checks value and type)
!= (Not equal, loose)
!== (Strict not equal)
<, >, <=, >= (Less than, greater than, etc.)
*/

