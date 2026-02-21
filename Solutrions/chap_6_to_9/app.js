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
// var tableNum = 5;
// var tableNum = +prompt(`Enter a table Number`) || 5;
var tableNum = +prompt("Enter a table Number", "5");
document.writeln(`<h1>Table of ${tableNum}</h1>`);
document.writeln(`<p> ${tableNum} x 1 = ${tableNum * 1}  </p>`);
document.writeln(`<p> ${tableNum} x 2 = ${tableNum * 2}  </p>`);
document.writeln(`<p> ${tableNum} x 3 = ${tableNum * 3}  </p>`);
document.writeln(`<p> ${tableNum} x 4 = ${tableNum * 4}  </p>`);
document.writeln(`<p> ${tableNum} x 5 = ${tableNum * 5}  </p>`);

//5.
var sub1 = +prompt("Enter the subject one number");
var sub2 = +prompt("Enter the subject two number");
var sub3 = +prompt("Enter the subject three number");
var totalMarksEach = 100;
var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;
document.writeln("<table border='1'  >");

document.writeln("<tr>");
document.writeln("<th>Subject</th>");
document.writeln("<th>Total Marks</th>");
document.writeln("<th>Obtained Marks</th>");
document.writeln("<th>Percentage</th>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>English</td>");
document.writeln("<td>100</td>");
document.writeln("<td>" + sub1 + "</td>");
document.writeln("<td>" + sub1 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Math</td>");
document.writeln("<td>100</td>");
document.writeln("<td>" + sub2 + "</td>");
document.writeln("<td>" + sub2 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<td>Urdu</td>");
document.writeln("<td>100</td>");
document.writeln("<td>" + sub3 + "</td>");
document.writeln("<td>" + sub3 + "%</td>");
document.writeln("</tr>");

document.writeln("<tr>");
document.writeln("<th>Total</th>");
document.writeln("<th>300</th>");
document.writeln("<th>" + obtainedMarks + "</th>");
document.writeln("<th>" + percentage + "%</th>");
document.writeln("</tr>");

document.writeln("</table>");

//6.
