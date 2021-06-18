"use strict";

// to string
//1)
console.log(String(null));
console.log(String(4));

//2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number 
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt("hello", "");

//to boolean

//всегда ложь  0, '', null, undefined, NaN;

//1)
let switcher = null;

if(switcher){
    console.log('working');
}
switcher = 1;

if(switcher){
    console.log('working');
}
//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4'));










































































