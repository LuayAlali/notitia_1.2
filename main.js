// variables

let deleteBtn = document.querySelectorAll('.delete');
let filter = document.querySelector('.filter');
let name = document.querySelectorAll('.name');
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



// searchInput.addEventListener('keyup', () => {
// 	for(let i = 0; i < images.length; i++ ){
// 		let search = searchInput.value;
// 		search = search.toLowerCase();
// 		let caption = images[i].getAttribute('data-caption');
// 	if(caption.toLowerCase().indexOf(search) > -1){
// 		images[i].style.display = "";
// 	}else {
// 	images[i].style.display = 'none';

// 	}
// 	}

// 	});
