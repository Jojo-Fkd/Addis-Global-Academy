/* SIDE BAR EXPANSION */

const expandIcon = document.querySelector("nav ul:first-child li:first-child");
const sideBar = document.querySelector("nav");
const dashBoardBlur = document.querySelector(".dashboard_blur");

expandIcon.onclick = () => {
  sideBar.classList.toggle("active");
  dashBoardBlur.classList.toggle("blur");
};
