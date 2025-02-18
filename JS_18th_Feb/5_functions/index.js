
// // hoisting
// showMe(); // an hoisting example

// function showMe() {
//   console.log('an hoisting example');
// }

// Returning 
// function say(message) {
//     console.log(message);
// }
  
// let ans = say('Hello');
// console.log('ans:', ans);  // Ans : undefined

// function Say2(msg){
//     return msg;
// }

// let ans2 = Say2("jii");
// console.log("ans2 : " + ans2); // ans2 : jii

/*
 functions implicitly return undefined if they don’t explicitly return a value.
Use the return statement to return a value from a function explicitly.
*/

// ** Anonymous Functions
let show = function() {
    console.log('Anonymous function');
};

show();

(function() {
    console.log('IIFE');
})();


// ** Arrow Functions

let multiply = (a,b) =>  a*b;