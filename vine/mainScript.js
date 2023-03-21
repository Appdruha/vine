//кнопки переадресации
document.querySelector("#btn1").onclick = function () {
  window.location.href = "vineMap.html";
};
document.querySelector("#btn2").onclick = function () {
  window.location.href = "degustation.html";
};
document.querySelector("#btn3").onclick = function () {
  window.location.href = "moreInfo.html";
};

//копирование номера по клику
let clipboard = new Clipboard("#phone");
let phones = document.querySelectorAll("#phone");
for (phone of phones) {
  phone.onclick = async function () {
    let div = document.createElement("div");
    div.classList.add("phone_copied");
    div.innerHTML =
      "<p style='font-size:12px; line-height: 150%; margin-left:5px'>Номер скопирован</p>";
    await this.appendChild(div);
    setTimeout(function () {
      document.querySelector(".phone_copied").remove();
    }, 1000);
  };
}

//работа с разделами header
let elems = document.querySelectorAll(".header_link");
for (elem of elems) {
  elem.onclick = async function () {
    if (this.classList.contains("header_clicked")) {
      await this.classList.remove("header_clicked");
      await header_burger_close();
    } else {
      elems.forEach((elem) => elem.classList.remove("header_clicked"));
      await this.classList.add("header_clicked");
      await header_burger_close();
      await header_burger_open();
    }
  };
}

let header_burger_open = async function () {
  if (document.querySelector("#link1").classList.contains("header_clicked")) {
    document.querySelector("#burger1").classList.add("burger_active");
  } else if (
    document.querySelector("#link2").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger2").classList.add("burger_active");
  } else if (
    document.querySelector("#link3").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger3").classList.add("burger_active");
  } else if (
    document.querySelector("#link4").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger4").classList.add("burger_active");
  }
};
let header_burger_close = async function () {
  let burgers = document.querySelectorAll(".header_menu_burger");
  for (burger of burgers)
    burgers.forEach((burger) => burger.classList.remove("burger_active"));
};

//соц сети
document.querySelector("#youtube").onclick = () => {
  window.open("https://www.youtube.com/@YuriTheProfessional", "_blank");
};
document.querySelector("#vk").onclick = () => {
  window.open("https://vk.com/metrofit", "_blank");
};
document.querySelector("#facebook").addEventListener("click", () => {
  window.open("https://ru-ru.facebook.com/", "_blank");
});
