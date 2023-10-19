const slider = document.querySelector(".slider");
const sliderImage = slider.querySelector("img");
const imageTracker = document.querySelectorAll(".img-no-teller li");

let id = 1;
sliderImage.src = `Images/SV1.png`;

imageTracker.forEach((track) => {
  if (track.id == id) {
    track.style.opacity = "0.3";
  }
});

const frontPage = document.querySelector("#front_page");
const buttons = frontPage.querySelectorAll("button");
buttons.forEach((btn) => {
  if (id < 1) {
    btn.style.opacity = "0.1";
    btn.disabled = true;
  }
  btn.onclick = () => {
    sliderImage.className = "";
    if (btn.innerText === "right") {
      id++;
      if (id > 3) {
        id = 1;
      }
      sliderImage.src = `Images/SV${id}.png`;
      imageTracker.forEach((track) => {
        track.style.opacity = "1";
        if (track.id == id) {
          track.style.opacity = "0.3";
        }
      });
      sliderImage.className = "active";
    } else if (btn.innerText === "left") {
      id--;
      if (id < 1) {
        sliderImage.src = `Images/SV1.png`;
        id = 1;
      } else {
        sliderImage.src = `Images/SV${id}.png`;
        imageTracker.forEach((track) => {
          track.style.opacity = "1";
          if (track.id == id) {
            track.style.opacity = "0.3";
          }
        });
        sliderImage.className = "active";
      }
    }
  };
});
