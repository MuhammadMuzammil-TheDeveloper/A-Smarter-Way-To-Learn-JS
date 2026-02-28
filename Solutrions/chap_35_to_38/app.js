// //1.
// function showCurrentDate(){
//     var currentDate = new Date();
//     console.log(currentDate)
// }
// showCurrentDate()

//2.
// function greetUser(){
// var firstName = prompt(`Entwer a firstName`)
// var LastName = prompt(`Entwer a LastName`)
// alert(firstName+LastName)
// }
// greetUser()

//3.
// function sumOf(){
//   var num1 = +prompt(`Entwer a num1`)
// var num2 = +prompt(`Enter a num2`)
// console.log(num1+num2)
// }
// sumOf()

// //4.
// function cal(num1, opt, num2){
//     if(opt == `+`){
//         document.writeln(`ADD: ${num1 +num2}`)
//     }
//     else if(opt == `-`){
//         document.writeln(`SUM: ${num1 - num2}`)
//     }
//     else if(opt == `*`){
//         document.writeln(`MUL: ${num1 * num2}`)
//     }
//     else if(opt == `/`){
//         document.writeln(`DIV: ${num1 / num2}`)
//     }else{
//         alert(`Invalid Opt`)
//     }
// }
// var num1 = +prompt(`Enter a num1`)
// var opt = prompt(`Enter Operator  - * /`)
// var num2 = +prompt(`Enter a num2`)
// cal(num1, opt, num2)

//5.
function sqr(num){
    document.writeln(`Square ${num * num}`)
}
var num = +prompt(`Enter a number`)
sqr(num)