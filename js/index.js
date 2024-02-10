const closeBtn = document.querySelector("#closeModel");
const model = document.querySelector(".model");
const modelOpener = document.querySelectorAll(".modelOpener");

// model opener
modelOpener.forEach((opener) => {
  opener.addEventListener("click", () => {
    model.style.display = "grid";
  });
});
// model handling
closeBtn.addEventListener("click", () => {
  model.style.display = "none";
});


// faq container handling

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
})