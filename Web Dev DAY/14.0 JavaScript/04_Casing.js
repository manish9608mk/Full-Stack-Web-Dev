// Challenge: Changing Casing in Text (lecture 84)
// challenge 4

// challenge 4: automatic captalize the first letter of any name 

// let name = prompt("What is your name?");
// let firstCar = name.slice(0,1);
// let ucFirstChar = firstCar.toUpperCase();
// let restOfTheName = name.slice(1, name.length);
// let capNmae = ucFirstChar + restOfTheName;
// alert("hello, "+ capNmae);

// challenge: convert rest of the name in small letter 
// let restOfTheNameLC = restOfTheName.toLowerCase();











// from grok ai
/*

Let's explore different ways to change text casing in JavaScript with detailed examples, code explanations, and their outputs.

1. Basic String Methods for Case Conversion
JavaScript provides built-in methods to change text casing. Let's examine each one:
a. toLowerCase()
Converts all characters in a string to lowercase.
javascript

// Example 1: Simple lowercase conversion
let text1 = "Hello WORLD";
let lowerText = text1.toLowerCase();
console.log(lowerText);
// Output: "hello world"

// Example 2: Mixed case with numbers and symbols
let text2 = "JavaScript123#@!";
let lowerText2 = text2.toLowerCase();
console.log(lowerText2);
// Output: "javascript123#@!" (numbers and symbols remain unchanged)

b. toUpperCase()
Converts all characters in a string to uppercase.
javascript

// Example 1: Simple uppercase conversion
let text3 = "Hello world";
let upperText = text3.toUpperCase();
console.log(upperText);
// Output: "HELLO WORLD"

// Example 2: With special characters
let text4 = "coding@123";
let upperText2 = text4.toUpperCase();
console.log(upperText2);
// Output: "CODING@123"

2. Capitalizing First Letter of a String
There's no direct method for this, so we need to create our own solution.
javascript

// Method 1: Using substring
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

let text5 = "javascript";
console.log(capitalize(text5));
// Output: "Javascript"

// Method 2: Using slice
function capitalize2(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

let text6 = "PROGRAMMING";
console.log(capitalize2(text6));
// Output: "Programming"

3. Capitalizing Each Word (Title Case)
Let's create a function to capitalize the first letter of each word.
javascript

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

let text7 = "hello world of javascript";
console.log(toTitleCase(text7));
// Output: "Hello World Of Javascript"

let text8 = "I LOVE CODING";
console.log(toTitleCase(text8));
// Output: "I Love Coding"

4. Toggle Case (Swap Case)
Let's create a function to toggle between upper and lower case.
javascript

function toggleCase(str) {
    return str
        .split('')
        .map(char => 
            char === char.toUpperCase() 
            ? char.toLowerCase() 
            : char.toUpperCase()
        )
        .join('');
}

let text9 = "Happy Coding";
console.log(toggleCase(text9));
// Output: "hAPPY cODING"

let text10 = "TeSt CaSe";
console.log(toggleCase(text10));
// Output: "tEsT cAsE"

5. Practical Application: Form Input Normalization
javascript

// Example: Normalizing user input
function normalizeInput(input, type) {
    switch(type) {
        case 'email':
            return input.toLowerCase().trim();
        case 'name':
            return toTitleCase(input.trim());
        case 'code':
            return input.toUpperCase().trim();
        default:
            return input.trim();
    }
}

// Test cases
console.log(normalizeInput("  JOHN DOE  ", "name"));
// Output: "John Doe"

console.log(normalizeInput("USER@EXAMPLE.COM", "email"));
// Output: "user@example.com"

console.log(normalizeInput(" js123 ", "code"));
// Output: "JS123"

Key Points to Understand:
Immutability: All these methods return new strings; they don't modify the original.

javascript

let original = "Hello";
let modified = original.toUpperCase();
console.log(original);  // "Hello" (unchanged)
console.log(modified);  // "HELLO"

Non-alphabetic Characters: Numbers and symbols remain unaffected.

javascript

let mixed = "Test123#@!";
console.log(mixed.toUpperCase());  // "TEST123#@!"

Error Handling: Handle undefined/null inputs.

javascript

function safeToUpper(str) {
    return str ? str.toUpperCase() : "";
}
console.log(safeToUpper("test"));    // "TEST"
console.log(safeToUpper(null));      // ""

Complete Example Combining All Concepts:
javascript

class TextFormatter {
    static toLower(str) {
        return str ? str.toLowerCase() : "";
    }

    static toUpper(str) {
        return str ? str.toUpperCase() : "";
    }

    static toTitleCase(str) {
        if (!str) return "";
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    static toggleCase(str) {
        if (!str) return "";
        return str
            .split('')
            .map(char => 
                char === char.toUpperCase() 
                ? char.toLowerCase() 
                : char.toUpperCase()
            )
            .join('');
    }
}

// Usage
let text = "Hello World 123";
console.log("Original:", text);
console.log("Lower:", TextFormatter.toLower(text));
console.log("Upper:", TextFormatter.toUpper(text));
console.log("Title:", TextFormatter.toTitleCase(text));
console.log("Toggle:", TextFormatter.toggleCase(text));

/* Output:
Original: Hello World 123
Lower: hello world 123
Upper: HELLO WORLD 123
Title: Hello World 123
Toggle: hELLO wORLD 123
*/
