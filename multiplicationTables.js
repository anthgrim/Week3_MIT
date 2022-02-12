//Tables exercise

const multiplier = 1;
let j = 1;
let row = '';

for(let j = 1; j <= 10; j++){
    for(let i = 1; i <= 10; i++){
        let result = i * j;
        row += result + " ";    
    }
    console.log(row);
    row = '';
}





