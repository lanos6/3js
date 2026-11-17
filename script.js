let btn_change = document.querySelector('.btn_change')
let btn_theme = document.querySelector('.btn_theme')
let btn_info= document.querySelector('.btn_info')
let cardText= document.querySelector('.profile_text')
let card = document.querySelector('.profile')
let info = document.querySelector('.extra-info')

function changeTheme(){
    card.classList.toggle('dark')
}

function changeTitle() {
    cardText.innerHTML = 'Js Developer'
}

function showInfo() {
    info.classList.toggle('hidden')
}

btn_change.addEventListener('click' , changeTitle)
btn_theme.addEventListener('click' , changeTheme)
btn_info.addEventListener('click' , showInfo)
