var formLink = document.querySelector(".contacts-button");
var formPopup = document.querySelector(".write-us");
var formClose = formPopup.querySelector(".close");

formLink.addEventListener("click",function(evt){
	evt.preventDefault();
	formPopup.classList.add("show");
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("show")) {
        formPopup.classList.remove("show");
      }
    }
  });