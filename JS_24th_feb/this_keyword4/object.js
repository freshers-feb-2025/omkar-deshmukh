// let user = {
//     name: "omkar",
//     age: 23,

//     getdetail(){
//         console.log(this.name); 
//         return this.name;
//     },

//     getAge(){
//         console.log(this.age);  
//     }
// }

// let name1 = user.getdetail();
// console.log(name1);

// let user2 = {
//     name: "omkar",
//     age: 23,

//     childobj: {
//         newName: "abc",
//         getdetail(){
//             console.log(this.newName + "  " + this.name); 
//         },
    
//     },
//     getAge(){
//         console.log(this.age);  
//     }
// }

// user2.childobj.getdetail();
let user3 = {
    name: "omkar",
    age: 23,

    // getdetail: () => {
    //     console.log(this.name); // undefined 
    //     // Beacouse, this function value comes from parent function here parent function is user3 and it's in global scope
    // }, 

    getDetail(){
        const nestedArrow = () => console.log(this.name);
        nestedArrow();
        // Now this will point to parent function(getDeatil) and this parent function is in user3
    },

    getAge(){
        console.log(this.age);  
    }
}

user3.getDetail();

