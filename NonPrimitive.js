//Objects

let o = {
    x = 1
}

const f1 = (b) =>{
    b.x = 3;
}

f1(o)
console.log(f1(o));

//Arrays
let books = [];

function book(title){
    return {title:title};
}

function factory(n){
    for(let i = 0; i < n; i++){
        books.push(book('a' + i));
    }
    return books;
}

function stampBooks(myBooks){
    myBooks.forEach(item => item.owner = 'me');
}

factory(3);
stampBooks(books);