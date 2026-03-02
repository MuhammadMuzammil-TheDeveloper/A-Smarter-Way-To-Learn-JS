//1.
// function formSubmit(e){
//     console.log(e   )
//       e.preventDefault();
//       var firstName = document.getElementById('firstName').value
//       var lastName = document.getElementById('lastName').value
//       var email = document.getElementById('email').value
//       var password = document.getElementById('password').value
//       document.getElementById('result').innerHTML = `You Name is ${firstName}-${lastName} and your email is ${email}`
// }

//2.
// function showDetails(){
//     var elements = document.getElementsByClassName('hideData');

//     for(var i = 0; i < elements.length; i++){
//         elements[i].style.display = 'block';
//     }

//     console.log("working...");
// }

//3.
 function formSubmit(e){
    // console.log(e   )
      e.preventDefault();
      var firstName = document.getElementById('firstName').value
      var lastName = document.getElementById('lastName').value
      var email = document.getElementById('email').value
    //   document.getElementById('result').innerHTML = `You Name is ${firstName}-${lastName} and your email is ${email}`
    var tableBody = document.getElementById('tableBody')
    tableBody.innerHTML += `<tr>
        <td> 01</td>
        <td>${firstName + lastName}</td>
        <td>${email}</td>
        <td id="btn" onclick="deleteTableRaw(this)">Delete</td>
        <td id="btn" onclick="editTableRaw(this)">Edit</td>
    </tr>`
}
function deleteTableRaw(raw){
    let parent = raw.parentElement;
    parent.remove();
    console.log(raw.parentElement)
}
function editTableRaw(raw){
    console.log(raw.previousElementSibling.previousElementSibling   )
}