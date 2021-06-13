const barContainer = document.querySelector(".bar-container");
const toggleSideNav = () => {
  document.querySelector(".sidenav").classList.toggle("active");
barContainer.classList.toggle("change")

}

barContainer.addEventListener("click", toggleSideNav);
