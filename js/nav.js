const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinks_Li = document.querySelectorAll(".nav-links li");
//* Opens & Closed burger menu on buger click

const getBuger = () => {
  burger.addEventListener("click", navSlide(burger));
};
const getLink = () => {
  navLinks.addEventListener("click", navSlide(navLinks));
};
function navSlide(thing) {
  thing.addEventListener("click", () => {
    //Toggle Nav
    navLinks.classList.toggle("nav-active");

    //Animate Links
    navLinks_Li.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
}

getBuger();
getLink();
