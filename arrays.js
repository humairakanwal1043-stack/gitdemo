// let students=["zaroon","ibrahim","ALi","ahmed"]

// console.log(students);
// console.log(students[1]);
// console.log(students[2]);

//push or pop array ke last se element add or delete krega
// students.push("sukaina")//add krega


// console.log(students);
// students.pop()//last se delete krdega
// console.log(students);

//shift--first element ko remove krega

// students.shift();
// console.log(students);

// //unshift=
// students.unshift("hussain")
// console.log(students);

//concat

let boys=["Ali","Ahmed"];
let girls=["Sara","Ayesha"];

let students=boys.concat(girls)
// console.log(students);

//join() array ki values ko string mein convert hai
// let result=students.join(",");
// // console.log(result);
// //sort
// console.log("After sorting");

// students.sort()
// console.log(students);
// //reverse
// console.log("After reverse");
// students.reverse()
// console.log(students);


// for(let i=0;i<students.length;i++){
// console.log(students[i])
// }


let marks=[
[80,75,98],
[65,75,85],
[90,88,95]
]
// console.log(marks[2][2]);
//loop ke through access
for(let i=0;i<marks.length;i++){
    for(let k=0;k<marks[i].length;k++){
        console.log(marks[i][k])
    }
}