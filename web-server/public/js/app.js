console.log('Client side javascript file is loaded!')

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })


})


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.textContent = 'From Javascript text'

weatherForm.addEventListener('submit', (e, error) => {
    e.preventDefault();
    if (error) {
        console.log("Error")
    }

    const location = search.fetchApi
    const fetchApi = fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        response.json().then((data) => {
            console.log(data)
        })


    })

    console.log(location)
})



