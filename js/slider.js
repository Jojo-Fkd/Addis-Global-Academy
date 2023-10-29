/* FRONT PAGE SLIDE EFFECT */

const slider = document.querySelector(".slider");
const sliderImages = slider.querySelectorAll("img");
const imageTracker = document.querySelectorAll(".img-no-teller li");

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
  imageTracker.forEach((track) => {
    track.style.opacity = "0.6";
    track.style.transform = "scale(1)";
    if (track.id == id) {
      track.style.opacity = "1";
      track.style.transform = "scale(1.2)";
    }
  });
}, 5000);