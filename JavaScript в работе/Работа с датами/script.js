'use strict';

const now = new Date();

console.log(now.setHours(18));
console.log(now);



// console.log(now.getMonth());
// // console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());
// console.log(now.getHours());
// console.log(now.getTimezoneOffset());

let start = new Date();

for(let i =0; i < 10000000; i++){
    let some = i ** 3;
}

let end = new Date();

// console.log(`Цикл отработал за ${end - start} миллисекунд`);
alert(`Цикл отработал за ${end - start} миллисекунд`);