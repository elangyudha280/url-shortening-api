// fitur icon bar

let nav_item = document.querySelector('.nav-item');

let icon_bar = document.querySelector('.icon-bar');

icon_bar.addEventListener('click',()=>{
  nav_item.classList.toggle('nav-item-active')
  icon_bar.classList.toggle('icon-bar-active')
})
// fitur api
fetch('https://api.shrtco.de/v2/').then(Response => {
  if(!Response.ok){
    return Response.json()
  }
  return Response.json()
})
.then(e => {
  console.log(e)
})
.catch(err => {
  console.log(err)
})