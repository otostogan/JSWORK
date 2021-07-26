// null, undefined, boolean, number, string, object, symbol


// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'JavaScript');
// console.log(typeof undefined);
// console.log(typeof Math);
// console.log(typeof Symbol('js'));
// console.log(typeof function(){});
// console.log(typeof NaN);

// Приведение Типов

// let language = 'JavaScript';

// if(language){
//     console.log('The best language is:' + ' ', language);
// }

// '', 0, null, undefined, NaN, false

// console.log(Boolean(''));
// console.log(Boolean('Hello'));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));


//Строки и числа

console.log(1 + '2');  //string 12
console.log('' + 1 + 0);  //string 12
console.log('' - 1 + 0); 
console.log('3'*'8'); //number
console.log(4 + 10 + 'px');  //number
console.log('px' + 5 + 10);  //string
console.log('42' - 40);
console.log('42px' - 2); //NaN
console.log(null + 2);
console.log(undefined + 2);


// == vs ===

console.log(2 == '2'); 
console.log(2 === '2');
console.log(undefined == null);
console.log(undefined === null);
console.log('0' == false);
console.log('0' == 0);
console.log(0 == 0);

// =====

console.log(false == '');
console.log(false == []);
console.log(false == {});
console.log('' == 0);
console.log('' == []);
console.log('' == {});

console.log(0 == []);
console.log(0 == {});
console.log(0 == null);