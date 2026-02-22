//1.
var studentName = [];
studentName[0] = "muhammad-muzammil";
studentName[1] = "muhammad-ahmed";
//2.
var students = new Array();
students[0] = "Ahmed";
//3.
var stringData = ["Ali", "Ahmed"];
//4.
var numberData = [12, 13, 14];
//5.
var booleanData = [true, false];
//6.
var mixedData = ["ali", 12, true];
// //7.
// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS"];
// document.writeln(`<h1>Qualifications</h1>`);
// document.writeln(`<ol>`);
// document.writeln(`<li>${qualification[0]}</li>`);
// document.writeln(`<li>${qualification[1]}</li>`);
// document.writeln(`<li>${qualification[2]}</li>`);
// document.writeln(`<li>${qualification[3]}</li>`);
// document.writeln(`<li>${qualification[4]}</li>`);
// document.writeln(`<li>${qualification[5]}</li>`);
// document.writeln(`</ol>`);

//8.
// var studentDetails = ["ali", "ahmed", "muzammil"];
// var studentMarks = [290, 450, 330];
// var totalMarks = 500;
// var perc = (studentMarks[0] / totalMarks) * 100;
// document.writeln(
//   `<h1>Score of ${studentDetails[0]} is ${studentMarks[0]}.Percentage${perc}%.
//   </h1>`,
// );
// var perc = (studentMarks[1] / totalMarks) * 100;
// document.writeln(
//   `<h1>Score of ${studentDetails[1]} is ${studentMarks[1]}.Percentage${perc}%.
//   </h1>`,
// );
// var perc = (studentMarks[2] / totalMarks) * 100;
// document.writeln(
//   `<h1>Score of ${studentDetails[2]} is ${studentMarks[2]}.Percentage${perc}%.
//   </h1>`,
// );

//9.
// var colorData = ["orange", "banana"];
// console.log(colorData);
// var newColorName = prompt(`Enter you color to add beginning of array`);
// colorData.unshift(newColorName);
// console.log(colorData);

// var newColorName = prompt(`Enter you color to add end of array`);
// colorData.push(newColorName);
// console.log(colorData);

// colorData.push(`yellow`);
// colorData.push(`red`);
// console.log(colorData);

// colorData.shift();
// colorData.pop();
// console.log(colorData);

// var indexByUser = +prompt(`Enter a index number where you want to add color`);
// var newColorToIndex = prompt(`Enter a color`);
// colorData[indexByUser] = newColorToIndex;
// console.log(colorData);

// var index = +prompt(`Enter a index number`);
// var number = +prompt(`How many number you want to delete`);
// var forDelete = colorData.splice(index, number + index);
// console.log(colorData);

//10.
// var studentRecords = [100, 333, 21, 3];
// var userStudentInfo = +prompt(`Enter a new number`);
// studentRecords.push(userStudentInfo);
// studentRecords.sort(function (a, b) {
//   return a - b;
// });
// console.log(studentRecords);

//11.
// var cityName = [`karachi`, `LAhore`, `Islamabad`, `Quetta`, `PEshawar`];
// var selectedCity = cityName.slice(2, 4);
// console.log(cityName);
// console.log(selectedCity);

//12.
// var arr = [`This`, `is`, `my`, `cat`];
// var newArr = arr.join(" ");
// console.log(newArr);

//13.
// var newArr = ["ali", "ahmed"];
// var newData = prompt(`Enter a newData`);
// newArr.push(newData);
// console.log(newArr);
// newArr.shift();
// console.log(newArr);

//14.
// var newArr = ["ali", "ahmed"];
// var newData = prompt(`Enter a newData`);
// newArr.push(newData);
// console.log(newArr);
// newArr.pop();
// console.log(newArr);

//15.
var phoneCompany = [`Apple`, `samsung`, `Motorola`, `Nokia`];
document.write(`<select>`);
document.write(`<option>${phoneCompany[0]}</option>`);
document.write(`<option>${phoneCompany[1]}</option>`);
document.write(`<option>${phoneCompany[2]}</option>`);
document.write(`<option>${phoneCompany[3]}</option>`);
document.write(`<select>`);
