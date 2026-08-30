//  Combining Comparators

/*
&& - AND
|| - OR
!  - NOT
*/


// ex1

let your = prompt(`What is your name?`);
let there = prompt(`What is there name?`);
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // +1 because of it goes upto 100

if (loveScore > 70 ){
    alert(`Hi ${your} and ${there}: Your love score is ${loveScore}% you love each ether very much`)
} 

// &&
if (loveScore > 30 && loveScore <= 70){
     alert(`Hi ${your} and ${there}: Your love score is ${loveScore}%`);
}

if ( loveScore <= 30){
    alert(`Hi ${your} and ${there}: Your love score is ${loveScore}% you go together like oil and water`);
}
console.log(loveScore);


