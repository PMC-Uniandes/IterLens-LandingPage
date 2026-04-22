const steps = document.querySelectorAll("[data-step]");

steps.forEach((step, index) => {
  setTimeout(() => {
    step.classList.add("visible-step");
  }, 900 + index * 900);
});
