const barContainer = document.querySelector(".bar-container");

const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
let shouldModalBeShown = true;

const toggleSideNav = () => {
  const sidenav = document.querySelector(".sidenav");
  sidenav.classList.toggle("active");
  barContainer.classList.toggle("change");
};

barContainer.addEventListener("click", toggleSideNav);

const loader = document.querySelector(".loader");
const msgImg = document.querySelector(".model .content img");

const showLoader = () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
};
window.addEventListener("load", showLoader);

const aboutMe = document.querySelector(".about-me");
const chevDown = document.querySelector(".fas");
chevDown.addEventListener("click", () =>
  aboutMe.scrollIntoView({ behavior: "smooth" })
);
const links = document.querySelectorAll(".sidenav ul li ");

links.forEach((link) => link.addEventListener("click", toggleSideNav));

const abtLink = document.querySelector(".sidenav ul .abt");
console.log(abtLink);
abtLink.addEventListener("click", () =>
  setTimeout(() => {
    aboutMe.scrollIntoView({behavior:'smooth'});
  }, 400)
);
