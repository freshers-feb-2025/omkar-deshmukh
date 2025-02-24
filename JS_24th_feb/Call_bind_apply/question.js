const animal = [
    {species: "lion",name : "king"},
    {species: "wheal", name: "queen"},
];

function printAnimal(i){
    Print = function(){
        console.log('#' + i + "  " + this.species + "  " + this.name);
    }
    Print();
}

for(let i=0;i<animal.length;i++){
    printAnimal.call(animal[i],i);
}