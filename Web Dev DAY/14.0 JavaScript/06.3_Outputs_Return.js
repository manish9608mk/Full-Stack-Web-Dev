//  Functions Part 3: Outputs & Return Values(please understand it)

Example:
function square(number) {
    return number * number;
}
let answer = square(5);
console.log(answer);  //25

Example:
function add (a,b){
    return a+b
}
let ans = add (add(70,20), add(6,4));
console.log(ans);  //100

Example:
function subtract(x,y){
    return x-y;
}
let subResult = subtract(100, 50+10); 
console.log(subResult); //50

Eample:
function greet1(name) {
    return "Hello, " + name;
}
let message = greet1("Alice");  
console.log(message);   //output: Hello, Alice

Example:
// Combining Both in One Function (return and output)

function processNumber(num) {
    console.log("Processing:", num); // Output syntax
    return num * 2;                  // Return syntax
}
let doubled = processNumber(10);
console.log("Doubled value:", doubled);

Example:
function getMilk(money){
    return money % 1.5; 
}
// console.log(getMilk(4));
// or, 

var changeMoney = getMilk(4);
console.log(changeMoney);


Example:
function getMilkBottle(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
  
    let noOfBottels = Math.floor(money / 1.5);  //price per bottle 1.5
    console.log("buy " + noOfBottels + " bottles of Milk");  
  
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse_robo");

    return money % 1.5;     // remainder of this division = 1
  }
  
  let change = getMilkBottle(4);
  console.log(change);



//   function calBottles(startingMoney, costPerBottle){
//     let noOfBottles = Math.floor(startingMoney / costPerBottle);
//   }
//   return noOfBottels;










// chatGPT notes

// Outputs & Return Values in JavaScript
/*
In JavaScript, outputs and return values are used to display results or pass data between functions. Let’s explore their differences and uses.
*/
/*
1. Console Output (console.log)
	•	console.log() is used to print values to the console.
	•	It does not return a value—it’s only for debugging.
Example: */
  function greet(name) {
    console.log("Hello, " + name);
  }
greet("Murph");  // output: Hello, Alice

// ✅ No return value—it only prints to the console.

/*
2. Return Values (return)
	•	The return statement sends a value from a function.
	•	The function stops executing after return.
	•	The returned value can be stored in a variable.

Example: */

function add(a, b) {
    return a + b;  // Returns the sum
}
let result = add(5, 3);
console.log(result); // Output: 8

// ✅ Has a return value (8), which is stored in result.

/*
3. Difference Between console.log and return

Feature	          console.log()	                      return
Purpose      	    Displays output in the console	  Passes data from a function
Returns Value?	    ❌ No	                          ✅ Yes
Can Be Stored?  	❌ No	                          ✅ Yes
Execution Stops?	❌ No
*/

// Example Demonstrating the Difference

function testLog() {
    console.log("This is a log");
}

function testReturn() {
    return "This is a return";
}
let logResult = testLog();   // Will print but return undefined
let returnResult = testReturn(); // Will return value

console.log(logResult);   // undefined
console.log(returnResult); // "This is a return"

// Output:
// This is a log
// undefined
// This is a return

/*
🚀 Key Takeaway:
	•	console.log() just prints, but doesn’t return a value.
	•	return sends a value that can be stored and used.
*/

/*
4. Returning Multiple Values
You can return multiple values using an array or object. */

// Example 1: Returning an Array
function calculate(num) {
    return [num, num * 2, num * 3];
}
let [a, b, c] = calculate(4);
console.log(a, b, c); // Output: 4 8 12

// Example 2: Returning an Object
function getUser() {
    return { name: "John", age: 30 };
}
let user = getUser();
console.log(user.name, user.age); // Output: John 30


// 5. Functions Without return Return undefined
// If a function does not return a value, it returns undefined by default.

function noReturn() {
    let x = 10;  // No return statement
}
console.log(noReturn()); // Output: undefined


// 6. Returning Functions (Higher-Order Functions)
// A function can return another function.

function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
let double = multiplier(2);
console.log(double(5)); // Output: 10

// 🔹 multiplier(2) returns a function that doubles any input.


// 7. Short-Circuiting with return
// return exits a function early, preventing further execution.

Example:
function checkAge(age) {
    if (age < 18) {
        return "Underage";
    }
    return "Adult";
}
console.log(checkAge(16)); // Output: Underage
console.log(checkAge(21)); // Output: Adult

// 🔹 As soon as return executes, the function stops.

/*
Conclusion:
  Concept	                       Explanation
console.log()       	         Prints to the console, no return value
return	                         Returns a value, stops function execution
Functions without return	     Return undefined
Returning multiple value     	 Use arrays or objects
Higher-order functions	         Can return functions

🚀 Use console.log() for debugging and return when you need a value from a function!
*/






