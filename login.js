const USER_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/users";
const EXT = ".json"

//signup page
const userInputs = document.querySelectorAll('form-input');
const submitUser = document.getElementById('submitUserBtn');

const password1 = document.getElementById('password-input');
const password2 = document.getElementById('password-ReEnter');


// submitUser.addEventListener('click', (event) =>{

// })
// function passwordCheck(){
//     if(password1.value /= password2.value){
//         alert("password doesn't match");
//     }
// }

// let inputValue;
// function inputFields(){
//     userInputs.forEach(inputDiv => {
//         inputValue = Object.keys(inputDiv);
//         console.log(inputValue)
//         // if (!inputDiv.value > 0){
//         //     alert('Invalid entry')
//         // } 
//     });
// }

// let USER_DATA;
// function getUsers(){
//     fetch(`${USER_URL}${EXT}`)
//     .then((resp) => resp.json())
//     .then((data) =>{
//         USER_DATA = {...data};
//         console.log(USER_DATA)
//     });
// }

//Object.keys(USER_DATA).forEach(userID =>{ let user = USER_DATA[userID]})


//login page
const username = document.getElementById('userName');
const password = document.getElementById('userPassword');

const URL = "https://data.json";


username.addEventListener('keyup', (event) =>{
    console.log(username.value)
});

password.addEventListener('keyup', (event) =>{
    console.log(password.value)
});

//user validation
const loginBtn = document.getElementById('logInBtn');

// let USER_DATA;
// function getUsers(){
//     fetch(`${USER_URL}${EXT}`)
//     .then((resp) => resp.json())
//     .then((data) =>{
//         USER_DATA = {...data};
//         console.log(USER_DATA)
//     });
// }

loginBtn.addEventListener('click', (event) =>{
    let DATA_ARR;
    fetch(`${USER_URL}${EXT}`)
    .then((resp) => resp.json())
    .then((data) =>{
        DATA_ARR = {...data};
        console.log(DATA_ARR)
    });

    let USER_DATA = DATA_ARR
    for(let i = 0; i < USER_DATA.length; i++){
        if(USER_DATA[i].userName /= username.value){
            alert("invalid user")
        }
    } window.location.href = "file:///C:/Users/kyras/OneDrive/Desktop/FED-2211%20Repos/TwitterClone/dashboard.html";

});


