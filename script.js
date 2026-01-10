const music = document.getElementById("bg-music");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerHTML = "🔈 Pause Music";
  } else {
    music.pause();
    btn.innerHTML = "🔊 Play Music";
  }
});
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
