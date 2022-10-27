// fitur icon bar

let nav_item = document.querySelector('.nav-item');


document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('icon-bar')){
    nav_item.classList.add('nav-item-active');
    return 
  }
  nav_item.classList.remove('nav-item-active');
})

// fitur api
