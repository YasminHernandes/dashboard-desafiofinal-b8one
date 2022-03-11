const tableCell = document.querySelectorAll(".tbody-item__content");
const productImage = document.querySelectorAll(".tbody-item__image");
const productName = document.querySelectorAll(".tbody-item__title");
const productId = document.querySelectorAll(".tbody-item__value--id");
const productDepart = document.querySelectorAll(".tbody-item__value--depart");
const productPrice = document.querySelectorAll(".tbody-item__value--price");
const productIndex = document.querySelectorAll(".tbody-item__element");

const BASE__URL = "https://test-final.b8one.academy/";

async function populateTable(i) {
  const PRODUCT__URL = BASE__URL + "products/more-sold";
  const response = await fetch(PRODUCT__URL);

  const responseJson = await response.json();
  const responseProducts = responseJson.products;

  productIndex[i].innerHTML = parseInt(i)+1
  productImage[i].src = responseProducts[i].image;
  productName[i].innerHTML = responseProducts[i].name;
  productId[i].innerHTML = responseProducts[i].orderId;
  productDepart[i].innerHTML = responseProducts[i].department;
  productPrice[i].innerHTML = formatPrice(responseProducts[i].price);
}

function getDataTable() {
  for (let i in tableCell) {
    populateTable(i);
  }
}

const revenues = document.querySelector(".general-report__value--revenue");
const totalSales = document.querySelector(
  ".general-report__value--total-sales"
);
const averageTicket = document.querySelector(
  ".general-report__value--average-ticket"
);

async function populateListReport() {
  const SALES__URL = BASE__URL + "sales";
  const response = await fetch(SALES__URL);

  const responseJson = await response.json();

  revenues.innerHTML = formatPrice(responseJson.revenues);
  totalSales.innerHTML = responseJson.totalSales;
  averageTicket.innerHTML = formatPrice(responseJson.averageTicket);
}

function formatPrice(value) {
  value = String(value).replace(/\D/g, "");
  value = Number(value) / 100;
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return value;
}

const linkActiveOverview = document.querySelectorAll(".overview__item");
const linkActiveReport = document.querySelectorAll(".general-report__item");

async function clickLinkOverview() {
  linkActiveOverview.forEach((item) => {
    item.onclick = () => {
      item.classList.toggle("overview__item--active");
      console.log("clicou");
    };
  });

  const countLink = [...linkActiveOverview].filter((item) =>
    item.classList.contains("overview__item--active")
  );

  if (countLink.length > 1) {
    let currentCountLink = countLink.shift();
    currentCountLink.classList.remove("overview__item__item--active");
    currentCountLink = countLink.pop();
    currentCountLink.classList.remove("overview__item__item--active");
  }
}

async function clickLinkReport() {
  linkActiveReport.forEach((item) => {
    item.onclick = () => {
      item.classList.toggle("general-report__item--active");
      console.count("ativou");

      const countLink = [...linkActiveReport].filter((item) =>
        item.classList.contains("general-report__item--active")
      );

      if (countLink.length > 1) {
        let currentCountLink = countLink.shift();
        currentCountLink.classList.remove("general-report__item--active");
        clickLinkReport();
        currentCountLink.classList.remove("general-report__item--active");
      }
      populateReport();
    };
  });
}

linkActiveOverview.onclick = clickLinkOverview();
linkActiveReport.onclick = clickLinkReport();

const linkSalesActive = document.querySelector(".general-report__item-sales");
const linkOrdersActive = document.querySelector(".general-report__item-orders");
const linkResellersActive = document.querySelector(
  ".general-report__item-resellers"
);
const reportBlock = document.querySelector(".general-report__block");
const reportBlockRight = document.querySelector(
  ".general-report__block--right"
);
const swiperReport = document.querySelector(".general-report__swiper");
const selectResellersReport = document.querySelector(".general-report__select");

const chartSalesReport = document.querySelector(".chart-sales");
const chartOrdersReport = document.querySelector(".chart-orders");
const chartResellersReport = document.querySelector(".chart-resellers");

function populateReport() {
  const salesActive = linkSalesActive.classList.contains(
    "general-report__item--active"
  );

  const ordersActive = linkOrdersActive.classList.contains(
    "general-report__item--active"
  );

  const resellersActive = linkResellersActive.classList.contains(
    "general-report__item--active"
  );

  if (salesActive) {
    swiperReport.style.display = "block";
    chartSalesReport.style.display = "block";
    chartOrdersReport.style.display = "none";
    selectResellersReport.style.display = "none";
    chartResellersReport.style.display = "none";
    reportBlockRight.style.display = "none";
  }
  if (ordersActive) {
    swiperReport.style.display = "none";
    chartSalesReport.style.display = "none";
    chartOrdersReport.style.display = "initial";
    selectResellersReport.style.display = "none";
    reportBlockRight.style.display = "none";
    chartResellersReport.style.display = "none";
  }
  if (resellersActive) {
    reportBlock.style.display = "flex";
    selectResellersReport.style.display = "block";
    swiperReport.style.display = "none";
    chartSalesReport.style.display = "none";
    chartOrdersReport.style.display = "none";
    reportBlockRight.style.display = "flex";
    chartResellersReport.style.display = "initial";
  }
}

const resellers = document.querySelector(".general-report__resellers");
const arrowPercentage = document.querySelector(".resellers__percentage");

async function populateResellersRanking() {
  const RANKING__URL = BASE__URL + "resellers/ranking";
  const response = await fetch(RANKING__URL);

  const responseJson = await response.json();
  const responseResellers = responseJson.resellers;

  for (let i in responseResellers) {
    const name = responseResellers[i].name.split(" ");
    const logoName = name[0].slice(0, 1) + name[1].slice(0, 1);

    const percentage = responseResellers[i].percentage
      .split("")
      .slice(1)
      .join("");

    i = parseInt(i);

    const arrowNegative = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.00024 6.5L8.00024 9.5L11.0002 6.5" stroke="#EB0045" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    const arrowPositive = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    let percentageReselllers;
    let arrowPercent;

    if (parseInt(responseResellers[i].percentage) < 0) {
      percentageReselllers = "resellers__percentage--negative";
      arrowPercent = arrowNegative;
    } else {
      percentageReselllers = "resellers__percentage--positive";
      arrowPercent = arrowPositive;
    }

    const rowResellersRanking = `
    <div class="resellers-row">
      <span class="resellers__id">${i + 1}º</span>
      <div class="resellers__logo">
       <span class="resellers__logo-name">${logoName}</span>
      </div>
      <div class="resellers__container">
        <h4 class="resellers__name">${responseResellers[i].name}</h4>
        <div class="resellers__info">
         <small class="resellers__orders">${
           responseResellers[i].ordersCount
         }</small>
          <span class="resellers__percentage ${percentageReselllers}">${percentage}
         ${arrowPercent}
          </span>
        </div>
      </div>
    </div>
    `;

    resellers.insertAdjacentHTML("beforeend", rowResellersRanking);
  }
}

(function init() {
  getDataTable();
  populateListReport();
  clickLinkOverview();
  clickLinkReport();
  populateReport();
  populateResellersRanking();
})();
