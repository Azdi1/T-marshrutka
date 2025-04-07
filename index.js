const btnFormCreate = document.querySelector(".btn__form");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

btnFormCreate.addEventListener("click", function () {
  //   const popup = document.querySelector(".popup");
  popup.classList.add("popup_is-opened");
});

popupClose.addEventListener("click", function () {
  if (popup.classList.contains("popup_is-opened")) {
    popup.classList.remove("popup_is-opened");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Элементы формы
  const form = document.getElementById("checkForm");
  const dataInput = document.getElementById("data__input");
  const bankInput = document.getElementById("img__input");
  const userInput = document.getElementById("user__input");
  const sumInput = document.getElementById("sum-input");
  const rekviziti = document.getElementById("rekviziti-vodili");
  //   const createBtn = document.getElementById("create-btn");

  // Элементы попапа
  const previewDate = document.getElementById("previewDate");
  const previewBankImg = document.getElementById("previewImg");
  const previewUserName = document.getElementById("popup__user-name");
  const previewSum = document.getElementById("popup__mony");
  const numberRekvizit = document.getElementById("number-recvizit");

  // Банковские логотипы
  const bankLogos = {
    сбер: "https://brands-prod.cdn-tinkoff.ru/general_logo/sber.png",
    тинькофф:
      "https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9icmFuZHMtcHJvZC5jZG4tdGlua29mZi5ydS9nZW5lcmFsX2xvZ28vdGlua29mZi1uZXcucG5n",
    default:
      "https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9icmFuZHMtcHJvZC5jZG4tdGlua29mZi5ydS9nZW5lcmFsX2xvZ28vdGlua29mZi1uZXcucG5n",
  };

  // Обработчик создания чека
  btnFormCreate.addEventListener("click", function () {
    // Проверка заполнения полей
    if (
      !dataInput.value ||
      !bankInput.value ||
      !userInput.value ||
      !sumInput.value ||
      !rekviziti.value
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    // Обновление данных в попапе
    previewDate.textContent = dataInput.value;
    previewUserName.textContent = userInput.value;
    numberRekvizit.textContent = rekviziti.value;
    previewSum.textContent = `−${sumInput.value} ₽`;

    // Установка логотипа банка
    const bankName = bankInput.value.toLowerCase();
    previewBankImg.src = bankLogos[bankName] || bankLogos["default"];
  });

  //   // Закрытие попапа
  //   popupClose.addEventListener("click", function () {
  //     popup.style.display = "none";
  //   });
});
