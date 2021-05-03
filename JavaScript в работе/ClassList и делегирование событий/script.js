"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));


// if(btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});


wrapper.addEventListener('click', (e) =>{
    if (e.target && e.target.matches("button.red")){           // дилигированная структура 
        console.log('hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () =>{               //не дилигировананая структура
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// function addBtn () {
//     let i = 0;
//     for(i=0; i < 5; i++){
//         const btn = document.createElement('button');
//         btn.classList.add('red');
//         wrapper.append(btn);
//     }                                                        // моя практика 
// }
// addBtn();



// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (!btn.classList.contains('red')){
//             for(let key of btns){
//                 key.classList.add('red');
//             }
//         } else {
//             for(let key of btns){                            //моя практика 
//                 key.classList.remove('red');
//             }
//         }
//     });
// });