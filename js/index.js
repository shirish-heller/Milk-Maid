var masterPanel = require("../handlebars/masterPanel.hbs");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.myjson.com/bins/lkta2');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
    setTimeout(function() {
      createHTML(data);
    },2000);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(productData) {
  var productCategories = document.getElementById("masterPane");
  productCategories.innerHTML = masterPanel(productData);

  var loadingIndTemp = document.getElementById("loading-indicator");
  loadingIndTemp.innerHTML = "";
}