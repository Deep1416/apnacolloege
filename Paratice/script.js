// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// h1 = document.querySelector("h1");

// function changeColor(color , dealy , nextColorChange) {
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextColorChange();
//     }, dealy)
// }

// changeColor("red" ,1000 , () =>{
//     changeColor("blue" , 1000 , () =>{
//         changeColor("yello" , 1000 ,()=>{
//             changeColor("green" , 1000 , ()=>{
//                 changeColor("violet" , 1000)
//             })
//         })
//     })
// } );
// changeColor("blue" , 2000);
// changeColor("pink" ,3000);

// let api = "https://www.boredapi.com/api/activity/";

// let p = document.querySelector("p");

// async function randomWork() {
//   let fecthApi = await fetch(api);
//   let parsed = await fecthApi.json();

//   console.log(parsed.activity);
//   p.innerText = parsed.activity;
// }

// setInterval(randomWork ,1000);

// const aob = 
// [
//     { framework: 'React.JS', website: 'Paypal' },
//     { framework: 'React.JS', website: 'Tesla' },
//     { framework: 'Angular', website: 'Google' },
//     { framework: 'Vue.JS', website: 'Vue' },
//     { framework: 'JavaScript', website: 'inblack67' },
// ]
// function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     constructor(width) {
//         this.width = width;
//     }
//     Getter
//     get area() {
//         return this.calcArea();
//     }
//     Method
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(20, 30);

// console.log(square.area); 

// for doubt session
// function main(){
//     console.log('A');
//     setTimeout(
//         function print(){ console.log('B'); }
//         ,0);
//     console.log('C');
// }
// main();


// console.log(0.1 + 0.2 === 0.3);
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return () => {
//             // Inner function context
//             console.log(this.constructor.name); // User(Get it from the outer context)
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// let user = new User('John', 25);
// let profile = user.getProfile();
// profile();

// var y = 1;
// if (function f(){}) {
//     y += typeof f;
// }
// console.log(y);

// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }
// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var car = Vehicle("Honda", "white", "2010", "UK");
// console.log(car);
// 3.Given an array of strings, use reduce to create an object that counts the occurrences of each string in the array.

//  const strings = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// Output: 

// {
//   "apple": 3,
//   "banana": 2,
//   "cherry": 1
// }

// let ferquency = strings.reduce((acc , e) =>{
// acc[e] = (acc[e] || 0) + 1;
// return acc;
// }, {});

// console.log(ferquency);