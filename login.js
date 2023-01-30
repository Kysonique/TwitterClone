const USER_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/users";
const EXT = ".json"

//login page
//user validation
const userLoginName = document.getElementById('user-Name');
const loginPassword = document.getElementById('user-Password');
const loginBtn = document.getElementById('logInBtn');

userLoginName.addEventListener('keyup', (event) =>{
    localStorage.setItem('username', userLoginName.value);
    console.log(userLoginName.value)
    return userLoginName.value;
})

loginPassword.addEventListener('keyup', (event) =>{
    localStorage.setItem('password', loginPassword.value);
    console.log(loginPassword.value)
    return loginPassword.value;
})

function validateUSER(){
    fetch(`${USER_URL}${EXT}`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            const appUSERS = Object.values(data);
            const user = appUSERS.find((key) => key.userName === userLoginName.value && key.password === loginPassword.value);
            //const userUUID = appUSERS.json
            //&& key.password === loginPassword.value

            if (user){
                //localStorage.setItem('uuid', userUUID)
                console.log("login successful")
                location.replace('dashboard.html')
            } else{
                alert("invalid user");

                userLoginName.value = "";
                loginPassword.value = "";


            }
            
        })
        .catch((error) => console.error(error));
    }

    
    
    