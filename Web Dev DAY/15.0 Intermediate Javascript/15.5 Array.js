// Collections: Working with Javascript Arrays

// ex1
// let animal = ["whale", "dog", "cat", "cow", "monkey",3,4];

// console.log(animal);
// console.log(animal.length);
// console.log(animal[4]);

// let has4 = animal.includes(4); //boolean
// console.log(has4);

// console.log(animal.push("Mahi"));
// console.log(animal);

// console.log(animal.pop());
// console.log(animal);






// challenge: guestList 

// let name = prompt("what is your name?")
// let guestList = ["manish", "elon", "steve", "murph", "hannah"]
// if(guestList.includes(name)){
//     alert("welcome")
// } else{
//     alert("sorry, may be next time")
// }



// jokes: why did programmer quit a job. because he didn,t get arrays



// Adding Elements and Intermediate Array Techniques
// challenge (FizzBizz)
/*
Problem Statement

Print numbers from 1 to N, but:
	•	If a number is divisible by 3, print "Fizz".
	•	If a number is divisible by 5, print "Buzz".
	•	If a number is divisible by both 3 and 5, print "FizzBuzz".
	•	Otherwise, print the number itself.
*/
// step-1-run in console
// let output = [];
// let count =1;

// function fizzBuzz(){

//     // code
//     output.push(count);
//     // count= count +1;
//     count++;

    
//     console.log(output);
// }
// fizzBuzz();

// step-2 run in console call function again and again 
let output = [];
let count =1;

function fizzBuzz(){

    // fizzBuzz problem statement solution
    if ( (count % 3 ===0) && (count % 5===0) ){
        output.push("fizzBuzz")
    } else if (count % 3 ===0) {
        output.push("fizz")
    } else if (count % 5 ===0){
        output.push("Buzz")
    } else {
        output.push(count)
    }

    count++
    
   console.log(output)
}
// fizzBuzz();














// ALL IN ONE EXAMPLE

// // === Array Creation ===
// let numbers = [1, 2, 3, 4, 5];                       // Literal syntax
// let constructorArray = new Array(1, 2, 3);           // Constructor syntax
// let mixedArray = [1, "text", true, { x: 10 }];       // Mixed types
// let emptyArray = [];                                 // Empty array
// let sizedArray = new Array(3);                       // Pre-sized array

// // === Basic Properties ===
// console.log("=== Basic Properties ===");
// console.log("Length:", numbers.length);              // 5
// console.log("Constructor:", numbers.constructor);    // [Function: Array]
// console.log("Prototype:", numbers.__proto__);        // Array prototype

// // === Adding Elements ===
// console.log("\n=== Adding Elements ===");
// numbers.push(6);                                     // Add to end
// console.log("Push:", numbers);                       // [1, 2, 3, 4, 5, 6]
// numbers.unshift(0);                                  // Add to start
// console.log("Unshift:", numbers);                    // [0, 1, 2, 3, 4, 5, 6]
// numbers.splice(2, 0, 2.5);                           // Insert at index
// console.log("Splice insert:", numbers);              // [0, 1, 2.5, 2, 3, 4, 5, 6]

// // === Removing Elements ===
// console.log("\n=== Removing Elements ===");
// let popped = numbers.pop();                          // Remove last
// console.log("Pop:", popped, "Array:", numbers);      // 6, [0, 1, 2.5, 2, 3, 4, 5]
// let shifted = numbers.shift();                       // Remove first
// console.log("Shift:", shifted, "Array:", numbers);   // 0, [1, 2.5, 2, 3, 4, 5]
// let spliced = numbers.splice(1, 2);                  // Remove at index
// console.log("Splice remove:", spliced, "Array:", numbers); // [2.5, 2], [1, 3, 4, 5]

// // === Searching/Finding ===
// console.log("\n=== Searching/Finding ===");
// console.log("Includes 3:", numbers.includes(3));     // true
// console.log("IndexOf 3:", numbers.indexOf(3));       // 1
// console.log("LastIndexOf 4:", numbers.lastIndexOf(4)); // 2
// console.log("Find > 3:", numbers.find(x => x > 3));  // 4
// console.log("FindIndex > 3:", numbers.findIndex(x => x > 3)); // 2
// console.log("Filter > 2:", numbers.filter(x => x > 2)); // [3, 4, 5]

