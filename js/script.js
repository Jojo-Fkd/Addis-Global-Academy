/* FOOTER TELEGRAM OPTIONS */

const telegram = document.querySelector(".telegram_link");
const telegramBg = document.querySelector(".telegram_bg");
telegram.onclick = () => {
  telegramBg.classList.add("active");
  const closeBtn = telegramBg.querySelector("h1 svg");
  closeBtn.onclick = () => {
    telegramBg.classList.remove("active");
  };
};

/* FOOTER CARET FUNCTION */

const caretIcons = document.querySelectorAll("footer .caret_down_container");

caretIcons.forEach((caret) => {
  let caretInfo = caret.parentElement.parentElement;
  caret.onclick = () => {
    caret.classList.toggle("active");
    caretInfo.classList.toggle("active");
  };
});

/* FAQ SECTION */

const faqIcons = document.querySelectorAll(
  ".faq-body section article .answer_toggle"
);

faqIcons.forEach((icon) => {
  icon.onclick = () => {
    const faq = icon.parentElement.parentElement;
    icon.classList.toggle("active");
    faq.classList.toggle("active");
  };
});

/* SIDE BAR ACTIVATION */

const sideBarIcon = document.querySelector(".side_bar_icon_container");
const sideBar = document.querySelector(".side_bar_container ul");
const sideBarBlur = document.querySelector(".side_bar_blur");

sideBarIcon.onclick = () => {
  sideBar.classList.toggle("active");
  sideBarBlur.classList.toggle("blur");
};
