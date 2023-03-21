

let navBar = document.querySelector('.navbar')
document.querySelector('.main').onclick = () => {
  navBar.classList.toggle('shownav');
};

 window.onscroll = () => {
    navBar.classList.remove('shownav')
}
  
