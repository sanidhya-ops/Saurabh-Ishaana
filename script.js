document.addEventListener("DOMContentLoaded", () => {

  /* ================= MUSIC ================= */
  const music = document.getElementById("bg-music");
  let musicPlayed = false;

  const playMusic = () => {
    if (music && !musicPlayed) {
      music.play().catch(() => {
        // Autoplay blocked
        console.log("Autoplay blocked, waiting for user interaction...");
      });
      musicPlayed = true;
    }
  };

  // Try to play immediately
  playMusic();

  // Fallback: play on first user interaction
  ["click", "scroll", "touchstart"].forEach(evt => {
    window.addEventListener(evt, playMusic, { once: true });
  });

  /* ================= FADE-IN SECTIONS ================= */
  const fadeSections = document.querySelectorAll(".fade-section");

  const revealOnScroll = () => {
    fadeSections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ================= COUNTDOWN ================= */
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    const weddingDate = new Date("February 10, 2026 00:00:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const gap = weddingDate - now;
      if (gap < 0) return;

      daysEl.innerText = Math.floor(gap / (1000 * 60 * 60 * 24));
      hoursEl.innerText = Math.floor((gap / (1000 * 60 * 60)) % 24);
      minutesEl.innerText = Math.floor((gap / (1000 * 60)) % 60);
      secondsEl.innerText = Math.floor((gap / 1000) % 60);
    }, 1000);
  }

  /* ================= FLOWER PETALS ================= */
  const petalContainer = document.querySelector(".petals");

  if (petalContainer) {
    const petals = ["🌸", "🌼", "💮"];
    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.innerText = petals[Math.floor(Math.random() * petals.length)];
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 6 + Math.random() * 5 + "s";
      petal.style.opacity = 0.5 + Math.random() * 0.5;
      petalContainer.appendChild(petal);
    }
  }

  /* ================= MAIN SLIDER ================= */
  const mainSlider = document.querySelectorAll(".slider-container .slide");
  let mainIndex = 0;
  if (mainSlider.length > 0) {
    mainSlider[0].classList.add("active");
    setInterval(() => {
      mainSlider[mainIndex].classList.remove("active");
      mainIndex = (mainIndex + 1) % mainSlider.length;
      mainSlider[mainIndex].classList.add("active");
    }, 3000);
  }

  /* ================= MEMORIES SLIDER ================= */
  const memorySlider = document.querySelectorAll(".memory-slider .slide");
  let memoryIndex = 0;
  if (memorySlider.length > 0) {
    memorySlider[0].classList.add("active");
    setInterval(() => {
      memorySlider[memoryIndex].classList.remove("active");
      memoryIndex = (memoryIndex + 1) % memorySlider.length;
      memorySlider[memoryIndex].classList.add("active");
    }, 3000);
  }

  /* ================= GALLERY SLIDER ================= */
  const gallerySlides = document.querySelectorAll(".gallery-slider .slide");
  let galleryIndex = 0;
  if (gallerySlides.length > 0) {
    gallerySlides[0].classList.add("active");
    setInterval(() => {
      gallerySlides[galleryIndex].classList.remove("active");
      galleryIndex = (galleryIndex + 1) % gallerySlides.length;
      gallerySlides[galleryIndex].classList.add("active");
    }, 3000);
  }

});
