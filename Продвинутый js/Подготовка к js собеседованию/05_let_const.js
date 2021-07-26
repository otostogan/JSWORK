//Let

let a = 'variable a'
let b = 'variable b'

{
    a = 'New Variable A'
    let b = 'local Variable B'
    console.log('scope A', a);
    console.log('scope b', b);
}

console.log('A:', a);
console.log('B:', b);

//Const
const PORT = 8080

const array = ['JavaScript', 'is', 'Awesome']

array.push('!');
array[0] = 'JS'
console.log(array);

const obj = {}

obj.name = 'sasa'
obj.age = 18


console.log(obj);

