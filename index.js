const barContainer = document.querySelector(".bar-container");

const cardOne = document.querySelector(".card-one");
const cardTwo = document.querySelector(".card-two");
let shouldModalBeShown = true;

const toggleSideNav = () => {
  const sidenav = document.querySelector(".sidenav");
  sidenav.classList.toggle("active");
  barContainer.classList.toggle("change");
  deform(cardOne);
  deform(cardTwo);
  if (sidenav.classList.contains("active")) {
    content.removeEventListener("click", showModal);
  }
  else{
    
    content.addEventListener("click", showModal);
  }
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

console.log(msgImg.getBoundingClientRect());

const content = document.querySelector(".content");
const container = document.querySelector(".container");

const transform = (cardNum) => {
  cardNum.style.transform = "scale(1)";
  cardNum.style.opacity = "1";
};
const deform = (cardNum) => {
  cardNum.style.transform = "scale(0)";
  cardNum.style.opacity = "0";
};
const showModal = (e) => {
  console.log(e);
  shouldModalBeShown = true;
  if (e.target.className === "card-one") {
    return;
  }
  console.log(e.target.offsetWidth / 2, e.offsetX);
  if (e.offsetX < e.target.offsetWidth / 2) {
    transform(cardOne);
  } else {
    deform(cardOne);
  }
  if (e.offsetX > e.target.offsetWidth / 2) {
    transform(cardTwo);
  } else {
    deform(cardTwo);
  }
};
content.addEventListener("click", showModal);
