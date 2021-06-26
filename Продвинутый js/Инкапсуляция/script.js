'use strict';

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function(){
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     };


//     this.getAge =  function(){
//         return userAge;
//     };
//     this.setAge = function(age) {
//         if(typeof age === 'number' && age > 0 && age < 110){
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }
// const ivan = new User('ivan', 25);

// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);

// console.log(ivan.getAge());


// ivan.say();

class User{
    constructor(name, age){
        this.name = name;
        this._age = age;
    }
    
    #surname = 'Tostogan'

    say(){
        console.log(`Имя пользователя ${this.name}, ${this.#surname} возраст ${this._age}`);
    }

    get age(){
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
    get surname(){
        return this.#surname;
    }
    set surname(surname) {
        if(typeof surname === 'string'){
            this.#surname = surname;
        } else{
            console.log('Введите действительную фамилию');
        }
    }
}
const ivan = new User('ivan', 25);

// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
console.log(ivan.surname);
console.log(ivan.surname = 'dfsfsfs');
console.log(ivan.surname);


ivan.say();