const bioParagraph = document.getElementById('bioParagraph');
const editBtn = document.getElementById('edit-btn');

// bioParagraph.readOnly=true;

// editBtn.addEventListener('click', (edit) =>{
//     if (bioParagraph.readOnly = true){
//         bioParagraph.readOnly = false;
//         editBtn.innerHTML= 'save';
//     }

// })
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