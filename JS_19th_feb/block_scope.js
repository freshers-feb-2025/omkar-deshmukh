
// 1.BLock Scope
// {
//     let a = 10;
//     var b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);
// console.log(a); // reference error
// console.log(c);

// 2. Shawoding

var b = 100;
let a = 876;

{
    let a = 10;
    var b = 20;
    const c = 30;
    
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);
console.log(a);

let nhhh = $_nc;