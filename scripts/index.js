const overviewSwiperDiv = document.querySelector(".overview__swiper");
const overviewSwiperWrapper = document.querySelector(".overview__list");
const overviewSwiperSlide = document.querySelectorAll(".overview__item");
const reportSwiperDiv = document.querySelector(".general-report__swiper");
const reportSwiperWrapper = document.querySelector(".general-report__data");
const reportSwiperSlide = document.querySelectorAll(
  ".general-report__data-item"
);

const viewportWidth = window.innerWidth;

// if (viewportWidth <= 928) {
overviewSwiperDiv.classList.add("swiper");
overviewSwiperWrapper.classList.add("swiper-wrapper");
overviewSwiperSlide.forEach((element) => element.classList.add("swiper-slide"));

reportSwiperDiv.classList.add("swiper");
reportSwiperWrapper.classList.add("swiper-wrapper");
reportSwiperSlide.forEach((element) => element.classList.add("swiper-slide"));

// }

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  setWrapperSize: true,

  928: {
    enable: false,
  },
});
