

// fitur icon bar

let icon_bar = document.querySelector('.icon-bar')
let nav_item =  document.querySelector('.nav-item')
icon_bar.addEventListener('click',function(){
    nav_item.classList.toggle('nav-item-active')
    console.log('ok')
})