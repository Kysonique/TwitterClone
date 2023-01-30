//user bio page
//toggle btnx
const userPostBtn = document.getElementById('btnradio1');
const userImageBtn = document.getElementById('btnradio2');
const imgDiv = document.getElementById('imagesDiv');
const postDiv = document.getElementById('postcardSection');
const USER_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/users";
const POST_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/posts";
const EXT = ".json"


let newUser;
function getUsers(){
    fetch(`${USER_URL}${EXT}`)
    .then((resp) => resp.json())
    .then((data) =>{
        newUser = {...data};
        console.log(newUser)
    });
}

imgDiv.style.display = "none";
userImageBtn.addEventListener('click', (event) =>{
    postDiv.style.display = "none";
    imgDiv.style.display = "block"
});
userPostBtn.addEventListener('click', (event) =>{
    postDiv.style.display = "block"; 
    imgDiv.style.display = "none"
});

// edit bio (complete possibly can make it add to api)
const profileUSER = document.getElementById('displayUserName');
profileUSER.innerHTML = localStorage.getItem('username');

const bioParagraph = document.getElementById('bioParagraph');
const editBtn = document.getElementById('edit-btn');
editBtn.innerHTML = 'Edit profile';
bioParagraph.setAttribute('readonly', 'readonly')
function editBio(){
    if (editBtn.innerHTML === 'Edit profile'){
        editBtn.innerHTML = 'save';
        bioParagraph.removeAttribute('readonly');

    } else{
        editBtn.innerHTML = 'Edit profile';
        bioParagraph.setAttribute('readonly', 'readonly');
    }
}

//create new post (need to append to child and add to api)
const postCard = document.getElementById('postcard');

function postUSERmsg(user){
   
    fetch(`${POST_URL}${EXT}`,{
        method: "post",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({...user})
    })
    .then((resp) => resp.json())
    .then((data) =>
        console.log('post id', data));
}

//new post
const newMessge = document.getElementById('newMessage');
const messageSubmit = document.getElementById('msgBtn');

//submit button for post
messageSubmit.addEventListener('click', (event) =>{
    const newMsgData = POST_DATA();
    const postCardDiv = document.createElement('div');
    postCardDiv.classList = ('postcard');
    postCardDiv.id= "postcard";
    //addNewPost.setAttribute('id', )
    // event.preventDefault();
    const contentDiv = document.createElement('div');
    contentDiv.classList = ('card');
    contentDiv.style =('width: 18rem');
        contentDiv.innerHTML = `
        <div class="card-body">
            <img
            src="C:/Users/kyras/OneDrive/Pictures/opalLogop.png"
            class="card-img-top"
            alt="..."
            />
            <h5 class="card-title">Display Name</h5>
            <h6 class="card-subtitle mb-2 text-muted">@username</h6>
            <div id="cardDiv"><input type="input" id="card-text" class="card-text" value="${newpost}"></div>
        </div>`;
        postCardDiv.appendChild(contentDiv);

    const cardBtns = document.createElement('div');
    cardBtns.classList = ('card-btns');
    cardBtns.innerHTML = 
    `<button id="deletePost"
    type="button"
    class="btn btn-outline-primary"
    style="
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.75rem;">delete</button>

    <button id="edit-Post"
    type="button"
    class="btn btn-outline-primary"
    style="
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-font-size: 0.75rem;" onclick="editNewPost()">edit</button>`;
    contentDiv.appendChild(cardBtns)
    postUSERmsg(newMsgData)
    postDiv.prepend(postCardDiv)
    clearForm()
});

function clearForm(){
    newMessge.value = ""
}
let newpost;
newMessge.addEventListener('keyup', (event) =>{
   console.log(newMessge.value)
   newpost = newMessge.value;
});
function POST_DATA(){
    let POSTobj ={
        message: newpost,
        userName: currentUSER
    }
    return POSTobj
}

let currentUSER = localStorage.getItem('username')

//edit post (need to update in api)
    const editPostBtn = document.getElementById('edit-Post');
    const postText = document.getElementById('card-text');
    
    postText.setAttribute('readonly', 'readonly')
    // editPostBtn.addEventListener('click', editNewPost())   
    function editNewPost(btn){
        const currentUserPost = btn.postCardDiv;
        
        const userInfoArr = currentUserPost.querSelectorAll('input');

        let updatedPost = null;

        if (editPostBtn.innerHTML === 'edit'){
            editPostBtn.innerHTML = 'save';
            userInfoArr.forEach((field) => field.removeAttribute('readonly'));
        } else{
            editPostBtn.innerHTML = 'edit';
            userInfoArr.forEach((field) => field.setAttribute('readonly', 'readonly'));

            updatedPost = {
                message: userInfoArr.value,
            }

            console.log('post update', updatedPost)
        }
    }

   


//logout
function logout(){
     localStorage.clear();
     window.location.href = 'welcome.html'
}

// task_delete
    let deletePostBtn = document.getElementById('deletePost');

// // function deleteThis(){
//     const singlePost = document.getElementById('postcard');

    
// deleteThis.addEventListener('click', (event) =>{
//      singlePost.remove()
// })
//})
// }
// function deleteBtnHandler(){
//     const SingularTask = document.getElementById('SingularTask')
