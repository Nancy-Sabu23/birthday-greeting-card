// =============================================
//  BIRTHDAY CARD — app.js
//  Confetti burst on page load
// =============================================

const CONFETTI_COLORS = [
  "#f4a261", "#e76f51", "#2a9d8f",
  "#e9c46a", "#264653", "#e63946",
  "#a8dadc", "#457b9d"
];

// How many confetti pieces to create
const CONFETTI_COUNT = 80;

function createConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");

    // Random horizontal position across the full screen
    const leftPos = Math.random() * 100;

    // Random color from the palette
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];

    // Random size between 6px and 14px
    const size = Math.random() * 8 + 6;

    // Random fall duration between 2s and 5s
    const duration = Math.random() * 3 + 2;

    // Random delay so they don't all fall at once
    const delay = Math.random() * 3;

    // Some pieces are rectangles, some are circles
    const isCircle = Math.random() > 0.5;

    piece.style.cssText = `
      left: ${leftPos}%;
      background: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: ${isCircle ? "50%" : "2px"};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(piece);

    // Remove piece from DOM after animation ends to keep things clean
    const totalTime = (duration + delay) * 1000;
    setTimeout(() => piece.remove(), totalTime);
  }
}

// Run confetti when the page loads
window.addEventListener("load", () => {
  createConfetti();

  // Fire a second burst after 3 seconds for extra fun!
  setTimeout(createConfetti, 3000);
});