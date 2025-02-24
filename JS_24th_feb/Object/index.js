
let user = {
    name : "omkar",
    age: 23,
    "is good" : true
}

// for(it in user){
//     console.log(user[it]);
// }


// let user2 = {
//     dance: true,
//     ...user,
// }

// console.log(user2);

let a = {
    greet: "hey",
}

let b = {...a};
b.greet = "Hello";
// console.log(a.greet);
// console.log(b.greet);