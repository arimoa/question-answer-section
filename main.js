let answerEl = document.getElementsByClassName("answer");
let signEl = document.getElementsByClassName("material-symbols-outlined");

for (let i = 0; i < signEl.length; i++) {
  signEl[i].addEventListener("click", () => {
    console.log("clicked!");
    if (answerEl[i].classList.contains("hidden")) {
      answerEl[i].classList.remove("hidden");
      answerEl[i].classList.add("show");
      signEl[i].innerHTML = "remove";
    } else {
      answerEl[i].classList.remove("show");
      answerEl[i].classList.add("hidden");
      signEl[i].innerHTML = "add";
    }
  });
}
