const dashboardSideBar = document.querySelector("nav");
const dashBoardBlur = document.querySelector(".dashboard_blur");

const studentSwitchIcon = document.querySelector(
  ".student_switch_icon_container"
);
const studentSwitchSideBar = document.querySelector(".student_option_sideBar");

/* SIDE BAR EXPANSION */

const expandIcon = document.querySelector(".expand_icon_container");

expandIcon.onclick = () => {
  dashboardSideBar.classList.toggle("active");
  dashBoardBlur.classList.toggle("blur");
};

/* DASHBOARD TIME */

const dashboardClock = document.querySelector(".title p");
const greetingContainer = document.querySelector(
  ".nav_elements li:first-child"
);
let greeting;

setInterval(() => {
  let date = new Date();

  let hours = date.getHours();

  if (hours < 12) {
    greeting = "Morning";
  } else if (hours > 12 || hours < 17) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }

  greetingContainer.innerText = `Good ${greeting}`;

  let minutes = date.getMinutes();

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;

  let hm = `${h} : ${m} `;

  dashboardClock.innerText = hm;
}, 1000);

/* STUDENT SWITCH */

studentSwitchIcon.onclick = () => {
  studentSwitchSideBar.classList.add("active");
  dashBoardBlur.classList.add("blur2");
  const okBtn = studentSwitchSideBar.querySelector(".ok_btn button");
  okBtn.onclick = () => {
    studentSwitchSideBar.classList.remove("active");
    dashBoardBlur.classList.remove("blur2");
    sideBar.style.zIndex = "1000";
  };
};
