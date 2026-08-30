// Coding Exercise 7: The Fibonacci Exercise

// ex6
function fibonacci6(){
let a=0, b=1
console.log(a);
console.log(b);

for(i=2; i<30; i++){
  let aAndb = a+b
  console.log(aAndb);

  a=b
  b=aAndb
}
}
// fibonacci6()


// leetcode practice 
var fibGenerator = function*(n) {
  let a=0, b=1
  yield a;
  yield b;

  for(let i=1; i<n; i++){
      let temp = a+b
      yield temp;
      // logic
      a=b
      b=temp
  }
};
const gen = fibGenerator(30);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);







// ex5
function fibonacci(n){
  let fib=[0,1];
  for(i=2; i<n; i++){
    fib[i]= fib[i-2] + fib[i-1];
  }
  return fib;
}
let fibSequence = fibonacci(20)
// console.log(fibSequence);



// ex1
function fibonacciGenerator (n) {
  let output=[];
  if(n===1){
    output=[0];
  } else if(n===2){
    output=[0,1];
  } else {
    output=[0,1];
    for(let i=2; i<n; i++){
      output.push(output[output.length -2] + output[output.length -1] );
    }
  }
  return output;
}
output=fibonacciGenerator(30);
// console.log(output);

  



// ex2
 function fibonacciGenerator1 (n) {
  //Do NOT change any of the code above 👆
      
      //Write your code here:
      let output = [];

      if (n===0){
        return output;
      } else if (n===1){
        return [0];
      }
      output = [0,1];

      for(let i = 2; i < n; i++){
        output.push(output[i-1] + output[i-2])
      }
      return output;

      //Return an array of fibonacci numbers starting from 0.
      
  //Do NOT change any of the code below 👇
  }
  // let arrayOfFibonacci = fibonacciGenerator1(40)
  arrayOfFibonacci = fibonacciGenerator1(40)
  // console.log(arrayOfFibonacci);
      




  // ex3
  function fibonacciGenerator(n) {
    var output = [];
    var fNum = 0;
    var sNum = 1;
   
    for (var i = 0; i < n; i++) {       
        output.push(fNum);
        var sum = fNum + sNum;
        fNum = sNum;
        sNum = sum;
    }
    return output;
}

let result = fibonacciGenerator(30);
// console.log(result);





// ex4
function fibonacciGeneratorFB (n) {
  var array = [];
  
  for (var i = 0; i < n; i++) {
      if (i < 2) {
          array.push(i);
      }
      else {
          array.push(array[i-2] + array[i-1]);
      }
  }

  return array;
}
passNum=fibonacciGeneratorFB(30);
// console.log(passNum);





/*
The Fibonacci Exercise

Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
etc.

Create a function where you can call it by writing the code:
fibonacciGenerator (n)
Where n is the number of items in the sequence.

So I should be able to call:
fibonacciGenerator(3) and get
[0,1,1]
as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.
Do NOT change any of the existing code.

You do NOT need any alerts or prompts, the result should be returned from the function as an output.

The first two numbers in the sequence must be 0 and 1.
Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.
e.g. for (var i = 0; i < 10; i ++)

HINT: Use this Repl.it Playground to test out your solution.
HINT: Use this flow chart to understand the logic if you get stuck.
*/