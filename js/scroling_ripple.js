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
});
