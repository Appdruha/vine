const requestURL = "https://jsonplaceholder.typicode.com/posts";
function getInfo(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL);
  xhr.addEventListener("load", () => {
    const responseArr = JSON.parse(xhr.responseText);
    cb(responseArr);
  });
  xhr.send();
}

function renderInfo(responseArr) {
  var container = document.querySelector(".container");
  var collectionId = localStorage.getItem("col_id");
  document.querySelector("h1").textContent = `Collection ${collectionId}`
  if (collectionId == 1) {
    var positionArr = responseArr.slice(
      [collectionId - 1],
      [collectionId * 10]
    );
  } else {
    var positionArr = responseArr.slice(
      [(collectionId - 1) * 10],
      [(collectionId - 1) * 10 + 10]
    );
  }
  for (position of positionArr) {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardHeader = document.createElement("h2");
    cardHeader.textContent = `POSITION ${position.id}`;
    let cardBody = document.createElement("div");
    cardBody.textContent = position.body;
    let btn = document.createElement("a");
    btn.setAttribute("href", "#");
    btn.setAttribute(
      "style",
      "width: 45%; background: #323232; color: antiquewhite; margin: auto;"
    );
    btn.textContent = "Заказать";
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(btn);
    container.appendChild(card);
    container.appendChild(document.createElement("br"));
  }
}

getInfo(renderInfo);
