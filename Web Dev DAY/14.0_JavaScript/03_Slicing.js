// slicing

// challenge 4 (tweetUnder140)
var tweet = prompt("Compose your tweet");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

//var tweetCount = tweet.length;
alert("You have wriiten " + tweet.length + " chracters out of 140, Still you have " + (140 - tweet.length) + " characters remaining.");


// or,
alert(prompt("compose your tweet").slice(0,140));









// from grok ai notes

/*
1. The slice() Method
The slice() method returns a shallow copy of a portion of an array or a substring of a string. It does not modify the original data—it’s non-destructive. The syntax is:
For Arrays: array.slice(start, end)

For Strings: string.slice(start, end)

Parameters:
start: The index where slicing begins (inclusive). If negative, it counts from the end.

end: The index where slicing ends (exclusive). Optional; if omitted, it slices to the end. If negative, it counts from the end.

Key Features:
Works on both arrays and strings.
Returns a new array or string.
Handles negative indices elegantly.

2. Slicing Arrays with slice()
Let’s start with arrays.
Example 1: Basic Slicing
javascript

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const sliced = fruits.slice(1, 4);

console.log(sliced);         // Output: ['banana', 'cherry', 'date']
console.log(fruits);         // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

start = 1: Begins at index 1 (banana).
end = 4: Ends before index 4 (elderberry is excluded).
Original array remains unchanged.

Example 2: Omitting end
javascript

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const sliced = fruits.slice(2);

console.log(sliced)
start = 2: Begins at index 2 (cherry).
No end: Slices to the end of the array.

Example 3: Negative Indices
javascript

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const sliced = fruits.slice(-3, -1);

console.log(sliced);         // Output: ['cherry', 'date']

start = -3: Third element from the end (cherry).
end = -1: One element from the end (excludes elderberry).

Example 4: Empty Slice
javascript

const fruits = ['apple', 'banana', 'cherry'];
const sliced = fruits.slice(5, 10);

console.log(sliced);         // Output: []

start = 5: Beyond array length (3), so nothing is included.
Returns an empty array.



3. Slicing Strings with slice()
Strings work similarly since they’re array-like in JavaScript.
Example 1: Basic String Slice
javascript

const text = "Hello, World!";
const sliced = text.slice(0, 5);

console.log(sliced);         // Output: "Hello"
console.log(text);           // Output: "Hello, World!"

start = 0: Begins at the first character (H).
end = 5: Ends before index 5 (excludes ,).

Example 2: Negative Indices
javascript

const text = "Hello, World!";
const sliced = text.slice(-6, -1);

console.log(sliced);         // Output: "World"

start = -6: Sixth character from the end (W).
end = -1: One character from the end (excludes !).

Example 3: Omitting end
javascript

const text = "Hello, World!";
const sliced = text.slice(7);

console.log(sliced);         // Output: "World!"

start = 7: Begins at index 7 (W).
No end: Slices to the end.



4. Comparison with substring()
The substring() method is string-specific and similar to slice(), but with key differences:
Syntax: string.substring(start, end)

Differences:
Negative indices: slice() supports them; substring() treats them as 0.
Swapped indices: If start > end, substring() swaps them; slice() returns an empty string.

Example: slice() vs substring()
javascript

const text = "Hello, World!";

// Using slice
console.log(text.slice(7, 12));      // Output: "World"
console.log(text.slice(12, 7));      // Output: "" (empty string)
console.log(text.slice(-6, -1));     // Output: "World"

// Using substring
console.log(text.substring(7, 12));  // Output: "World"
console.log(text.substring(12, 7));  // Output: "World" (swaps indices)
console.log(text.substring(-6, -1)); // Output: "Hello, World!" (negative treated as 0)

5. Edge Cases and Gotchas
Out-of-Bounds Indices:
javascript

const arr = [1, 2, 3];
console.log(arr.slice(10, 20));  // Output: []

If start is beyond the length, an empty array/string is returned.

Non-Integer Indices:
javascript

const text = "Hello";
console.log(text.slice(1.5, 3.7));  // Output: "el"

JavaScript floors the numbers (1.5 → 1, 3.7 → 3).

Undefined or Null:
javascript

const arr = [1, 2, 3];
console.log(arr.slice());           // Output: [1, 2, 3] (shallow copy)
console.log(arr.slice(undefined));  // Output: [1, 2, 3]

No arguments or undefined copies the entire array/string.

6. Practical Use Cases
Extracting Subarrays:
javascript

const numbers = [0, 1, 2, 3, 4, 5];
const middle = numbers.slice(2, 4);  // Output: [2, 3]

Cloning an Array:
javascript

const original = [1, 2, 3];
const clone = original.slice();      // Output: [1, 2, 3]

Trimming Strings:
javascript

const url = "https://example.com";
const domain = url.slice(8);         // Output: "example.com"

Summary
slice() is versatile for arrays and strings, non-destructive, and supports negative indices.
substring() is string-only, swaps indices if start > end, and treats negatives as 0.
Use slice() when you need flexibility; use substring() for simpler string tasks.

*/


// ARRAY

// // ex1
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const sliced = fruits.slice(1, 4);

// console.log(sliced); 
// console.log(fruits);



// // ex2
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const sliced = fruits.slice(2);

// console.log(sliced)



// // ex3
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// const sliced = fruits.slice(-3, -1);

// console.log(sliced);         // Output: ['cherry', 'date']



// // ex4
// const fruits = ['apple', 'banana', 'cherry'];
// const sliced = fruits.slice(5, 10);

// console.log(sliced);         // Output: []




// STRING


// // ex1
// const text = "Hello, World!";
// const sliced = text.slice(0, 5);

// console.log(sliced);         // Output: "Hello"
// console.log(text);           // Output: "Hello, World!"



// // ex2
// const text = "Hello, World!";
// const sliced = text.slice(-6, -1);

// console.log(sliced);         // Output: "World"
// console.log(text);           // Output: "Hello, World!"


// // ex3
// const text = "Hello, World!";
// const sliced = text.slice(7);

// console.log(sliced);         // Output: "World!"


// // ex4
// // Comparison with substring()

// const text = "Hello, World!";

// // Using slice
// console.log(text.slice(7, 12));      // Output: "World"
// console.log(text.slice(12, 7));      // Output: "" (empty string)
// console.log(text.slice(-6, -1));     // Output: "World"

// // Using substring
// console.log(text.substring(7, 12));  // Output: "World"
// console.log(text.substring(12, 7));  // Output: "World" (swaps indices)
// console.log(text.substring(-6, -1)); // Output: "Hello, World!" (negative treated as 0)

