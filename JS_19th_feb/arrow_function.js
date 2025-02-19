function fun(){
    let user = "omkar";
    // console.log(this.user);  // undefined
    // console.log(this); // output: global object
}

// fun();


// const users = () => {
//     let user = "omkar";
//     console.log(this.user);  // undefined
// }

// users();

// function assume(){
//     let name = "omkar";
//     {
//         console.log(this.name); // undefined
//     }
// }

// assume();

// const op =  () => {
//     let name = "omkar";
//     {
//         console.log(this.name); // undefined
//     }
// }

// op();

// We can use this in arrow function using callbacks

// function assume2(){
//     this.name = "omkar";
//     setTimeout( () => {
//         console.log(this.name);
//     },3000);

//     console.log("Hey !")
// }

// assume2();

// function Timer() {
//     this.seconds = 0;
//     setInterval(() => {
//       this.seconds++;
//       console.log(this.seconds); // Correctly refers to `this` of Timer
//     }, 1000);
// }
  
// new Timer();
  

// ** 2. Deceleration of Arrow functions

// const add = (a, b) => a + b;
// console.log(add(3, 5)); // 8


// const ans  = x => x*x;
// console.log(ans(87)); // 7569  // this is implict return

// const square = x => x * x;
// console.log(square(4)); // 16

const getUser = () => {
    return { name: "Omkar", age: 24 };
};
// console.log(getUser()); // { name: "Omkar", age: 24 }

console.log("Start");

// Simulating asynchronous operations using setTimeout
setTimeout(() => {
    console.log("1. Fetching user data...");
    setTimeout(() => {
        console.log("2. Fetching orders for user...");
        setTimeout(() => {
            console.log("3. Fetching order details...");
            setTimeout(() => {
                console.log("4. Processing payment...");
                setTimeout(() => {
                    console.log("5. Payment successful!");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

console.log("End");



  


