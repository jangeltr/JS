//spread operator
let person = { name: "Alexa", age: 24 };
let country = "COL"

let data = { ...person, country };  // spread separa, divide, descompone el objeto person en sus propiedades
console.log(data);  //{name: 'Alexa', age: 24, country: 'COL'}


//rest operator
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;   //rest junta, compone, agrupa el RESTO de los elementos en un array
console.log(first, second, rest); //1 2 [3, 4, 5]

function sum(num, ...restValues) {
    console.log(restValues);
    console.log(num + restValues[0]);
    return num + restValues[0];
}

sum(1, 1, 2, 3)
