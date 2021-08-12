function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, title;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  menuCards = document.getElementById("menu-cards");
  li = menuCards.getElementsByTagName("li");
  title = document.querySelector(".meal-title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//selecting all required elements
const filterItem = document.querySelector(".items");
const meals = document.querySelectorAll("#meal");

filterItem.onclick = (selectedItem) => {
  //if user click on filterItem div
  if (selectedItem.target.classList.contains("item")) {
    //if user selected item has .item class
    filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
    selectedItem.target.classList.add("active"); //add that active class on user selected item
    let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
    meals.forEach((meal) => {
      let filterMeals = meal.getAttribute("data-name"); //getting image data-name value
      //if user selected item data-name value is equal to images data-name value
      //or user selected item data-name value is equal to "all"
      if (filterMeals == filterName || filterName == "all") {
        meal.classList.remove("hide"); //first remove the hide class from the image
        meal.classList.add("show"); //add show class in image
      } else {
        meal.classList.add("hide"); //add hide class in image
        meal.classList.remove("show"); //remove show class from the image
      }
    });
  }
};

const slider = document.querySelector(".items");
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
