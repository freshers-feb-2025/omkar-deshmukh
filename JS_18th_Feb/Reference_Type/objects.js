let obj = {
    name: "Love",
    age: 25,
    weight: 85,
    height: "6ft 1in",
    greet: function(){
        console.log("hello jee kaise ho saare");
    }
};

// for(let key in obj) {
//     console.log(key, " ", obj[key]);
// }

console.log(obj)
obj.greet();

let obj2 = obj;
// THis is shallow copy
/*
firstly obj is reference that is pointing to real memory address of onj prsent in heap memory
1. obj - stack memory
2. real object is in heap memory

when obj2 = obj;
thrn it create new obj2 object in stack memory and it's pointing to heap memory where object decleartion is prsent
*/

