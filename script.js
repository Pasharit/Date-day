setTimeout(() => {
  goScene("scene-forest");
}, 2400);

function goScene(id) {
  document.querySelectorAll(".scene").forEach(scene => {
    scene.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

document.getElementById("startJourney").addEventListener("click", () => {
  goScene("scene-meadow");
});

const phrases = [
  "Мне нравится твоя улыбка.",
  "С тобой обычный день становится особенным.",
  "Мне нравится проводить с тобой время.",
  "Спасибо, что ты есть ❤️"
];

document.querySelectorAll(".heart-note").forEach((heart, index) => {
  heart.addEventListener("click", () => {
    document.getElementById("memoryText").innerText = phrases[index];
    heart.classList.add("opened");
  });
});

function yesAnswer() {
  makeHearts();
  setTimeout(() => {
    goScene("scene-final");
  }, 1000);
}

function makeHearts() {
  const layer = document.getElementById("heartsLayer");

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = ["❤️", "💚", "💕", "🌸", "✨"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 30 + "px";
    heart.style.animationDelay = Math.random() + "s";

    layer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
