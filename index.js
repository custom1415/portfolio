const barContainer = document.querySelector(".bar-container");
const toggleSideNav = () => {
  document.querySelector(".sidenav").classList.toggle("active");
  barContainer.classList.toggle("change");
};

barContainer.addEventListener("click", toggleSideNav);

const loader = document.querySelector(".lds-heart");
const image = document.querySelectorAll("img");
const section = document.querySelectorAll("section");
console.log(section);
const showLoader = () => {
  if (!image.completed) {
    section.forEach((s) => (s.style.display = "none"));
    console.log("hi");
  }

  loader.style.display = "none";
  section.forEach((s) => (s.style.display = "grid"));
};

showLoader();
