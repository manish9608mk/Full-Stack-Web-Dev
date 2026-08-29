/*
BMI Calculator Challenge
Create a BMI calculator using JavaScript functions. 
The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
You can calculate it using the formula below, where weight divided by height squared.


Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
The first parameter should be the weight and the second should be the height.

NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.
*/



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

//my solution
function bmiCalculator (weight, height){
  return Math.round(weight / (height * height)); //to the nearest whole numbers
}
let bmiCalc = bmiCalculator (75, 1.75);  //weight: 75kg , height: 1.75 m
console.log(bmiCalc); //24



// introduce Math.pow(base,exponent)
function bmiCalculator (weight, height){
    return Math.round(weight / Math.pow(height,2))
}
let bmiCalc2 = bmiCalculator (65, 1.8);  //weight: 65kg , height: 1.8 m 
console.log(bmiCalc2); //20



//miss solution
function bmiCalculator1 (weight,height){
  let bmi = weight/(height*height);
  return Math.round(bmi);
}







/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
