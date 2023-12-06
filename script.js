const btn = document.querySelector("button");
const bodyDark = document.querySelector("body");
btn.classList.add("button--dark");
bodyDark.classList.add("body--dark");

function buttonClick() {
  btn.classList.toggle("button--dark");
  bodyDark.classList.toggle("body--dark");
  // document.title = "Good Night";
  // document.title = "Good Morning";
}

btn.addEventListener("click", buttonClick);
