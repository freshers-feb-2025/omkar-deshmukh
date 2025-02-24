// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");
// console.log("Hi");


// let str = " sic ndcbkjd nicksdc "
// // console.log(str.trim());

// let str2 = "omkar";
// console.log(str2.slice(-1,2));

let obj = [
    {name: "omkar"},
    {name: "omkk"},
];

let upadteted = obj.map((arr)=> ({...arr, country:"India"}));
// console.log(upadteted);

let arr = [];
let i=0;
obj.forEach(arrr => {
    arr[i++] = {...arrr, country:"India"};
});

console.log(arr);

// obj.forEach(arrr=>{
//     obj[arrr] = {...arrr, country: "India"};
// })
// console.log(obj);

// console.log(arr);

let marks = [
    {mark : 40},
    {mark: 78},
    {mark: 22}
];

let totalSum = marks.reduce((acc,curr)=>{
    return acc+ curr.mark;
},0);

console.log(totalSum);
