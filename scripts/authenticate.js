let inputEmail = document.querySelector(".container-block__input--email");
let inputPassword = document.querySelector(".container-block__input--password");

const formButton = document.getElementsByClassName("container-block__button");
const formLogin = document.querySelector(".container-block__form");

const errorMessage = `
      <span class="container__error-message">
        Este e-mail não existe, você tem outro?'
      </span>
      `;

const authenticate = async () => {
  const AUTH__URL = await fetch("https://test-final.b8one.academy/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "academy@b8one.com",
      password: "Academy2022",
    }),
  });
  const response = await AUTH__URL.json();
  console.log(response);

  if (response) {
    formButton.sumbit();
  } else {
    inputEmail.classList.add("error");
    inputEmail.insertAdjacentHTML("afterend", errorMessage);
    inputEmail.style.marginBottom = "8px";
  }

  // function validateForm() {
  //   if (inputEmail.value !== "") {
  //     if (response.message === "user_not_found") {
  //       console.log("entrou");
  //       inputEmail.classList.add("error");
  //       inputEmail.insertAdjacentHTML("afterend", errorMessage);
  //       inputEmail.style.marginBottom = "8px";
  //     }
  //   }
  // }
  // formButton.onsumbit = validateForm;
};
