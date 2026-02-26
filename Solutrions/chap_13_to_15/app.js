//1.
// var firstName = prompt(`Enter a FirstName `);
// var lastName = prompt(`Enter a LastName `);
// alert(firstName + lastName);

//2.
// var favPhone = prompt(`Enter a Favorite Phone Brand`);
// document.writeln(`<h1>My Favorite Phone is: ${favPhone}</h1>`);
// document.writeln(`<h1>My Favorite Phone is: ${favPhone.length}</h1>`);

//3.
// var city = `Pakistan`;
// console.log(city.indexOf("n"));

//4.
// var city = `Pakistan`;
// console.log(city.lastIndexOf("a"));

//5.
// var word = `Pakistan`;
// var result = word.charAt(3);
// document.writeln(`Character at index 3 is: ${result}`)

//6.
// var firstName = prompt(`Enter a FirstName `);
// var lastName = prompt(`Enter a LastName `);
// // alert(firstName + lastName);
// var result = firstName.concat(lastName)
// document.writeln(`result: ${result}`)


//7.
// var word = "Hyderabad";
// for(var i=0; i<word.length; i++){
//     if(word.slice(i, i+5)=="Hyder"){
//         var part1 = word.slice(0, i);
//         var part2 = word.slice(i+5);
//         word = part1+ "Islam"+part2;
//     }
// }
// document.writeln(word)

//8.
// var message = `Ali and Sami are best friends. They p and lay cricket and football together.`;
// var newMessage = message.replace(`and`, `&`)
// var newMessage = message.replaceAll(`and`, `&`)
// console.log(newMessage)

//9.
// var value = `472`;
// var valueConvert = Number(value)
// console.log(valueConvert)
// console.log(typeof(value))
// console.log(typeof(valueConvert))


//10.
// var userInput = `peanuts`;
// var result = userInput.toUpperCase();
// console.log(result)

//11.
// var userInput = `peanuts`;
// var part1 = userInput.slice(0,1)
// var part2 = userInput.slice(1)
// var result = part1.toUpperCase() + part2.toLocaleLowerCase()
// // console.log(part1)
// // var result = userInput.toLocaleLowerCase();
// console.log(result)

// var userInput = prompt('Enter a sentence');
// var word = userInput.toLocaleLowerCase().split(" ");
// console.log(word)
// var titleCase = '';
// for(var i=0; i<word.length; i++){
//     titleCase += word[i].slice(0,1).toUpperCase() + word[i].slice(1) + " ";
// }
// console.log(titleCase)

//12.
// var num = 35.56
// var result = String(num)
// for(var i=0 ; i<result.length; i++){
//     if(result[i] == '.'){
//         var part1 = result.slice(0,i)
//         var part2 = result.slice(i+1)
//         var newResult = part1+part2
//     }
// }
// console.log(newResult)

// var num = 35.36;
// var result = String(num);
// var newResult = "";

// for (var i = 0; i < result.length; i++) {
//     if (result[i] !== ".") {
//         newResult += result[i];
//     }
// }

// document.write(newResult);

//13.
var userName = prompt(`Enter your Name`);
var incorrectUserName = false;
for(var i=0; i<userName.length; i++){
    if(userName[i] != `@` && userName[i] != `,` && userName[i] != `.` &&userName[i] != `!` ){
        console.log(`Yor Nam,e is correct`);
        incorrectUserName = true;
    }
}
if(!incorrectUserName){
    console.log(`Enter a valid userName`) 
}