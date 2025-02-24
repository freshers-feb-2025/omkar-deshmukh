
var obj = {name: "omkar"};

function greet(a,b){
    return "Hello " + this.name + "  " + a + "  " +b;
}

console.log(greet());

//Q. I want to access name inside obj

console.log(greet.call(obj,10,20));