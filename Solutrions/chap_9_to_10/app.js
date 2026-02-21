//1.

// var ch = prompt("Enter a character");
// var code = ch.charCodeAt(0);

// // check number
// if (code >= 48) {
//   if (code <= 57) {
//     document.writeln("It is a NUMBER");
//   } else if (code >= 65) {
//     if (code <= 90) {
//       document.writeln("It is an UPPERCASE letter");
//     } else if (code >= 97) {
//       if (code <= 122) {
//         document.writeln("It is a LOWERCASE letter");
//       } else {
//         document.writeln("Special Character");
//       }
//     } else {
//       document.writeln("Special Character");
//     }
//   } else {
//     document.writeln("Special Character");
//   }
// } else {
//   document.writeln("Special Character");
// }

//2.
// var int1 = +prompt(`Enter a num1`);
// var int2 = +prompt(`Enter a num2`);
// if (int1 == int2) {
//   document.writeln(`The integer '${int1}' and integer'${int2}' are equal:`);
// } else if (int1 > int2) {
//   document.writeln(`The integer '${int1}' is greater than integer '${int2}'`);
// } else if (int1 < int2) {
//   document.writeln(`The integer '${int1}' is smaller than integer '${int2}':`);
// } else {
//   document.writeln(`Its not a valid number`);
// }

//3.
// var num = +prompt(`Enter a num`);
// if (num >= 1) {
//   document.writeln(`Number is positive ${num}`);
// } else if (num <= -1) {
//   document.writeln(`Number is Negative ${num}`);
// } else if (num == 0) {
//   document.writeln(`Number is Zero ${num}`);
// } else {
//   document.writeln(`Its not a valid number ${num}`);
// }

//4.
// var char = prompt(`Enter a vowel characters`);
// if (char.length == 1) {
//   if (char == "a") {
//     document.writeln(`Character is vowel ${char}`);
//   } else if (char == "e") {
//     document.writeln(`Character is vowel ${char}`);
//   } else if (char == "i") {
//     document.writeln(`Character is vowel ${char}`);
//   } else if (char == "o") {
//     document.writeln(`Character is vowel ${char}`);
//   } else if (char == "u") {
//     document.writeln(`Character is vowel ${char}`);
//   } else {
//     document.writeln(`Character is not vowel ${char}`);
//   }
// } else {
//   document.writeln(`The Character length must be 1 "${char}"`);
// }

//5.
// var savePass = `admin123`;
// var userPass = prompt(`Enter a password`);
// if (userPass == "") {
//   document.writeln("Please Enter your password");
// } else if (userPass == savePass) {
//   document.writeln(
//     `Correct! The password you entered matches the original password`,
//   );
// } else {
//   document.writeln("your password is incorrect");
// }

//6.
// var greeting;
// var hour = 19;
// if (hour < 18) {
//   greeting = "Good day";
//   document.writeln(`Greeting: ${greeting}`);
// } else {
//   greeting = "Good evening";
//   document.writeln(`Greeting: ${greeting}`);
// }

//7.
var userTime = +prompt(`Enter a Time`);
var time = userTime * 100;
if (time >= 0 && time < 1200) {
  document.writeln(`Good Morning`);
} else if (time >= 1200 && time < 1700) {
  document.writeln(`Good afternoon`);
} else if (time >= 1700 && time < 2100) {
  document.writeln(`Good evening`);
} else if (time >= 2100 && time <= 2359) {
  document.writeln(`Good night`);
} else {
  document.writeln(`Its not valid Time`);
}
