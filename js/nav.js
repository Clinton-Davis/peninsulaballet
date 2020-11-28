const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinks_Li = document.querySelectorAll(".nav-links li");
//* Opens & Closed burger menu on buger click
const navSlide = () => {
  //Toggle Nav
  burger.addEventListener("click", () => {
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
};
//* closes nav and buger on navLint_li selection
const backSlide = () => {
  //Toggle Nav
  navLinks.addEventListener("click", () => {
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
};
navSlide();
backSlide();
