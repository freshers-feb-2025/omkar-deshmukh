// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// let fruit = fruits.at(2);
// console.log(fruit);

// fruits.pop();
// console.log(fruits.join('&  '));


// Concating array
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);

// every

// const chechEven = (n) => n%2 ==0;

// const evenArray = [6,76,45,776];
// console.log(evenArray.every(chechEven));


// flat()   -> return new array
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// // console.log(arr2.flat());
// // console.log(arr2.flat(2));
// const arr3 = arr2.flat(Infinity);
// console.log(arr3);

// console.log(arr2);

// flatMap

// let flatarraymap = [1,2,3,2];
// let res = flatarraymap.flatMap((n) => (n === 2 ? [2,2] : 1));
// console.log(res);

// const myArr = [[1,2],[3,[4,5],6]];

// const newArr = myArr.flat(2);
// console.log(newArr);


let mpaArray = ['sf','omkar','gaurav'];

// console.log(mpaArray.map((n)=>(console.log(n + " Hey !"))));
// console.log(mpaArray.forEach((n) =>(console.log(n + " foreach !"))));

let mparr = [1,2,3,4,5];

let sample = mparr.forEach((n) => (console.log(n*2)));
console.log(sample);
console.log(mparr);