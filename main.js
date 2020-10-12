// variables

let deleteBtn = document.querySelectorAll('.delete');
let filter = document.querySelector('.filter');
let name = document.querySelectorAll('.name');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const page = document.getElementById('addPage')
const user = document.getElementById('addUser');
const post = document.getElementById('addPost');
// Event Listener
for(let i = 0; i < deleteBtn.length; i++){
deleteBtn[i].addEventListener('click', () =>{
    deleteBtn[i].parentNode.parentNode.remove();
})
}

filter.addEventListener('keyup', () =>{
   for(let i = 0; i < name.length; i++) {
       let search = filter.value;
       search = search.toLowerCase();
       let correctName = name[i].innerText;
       if(correctName.toLowerCase().indexOf(search) > -1){
           name[i].parentNode.style.display ='';
       }else{
           name[i].parentNode.style.display = 'none';
       }
   }

    
});





