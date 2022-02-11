/*
Basic Types activity
- Create 3 variables and set them up to the given instructions. Also, type check them with the typeof operator in the console.
*/
//your code here
let myFirstName = "Kevin";
let numberOfCities = 8;
let havingFun = true;
///////////////////////////////////
//check results in browser console
console.log('myFirstName: ', myFirstName);
console.log('numberOfCities: ', numberOfCities);
console.log('havingFun: ', havingFun);

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { myFirstName, numberOfCities, havingFun };
}

//this is a string type
// console.log(typeof 'pinecone') // it's of type string
 
//define a variable and find out it type
// let diameter = 4.2
// console.log(typeof diameter) //it's of type number
 
// if try to get the type of an undeclared variable, the expected output will be: "undefined"
// console.log(typeof conifer);
 
//arrays
// const chapters = [1, 2, 4]
// typeof chapters === 'object'; //true
// console.log(typeof chapters) //it's of type object
 
//objects
// const denmark = {area:42924, population: 5820000}
// console.log(typeof denmark) //it's of type object