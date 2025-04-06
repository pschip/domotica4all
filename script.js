document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in, .fade-in-up");
  fadeElements.forEach((el) => {
    el.style.opacity = "1";
  });
});
