// function add(x, y) {
//     console.log(new.target);
//     return x + y;
// }
  
// let result = add(10, 20);  // undefined
// let obj = new add(10, 20); // function : add
// console.log(obj); 


function add2(x,y){
    console.log(new.target);

    this.a = x;
    this.b = y;
    this.sum = x+y;
}

let result3 = new add2(10,20);
console.log(result3);
console.log(result3.sum);