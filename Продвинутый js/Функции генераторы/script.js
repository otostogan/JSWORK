'use strict';

// function* generator(){
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }


// const str = generator();

// let str = [...generator()];

// for(let value of str){
//     console.log(value);
// }


function* count(n){
    for(let i = 0; i <= n; i++){
        yield i;
    }
}
const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
