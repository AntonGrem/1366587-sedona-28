var buttonSearchForm = document.querySelector(".form__link-search");
var formSearching = document.querySelector(".form__searching-visible");
var formButtonFind = document.querySelector(".form__button-find");

 formSearching.className = "form__searching-invisible";

buttonSearchForm.addEventListener("click", function(event){
    event.preventDefault()
    if (formSearching.classList.contains("form__searching-visible")){
      formSearching.classList.remove("form__searching-visible");
      formSearching.classList.add("form__searching-invisible");
    }
    else{
      formSearching.classList.remove("form__searching-invisible");
      formSearching.classList.add("form__searching-visible");
    }
    
});
formButtonFind.addEventListener("click", function(event){
  event.preventDefault()  
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formSearching.classList.contains("form__searching-visible")) {
        evt.preventDefault();
        formSearching.classList.remove("form__searching-visible");
        formSearching.classList.add("form__searching-invisible");
      }
    }
  });
