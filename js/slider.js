/* FRONT PAGE SLIDE EFFECT */

const slider = document.querySelector(".slider");
const sliderImages = slider.querySelectorAll("img");

let id = 0;

let idLengthNo = 0;

let idLength = sliderImages.forEach((img) => {
  if (img.hasAttribute("slider-img")) {
    idLengthNo = Number(img.id);
  }
});

setInterval(() => {
  id++;
  if (id > idLengthNo) {
    sliderImages.forEach((img) => {
      if (img.hasAttribute("slider-img")) {
        img.style.opacity = "0";
      }
    });
    id = 0;
  }
  sliderImages.forEach((img) => {
    if (img.hasAttribute("slider-img")) {
      if (img.id == id) {
        img.style.opacity = "1";
      }
    }
  });
}, 5000);
