// Scope means where variables can be accessed.

// There are 3 types of scope.

// 1️⃣ Global Scope
// Variable declared outside functions.

// let UserName = "Muhammad-Muzammil"
// function show() {
//     alert(`Hello `+ UserName)
// }
// show()

// 2️⃣ Function Scope
// Variable declared inside function.
// function printAge(){
//     let age = 19;
//     console.log(age)
// }
// printAge()
// console.log(age)

// 3️⃣ Block Scope
// Variables declared with let or const inside {}.
// if(true){
//  let x = 10;
// }

// console.log(x);


//Hosting
// console.log(a)
// var a =15   //output undefine

// var a;
// console.log(a)
// a=14  //output undefine


// sayHello();

// function sayHello(){
//  console.log("Hello");
// }

// carName = "Volvo";
// console.log(carName)
// let carName;

// carName = "Volvo";
// console.log(carName) 
// const carName;

carName = "Volvo";
console.log(carName) 
var carName;