let a = '11';
let b = 22;

a = a + b.toString();

let c = '23';
let d = 44;

d = d + Number(c);
console.log(d);

d = d + true;
//true = 1 
console.log(d);

