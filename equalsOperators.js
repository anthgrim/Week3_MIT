// Primitive types: number, string, Boolean, Null, Undefined, Symbol

// Object types: Object, array, date


// let a = 2;
// a = a + 3;
// let b = a;
// a = a + 2;

// let c = [1,2]
// let b = a;
// b[0]=5;
// let d = [3,4]
// d = a;

// let obj = {
//     x: 2,
// };

// let obj1 = obj
// a.x = 3;

/*
Instructions
- Create an array variable, scottishCity, set it equal to ["Glasgow"]
- Create another variable, americanCity, and set it equal to the array scottishCity
- Now, reassign the first element of the americanCity and set it to the value: 'New ' + americanCity
- Do you think both arrays have the same value in memory?
*/

//write your code here
let scottishCity = ["Glasgow"];
let americanCity = scottishCity;

americanCity[0] = 'New ' + americanCity;
//////////////////////////
//uncomment the next lines one at a time to check your results in the browser console
//console.log(scottishCity)
//console.log(americanCity)

/////////////////////////
//don't change the code under this line
// if (typeof module !== 'undefined') {
//     module.exports = {scottishCity, americanCity};
// }

// Soccer manager activity

//Create the function getPlayingStyle, return the team you think it has the best playing style.
const getPlayingStyle = () => {
    let firstTeam = [3,3,1,3];
    let secondTeam = firstTeam;
    firstTeam[0] = 4;
    firstTeam[1] = 1;
    firstTeam[2] = 4;
    firstTeam[3] = 1;
    return secondTeam;
  }
  //Run the code in the console to find out what's the secondTeam final playing style.
  
  /////////////////////////
  //your code here
  
  /////////////////////////
  //Uncomment this line to see the results in the browser console
  //console.log("results = " + getPlayingStyle())
  
  /////////////////////////
  //don't change the code under this line
//   if (typeof module !== 'undefined') {
//     module.exports = getPlayingStyle;
//   }
  