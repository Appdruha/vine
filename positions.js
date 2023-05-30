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

function renderInfo(responseArr) {
  var container = document.querySelector(".container");
  var positionId = localStorage.getItem("pos_id");
  let positionInfo = responseArr[positionId - 1];
  let card = document.createElement("div");
  card.classList.add("card");
  let cardHeader = document.createElement("h2");
  cardHeader.textContent = `POSITION ${positionInfo.id}`;
  let cardBody = document.createElement("div");
  cardBody.textContent = positionInfo.body;
  let btn = document.createElement("a");
  btn.setAttribute("href", "#");
  btn.setAttribute("style", "width: 45%; background: #323232; color: antiquewhite; margin: auto;");
  btn.textContent = "Заказать"
  btn.classList.add("btn");
  btn.classList.add("btn-primary");
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(btn);
  container.appendChild(card);
}

getInfo(renderInfo);

