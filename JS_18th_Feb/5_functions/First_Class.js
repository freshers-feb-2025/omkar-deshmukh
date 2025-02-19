// ** FUnction as First class Citizens **

// function multiply(a,b){
//     return a*b;
// }

// let add = multiply;
// console.log(add(4,6));

// Passing function to another function

function sum(a,b){
    return a+b;
}

function calculate(a,b,fn){
    return fn(a,b)*5;
}

console.log(calculate(10,20,sum));