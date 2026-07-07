setTimeout(() => {
  goScene("scene-forest");
}, 2400);

function goScene(id) {
  document.querySelectorAll(".scene").forEach(scene => {
    scene.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* Кнопка начала */
document.getElementById("startJourney").addEventListener("click", () => {
  createMagicBurst();
  setTimeout(() => {
    goScene("scene-meadow");
  }, 700);
});

/* Сердечки на дереве */
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
    createSmallSparkles(heart);
  });
});

/* Ответ да */
function yesAnswer() {
  makeHearts();
  createMagicBurst();

  setTimeout(() => {
    goScene("scene-final");
  }, 1000);
}

/* Большие сердечки */
function makeHearts() {
  const layer = document.getElementById("heartsLayer");

  for (let i = 0; i < 65; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = ["❤️", "💚", "💕", "💖", "🌸", "✨"][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 34 + "px";
    heart.style.animationDelay = Math.random() * 1.2 + "s";
    heart.style.animationDuration = 3.5 + Math.random() * 2.2 + "s";

    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}

/* Магический взрыв */
function createMagicBurst() {
  const layer = document.getElementById("heartsLayer");

  for (let i = 0; i < 35; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";
    sparkle.style.left = 45 + Math.random() * 10 + "vw";
    sparkle.style.top = 45 + Math.random() * 10 + "vh";
    sparkle.style.setProperty("--x", (Math.random() - 0.5) * 280 + "px");
    sparkle.style.setProperty("--y", (Math.random() - 0.5) * 280 + "px");
    sparkle.style.animationDelay = Math.random() * 0.3 + "s";

    layer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1600);
  }
}

/* Маленькие искры от сердечек */
function createSmallSparkles(element) {
  const layer = document.getElementById("heartsLayer");
  const rect = element.getBoundingClientRect();

  for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "mini-sparkle";
    sparkle.innerHTML = "✨";
    sparkle.style.left = rect.left + rect.width / 2 + "px";
    sparkle.style.top = rect.top + rect.height / 2 + "px";
    sparkle.style.setProperty("--x", (Math.random() - 0.5) * 120 + "px");
    sparkle.style.setProperty("--y", (Math.random() - 0.5) * 120 + "px");

    layer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

/* Случайные листья */
function createRandomLeaf() {
  const leaf = document.createElement("div");
  leaf.className = "random-leaf";
  leaf.innerHTML = ["🍃", "🌿", "🍂"][Math.floor(Math.random() * 3)];
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.fontSize = 18 + Math.random() * 18 + "px";
  leaf.style.animationDuration = 6 + Math.random() * 6 + "s";

  document.querySelector(".app").appendChild(leaf);

  setTimeout(() => leaf.remove(), 12000);
}

setInterval(createRandomLeaf, 850);
