
this.a = 5;

function abc (){
    console.log("function value " + this.a);
}

abc();

/*
1. Browser Env - O/P - 5
2. Node,js - undefined (top level is module exoirt not window)
*/
// console.log(this.a);

