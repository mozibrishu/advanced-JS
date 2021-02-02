// null vs undefined
// undefined
// - set value as undefined
// - variable without initialization.
// - function without return or empty return.
// - If value not is passed to a function parameter and default value is not set.
// - value of object property which is not initialized
// - array element which is not initialized 

// null
// null means not-exist
// variable = null
// set by dev to check.

let age;
console.log(age);

// Not recommended at all.
let value = undefined; 
console.log(value);

// no return or empty return
function add(num1,num2){
    let result = num1 + num2;
}
console.log(add(5,7));

// value is not passed
function multiply(num1,num2){
    console.log(num1);
    console.log(num2);
}
multiply(5);

// object
const person = {
    personName:"Rahul",
}
console.log(person.age);

// Array
const arr = [1,2,3];
console.log(arr[6]);

const arr2 = [0,,2];
console.log(arr2[1]);

// null
let name = null;
console.log(name);