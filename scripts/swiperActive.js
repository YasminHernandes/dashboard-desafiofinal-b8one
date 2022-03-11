const overviewSwiperDiv = document.querySelector(".overview__swiper");
const overviewSwiperWrapper = document.querySelector(".overview__list");
const overviewSwiperSlide = document.querySelectorAll(".overview__item");
const reportSwiperDiv = document.querySelector(".general-report__swiper");
const reportSwiperWrapper = document.querySelector(".general-report__data");
const reportSwiperSlide = document.querySelectorAll(".general-report__data-item");

// swiper active
  const viewportWidth = window.innerWidth;

  if (viewportWidth <= 928) {
    overviewSwiperDiv.classList.add("overview-swiper");
    overviewSwiperWrapper.classList.add("swiper-wrapper");
    overviewSwiperSlide.forEach((element) =>
      element.classList.add("swiper-slide")
    );

    reportSwiperDiv.classList.add("report-swiper");
    reportSwiperWrapper.classList.add("swiper-wrapper");
    reportSwiperSlide.forEach((element) =>
      element.classList.add("swiper-slide")
    );
  }

  const overviewSwiper = new Swiper(".overview-swiper", {
    direction: "horizontal",
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 2.5,
      },
      480: {
        slidesPerView: 3.5,
      },
      640: {
        slidesPerView: 4.3,
      },
      780: {
        slidesPerView: 3.5,
      },
    },
  });

  const reportSwiper = new Swiper(".report-swiper", {
    direction: "horizontal",
    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 1.4,
      },

      480: {
        slidesPerView: 2,
      },
    },
  });
