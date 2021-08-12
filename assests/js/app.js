const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

//

const openMenu = document.getElementById("menu");
const menuContent = document.querySelector(".menuContent");
const closeBtn = document.querySelector(".closeBtn");
const imgBefore = document.querySelector(".imgBefore ");
const menuLinks = document.querySelectorAll(".fadeLink");
const bodyDocument = document.getElementsByTagName("body")[0];
const mobileLinks = document.querySelectorAll(".mobile-fade");

openMenu.addEventListener("click", () => {
  menuContent.classList.add("openActive");

  imgBefore.style.animation = "load 2.3s ease-in-out";
  menuLinks.forEach((link, index) => {
    link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.5}s`;
  });
  document.querySelector(".sideContent span").classList.add("fade");
  bodyDocument.classList.add("bodyMenuOpen");

  mobileLinks.forEach((mobilelink, index) => {
    mobilelink.style.animation = `mobilefade 0.5s ease forwards ${
      index / 7 + 0.5
    }s`;
  });
});

closeBtn.addEventListener("click", () => {
  menuContent.classList.remove("openActive");
  imgBefore.style.animation = "";
  menuLinks.forEach((link, index) => {
    link.style.animation = ``;
  });
  document.querySelector(".sideContent span").classList.remove("fade");
  bodyDocument.classList.remove("bodyMenuOpen");

  mobileLinks.forEach((mobilelink, index) => {
    mobilelink.style.animation = ``;
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");

console.log(scrollElements);

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 250);
});
