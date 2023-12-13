const btn = document.querySelector("button");
const bodyDark = document.querySelector("body");

function buttonClick() {
  btn.classList.toggle("button--dark");
  bodyDark.classList.toggle("body--dark");

  if (document.title !== "Good Night") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}

btn.addEventListener("click", buttonClick);
