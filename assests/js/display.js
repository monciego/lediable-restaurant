document.getElementById("restaurant-name").innerHTML =
  localStorage.getItem("selectedValue");

document.getElementById("restaurant-address").innerHTML =
  localStorage.getItem("selectedValue");

document.getElementById("ordered-dishes-address").innerHTML =
  localStorage.getItem("selectedValue");

const about = document.querySelector(".display");
const btns = document.querySelectorAll(".sidebar-link");
const articles = document.querySelectorAll(".display-content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("tab-active");
    });
    e.target.classList.add("tab-active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("display-content-active");
    });
    const element = document.getElementById(id);
    element.classList.add("display-content-active");
  }
});

//

function CopyToClipboard(id) {
  const btnText = document.getElementById("copy");
  var r = document.createRange();
  r.selectNode(document.getElementById("copyCode"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");

  btnText.textContent = "COPIED";
  window.getSelection().removeAllRanges();
}

let copybtn = document.querySelector(".copybtn");

function copyIt() {
  let copyInput = document.querySelector("#copyvalue");

  copyInput.select();

  document.execCommand("copy");

  copybtn.textContent = "COPIED";
}

// rider

const riderBtn = document.getElementById("riderBtn");
const finalRiderBtn = document.getElementById("FinalriderBtn");
const riderInformation = document.querySelector(".ride-card-information");

riderBtn.addEventListener("click", () => {
  riderInformation.classList.add("ride-card-information-active");
  finalRiderBtn.classList.add("ride-card-information-active");
  riderBtn.style.display = "none";
});

// close update

const closeUpdateBtn = document.querySelector(".close-update");
const updateCard = document.querySelector(".update-header");

closeUpdateBtn.addEventListener("click", () => {
  updateCard.classList.add("update-header-close");
});

// mobile

const slider = document.querySelector(".mobile-display-navbar");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  // slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  // slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  // slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
