setTimeout(() => {
  document.getElementById("scene-loading").classList.remove("active");
  document.getElementById("scene-forest").classList.add("active");
}, 2400);

const startBtn = document.getElementById("startJourney");

startBtn.addEventListener("click", () => {
  startBtn.innerText = "Скоро продолжим... 🌿";
  startBtn.disabled = true;
});
