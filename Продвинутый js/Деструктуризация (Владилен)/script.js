//Array dest
function calcValue(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

const [sum, sub = 'Вычитания нет', mult, ...other] = calcValue(42, 10)

// console.log(sum, sub, mult, other);


// const result = calcValue(42, 10)
// const sum = result[0]
// const sub = result[1]

//Obj dest

const persone ={
    name: 'max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const {name: firstname = 'Без имени',
//     age,
//     car='машины нет',
//     address,
//     address: {city, country}
// } = persone

// const {name, ...info} = persone

// console.log(name, info);


function logPerson({name, age}){
    console.log(name + " " + age);
}

logPerson(persone);