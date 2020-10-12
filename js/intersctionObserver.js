/*const welcome = document.querySelector('#welcomeSection');*/
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0,
    rootMargin: '-300px'
};
// Triggers at -300px and is looking for witch node is in screen and changes color accordingly
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else if (entry.target.attributes[0].nodeValue ==="welcomeSection") {
            getNavColor("var(--white", "rgb(20, 41, 49)");

        } else if (entry.target.attributes[0].nodeValue ==="testimonialsSection") {
            getNavColor("var(--lightBlack", "rgba(242, 246, 248, 1)");

        } else if (entry.target.attributes[0].nodeValue ==="teachersSection") {
            getNavColor("var(--lightBlack", "rgba(242, 246, 248, 1)");

        } else if (entry.target.attributes[0].nodeValue ==="sceduleSection") {
            getNavColor("var(--white", "rgb(0, 0, 0)");

        } else if (entry.target.attributes[0].nodeValue ==="enrolmentSection") {
            getNavColor("var(--white", "rgba(83, 74, 67, 1)");

        } else if (entry.target.attributes[0].nodeValue ==="locationSection") {
            getNavColor("rgb(0,0,0)", "rgb(255, 229, 170)");

        } else if (entry.target.attributes[0].nodeValue ==="attireSection") {
            getNavColor("var(--white", "var(--lightBlack)");

        } else if (entry.target.attributes[0].nodeValue ==="Covid-19") {
            getNavColor("rgb(0,0,0)", "rgb(217, 190, 233)");
        }
        
        //This function changes the colors of the nav and a tags when trigered buy the IntersectionObserver
        function getNavColor(a_Color, bg_Color) {
            document.getElementById("nav").style.backgroundColor = (bg_Color);
            document.getElementById("navBurgerBg").style.backgroundColor = (bg_Color);
            document.getElementById("navLogo").style.color = (a_Color);
            var x = document.getElementsByClassName("navColor");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.color = (a_Color);
            }
            var b = document.getElementsByClassName("navBgColor");
            var c;
            for (c = 0; c < b.length; c++) {
                b[c].style.backgroundColor = (a_Color);
            }
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});