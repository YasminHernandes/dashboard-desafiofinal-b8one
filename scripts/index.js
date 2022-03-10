const BASE__URL = "https://test-final.b8one.academy/";

const tableCell = document.querySelectorAll(".tbody-item__content");
const productImage = document.querySelectorAll(".tbody-item__image");
const productName = document.querySelectorAll(".tbody-item__title");
const productId = document.querySelectorAll(".tbody-item__value--id");
const productDepart = document.querySelectorAll(".tbody-item__value--depart");
const productPrice = document.querySelectorAll(".tbody-item__value--price");

async function populateTable(i) {
  const response = await fetch(
    "https://test-final.b8one.academy/products/more-sold"
  );

  const responseJson = await response.json();
  const responseProducts = responseJson.products;

    productImage[i].src = responseProducts[i].image;
    productName[i].innerHTML = responseProducts[i].name;
    productId[i].innerHTML = responseProducts[i].orderId;
    productDepart[i].innerHTML = responseProducts[i].department;
    productPrice[i].innerHTML = formatPrice(responseProducts[i].price);
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

function getDataTable() {
  for (let i in tableCell) {
    populateTable(i);
  }
}

getDataTable()