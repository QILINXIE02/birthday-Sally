// Switch between sections
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Initialize home section
showSection('home');

// Countdown Timer
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2024-11-29').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
      countdownElement.innerHTML = "Happy Birthday!";
  }
}

setInterval(updateCountdown, 1000);

// Carousel Logic
const carousel = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentIndex = 0;

function updateCarousel() {
  const imageWidth = images[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

document.getElementById("play-music").addEventListener("click", () => {
  const audio = document.getElementById("background-music");
  
  if (audio.paused) {
      audio.play().catch(error => {
          console.error("Error playing audio:", error);
          alert("Music playback failed. Please interact with the page first (browser restriction).");
      });
      document.getElementById("play-music").textContent = "⏸ Pause Music!! ⏸";
  } else {
      audio.pause();
      document.getElementById("play-music").textContent = "🎶 Play Music!! 🎶";
  }
});
