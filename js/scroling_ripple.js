$(function () {
  const scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });

  $("html").on("click", ".ripple-surface", function (evt) {
    let btn = $(evt.currentTarget);
    let x = evt.pageX - btn.offset().left;
    let y = evt.pageY - btn.offset().top;

    $("<span/>").appendTo(btn).css({
      left: x,
      top: y,
    });
  });

  $(".btt-link").click(function (e) {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

window.addEventListener("scroll", () => {
  const btt = document.getElementById("backToTop");
  const scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled > 500) {
    btt.style.opacity = 1;
  } else {
    btt.style.opacity = 0;
  }
});
