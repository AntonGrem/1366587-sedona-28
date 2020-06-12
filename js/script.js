var buttonSearchForm = document.querySelector(".form__button-search");
var formSearching =document.querySelector(".form__searching-invisible");
buttonSearchForm.addEventListener("click", function(event){
    event.preventDefault()
    formSearching.classList.toggle("form__searching-visible");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formSearching.classList.contains("form__searching-visible")) {
        evt.preventDefault();
        formSearching.classList.remove("form__searching-visible");
      }
    }
  });