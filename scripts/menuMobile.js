// menu mobile
const menuMobile = document.querySelector(".header__menu-mobile");
const sidebar = document.querySelector(".sidebar");
const mainRight = document.querySelector(".main__block--right");

let showFullMenu = true;

const menumobileActive = () => {
  if (window.innerWidth <= 768) {
    document.body.style.overflow = showFullMenu ? "hidden" : "initial";
    mainRight.style.opacity = showFullMenu ? "0.7" : "1";
    menuMobile.classList.toggle("on", showFullMenu);
    sidebar.classList.toggle("sidebar--mobile", showFullMenu);

    showFullMenu = !showFullMenu;
  }
};

menuMobile.addEventListener("click", menumobileActive);
