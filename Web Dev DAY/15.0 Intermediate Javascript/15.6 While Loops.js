/*
control statements 
2.	Looping Statements
	•	for
	•	while
	•	do...while
	•	for...in
	•	for...of
  
*/

// control statements : while loops 

// ex-1
let i=1;
while(i<4){
  // console.log(i);
  i++;
}



// ex-2
// now apply while in fizzBuzz challenge inorder to run automatically

let output = [];
let count =1;

function fizzBuzz(){

	while (count <= 50){
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
	}
    
   console.log(output)
}
fizzBuzz();





// challenge
// Lyrics of the song 99 Bottles of Beer
console.log("========= Lyrics of the song 99 Bottles of Beer ============ ");

function whileChallenge99Song(){
let numberOfBottles = 99;
while(numberOfBottles >= 0){
	let bottleWord = "bottle";
	if (numberOfBottles === 1){
		bottleWord = "bottles";
	}
	console.log(`${numberOfBottles} ${bottleWord} of beer on the wall`);
	console.log(`${numberOfBottles} ${bottleWord} of beer,`);
	console.log("Take one down, pass it around,");
	numberOfBottles --;
	console.log(`${numberOfBottles} ${bottleWord} of beer on the wall.`);
}
}
// whileChallenge99Song();





// Lyrics of the song 99 Bottles of Beer

function songwhile(){
let numberOfBottles = 99;
while (numberOfBottles >= 0) {
    // Current verse setup
    let bottleWord = numberOfBottles === 1 ? "bottle" : "bottles";
    if (numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall");
        console.log("No more bottles of beer,");
        console.log("Go to the store and buy some more,");
        console.log("99 bottles of beer on the wall.");
        break; // End after the final verse
    } else {
        console.log(`${numberOfBottles} ${bottleWord} of beer on the wall`);
        console.log(`${numberOfBottles} ${bottleWord} of beer,`);
        console.log("Take one down, pass it around,");
        let nextNumber = numberOfBottles - 1;
        let nextBottleWord = nextNumber === 1 ? "bottle" : "bottles";
        if (nextNumber === 0) {
            console.log("No more bottles of beer on the wall.");
        } else {
            console.log(`${nextNumber} ${nextBottleWord} of beer on the wall.`);
        }
    }
    numberOfBottles--;
}
}
// songwhile();




// Lyrics of the song 99 Bottles of Beer
// very and best way simple way 

function song99Bottles(){
	var bottles = 99;
	while(bottles>0){
			console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + --bottles + " bottles of beer on the wall.");
	}   
}
song99Bottles();









/*
JavaScript while Loop (Detailed Explanation)

The while loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition evaluates to true.

1. Syntax of while Loop

while (condition) {
    // Code to execute while condition is true
}

	•	condition: A Boolean expression that determines whether the loop will continue executing.
	•	If the condition is true, the loop body executes.
	•	If the condition becomes false, the loop stops.

2. How while Loop Works (Step-by-Step)
	1.	The condition is checked before each iteration.
	2.	If the condition is true, the loop body executes.
	3.	After execution, the condition is checked again.
	4.	The loop continues until the condition evaluates to false.
	5.	If the condition is initially false, the loop body never runs.

3. Example: Basic while Loop

let count = 1;

while (count <= 5) {
    console.log("Iteration:", count);
    count++;  // Increment count to prevent an infinite loop
}

Output:

Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5

Explanation:
	1.	count = 1, condition (count <= 5) is true, so console.log executes.
	2.	count is incremented (count = 2), condition is still true, so loop repeats.
	3.	This continues until count = 6, at which point the condition becomes false, and the loop stops.

4. Infinite while Loop (Avoid This!)

If the loop condition never becomes false, it creates an infinite loop.

let x = 1;

while (x > 0) {  // Always true, so it runs forever
    console.log("This is an infinite loop");
}

Solution: Always ensure there is a condition that eventually stops the loop.

5. Using while Loop with User Input

Example where the loop continues until the user enters a correct password.

let correctPassword = "12345";
let userInput = "";

while (userInput !== correctPassword) {
    userInput = prompt("Enter password:"); // Taking input from user
}

console.log("Access granted!");

	•	The loop keeps running until the user enters "12345", then it exits.

6. Using while Loop to Sum Numbers

Example: Summing numbers from 1 to 10.

let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;  // Add current number to sum
    num++;       // Move to the next number
}

console.log("Sum:", sum);

Output:

Sum: 55

Explanation:
	•	The loop runs while num is ≤ 10, adding numbers to sum.
	•	Once num is 11, the condition becomes false, and the loop exits.

7. Using while Loop with break Statement

break is used to exit a loop early.

let i = 1;

while (i <= 10) {
    if (i === 5) {
        console.log("Stopping at 5");
        break;  // Exits loop when i reaches 5
    }
    console.log(i);
    i++;
}

Output:

1
2
3
4
Stopping at 5

Explanation:
	•	The loop runs, printing numbers.
	•	When i === 5, break stops the loop immediately.

8. Using while Loop with continue Statement

continue is used to skip an iteration and move to the next.

let num = 0;

while (num < 5) {
    num++;

    if (num === 3) {
        continue;  // Skip iteration when num is 3
    }

    console.log(num);
}

Output:

1
2
4
5

Explanation:
	•	The loop runs from 1 to 5.
	•	When num === 3, continue skips that iteration (so 3 is missing).

9. Nested while Loops

You can place one while loop inside another.

Example: Printing a pattern

let i = 1;

while (i <= 3) {
    let j = 1;
    while (j <= 3) {
        console.log(`i=${i}, j=${j}`);
        j++;
    }
    i++;
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

Explanation:
	•	The outer loop runs 3 times (i = 1 to 3).
	•	The inner loop runs 3 times (j = 1 to 3) each time the outer loop runs.

10. Converting a for Loop to a while Loop

Any for loop can be rewritten as a while loop.

For Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Equivalent While Loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

	•	The initialization (i = 1) is placed before the loop.
	•	The condition (i <= 5) is checked before each iteration.
	•	The increment (i++) is placed inside the loop.

11. Common Mistakes to Avoid
	1.	Forgetting to update the condition

let x = 1;
while (x <= 5) {
    console.log(x);
    // x is not incremented, so it loops forever!
}

Fix:

let x = 1;
while (x <= 5) {
    console.log(x);
    x++;  // Increment x
}


	2.	Using while (true) without a break condition

while (true) {
    console.log("Infinite loop!");
}

Fix:

let i = 1;
while (true) {
    console.log(i);
    if (i === 5) break;  // Exit loop when i reaches 5
    i++;
}

12. When to Use while Loop?

✅ Use while when you don’t know how many times the loop will run
✅ Use while when looping depends on user input
✅ Use for loop when the number of iterations is known in advance

13. Conclusion
	•	while loops are useful for indefinite looping.
	•	Be careful of infinite loops! Always update the condition.
	•	break and continue can control loop execution.
	•	Any for loop can be converted to a while loop.

🚀😊
*/

// Real-World Example

/*
let time = 10;
while (time > 0) {
    if (time === 5) {
        console.log("Halfway there!");
        time--; // Move toward exit
        continue;
    }
    console.log(`${time} seconds remaining`);
    if (time === 2) {
        console.log("Aborting countdown!");
        break;
    }
    time--;
}
console.log("Done!");
// Output:
// 10 seconds remaining
// 9 seconds remaining
// 8 seconds remaining
// 7 seconds remaining
// 6 seconds remaining
// Halfway there!
// 4 seconds remaining
// 3 seconds remaining
// 2 seconds remaining
// Aborting countdown!
// Done!
*/

