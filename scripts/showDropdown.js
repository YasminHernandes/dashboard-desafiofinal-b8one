// show dropdown
const headerItem = document.querySelectorAll(".header-item");
const main = document.querySelector(".main");

headerItem.forEach((item) => {
  item.onclick = () => {
    item.lastElementChild.classList.toggle("header-item-js");
    main.onclick = () => {
      item.lastElementChild.classList.remove("header-item-js");
    };
  };
});

const navDropdownItem = document.querySelectorAll(".nav__item--dropdown");
const navDropdown = document.querySelectorAll(".nav__dropdown");
const navLink = document.querySelectorAll(".nav__dropdown-item");

navLink.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("nav__dropdown-item--active");
    
    const countLink = [...navLink].filter((item) =>
      item.classList.contains("nav__dropdown-item--active")
    );

    if (countLink.length > 1) {
      let currentCountLink = countLink.shift();
      currentCountLink.classList.remove("nav__dropdown-item--active");
    }
  };
});


const overviewItem = document.querySelectorAll(".overview__item");