const user = {
    firstName: "omkar",
    getName(){
        const firstName = "omkar2";
        return this.firstName;
        // return firstName;
    },
};
// let name1 = user.getName();
// console.log(name1);
// console.log(user.getName());

// Question 8 - What's the Output ?

let radius = 10;

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
// console.log(shape.diameter());
// console.log(shape.perimeter());

let num = 5+"7";

console.log(typeof num);
