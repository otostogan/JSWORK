'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('ivan', 23);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, "smith");
// sayName.apply(user, ['smith']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));


const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    this.style.backgroundColor = "red";
});

const obj = {
    num: 5,
    sayNumber: function (){
        const say = () => {
            console.log(this);   // ССылается на контекст своего родителя 
        };

        say();
    }
};

obj.sayNumber();


const double = a => a*2;

console.log(double(4));


// 1) Обычная фунциия: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind
