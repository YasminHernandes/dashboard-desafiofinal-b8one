// menu mobile
const menuHamburguer = document.querySelector(".header__menu-hamburguer");
const sidebar = document.querySelector(".sidebar");
let showFullMenu = true;

const menuHamburguerActive = () => {
  document.body.style.overflow = showFullMenu ? "hidden" : "initial";
  menuHamburguer.classList.toggle("on", showFullMenu);
  showFullMenu
    ? (sidebar.style.display = "initial")
    : (sidebar.style.display = "none");
  showFullMenu = !showFullMenu;
};


menuHamburguer.addEventListener("click", menuHamburguerActive);
