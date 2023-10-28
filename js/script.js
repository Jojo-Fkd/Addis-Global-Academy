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
