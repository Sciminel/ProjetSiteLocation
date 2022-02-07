const afficheMenu = document.querySelector('.nav-menu-left');
const menu = document.querySelector(".nav-list-items");


afficheMenu.addEventListener('click', () => {
    afficheMenu.classList.toggle('active')
    menu.classList.toggle('active');

})