// variables

let deleteBtn = document.querySelectorAll('.delete');


// Event Listener
for(let i = 0; i < deleteBtn.length; i++){
deleteBtn[i].addEventListener('click', () =>{
    deleteBtn[i].parentNode.parentNode.remove();
})
}