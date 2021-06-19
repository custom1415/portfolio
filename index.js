const barContainer = document.querySelector(".bar-container");

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

links.forEach((link) =>
  link.addEventListener("click", () => {
    toggleSideNav();
    setTimeout(() => {
      document
        .querySelector(`.${link.dataset.link}`)
        .scrollIntoView({ behavior: "smooth" });
    }, 400);
  })
);

const contactBar = document.querySelector('.contact .bar-container')
contactBar.addEventListener('click',()=>{
  document.querySelector('.float').classList.toggle('scale')
  contactBar.classList.toggle('change-pos')
})
