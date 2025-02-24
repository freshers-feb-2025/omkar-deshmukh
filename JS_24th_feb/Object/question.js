let obj = {
    a:100,
    b:200,
    title: "mu one"
}

// console.log(obj[title]);

for(it in obj){
    if(typeof obj[it] === "number"){
        obj[it] = obj[it]*2;
    }
}

// console.log(obj);
let obj2 = { 
    10: "apple", 
    11: "banana", 
    2: "cherry" 
};


// console.log(obj[a]);

console.log(obj2[10]);  // Output: "apple"
console.log(obj2[11]);  // Output: "banana"
console.log(Object.keys(obj2)); // Output: ['0', '1', '2']

obj2.forEach(element => {
    console.log({...element, country:"India"});
    console.log(element);
});

console.log(obj2);