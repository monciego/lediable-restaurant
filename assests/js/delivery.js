// // delivery

let options = document.querySelectorAll(".option");
let alaminos = document.getElementById("alaminos");
let guimbal = document.getElementById("guimbal");
let manila = document.getElementById("manila");
let vigan = document.getElementById("vigan");
let baguio = document.getElementById("baguio");
let olongapo = document.getElementById("olongapo");
let taguig = document.getElementById("taguig");
let tagaytay = document.getElementById("tagaytay");
let palawan = document.getElementById("palawan");
let guimaras = document.getElementById("guimaras");
let davao = document.getElementById("davao");
let content = document.getElementById("restaurant-name");

alaminos.addEventListener("click", () => {
  content.innerHTML = "Alaminos";
  let selectedValue = document.getElementById("alaminos").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

guimbal.addEventListener("click", () => {
  content.innerHTML = "Guimbal";
  let selectedValue = document.getElementById("guimbal").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

manila.addEventListener("click", () => {
  content.innerHTML = "Manila";
  let selectedValue = document.getElementById("manila").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

vigan.addEventListener("click", () => {
  content.innerHTML = "Vigan";
  let selectedValue = document.getElementById("vigan").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

baguio.addEventListener("click", () => {
  content.innerHTML = "Baguio";
  let selectedValue = document.getElementById("baguio").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

olongapo.addEventListener("click", () => {
  content.innerHTML = "Olongapo";
  let selectedValue = document.getElementById("olongapo").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

taguig.addEventListener("click", () => {
  content.innerHTML = "Taguig";
  let selectedValue = document.getElementById("taguig").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

tagaytay.addEventListener("click", () => {
  content.innerHTML = "Tagaytay";
  let selectedValue = document.getElementById("tagaytay").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

palawan.addEventListener("click", () => {
  content.innerHTML = "Palawan";
  let selectedValue = document.getElementById("palawan").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

guimaras.addEventListener("click", () => {
  content.innerHTML = "Guimaras";
  let selectedValue = document.getElementById("guimaras").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

davao.addEventListener("click", () => {
  content.innerHTML = "Davao";
  let selectedValue = document.getElementById("davao").value;
  localStorage.setItem("selectedValue", selectedValue);
  return true;
});

//
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const restauBtn = document.querySelector(".find-restaurant-btn button");
const selectRestaurant = document.querySelector(".select-restaurant");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    restauBtn.classList.add("restau-active");
    selectRestaurant.classList.add("selected-active");
  });
});
