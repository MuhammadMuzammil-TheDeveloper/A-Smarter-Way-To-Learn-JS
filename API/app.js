// // API SYNTA
// fetch("https://opentdb.com/api.php?amount=5")
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(function(error){
//     console.error('Error', error)
// })
// Product API
fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => console.log(json))