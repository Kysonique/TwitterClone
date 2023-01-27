const USER_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/users";
const EXT = ".json"

//signup page
const userInputs = document.querySelectorAll('form-control form-control-lg');
const submitUser = document.getElementById('submitUserBtn');
const password1 = document.getElementById('password-input');
const password2 = document.getElementById('password-ReEnter');
// add event listener to each field on the form
const nuFirstName = document.getElementById('firstName-input'); 
const nuLastName = document.getElementById('lastName-input'); 
const nuBirthday = document.getElementById('birthday-input'); 
const nuEmail = document.getElementById('email-input'); 
const nuDisplayName = document.getElementById('username-input'); 
const nuPhoneNumber = document.getElementById('phoneNumber-input'); 
const nuPassword = document.getElementById('password-input'); 
//reading the data from the form
function form_DATA(){
    let USER_Obj = {
        firstName: nuFirstName.value,
        lastName: nuLastName.value,
        birthday: nuBirthday.value,
        emailAddress: nuEmail.value,
        phoneNumber: nuPhoneNumber.value,
        userName: nuDisplayName.value,
        password: nuPassword,
        uuid: gennerateUID(),
    }
    return USER_Obj;
}
// let new_USER;
function saveUserInfo(user){
        fetch(`${USER_URL}${EXT}`,{
        method: "post",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({...user}),
    })
        .then((resp) =>{
            resp.json();
            console.log('first then')
        })
            .then((data) => console.log('data', data));
} console.log(JSON.parse(user))

function formRESET(){
    nuFirstName.value = "";
    nuLastName.value = "";
    nuBirthday.value = "";
    nuEmail.value = "";
    nuDisplayName.value = "";
    nuPhoneNumber.value = "";
    nuPassword.value = "";

}

let newWindow = (window.location.href='login.html')
function handleSubmitBtn(){
    let savedUser = form_DATA();
    saveUserInfo(savedUser)
    formRESET();
    alert('user created');window.location.href='login.html'
}
    

function gennerateUID(){
    return Math.random().toString(15).substring(2,15)
}
//end of signup functions

//login page
//user validation
const userLoginName = document.getElementById('user-Name');
const loginPassword = document.getElementById('user-Password');

const userValidation = (user) => new Promise((res,rej) =>{
    setTimeout(() =>{
        res(JSON.stringify.apply({user, status: 200, ok: true}))
    },2000)
})

// const getUSERname =(user) => fetch(`${USER_URL}/${user.}`)

userLoginName.addEventListener('keyup', (event) =>{
    console.log(userLoginName.value)
});

const loginBtn = document.getElementById('logInBtn');
// loginBtn.addEventListener('click', (event) =>{
//    if (!loginPassword.value >= 5 || !userLoginName.value){
//         alert('invalid user')
//    } else{
//         window.location.href = "file:///C:/Users/kyras/OneDrive/Desktop/FED-2211%20Repos/TwitterClone/dashboard.html"; 
//    }

// });
loginPassword.addEventListener('keyup', (event) =>{
    console.log(loginPassword.value)
});
// async function handleLoginBtn(event){
//     event.preventDefault()
//     event.stopPropagation()

//     const 
// }

