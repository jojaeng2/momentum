const toogleBtn = document.querySelector(".navbar__toogleBtn");
const menu = document.querySelector(".select-page");

function toogleBtnClick(){
  menu.classList.toggle("toogle-active");
}

toogleBtn.addEventListener("click",toogleBtnClick);
