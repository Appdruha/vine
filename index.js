//кнопки переадресации
document.querySelector("#btn1").onclick = function () {
  window.location.href = "vineMap.php";
};
document.querySelector("#btn2").onclick = function () {
  window.location.href = "degustation.php";
};
document.querySelector("#btn3").onclick = function () {
  window.location.href = "moreInfo.php";
};

//копирование номера по клику
let clipboard = new Clipboard("#phone");
let phones = document.querySelectorAll("#phone");
for (phone of phones) {
  phone.onclick = async function () {
    let div = document.createElement("div");
    div.textContent = "Номер скопирован";
    div.classList.add("phone_copied");
    await this.append(div);
    setTimeout(function () {
      document.querySelector(".phone_copied").remove();
    }, 1000);
  };
}

//работа с разделами header
let elems = document.querySelectorAll(".header_link");
for (elem of elems) {
  elem.onclick = function () {
    if (this.classList.contains("header_clicked")) {
      header_burger_close();
    } else {
      header_burger_close();
      this.classList.add("header_clicked");
      header_burger_open();
    }
  };
}

function click_away() {
  document
    .querySelector(".firstBlock")
    .addEventListener("click", header_burger_close);
}

let header_burger_open = function () {
  if (document.querySelector("#link1").classList.contains("header_clicked")) {
    document.querySelector("#burger1").classList.add("burger_active");
    click_away();
  } else if (
    document.querySelector("#link2").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger2").classList.add("burger_active");
    click_away();
  } else if (
    document.querySelector("#link3").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger3").classList.add("burger_active");
    click_away();
  } else if (
    document.querySelector("#link4").classList.contains("header_clicked")
  ) {
    document.querySelector("#burger4").classList.add("burger_active");
    click_away();
  }
};
let header_burger_close = function () {
  let burgers = document.querySelectorAll(".header_menu_burger");
  if (document.querySelector(".header_clicked") == null) {
    return;
  } else {
    document
      .querySelector(".header_clicked")
      .classList.remove("header_clicked");
  }
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

//burger меню
const requestURL = "https://jsonplaceholder.typicode.com/posts";
function getInfo(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL);
  xhr.addEventListener("load", () => {
    const responseArr = JSON.parse(xhr.responseText); //делаем из json файла массив
    cb(responseArr);
  });
  xhr.send();
}

async function populateBurgerPositions(responseArr) {
  const burger1 = document.querySelector("#burger1");
  const burger3 = document.querySelector("#burger3");
  await responseArr.forEach((response) => {
    const positionName = document.createElement("a");
    const collectionName = document.createElement("a");
    positionName.classList.add("burger_font");
    positionName.setAttribute("id", response.id);
    positionName.setAttribute("name", "position");
    positionName.setAttribute("style", "cursor: pointer");
    positionName.textContent = `position ${response.id}`;
    burger1.appendChild(positionName);
    if (response.id % 10 == 0) {
      collectionName.classList.add("burger_font");
      collectionName.setAttribute("id", response.id / 10);
      collectionName.setAttribute("style", "cursor: pointer");
      collectionName.setAttribute("name", "collection");
      collectionName.textContent = `collection ${response.id / 10}`;
      burger3.appendChild(collectionName);
    }
    position_click();
    collection_click();
  });
}

document.addEventListener("DOMContentLoaded", getInfo(populateBurgerPositions));

//переход на страницу с позицией
function position_click() {
  let position_links = document.getElementsByName("position");
  position_links.forEach((posLink) =>
    posLink.addEventListener("click", function () {
      localStorage.setItem("pos_id", this.id);
      window.location.href = "positions.php";
    })
  );
}

//переход на страницу с коллекцией
function collection_click() {
  let collection_links = document.getElementsByName("collection");
  collection_links.forEach((colLink) =>
    colLink.addEventListener("click", function () {
      localStorage.setItem("col_id", this.id);
      window.location.href = "collections.php";
    })
  );
}

//отправка формы
$("#btn4").click(function () {
  $("#btn4").prop("disabled", true);
  valid = true;
  function validateEmail() {
    let email = $("#email").val().split("");
    if (email.includes("@") == false) {
      $("#email").addClass("wrongInput");
    }
    return email.includes("@");
  }
  valid = validateEmail();
  if ($("#name").val() == "") {
    valid = false;
    $("#name").addClass("wrongInput");
  }
  if ($("#email").val() == "") {
    valid = false;
    $("#email").addClass("wrongInput");
  }
  if (valid == true) {
    function form_sent() {
      let div = document.createElement("div");
      div.setAttribute("style", "margin: auto; text-align: center;");
      let p = document.createElement("p");
      p.textContent = "Форма успешно отправлена!";
      p.setAttribute(
        "style",
        "font-family: 'Playfair Display'; font-size: 36px; line-height: 150%; color: #FFFFFF; margin-top: 100px;"
      );
      div.append(p);
      $(".fourthBlock_box_form").append(div);
      $(div).fadeTo(0, 0);
      $(div).fadeTo(600, 1);
    }
    $.post("db.php", $(".form").serialize())
      .done(function () {
        $(".form").hide(400);
        setTimeout(function () {
          form_sent();
        }, 400);
      })
      .fail(function (xhr) {
        console.log(xhr.status);
        alert(`Ошибка ${xhr.status} при отправке формы`);
      });
  } else {
    $("#btn4").prop("disabled", false);
    alert("Не все поля формы заполнены или неверно указан email.");
  }
});

$("#email").click(function () {
  $("#email").removeClass("wrongInput");
});

$("#name").click(function () {
  $("#name").removeClass("wrongInput");
});

//кнопки на мобилбных ус-вах
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", function () {
    if (document.documentElement.clientWidth <= 1024) {
      this.setAttribute("style", "transform: scale(0.9);");
      function removeStyle() {
        btn.removeAttribute("style");
      }
      setTimeout(removeStyle, 150);
    }
  });
}
