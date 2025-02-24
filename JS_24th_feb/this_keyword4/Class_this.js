class user{

    age = 12;

    constructor(n){
        this.name = n;
    }

    getName(){
        console.log(this.name + "  " +  this.age);
    }
}

const user1 = new user("omkar");
user1.getName();