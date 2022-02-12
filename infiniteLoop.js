const notFound = true;
let counter = 0;

while (notFound) {
    if (counter === 5000) {
        console.log("found 5000");
        notFound = false; //Removing this line will create an infinite loop
    }else{
        console.log("still looking");
    }
    counter ++;
}