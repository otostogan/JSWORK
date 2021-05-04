"use strict";

if(4 == 5){
    console.log('Ok!');
} else {
    console.log('Error!');
}




// if(num < 49){
//     console.log('Eror!');
// } if(num > 100){
//     console.log('МНОГО');
// }else{
//     console.log('Ok!');
// }
// (num === 50) ? console.log('Ok!') : console.log('Error!');
const num = 50;


switch (num){
    case 49:
        console.log('НЕВЕРНО');
        break;
    case 100:
        console.log('НЕВЕРНО');
        break;
    case 51:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;

}

