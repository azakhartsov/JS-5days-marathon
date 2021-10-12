const slides = document.querySelectorAll(".slide");

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

for (let slide of slides) {
  slide.onclick = clearActiveClasses;
  slides.classList.add("active");
}
