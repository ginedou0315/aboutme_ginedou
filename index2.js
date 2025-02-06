document.addEventListener("DOMContentLoaded", () => {
  const message = document.querySelector(".message");

  // Add click interaction to words
  const words = document.querySelectorAll(".word1, .word2, .word3, .word4");
  words.forEach((word) => {
    word.addEventListener("click", () => {
      word.style.transform = "scale(1.1)";
      setTimeout(() => {
        word.style.transform = "scale(1)";
      }, 200);
    });
  });

  // Easter egg: Double click to add sparkle effect
  message.addEventListener("dblclick", () => {
    createSparkle(message);
  });

  function createSparkle(element) {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animation = "sparkle 1s forwards";
    element.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
});
