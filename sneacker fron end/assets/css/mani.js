let menu = document.querySelector('#menu-icon');
let navar = document.querySelector('.navbar');

menu.onclick = () => {
    navar.classList.toggle('active');
}

window.onscroll = () => {
    navar.classList.remove('active');
}