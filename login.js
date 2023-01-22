const username = document.getElementById('userName');
const password = document.getElementById('userPassword');

const URL = "https://data.json";


username.addEventListener('keyup', (event) =>{
    console.log(username.value)
});

password.addEventListener('keyup', (event) =>{
    console.log(password.value)
});

const loginBtn = document.getElementById('logInBtn');


loginBtn.addEventListener('click', (event) =>{
    window.location.href = "file:///C:/Users/kyras/OneDrive/Desktop/FED-2211%20Repos/TwitterClone/dashboard.html";
});


