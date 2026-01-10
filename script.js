const music = document.getElementById("bg-music");
let musicPlayed = false; // ensure it plays only once

// Play music when user scrolls
window.addEventListener("scroll", () => {
  if (!musicPlayed) {
    music.play().catch(() => {}); // catch autoplay errors silently
    musicPlayed = true;
  }
});

// Or play music when user clicks anywhere
window.addEventListener("click", () => {
  if (!musicPlayed) {
    music.play().catch(() => {});
    musicPlayed = true;
  }
});

// Optional: section scroll animations
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

