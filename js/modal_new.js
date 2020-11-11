const tracyModal = document.getElementById("tracyModal");
const leilaniModal = document.getElementById("leilaniModal");
const historyModal = document.getElementById("historyModal");
const teacherWrapper = document.getElementById("teacherWrapper");
const btn = teacherWrapper.querySelectorAll("button");
const close = teacherWrapper.querySelectorAll("span");

for (const prop of btn) {
  prop.addEventListener("click", function (e) {
    const targetName = e.target;
    if (targetName.id === "tracyBtn") {
      tracyModal.style.display = "block";
    }
    if (targetName.id === "leilaniBtn") {
      leilaniModal.style.display = "block";
    }
    if (targetName.id === "historyBtn") {
      historyModal.style.display = "block";
    }
  });
}

window.onclick = function (event) {
  if (event.target == tracyModal) {
    tracyModal.style.display = "none";
  } else if (event.target == leilaniModal) {
    leilaniModal.style.display = "none";
  } else if (event.target == historyModal) {
    historyModal.style.display = "none";
  }
};
