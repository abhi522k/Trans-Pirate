var btntrans = document.querySelector("#btntrans");
var texttrans = document.querySelector("#texttrans");
var outtrans = document.querySelector("#outtrans");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("wrong");
}

btntrans.addEventListener("click", function () {
  var input = texttrans.value;

  fetch(getTranslationURL(input))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outtrans.innerText = translatedText;
    })
    .catch(errorHandler);
});
