//Random Number Generation in Javascript: Building a Love Calculator


// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

// Note: Math.random() does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the Crypto.getRandomValues() method.

// syntax: Math.random()  //no parameters: NONE

// return value: A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

// mdn links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random




// ex1:
let n = Math.random();
console.log(n);


// ex2:
let n2 = Math.random()
n2 = n2 * 6    //like in dice game 
console.log(n2);   // number range between 0 to 599... but never reaches 6


// ex3:
let n3 = Math.random()
n3 = n3 * 6 
n3 = Math.floor(n3);   // round to nearest integer here no. range is 0 to 5
console.log(n3);   
//here number not reaches 6 so, what to do see below code 


// ex4:
let n4 = Math.random();
n4 = n4 * 6;
n4 = Math.floor(n4) + 1;   // just add 1 so, we reach 0 to 6 no.
console.log(n4);


// challenge:
// Building a Love Calculator

// let your = prompt(`What is your name?`)
// let there = prompt(`What is there name?`)
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // +1 because of it goes upto 100
// alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
console.log(loveScore)