//1.
// var arr = [];/
// var arr=[[],[],[]]
// var arr = [];

// arr[0] = [1, 23, 444, 4242];
// arr[1] = [3, 4];

// console.log(arr); // [[1,2], [3,4]]

//2.
// var arr = [];
// arr[0] = [0, 1, 2, 3];
// arr[1] = [1, 0, 12];
// arr[2] = [2, 1, 0, 1];
// console.log(arr);

//3;
// for (var i = 1; i <= 10; i++) {
//     document.writeln(`. ${i} <br />`)
// }

//4.
// var tableNum = +prompt("Enter a table num");
// var tableLength = +prompt("Enter a table length");

// document.writeln(`<h1>Table of ${tableNum}</h1>`)
// for (var i = 1; i <= tableLength; i++) {
//     document.writeln((`${tableNum} X ${i} = ${tableNum * i} <br />`))
// }


// //5.
// var fruits = ['apple', 'banana', 'mango','orange', 'strawberry']
// for (var i =0; i<fruits.length;i++){
//     document.writeln(`Element at index ${i} is ${fruits[i]} <br />`)
// }

//6.
// document.writeln(`Counting`)
// for (var i = 1; i <= 15; i++) {
//     document.writeln(` ${i}`)
//  }
//  document.writeln(`Reverse Counting`)
// for (var i = 10; i >= 1; i--) {
//     document.writeln(` ${i}`)
//  }
//  document.writeln(`Even Counting`)
//  for (var i = 0; i <= 20; i++) {
//     if(i%2==0){
//         document.writeln(` ${i}`)
//     }
// }
//  document.writeln(`Odd Counting`)
//  for (var i = 0; i <= 20; i++) {
//     if(i%2==!0){
//         document.writeln(` ${i}`)
//     }
// }
//  document.writeln(`Series Counting`)
//  for (var i = 1; i <= 20; i++) {
//     if(i%2==0){
//         document.writeln(` ${i}K`)
//     }
// }

//7.
// var A = ["cake","apple pie","cookie","chips","patties"];

// var userSearch = prompt("Enter to ABC Bakery. What do you want to order sir/ma'am?")
// .toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (userSearch === A[i]) {
//         document.writeln(A[i] + " is available at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.writeln("We are sorry. " + userSearch + " is not available in our bakery");
// }


// //8.
// var A =[24,53,78,91,12,10001];
// var isLargest = A[0];
// for(var i =0;i<A.length;i++){
//     if(A[i]>isLargest){
//         isLargest =A[i]
//     }
// }
// document.writeln(`Largest Number of Array: ${isLargest}`)


// //9.
// var A =[24,53,78,91,12,10001];
// var isSmallest = A[0];
// for(var i =0;i<A.length;i++){
//     if(A[i]<isSmallest){
//         isSmallest =A[i]
//     }
// }
// document.writeln(`Smallest Number of Array: ${isSmallest}`)

//10.
// 1st Method
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.writeln(i + "<br>");
    }
}
// 2nd Method
for (var i = 5; i <= 100; i += 5) {
    document.write(i + "<br>");
}