const accrd = document.querySelectorAll(".accordian");
for (var i = 0; i < accrd.length; i++) {
  accrd[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;

    const a = this.firstElementChild;
    const plusButton = a.firstElementChild;

    const b = this.firstElementChild;
    const minusButton = b.lastElementChild;

    if (content.style.display === "none") {
      content.style.display = "block";

      plusButton.style.display = "none";
      minusButton.style.display = "block";
    } else {
      content.style.display = "none";

      minusButton.style.display = "none";
      plusButton.style.display = "block";
    }
  });
}
