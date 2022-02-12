//If it's a function declaration then it hoisted

//Two ways of the declaring a function

//Function Declaration
//function red(){
//     return 1;
// }

// Function Expression
// var blue = function(){
//     return 2;
// }
// var blue = function blue(){
//     return 2;
// }

var x = red();
//It will be hoisted
 function red(){
     return 3.141;
 }

//It won't be hoisted unless it's put at the top of this code
 const fRed = function red(){
     return 2;
 }

 var y = red(); //<-- gets hoisted
 let c = red(); //<-- Doesn't get hoisted
 const d = red(); //Doesn't get hoisted
