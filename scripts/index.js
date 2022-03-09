// menu mobile
const menuMobile = document.querySelector(".header__menu-Mobile");
const sidebar = document.querySelector(".sidebar");
const mainRight = document.querySelector(".main__block--right");

let showFullMenu = true;

const menuMobileActive = () => {
  if (window.innerWidth <= 768) {
    document.body.style.overflowY = showFullMenu ? "hidden" : "initial";
    mainRight.style.opacity = showFullMenu ? "0.7" : "1";
    menuMobile.classList.toggle("on", showFullMenu);
    sidebar.classList.toggle("sidebar--mobile", showFullMenu);

    showFullMenu = !showFullMenu;
  }
};

menuMobile.addEventListener("click", menuMobileActive);
