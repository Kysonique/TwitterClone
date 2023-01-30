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
        password: nuPassword.value,
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
            .then((data) => console.log('user data', data));
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
    verification()
    formRESET();
}
    
function gennerateUID(){
    return Math.random().toString(15).substring(2,15)
}

function verification(){
    fetch(`${USER_URL}${EXT}`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            const appUSERS = Object.values(data);
            const user = appUSERS.find((key) => key.userName === nuDisplayName.value);

            if (user){
                alert("user name already taken")
                return null

            } else{
                let savedUser = form_DATA();
                saveUserInfo(savedUser)
                alert('user created');

            }
            
        })
        .catch((error) => console.error(error));
    }

