//Accessing Elements 
//1.
// var element = document.getElementById("title");
// console.log(element)
// element.innerHTML =` Hello Muzammil`

//2.
// var elements = document.getElementsByClassName("text");
// console.log(elements)
// elements[0].innerHTML =  `hi`

//3.
// var headings = document.getElementsByTagName("h1");
// console.log(headings)

//4.
// var element = document.querySelector("#title")
// console.log(element)
// var element = document.querySelector(".text")
// console.log(element)
// var element = document.querySelector("p")
// console.log(element)

//5.
// var element = document.querySelectorAll(".text")
// console.log(element)

//Changing Content
//1.
// document.getElementById("title").innerHTML = "Welcome";
// document.getElementById("msg").innerHTML = "Login Successful";

//2.
// element.innerText = "Hello";


// Changing CSS using DOM
//1.
// document.getElementById('title').style.color="red";
// element.style.backgroundColor = "black";
// element.style.fontSize = "30px";

//DOM EVENTS
// Events = user actions

// Examples:

// click 
// submit
// input
// keypress
// mouseover

//1. ONCLIC()
// function changeText(){
// document.getElementById("demo").innerHTML="Welcome Muzammil"
// }

//2.
// var btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     alert("hello World");
// })


//Creating Elements Dynamically
//1.
// var p = document.createElement('p')
// p.innerHTML='hellp'
// document.body.appendChild(p)

//Removing Elements
//1.
// element.remove();
// document.getElementById("para").remove();

//Form Handling 
function showName(){
    var name = document.getElementById('name')
    document.querySelector('#result').innerHTML=name
}