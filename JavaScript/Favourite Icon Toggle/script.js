const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("filled")) {
      button.classList.remove("filled");
      button.innerHTML = "♡";
    } else {
      button.classList.add("filled");
      button.innerHTML = "❤";
    }
  });
});
