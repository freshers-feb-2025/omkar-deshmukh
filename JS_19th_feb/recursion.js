
function solve(n){
    if(n==1){
        return 1;
    }

    let ans = n*solve(n-1);
    return ans;
}

let anss = solve(5);
// console.log(anss);

function Factorial(n){
    if(n==1){
        return 1;
    }
    let num = n*Factorial(n-1);
    return num;
}

console.log(Factorial(10));

let numsep = 1_445_595_43;
// console.log(numsep);

let num2 = 0.000_001;
// console.log(num2);

// console.log(parseInt('FF',16));