// // === Transforming ===
// console.log("\n=== Transforming ===");
// let mapped = numbers.map(x => x * 2);                // Transform each
// console.log("Map:", mapped);                         // [2, 6, 8, 10]
// let reduced = numbers.reduce((a, b) => a + b, 0);    // Sum all
// console.log("Reduce:", reduced);                     // 13
// let reducedRight = numbers.reduceRight((a, b) => a + b, 0); // Right to left
// console.log("ReduceRight:", reducedRight);           // 13
// numbers.reverse();                                   // Reverse order
// console.log("Reverse:", numbers);                    // [5, 4, 3, 1]
// let sorted = numbers.sort((a, b) => a - b);          // Sort ascending
// console.log("Sort:", sorted);                        // [1, 3, 4, 5]

// // === Iteration ===
// console.log("\n=== Iteration ===");
// numbers.forEach((item, i) => console.log(`Item ${i}: ${item}`)); // Loop each
// console.log("Every > 0:", numbers.every(x => x > 0)); // true
// console.log("Some > 3:", numbers.some(x => x > 3));  // true

// // === Conversion ===
// console.log("\n=== Conversion ===");
// console.log("Join:", numbers.join("-"));             // "1-3-4-5"
// console.log("ToString:", numbers.toString());        // "1,3,4,5"
// console.log("ToLocaleString:", numbers.toLocaleString()); // "1,3,4,5"

// // === Copying/Combining ===
// console.log("\n=== Copying/Combining ===");
// let sliced = numbers.slice(1, 3);                    // Extract portion
// console.log("Slice:", sliced);                       // [3, 4]
// let concated = numbers.concat([6, 7]);               // Join arrays
// console.log("Concat:", concated);                    // [1, 3, 4, 5, 6, 7]
// let spreadCopy = [...numbers];                       // Copy with spread
// console.log("Spread copy:", spreadCopy);             // [1, 3, 4, 5]
// let spreadCombine = [...numbers, ...[6, 7]];         // Combine with spread
// console.log("Spread combine:", spreadCombine);       // [1, 3, 4, 5, 6, 7]

// // === Special Methods ===
// console.log("\n=== Special Methods ===");
// let nested = [1, [2, 3], [4, [5]]];
// console.log("Flat:", nested.flat(2));                // [1, 2, 3, 4, 5]
// let filled = [1, 2, 3];
// filled.fill(0, 1);                                   // Fill with value
// console.log("Fill:", filled);                        // [1, 0, 0]

// // === Iterators ===
// console.log("\n=== Iterators ===");
// console.log("Entries:", [...numbers.entries()]);     // [[0,1], [1,3], [2,4], [3,5]]
// console.log("Keys:", [...numbers.keys()]);           // [0, 1, 2, 3]
// console.log("Values:", [...numbers.values()]);       // [1, 3, 4, 5]

// // === Static Methods ===
// console.log("\n=== Static Methods ===");
// console.log("IsArray:", Array.isArray(numbers));     // true
// console.log("From:", Array.from("abc"));             // ["a", "b", "c"]
// console.log("Of:", Array.of(1, 2, 3));               // [1, 2, 3]

// // === Property Manipulation ===
// console.log("\n=== Property Manipulation ===");
// numbers.length = 2;                                  // Truncate array
// console.log("Truncated:", numbers);                  // [1, 3]
// numbers.length = 4;                                  // Extend (adds undefined)
// console.log("Extended:", numbers);                   // [1, 3, undefined, undefined]

// // === Accessing Elements ===
// console.log("\n=== Accessing ===");
// console.log("First element:", numbers[0]);           // 1
// console.log("Last element:", numbers[numbers.length - 1]); // undefined
// numbers[2] = 5;                                      // Set by index
// console.log("After set:", numbers);                  // [1, 3, 5, undefined]







