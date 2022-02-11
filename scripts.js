//Stack visualization https://pythontutor.com/javascript.html#mode=display
function red(x){
    let y = x+ 1;
    return y;
}

function blue(x) {
    let y = red(x);
    return y + 1;
}

function main(x){
    let y = blue(x);
    return y;
}

let x = 1;
console.log(`Result ${main(x)}`)

//Basic Data Types
var intNum = 42;
var floatNum = 3.14159;
var nanNum = NaN;
var infNum = Infinity;
var ninfNum = -Infinity;
var str = "Hello World";
var boolTrue = true;
var boolFalse = false;
var nullVal = null;
var undefVal = undefined;
var lst = [1,2,3,'a','b']
var obj = {
    name: "fred",
    age: 35,
    hasChildren: true
}
var i = 5;
var obj_list = [
    i,
    {foo: i+1, a: [1,2,3]},
    {bar: i-2}]
    
obj.name = "Jane";