// const users = [
//   { firstName: "john", lastName: "Biden", age: 26 },
//   { firstName: "jimmy", lastName: "cob", age: 75 },
//   { firstName: "sam", lastName: "lewis", age: 50 },
//   { firstName: "Ronald", lastName: "Mathew", age: 26 },
//   { firstName: "james", lastName: "Mathew", age: 26 },
// ];
//fullanme print

// let fullanme = users.map((e) =>{
// return(e.firstName +" "+ e.lastName);
// })

// console.log(fullanme);

// age frequency

// let frequency = users.reduce((accumaltor,e) =>{
// let ageFrequency =
// accumaltor[e.age] = (accumaltor[e.age] || 0) + 1;
// add value..

// return accumaltor;

// },{});

// console.log(frequency);


// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

//    Q3.Print object having marks greater than 60 and rollNumber greater than 15.

// let stuGretar = student.filter((e) =>{
// return (e.marks > 60 && e.rollNumber > 15)
// });

// console.log(stuGretar);

// Print sum of marks of all the student

// let stuSum = student.reduce((acc ,e) =>{
// acc  += e.marks;
// return acc;
// },0);

// console.log(stuSum);

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"Cob",age:75},
//     {firstName:"Sam",lastName:"Lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},
//   ];
// //   .List of all firstName from array whose age is more than 30

// let userAge = users.filter((e) =>{
//    return e.age > 30;

// }).map((e) =>{
//     return e.firstName;
// })

// console.log(userAge);

// Print the names of students who scored more than 60

// let student = [
//   { name: "Smith", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "John", rollNumber: 16, marks: 35 },
//   { name: "Tiger", rollNumber: 7, marks: 55 },
// ];

// let Morethan = student.filter((e) => {
//   return(e.marks >60);
// }).map((e) =>{
//     return e.name;
// })

// console.log(Morethan);

// Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// let student = [
//   { name: "Smith", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "John", rollNumber: 16, marks: 35 },
//   { name: "Tiger", rollNumber: 7, marks: 55 },
// ];

// let toatalMarks = student.map((e) =>{
//     if(e.marks < 60){
//        e.marks += 20;

//     }
//     return e;

// }).filter((e) => {
//    return e.marks > 60 ;
// }).reduce((acc , e) =>{
//     acc +=e.marks;
//     return acc;
// }, 0)

// console.log(toatalMarks);

//   .You are given an array of product objects, each with a name,
// price, and discount percentage. Your task is to filter the products
// that have a discount and calculate the total discount amount.

// const products = [
//   { name: "Milk", price: 50, discount: 10 }, // 10% discount
//   { name: "Tea", price: 30, discount: 20 }, // 20% discount
//   { name: "Rusk", price: 40, discount: 0 }, // No discount
//   { name: "Cup", price: 60, discount: 15 }, // 15% discount
// ];

// let dis = products.reduce(( acc , e) => {
//     let discount = (e.price / 100) * e.discount;
//     acc += discount
//     return acc;
// } , 0)

// console.log(dis);

//  start api fetch

// let api = "https://api.github.com/users/rlavinsh";

// let img = document.getElementById("avatar");

// let stromg = document.querySelector("strong");

// async function avatar() {
//   let fecthApi = await fetch(api);
//   let parsed = await fecthApi.json();

//   img.setAttribute("src", parsed.avatar_url);

//   stromg.innerText = parsed.login;
//   // console.log(parsed.name);
//   // console.log(parsed.avatar_url);
// }

// avatar();
