let arr = [1,2,3,4,5];


// 1. Map

// function abc(i,j,arr){
//     return i*2+j;
// }

// let a=0;

// let product_5 = arr.map(index =>abc(index,a++,arr));

// console.log(product_5);
// let product_2 = arr.map((num,i,arr)=>{
//     return num*2+i;
// });
// console.log(product_2);


// 2.Filter

// let filter1 = arr.filter()



// 3. Reduce

let ans = arr.reduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);

// console.log(ans);


// 4. Map vs Foreach

let mapResult = arr.map((index)=>{
    return index+2;
});

console.log(mapResult);

let foreachResult = arr.forEach((i)=>{
    return i+2;
});
console.log(foreachResult);
console.log(arr);