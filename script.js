function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get the elements you need
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body; // You can also use document.documentElement to target the <html> element

// Function to toggle dark mode
function toggleDarkMode() {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Add an event listener to the toggle switch
darkModeToggle.addEventListener('change', toggleDarkMode);

// Call toggleDarkMode initially based on user preference (if stored)
const isDarkModePreferred = localStorage.getItem('darkMode');
if (isDarkModePreferred === 'true') {
  darkModeToggle.checked = true;
  toggleDarkMode();
}
