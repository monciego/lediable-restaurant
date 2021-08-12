const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

(function () {
  document.addEventListener("keyup", function (event) {
    if (event.target.matches("#giftMessage")) {
      // get input value and length
      const value = event.target.value;
      const valueLength = event.target.value.length;
      // get data value
      const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
      const remainingChars = maxChars - valueLength;
      if (valueLength > maxChars) {
        // limit chars to maxChars
        event.target.value = value.substr(0, maxChars);
        return; //end function execution
      }
      event.target.nextElementSibling.innerHTML =
        remainingChars + " characters remaining";
    }
  });
})();

const radioMail = document.querySelector("#radio2");
const radioMail1 = document.querySelector("#radio1");
const notmail = document.querySelector(".notmail");
const mailContent = document.querySelector(".mailContent");

radioMail.addEventListener("click", () => {
  mailContent.classList.add("mailContentActive");
  notmail.classList.add("notmailActive");
});

radioMail1.addEventListener("click", () => {
  mailContent.classList.remove("mailContentActive");
  notmail.classList.remove("notmailActive");
});
