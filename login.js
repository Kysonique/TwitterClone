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
} 

function formRESET(){
    nuFirstName.value = "";
    nuLastName.value = "";
    nuBirthday.value = "";
    nuEmail.value = "";
    nuDisplayName.value = "";
    nuPhoneNumber.value = "";
    nuPassword.value = "";

}

function handleSubmitBtn(){
    let savedUser = form_DATA();
    saveUserInfo(savedUser)
    formRESET();
    alert('user created');
}
    

function gennerateUID(){
    return Math.random().toString(15).substring(2,15)
}
//end of signup functions

//login page
//user validation
const userLoginName = document.getElementById('user-Name');
const loginPassword = document.getElementById('user-Password');
const loginBtn = document.getElementById('logInBtn');

userLoginName.addEventListener('keyup', (event) =>{
    localStorage.setItem(userLoginName.value);
    return userLoginName.value;
})

loginPassword.addEventListener('keyup', (event) =>{
    localStorage.setItem(loginPassword.value);
    return loginPassword.value;
})

const user = {
    username: userLoginName.value,
    password: loginPassword.value

}
const userValidation = (user) => new Promise((res,rej) =>{
    setTimeout(() =>{
        res(JSON.stringify.apply({user, status: 200, ok: true}))
    },2000)
})
const getStoredUser = (user) => fetch (`${USER_URL}/${user.username}${EXT}`);

function validateUSER(){
        location.replace('dashboard.html')
}


//handle login
// loginBtn.addEventListener('click', (validateUSER))


async function handleLoginBtn(event){
    event.preventDefault()
    event.stopPropagation()

    try{
        // const validateError = validateUSER()
        // if(validateError){
        //     throw Error(validateError)
        // }
        const checkingDatabase = await getStoredUser(user)
        if(!checkingDatabase.ok){
            throw Error('Validation error')
        }
        const userInformationfromDatabase = await
        checkingDatabase.json()
        if(userInformationfromDatabase.ok){
            throw Error ("user doesn't exist")
        }
        if(userInformationfromDatabase){
            localStorage.setItem('userInfo', JSON.stringify(userInformationfromDatabase))
            location.replace('dashboard.html')
        }
    
    }catch (error) {
        alert(error)
    }
    
}

