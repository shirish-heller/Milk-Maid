var masterPanel = require("../handlebars/masterPanel.hbs");
var loadingIndicator = require("../handlebars/loading-indicator.hbs");
var busy = {busy: true};
// $(document).ready(function () {
//   $.ajax({
//     xhr: function (){
//       var xhr = new XMLHttpRequest();
//       console.log('xhr', JSON.stringify(xhr));
//       xhr.addEventListener('progress', function(e) {
//         if(e.lengthComputable) {
//           console.log('Percent uploaded', e.loaded/e.total *100);
//         }
//       });
//     },
//     type: "GET",
//     url: "https://api.myjson.com/bins/lkta2",
//     processData: false,
//     contentType: false,
//     success: function(res) {
//       console.log(res);
//       createHTML(res);
//     },
//     error: function(err) {
//       console.log('error', err)
//     }
//   });
// });


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.myjson.com/bins/lkta2');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
    setTimeout(function() {
      console.log('now');
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
  busy = {busy: false};
  loadingIndTemp.innerHTML = loadingIndicator(busy);
}