// all in one ex2
/*
// ✅ 1. Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];
let numbers = new Array(10, 20, 30);
let emptyArray = new Array(5);  // Creates empty array with 5 slots
let mixedArray = ["Hello", 42, true, { key: "value" }];

// ✅ 2. Accessing Elements
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// ✅ 3. Modifying Elements
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// ✅ 4. Adding & Removing Elements
fruits.push("Grapes");  // Add at end
fruits.pop();           // Remove last element
fruits.unshift("Kiwi"); // Add at beginning
fruits.shift();         // Remove first element

// ✅ 5. Searching in Arrays
console.log(fruits.includes("Mango"));  // true
console.log(fruits.indexOf("Mango"));   // 1
console.log(fruits.find(fruit => fruit.startsWith("O")));  // "Orange"

// ✅ 6. Iterating Over Arrays
fruits.forEach((fruit, index) => console.log(index, fruit));
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
let sum = numbers.reduce((total, num) => total + num, 0);

// ✅ 7. Sorting & Reversing
fruits.sort();  // Alphabetical sorting
numbers.sort((a, b) => a - b); // Ascending order
numbers.sort((a, b) => b - a); // Descending order
fruits.reverse(); // Reverse order

// ✅ 8. Slicing & Splicing
let citrus = fruits.slice(1, 3); // Extracts elements
fruits.splice(1, 1, "Peach", "Berry"); // Removes 1 element at index 1, adds Peach & Berry

// ✅ 9. Joining & Splitting
let fruitString = fruits.join(", "); // Convert array to string
let newArray = fruitString.split(", "); // Convert string back to array

// ✅ 10. Using Spread Operator & Concat
let moreFruits = [...fruits, "Guava", "Papaya"];
let combined = fruits.concat(["Berry", "Guava"]);

// ✅ 11. Multidimensional Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// ✅ 12. Destructuring Arrays
let [first, second, ...rest] = fruits;

// ✅ 13. Checking if Variable is an Array
console.log(Array.isArray(fruits)); // true

// ✅ 14. Flattening Arrays
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);

// ✅ 15. Other Useful Methods
let filledArray = new Array(5).fill(0);
console.log(numbers.some(num => num > 50)); // Checks if any number > 50
console.log(numbers.every(num => num > 0)); // Checks if all numbers > 0
console.log(numbers.find(num => num > 15)); // Find first number > 15
console.log(numbers.findIndex(num => num > 15)); // Index of first number > 15

// ✅ 16. Entries, Keys & Values
for (let [index, value] of fruits.entries()) {
    console.log(index, value);
}
for (let key of fruits.keys()) {
    console.log(key);
}
for (let value of fruits.values()) {
    console.log(value);
}
*/



/*

Let's explore working with JavaScript arrays! Arrays are fundamental data structures in JavaScript used to store multiple values in a single variable. I'll cover the basics and some common operations.

Basic Array Creation:
// Empty array
let emptyArray = [];

// Array with values
let fruits = ['apple', 'banana', 'orange'];

// Array with mixed types
let mixed = [1, "hello", true, 42.5];
Common Array Methods:


Adding Elements:
let numbers = [1, 2, 3];

// Add to end
numbers.push(4);         // [1, 2, 3, 4]

// Add to beginning
numbers.unshift(0);      // [0, 1, 2, 3, 4]

// Add at specific index
numbers.splice(2, 0, 1.5); // [0, 1, 1.5, 2, 3, 4]


Removing Elements:
let colors = ['red', 'blue', 'green'];

// Remove from end
colors.pop();          // returns 'green', array is ['red', 'blue']

// Remove from beginning
colors.shift();        // returns 'red', array is ['blue']

// Remove at specific index
colors.splice(1, 1);   // removes 1 element at index 1


Finding and Filtering:
let numbers = [1, 2, 3, 4, 5];

// Find first match
let found = numbers.find(num => num > 3);     // returns 4

// Filter array
let even = numbers.filter(num => num % 2 === 0); // [2, 4]

// Check if element exists
let hasThree = numbers.includes(3);           // true


Transforming Arrays:
let numbers = [1, 2, 3];

// Map (transform each element)
let doubled = numbers.map(num => num * 2);    // [2, 4, 6]

// Reduce (combine into single value)
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6

// Sort
let unsorted = [3, 1, 4, 2];
unsorted.sort((a, b) => a - b);              // [1, 2, 3, 4]


Looping Through Arrays:
let fruits = ['apple', 'banana', 'orange'];

// Classic for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// ForEach
fruits.forEach(fruit => console.log(fruit));

// For...of
for (let fruit of fruits) {
    console.log(fruit);
}


Useful Properties:
let arr = [1, 2, 3];
console.log(arr.length);    // 3
arr.length = 2;            // truncates array to [1, 2]
Spread Operator:
javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1];      // creates a copy
let combined = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
Would you like me to elaborate on any of these methods or show you some practical examples of array manipulation in JavaScript?


*/


