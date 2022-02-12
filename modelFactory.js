const locations = [];
const makePoint = (x,y) => {
    let p = {
        x: x,
        y: y
    };
    return p;
}

let p = makePoint(3,4);
locations.push(p);
console.log(`Locations ${JSON.stringify.locations}`);

//JSON.stringify
// converts a JavaScript object or value to a JSON string, 
// optionally replacing values if a replacer function 
// is specified or optionally including only the specified 
// properties if a replacer array is specified.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

const factory = (n) => {
    for(let i = 0; i < n; i++){
        let p = makePoint(i,i);
        locations.push(p);
    };
};

factory(3);
console.log(`Locations ${JSON.stringify.locations}`);