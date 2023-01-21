const bioParagraph = document.getElementById('bioParagraph');
const editBtn = document.getElementById('edit-btn');

const editPostBtn = document.getElementById('editPost');
const postText = document.getElementById('card-text');

// edit bio 
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

//create new post

//edit post
editPostBtn.innerHTML = 'edit';
postText.setAttribute('readonly', 'readonly')

function editNewPost(){
    if (editPostBtn.innerHTML === 'edit'){
        editPostBtn.innerHTML = 'save';
        postText.removeAttribute('readonly');

    } else{
        editPostBtn.innerHTML = 'edit';
        postText.setAttribute('readonly', 'readonly');
    }
}

//delete post