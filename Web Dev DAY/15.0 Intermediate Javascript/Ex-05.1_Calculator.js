// calculator challenge using if/else

// function calculator(num1, num2, operator){
//   let result;
//   if (operator === `+`){
//     result = num1 + num2;
//   } else if (operator === `-`) {
//     result = num1 - num2;
//   } else if (operator === `*`) {
//     result = num1 * num2;
//   } else if (operator === `/`) {
//     if (num2 === 0){
//       result = `Cannot divide by zero!`
//     } else {
//       result = num1/num2;
//     }
//   } else {
//     result = `Invalid operator!`
//   }
//   return result;
// }
// let answer = calculator(8,0,`/`);
// console.log(answer);




// add % and ** exponent

// function calculator(num1, num2, operator){
//   let result;
//   if (operator === `+`){
//     result = num1 + num2;
//   } else if (operator === `-`) {
//     result = num1 - num2;
//   } else if (operator === `*`) {
//     result = num1 * num2;
//   } else if (operator === `/`) {
//     if (num2 === 0){
//       result = `Cannot divide by zero!`
//     } else {
//       result = num1/num2;
//     }
//   } else if (operator === "%") {
//     if (num2 === 0) {
//       result = "Cannot compute modulus with zero!";
//     } else {
//       result = num1 % num2;
//     }
//   } else if (operator === "**") {
//     result = num1 ** num2;
//   }
//   else {
//     result = `Invalid operator!`
//   }
//   return result;
// }
// let answer = calculator(8,0,`%`);
// console.log(answer);





// calculator challenge using switch case 

// function calculator3(num1,num2,operator){
//   let add = '+'
//   let subtract = "-"
//   let multiply = "*"
//   let divide = "/"
//   let result;

//   switch(operator){
//     case add:
//       result= num1+num2;
//       break;
//     case subtract:
//       result= num1-num2;
//       break;
//     case multiply:
//       result= num1*num2;
//       break;
//     case divide:
//       if(num2===0){
//         result= 'Cannot divide by RERO!'
//       } else {
//         result= num1/num2;
//       }
//       break;
//     default:
//       result= "Invalid operator!" 
//   }
//   return result;
// }

// let result = calculator3(8,4,"/");
// console.log(result);





// adding % and ** exponent features 

// function calculator3(num1,num2,operator){
//   // let add = '+'
//   let subtract = "-"
//   let multiply = "*"
//   let divide = "/"
//   let modulo = "%"
//   let exp = "**"
//   let result;

//   switch(operator){
//     case "+":
//       result= num1+num2;
//       break;
//     case subtract:
//       result= num1-num2;
//       break;
//     case multiply:
//       result= num1*num2;
//       break;

//       //division 
//     case divide:
//       if(num2===0){
//         result= 'Cannot divide by zero!'
//       } else {
//         result= num1/num2;
//       }
//       break;

//       //modulus
//     case modulo:
//       if(num2 ===0){
//         result= "Cannot compute modulus with zero!"
//       } else{
//         result= num1%num2;
//       }
//       break;

//       //Exponentiation
//     case exp:
//       result= num1 ** num2;
//       break;

//     default:
//       result= "Invalid operator!" 
//   }
//   return result;
// }

// let result = calculator3(8,4,"%");
// console.log(result);

// //or
// console.log("........................");

// console.log(calculator3(8, 4, "+"));  // 12
// console.log(calculator3(5, 2, "**")); // 25 (5²)
// console.log(calculator3(10, 3, "%")); // 1 (10 mod 3)
// console.log(calculator3(8, 0, "/"));  // "Cannot divide by zero!"
// console.log(calculator3(8, 4, "&"));  // "Invalid operator!"







// challenge in above all code :
// Input Validation  and square root, !(factorial)
// Why: If num1 or num2 are non-numeric (e.g., "abc", null), you’ll get NaN for numeric operations. For example, calculator3("abc", 5, "+") returns NaN.
// How: Add a check at the start:


function calculator4(num1,num2,operator){
  let result;
switch(operator){
  case "+":
    result= num1+num2;
    break;
  case "-":
    result= num1-num2;
    break;
  case "*":
    result= num1*num2;
    break;

    //division 
  case "/":
    if(num2===0){
      result= "Cannot divide by zero!"
    } else {
      result= num1/num2;
    }
    break;

    //modulus
  case "%":
    if(num2 ===0){
      result= "Cannot compute modulus with zero!"
    } else{
      result= num1%num2;
    }
    break;

    //Exponentiation
  case "**":
    result= num1 ** num2;
    break;

    // Square Root (√)
  case "√":
    result = num1 >= 0 ? Math.sqrt(num1) : "Cannot compute square root of a negative number!";
    break;

    // Factorial (!)
  case "!":
  if (num1 < 0) {
    result = "Factorial of a negative number is not defined!";
  } else {
    result = 1;
    for (let i = 2; i <= num1; i++) {
      result *= i;
    }
  }
  break;




    //Input Validation
  
  



    

  default:
    result= "Invalid operator!" 
  }
     return result;
}

let result = calculator4(64,4,"√"); 
console.log(result);
console.log(".........................");







// kkb: break; lagana compulsary hai and default: nhi dega toh answer undefined aayega and most important thing is to please learn syntax 

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/
//control + command + space se emoji ka option aata hai 








// by using ternary operator.

// function calculator5(num1, num2, operator) {
//   return (
//       operator === "+" ? num1 + num2 :
//       operator === "-" ? num1 - num2 :
//       operator === "*" ? num1 * num2 :
//       operator === "/" ? (num2 === 0 ? "Cannot divide by zero!" : num1 / num2) :
//       operator === "%" ? (num2 === 0 ? "Cannot compute modulus with zero!" : num1 % num2) :
//       operator === "**" ? num1 ** num2 :
//       "Invalid operator!"
//   );
// }

// let result1 = calculator5(8, 5, "%");
// console.log(result1); // Output: 2


/*
Key points about this ternary operator version:

The syntax is condition ? valueIfTrue : valueIfFalse
Multiple conditions are nested using additional : sections
For division and modulus, we nest another ternary operator to handle the zero-check
The final : acts as the default case
It produces the same result as the switch version but is more concise

This version:
Is functionally equivalent to the switch version
Maintains all the same error checking
Will still output 2 for calculator4(8, 4, "/")
Is more compact but might be less readable for complex logic
Would you like me to explain any specific part of the ternary operator conversion in more detail?

*/