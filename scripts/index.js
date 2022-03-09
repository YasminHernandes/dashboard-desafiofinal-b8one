// menu mobile
const menuHamburguer = document.querySelector(".header__menu-hamburguer");
const sidebar = document.querySelector(".sidebar");
const mainRight = document.querySelector(".main__block--right");

let showFullMenu = true;

const menuHamburguerActive = () => {
  if (window.innerWidth <= 768) {
    document.body.style.overflowY = showFullMenu ? "hidden" : "initial";
    mainRight.style.opacity = showFullMenu ? "0.7" : "1";
    menuHamburguer.classList.toggle("on", showFullMenu);
    sidebar.classList.toggle("sidebar--mobile", showFullMenu);

    showFullMenu = !showFullMenu;
  }
};

menuHamburguer.addEventListener("click", menuHamburguerActive);
