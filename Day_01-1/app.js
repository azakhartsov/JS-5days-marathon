const image = [
  {
    url:
      "https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    alt: "Yamaha R1",
  },
  {
    url:
      "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "Ducati Panegale V2",
  },
  {
    url:
      "https://images.unsplash.com/photo-1489731110502-23f1239ea56c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "MV Agusta F3",
  },
  {
    url:
      "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "Yamaha MT-07",
  },
  {
    url:
      "https://images.unsplash.com/photo-1571646078462-3a00bdd5eb73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
    alt: "Yamaha R1",
  },
];

function buildContent() {
  const container = document.querySelector(".container");
  for (let elem of image) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    div.classList.add("slide");
    div.style.backgroundImage = `url("${elem.url}")`;
    h3.innerHTML = elem.alt;
    div.append(h3);
    container.append(div);
  }
}
buildContent();

const slides = document.querySelectorAll(".slide");

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

for (let slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}
