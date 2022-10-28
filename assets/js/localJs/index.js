// fitur icon bar

let nav_item = document.querySelector('.nav-item');

let icon_hamburger_bar = document.querySelector('.icon-bar');

icon_hamburger_bar.addEventListener('click',()=>{
  nav_item.classList.toggle('nav-item-active')
  icon_hamburger_bar.classList.toggle('icon-bar-active')
})
// fitur api

let btnShort = document.querySelector('.btn-short');
let inputShort =  document.querySelector('#input-short');
let errorMessage = document.querySelector('.error-massage');
let item_link = document.querySelector('.item-link')
// function element html link item
function linkItem(data_url){
  
        let fragment = `
      <div class="inner-link">
      <div class="item link">
    ${data_url.result.original_link}
      </div>
      <div class="item short-link" id="short-link">
      ${data_url.result.short_link}
      </div>
      <div class="item btn-coppy">
        <button class="coppy">copy</button>
      </div>
  </div>
      `
  
    return item_link.innerHTML += fragment
}

btnShort.addEventListener('click',function(){
let inputShortValue = inputShort.value
console.log(inputShortValue)
fetch(`https://api.shrtco.de/v2/shorten?url=${inputShortValue}`).then(Response => {
  if(!Response.ok){
    inputShort.classList.add('input-error')
    errorMessage.classList.add('error-massage-active')
    return 'oops something wrong'
  }
  
    inputShort.classList.remove('input-error')
  errorMessage.classList.remove('error-massage-active')
  return Response.json()
})
.then(e => { 
  linkItem(e)
})
.catch(err => {
  console.log(err)
})

})



// event to copy link
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('coppy') ){
    e.target.textContent = 'copied!'
    e.target.classList.add('coppy-active')

    let shortLinkTarget = e.target.parentElement.previousElementSibling.textContent.trim();
      navigator.clipboard.writeText(shortLinkTarget);
  }
})

window.addEventListener('load',()=>{
  inputShort.value = '';
})
