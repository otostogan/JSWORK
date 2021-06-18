"use strict";



// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //передает ссылку

// copy.a = 10; // модифицируя копию которая была передана по ссылке, мы меняем первый obj

// console.log(copy);
// console.log(obj);

function copy(obj) {
    let objCopy ={};

    let key;
    for(key in obj) {
        objCopy[key] = obj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c:{
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

// console.log('clone : ', clone );
// console.log(add);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adsadadas';
console.log(newArray);
console.log(oldArray);



const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wprdpress', 'livejournal', 'blogger'],
      interner = [...video, ...blogs, 'vk', 'facebook'];
      console.log('interner: ', interner);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);
const array = ['a', 'b'];
const newArrray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

























