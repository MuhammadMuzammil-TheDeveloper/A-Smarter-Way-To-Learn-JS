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
// function sqr(num){
//     document.writeln(`Square ${num * num}`)
// }
// var num = +prompt(`Enter a number`)
// sqr(num)

// //6.
// function calFact(num){
//     var result = 1;
//     for(var i=1; i<=num; i++){
//         result = result * i;
//     }return result
// }
// var value = calFact(5);
// console.log(value)

// //7.
// function count(start, end){
//     for(var i = start; i<=end; i++){
//         document.writeln(`${i}`)
//     }
// }
// count(12, 90)


//8.
// function calHypo(p, b){
//  function sqr(num){
//     return num * num;
//  }
//  var b = sqr(b)
//  var p = sqr(p)
//  var hypo = b+p
//     return Math.sqrt(hypo);

// }
// console.log(calHypo(3,4))

// //9.
// function calArea(width, height){
//     var a = width * height;
//     return a
// }
// var width = +prompt(`Enter a width`)
// var height = +prompt(`Enter a height`)
// console.log(calArea(width, height))

// //10.
// function checkPlaindrome(){
//     var word = 'madam'
//     var check ='';
//     for(var i=word.length-1; i>=0; i--){
//         check += word[i]
//     }
//     console.log(check)
//     if(word == check){
//         console.log(`Ots palomdrome`)
//     }else{
//         console.log(`Itsnot checkPlaindrome`)
//     }
// }
// checkPlaindrome()



// function checkPalindrome(word){
//     return word === word.split("").reverse().join("");
// }

// console.log(checkPalindrome("madam")); 

// //11.
// var para = `the quick brown fox`
// function toCapitalize(para){
// var eachWord = para.split(" ")
// for(var i =0;i<eachWord.length;i++){
//     eachWord[i] = eachWord[i][0].toLocaleUpperCase() + eachWord[i].slice(1)
// }
// para = eachWord.join(" ")
// console.log(para)
// }
// toCapitalize(para)

//12.
//  var para = `Web Development Tutorial`
// function tofindlargest(para){
// var eachWord = para.split(" ")
// var largest = para[0];
// for(var i =0;i<eachWord.length;i++){
// if(eachWord[i].length >largest.length){
//     largest = eachWord[i]
// }
// }
// console.log(largest)
// }tofindlargest(para)

//13.   
// function check(p1, p2){
//  var count = 0;
// for(var i=0; i<p1.length;i++){
//      if(p1[i] == p2){
//     count++
//  }
// }
// console.log(count)
// }
// var p1 = prompt(`enter a string`)
// var p2 = prompt(`enter a letter`)
// check(p1,p2)