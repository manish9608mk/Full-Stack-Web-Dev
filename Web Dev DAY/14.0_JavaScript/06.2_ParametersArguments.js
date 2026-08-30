// Functions Part 2: Parameters and Arguments

//challenge no of bottels buy
function getMilk(bottels) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + bottels + " bottles of Milk");  

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(12);


// money challenge
function get_Milk(money1) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  let noOfBottels1 = money1 / 1.5;  //price per bottle 1.5
  console.log("buy " + noOfBottels1 + " bottles of Milk");  

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
get_Milk(5);



// challeng for above output: buy 3.3333333333333335 bottles of Milk into nearest integer
// The Math.floor() method rounds a number DOWN to the nearest integer.
// let x = Math.floor(1.6);

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
  console.log("enterHouse");
}
getMilkBottle(5);



function getMilkDabba (money){
  return money % 1.5; //1.5 is cost of one bottle
}
 var change = getMilkDabba(4)
console.log(change);