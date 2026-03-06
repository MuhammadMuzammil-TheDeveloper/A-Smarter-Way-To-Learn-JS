// var quizQuestions = [
//     {
//         id: 1,
//         question: "HTML stands for?",
//         options: [
//             "Hyper Text Markup Language",
//             "Hyper Text Programming Language",
//             "Hyper Text Styling Language",
//             "Hyper Text Scripting Language"
//         ],
//         answer: "Hyper Text Markup Language"
//     },
//     {
//         id: 2,
//         question: "Which HTML tag is used to create a hyperlink?",
//         options: [
//             "a",
//             "link",
//             "href",
//             "hyperlink"
//         ],
//         answer: "a"
//     },
//     {
//         id: 3,
//         question: "Which CSS property is used to change the text color?",
//         options: [
//             "font-color",
//             "text-color",
//             "color",
//             "background-color"
//         ],
//         answer: "color"
//     },
//     {
//         id: 4,
//         question: "Which CSS property controls the size of text?",
//         options: [
//             "text-style",
//             "font-size",
//             "text-size",
//             "font-style"
//         ],
//         answer: "font-size"
//     },
//     {
//         id: 5,
//         question: "Inside which HTML element do we put JavaScript?",
//         options: [
//             "javascript",
//             "js",
//             "script",
//             "code"
//         ],
//         answer: "script"
//     },
//     {
//         id: 6,
//         question: "Which symbol is used for single-line comments in JavaScript?",
//         options: [
//             "//",
//             "/* */",
//             "#",
//         ],
//         answer: "//"
//     },
//     {
//         id: 7,
//         question: "Which JavaScript keyword is used to declare a variable?",
//         options: [
//             "var",
//             "int",
//             "string",
//             "declare"
//         ],
//         answer: "var"
//     },
//     {
//         id: 8,
//         question: "Which CSS property is used to make a website responsive?",
//         options: [
//             "flex",
//             "media-query",
//             "@media",
//             "responsive"
//         ],
//         answer: "@media"
//     },
//     {
//         id: 9,
//         question: "Which method is used to select an element by its ID in JavaScript?",
//         options: [
//             "getElementByClass()",
//             "getElementById()",
//             "querySelectorAll()",
//             "selectById()"
//         ],
//         answer: "getElementById()"
//     },
//     {
//         id: 10,
//         question: "Which HTML attribute is used to define inline styles?",
//         options: [
//             "class",
//             "styles",
//             "style",
//             "font"
//         ],
//         answer: "style"
//     }
// ];

// var questionElement = document.getElementById('questionElement')
// var optionELement = document.getElementById('optionELement')
// var quizProgress = document.getElementById('quizProgress')
// var reportCardContainer = document.querySelector('.reportCardContainer')
// var nextQuesBtn = document.getElementById('nextQuesBtn')
// var quizContainer = document.querySelector('.quizContainer')
// var formContainer = document.getElementById('formContainer')
// var username = document.getElementById("username").value
// var email = document.getElementById("email").value
// var userClass = document.getElementById("class").value
// var userhead = document.getElementById('userhead')

// var counter = 0;
// var totalCorrectAns = 0;


// function startQuiz(event) {

//     if (event) {
//         event.preventDefault();
//     }
//     quizContainer.style.display = 'block'
//     userhead.innerText = "User: " + username

//     formContainer.style.display = 'none'
//     var question = quizQuestions[counter].question
//     var options = quizQuestions[counter].options
//     questionElement.innerHTML = question
//     optionELement.innerHTML = ''
//     for (var i = 0; i < options.length; i++) {
//         var li = ` <li onClick="checkAns(this)">${options[i]}</li>`
//         optionELement.innerHTML += li
//     }
//     quizProgress.innerHTML = `${counter + 1}/${quizQuestions.length}`
//     nextQuesBtn.setAttribute('disabled', true)


// }
// function nextQuestion() {
//     counter++

//     if (counter < quizQuestions.length) {
//         startQuiz()
//         totalCorrectAns++
//     }
//     else {
//         alert('QuizEnd')
//         reportCardContainer.style.display = 'block'
//         quizContainer.style.display = 'none'
//         var reportCard = `
// <div class="reportCard">

// <h1 class="reportTitle">Quiz Result</h1>

// <div class="scoreCircle">
//     <span>${totalCorrectAns}/${quizQuestions.length}</span>
// </div>

// <div class="reportDetails">

// <div class="detailBox">
// <p>Total Questions</p>
// <h3>${quizQuestions.length}</h3>
// </div>

// <div class="detailBox correct">
// <p>Correct Answers</p>
// <h3>${totalCorrectAns}</h3>
// </div>

// <div class="detailBox wrong">
// <p>Wrong Answers</p>
// <h3>${quizQuestions.length - totalCorrectAns}</h3>
// </div>

// <div class="detailBox grade">
// <p>Grade</p>
// <h3>100</h3>
// </div>

// </div>

// <button class="restartBtn" onclick="location.reload()">Restart Quiz</button>

// </div>
// `
//         reportCardContainer.innerHTML = reportCard
//     }
// }
// function checkAns(li) {
//     var correctAns = quizQuestions[counter].answer
//     var userAns = li.innerHTML
//     var allList = optionELement.getElementsByTagName("li")
//     var answer = quizQuestions[counter].answer

//     if (correctAns === userAns) {

//         li.style.background = "green"
//     }
//     else {
//         li.style.background = "red"
//         for (var li of allList) {
//             if (li.innerHTML == correctAns) {
//                 li.style.background = "green"
//                 break;
//             }
//         }
//     }

//     for (var li of allList) {
//         li.style.pointerEvents = "none"
//     }
//     nextQuesBtn.removeAttribute('disabled')
// }
