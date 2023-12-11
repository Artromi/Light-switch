const btn = document.querySelector("button");
const bodyDark = document.querySelector("body");

function buttonClick() {
  btn.classList.toggle("button--dark");
  bodyDark.classList.toggle("body--dark");
  document.title = "Good Night";
  if (document.title != "Good Night") {
    document.title = "Good Night";
  }
  
}

btn.addEventListener("click", buttonClick);
