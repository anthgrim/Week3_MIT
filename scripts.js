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
