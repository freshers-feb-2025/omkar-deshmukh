async function getData() {
    return "abc";
}

// const data = getData();
// console.log(data);

// data.then((res) => console.log(res));

const p1 = new Promise((resolve,rejec) =>{
    setTimeout(() => {
        resolve("Promise resolved p1 !");
    },3000);
});

const p2 = new Promise((resolve,rejec) =>{
    setTimeout(() => {
        resolve("Promise resolved p2 !");
    },7000);
});


// function resPromise(){
//     p.then((res) => console.log(res));
//     console.log("Hi");
// }

// resPromise();



// async function resPromise2(){
//     const val = await p;
//     // console.log(p.then((res) => console.log(res)));
//     console.log(val);
//     console.log("HI");
// }

// resPromise2();

async function fn2(){
    const val1 = await p1;
    console.log(val1);
    console.log("Hi1");

    const val2 = await p2;
    console.log(val2);
    console.log("Hi 2");
}

function abc(){
    console.log("abc");
    return 87;
}

const a = abc();
console.log(a);

fn2();