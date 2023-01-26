//toggle btnx
const userPostBtn = document.getElementById('btnradio1');
const userImageBtn = document.getElementById('btnradio2');
const imgDiv = document.getElementById('imagesDiv');
const postDiv = document.getElementById('postcardSection');
const USER_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/users";


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
const POST_URL = "https://twtclonerevamp-default-rtdb.firebaseio.com/posts";
const EXT = ".json";


//const postCard = document.getElementById('postcard');
let userPosts = {};
function getPosts(){
    fetch(`${POST_URL}${EXT}`)
    .then((resp) => resp.json())
    .then((data) =>{
        userPosts = {...data};
        console.log('user posts', userPosts)
    });
}


//new post
 //submit button for post
 const newMessge = document.getElementById('newMessage');
const messageSubmit = document.getElementById('msgBtn');


let newpost;
newMessge.addEventListener('keyup', (event) =>{
   console.log(newMessge.value)
   newpost = newMessge.value;
});



//const postCardDiv = document.getElementById('postcard');
// let addNewPost = document.createElement('div');
// addNewPost.classList = ('postcard')
// postDiv.innerHTML = `
// <div class="card" style="width: 18rem">
//   <div class="card-body">
//     <img
//       src="C:/Users/kyras/OneDrive/Pictures/opalLogop.png"
//       class="card-img-top"
//       alt="..."
//     />
//     <h5 class="card-title">Display Name</h5>
//     <h6 class="card-subtitle mb-2 text-muted">@Username</h6>
//     <div id="cardDiv"><input type="input" id="card-text" class="card-text" value="${newpost}"></div>
//     <button id="deletePost"
//         type="button"
//         class="btn btn-outline-primary"
//         style="
//           --bs-btn-padding-y: 0.25rem;
//           --bs-btn-padding-x: 0.5rem;
//           --bs-btn-font-size: 0.75rem;">delete
        
//     </button>
//     <button id="editPost"
//         type="button"
//         class="btn btn-outline-primary"
//         style="
//           --bs-btn-padding-y: 0.25rem;
//           --bs-btn-padding-x: 0.5rem;
//           --bs-btn-font-size: 0.75rem;" >edit
        
//     </button>
//   </div>  
// </div>`

// const newMessge = document.getElementById('newMessage');
// const messageSubmit = document.getElementById('msgBtn');


// let newpost;
// newMessge.addEventListener('keyup', (event) =>{
//    console.log(newMessge.value)
//    newpost = newMessge.value;
// });

messageSubmit.addEventListener('click', (event) =>{
    let addNewPost = document.createElement('div');
addNewPost.classList = ('postcard')
   event.preventDefault();
   addNewPost.innerHTML = `
<div class="card" style="width: 18rem">
  <div class="card-body">
    <img
      src="C:/Users/kyras/OneDrive/Pictures/opalLogop.png"
      class="card-img-top"
      alt="..."
    />
    <h5 class="card-title">Display Name</h5>
    <h6 class="card-subtitle mb-2 text-muted">@Username</h6>
    <div id="cardDiv"><input type="input" id="card-text" class="card-text" value="${newpost}"></div>
    <button id="deletePost"
        type="button"
        class="btn btn-outline-primary"
        style="
          --bs-btn-padding-y: 0.25rem;
          --bs-btn-padding-x: 0.5rem;
          --bs-btn-font-size: 0.75rem;">delete
        
    </button>
    <button id="editPost"
        type="button"
        class="btn btn-outline-primary"
        style="
          --bs-btn-padding-y: 0.25rem;
          --bs-btn-padding-x: 0.5rem;
          --bs-btn-font-size: 0.75rem;" onclick="editNewPost()">edit
        
    </button>
  </div>  
</div>`

   postDiv.prepend(addNewPost)
});


function postMessageToAPI(){
    fetch(`${POST_URL}${EXT}`)
    .then((resp) => resp.json())
    .then((data) =>{
        userPosts = {...data};
        console.log('user posts', userPosts)
    });

};

//edit post (need to update in api)
const editPostBtn = document.getElementById('editPost');
const postText = document.getElementById('card-text');
// editPostBtn.innerHTML = 'edit';
// postText.setAttribute('readonly', 'readonly')

    function editNewPost(){
        if (editPostBtn.innerHTML === 'edit'){
            editPostBtn.innerHTML = 'save';
            postText.removeAttribute('readonly');
    
        } else{
            editPostBtn.innerHTML = 'edit';
            postText.setAttribute('readonly', 'readonly');
        }
    }
// editPostBtn.addEventListener('click', (editNewPost()))
//delete post
	// // ** Delete Btn Functionality
		// task_delete_el.addEventListener('click', () => {
		// 	list_el.removeChild(task_el);
		// });



		// // ** Edit Btn Functionality
		// task_edit_el.addEventListener('click', () => {
		// 	if (task_edit_el.innerHTML.toUpperCase() === 'EDIT') {
		// 		// task readonly attribute => remove
		// 		task_input_el.removeAttribute('readonly');
		// 		task_input_el.focus();
		// 		task_edit_el.innerText = 'Save';
		// 	} else {
		// 		// make input readonly
		// 		task_input_el.setAttribute('readonly', 'readonly');
		// 		// change btn innerText back to edit
		// 		task_edit_el.innerText = 'edit';
		// 	}
		// });