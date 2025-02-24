let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 }
];

// Q1. return all name with capatial letter

for(let i=0;i<students.length;i++){
    // let studentName = students[i].name;
    // console.log(studentName);
    // console.log(studentName.toUpperCase());
    // console.log((students[i].name).toUpperCase());
}

// let mapResult = students.map(namee=> (namee.name).toUpperCase());
// console.log(mapResult);

// students.forEach((arr)=>{
//     console.log(arr.name);
// })

// Q2. Find all students who score more than 60 marks

let filterReault = students.filter((arr)=>{
    // if (arr.marks>60) {
    //     return arr.name;
    // }else{
    //     return "";
    // }
    return arr.marks > 60 && arr.rollNumber>15;
}).map((arr)=>{
    return arr.name;
})
// console.log(filterReault);

// Q3. Sum of all marks

let sumMark = students.reduce((acc,curr,i,students)=>{
    return acc+curr.marks;
},0);
console.log(sumMark);