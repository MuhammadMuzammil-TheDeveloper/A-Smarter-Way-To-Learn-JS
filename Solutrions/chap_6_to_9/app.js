//1.
// var a = +prompt("Enter the value of a");
var a = 10;
document.writeln(`<h1>Result:</h1>`);
document.writeln(`<p>The value of a is: ${a}</p>`);
document.writeln(`<p>--------------------------</p>`);
++a;
document.writeln(`<p>The value of ++a: ${a}</p>`);
document.writeln(`<p>Now the value of a is ${a}</p>`);
document.writeln(`<p>The value of a++: ${a}</p>`);
a++;
document.writeln(`<p>Now the value of a is ${a}</p>`);
--a;
document.writeln(`<p>The value of --a: ${a}</p>`);
document.writeln(`<p>Now the value of a is ${a}</p>`);
document.writeln(`<p>The value of a--: ${a}</p>`);
a--;
document.writeln(`<p>Now the value of a is ${a}</p>`);

//2.
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.writeln(`<h1>Result: ${result}</h1>`);
//--a =1;
//--a- --b= 1
//--a- --b+ ++b=2
// --a- --b+ ++b+b--=3

//3.
var userAge = prompt("Enter your Name:");
alert(`welcome ${userAge};`);

//4.
var tableNum = 5;
var tableNum = +prompt(`Enter a table Number`);
document.writeln(`<h1>Table of ${tableNum}</h1>`);
document.writeln(`<p> ${tableNum} </p>`);
