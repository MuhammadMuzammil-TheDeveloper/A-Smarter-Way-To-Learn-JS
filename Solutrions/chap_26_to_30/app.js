// //1.
// var num = +prompt(`Enter a positive Number`);
// console.log(num)
// console.log(Math.round(num))
// console.log(Math.ceil(num))
// console.log(Math.floor(num))

//2.
// var num = +prompt(`Enter a negative Number`);
// console.log(num)
// console.log(Math.round(num))
// console.log(Math.ceil(num))
// console.log(Math.floor(num))

// //3.
// var value = Math.abs(-4)
// console.log(value)

//4.
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Dice Value: " + diceValue);

//5.
// var coin = Math.floor(Math.random()*2 ) +1;
//  document.writeln(`Coin - ${coin}`)
// if(coin == 1){
//     document.writeln(`random coin value: HEAD`)
// }else{
//     document.writeln(`random coin value: Tails`)
// }

// //6.
// var randomNumber = Math.floor(Math.random()*100)+1
// document.writeln(`random number between 1 and 100: ${randomNumber}`)

//7.
// var userWeight = prompt(`Enter your Age`)
// var chect = parseInt(userWeight)
// var weight = parseFloat(userWeight)
// document.writeln(`The Weight of the user is ${weight} kilograms.`)

//8.
var usreInput = +prompt(`Enter a number between 1 and 10`);
var scerectNumber = Math.floor(Math.random()*10)+1;
if(usreInput === scerectNumber){
    document.writeln(`You Win`)
}else{
    document.writeln(`Try Again`)
}