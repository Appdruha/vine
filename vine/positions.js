var header = document.querySelector(".header");
var description_block = document.querySelector(".position_description");
var requestURL = "/positions.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = async function () {
    alert('hello')
  var position = request.response;
  await populate_all(position)
};

async function populate_all(jsonObj) {
    var description = document.createElement('p')
    header.textContent = jsonObj['value']
    description.textContent = jsonObj['description']
    description_block.appendChild(description)
}
