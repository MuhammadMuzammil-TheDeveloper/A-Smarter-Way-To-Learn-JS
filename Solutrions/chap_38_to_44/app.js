// //1.
// function power( a, b ){
//     let result =1;
//     for(var i=1; i<=b; i++){
//         result = result * a;
//     }
//     return result
// }
// var powerCheck = power(2,3)
// console.log(powerCheck)

//2.
// var userInput = +prompt(`Enter a year`);
// function checkLeapYear(userInput){
//     if((userInput % 4 === 0 && userInput %100 != 0 )|| userInput % 400 ===0){
//         document.writeln(`Its leap Year ${userInput}`)
//     }else{
//         document.writeln(`Its Not leap Year ${userInput}`)
//     }
// }
// checkLeapYear(userInput)

// //3.
// function calS(a,b,c){
//  return  (a+b+c)/2;
// }
// function calArea(a,b,c){
// var s = calS(a,b,c)
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     return area;
// }
// document.writeln(`Area = ${calArea(10,10,10)}`)

//4.
// var sub1 = +prompt("Enter marks of subject 1");
// var sub2 = +prompt("Enter marks of subject 2");
// var sub3 = +prompt("Enter marks of subject 3");

// function mainFunc(sub1, sub2, sub3) {

//     function calAvg() {
//         return (sub1 + sub2 + sub3) / 3;
//     }

//     function calPerc() {
//         let total = 300;
//         return ((sub1 + sub2 + sub3) / total) * 100;
//     }

//     var avg = calAvg();
//     var per = calPerc();

//     document.writeln(`Average = ${avg.toFixed(2)} <br>`);
//     document.writeln(`Percentage = ${per.toFixed(2)}%`);
// }

// mainFunc(sub1, sub2, sub3);                   

//5.
// function myIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
//     return -1; // if not found
// }

// let text = "Hello World";
// console.log(myIndexOf(text, "o")); 
// console.log(myIndexOf(text, "W")); 
// console.log(myIndexOf(text, "z")); 

//6.
// let text = "Hello World";

// function deleteVowel(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase();
//         if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
//             result += str[i];
//         }
//     }
//     return result;
// }

// let newText = deleteVowel(text);
// console.log(newText); 

//7.
function checkVowel(text){
let count = 0;
for(var i=0; i<text.length; i++){
    let pair = text[i].toLowerCase() + text[i+1].toLowerCase();
    switch (pair) {
            case "aa":
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ee":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "ii":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "oo":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
            case "uu":
                count++;
                break;
    } 
}
return count;
}
var text = `hello world kese ho sab aaa ae`
console.log(checkVowel(text))