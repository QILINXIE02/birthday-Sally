function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

// Show the home section by default
showSection('home');

// Countdown Timer
const targetDate = new Date('2024-11-29T00:00:00').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Countdown to Birthday: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "It's time to celebrate!";
  }
}

// Update the countdown every second
const x = setInterval(updateCountdown, 1000);

// Function to play background music after user interaction
function playMusic() {
  const audio = document.getElementById("background-music");
  audio.play().catch(error => {
      console.error("Error playing audio:", error);
  });
}

// Add an event listener to play music when the page is clicked
document.body.addEventListener('click', playMusic, { once: true });
