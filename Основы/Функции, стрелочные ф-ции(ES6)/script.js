"use strict";
let num = 20;
function showFirstMessage(text){
    console.log(text);
    console.log(num);
    // return num
}


showFirstMessage('Hello, world');
console.log(num);



// function calc(a, b){
//     return(a + b);
// }

// console.log(calc(23, 33));
// console.log(calc(323, 33));
// console.log(calc(23, 33));

function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function(){
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;