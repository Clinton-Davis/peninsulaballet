const tracyModal = document.getElementById("tracyModal");
const leilaniModal = document.getElementById("leilaniModal");
const historyModal = document.getElementById("historyModal");
const teacherWrapper = document.getElementById("teacherWrapper");
const x = document.querySelectorAll(".close");
const btn = teacherWrapper.querySelectorAll("button");

//Opens Modal for selected btn
btn.forEach((button) => {
  button.addEventListener("click", function () {
    switch (button.id) {
      case "tracyBtn":
        tracyModal.style.display = "block";
        break;
      case "leilaniBtn":
        leilaniModal.style.display = "block";
        break;
      case "historyBtn":
        historyModal.style.display = "block";
        break;
    }
  });
});

//Close Modal on selected Modal
x.forEach((x) => {
  x.addEventListener("click", () => {
    const close = x.parentNode.parentElement;
    close.style.display = "none";
  });
});

//Closed Modals on window click
window.onclick = function (event) {
  if (event.target == tracyModal) {
    tracyModal.style.display = "none";
  } else if (event.target == leilaniModal) {
    leilaniModal.style.display = "none";
  } else if (event.target == historyModal) {
    historyModal.style.display = "none";
  }
};
