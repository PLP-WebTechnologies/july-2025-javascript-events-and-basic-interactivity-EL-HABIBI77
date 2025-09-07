// Part 1: Light/Dark Mode

// Select the toggle button
const themeToggle = document.getElementById('themeToggle');

// Add click event listener
themeToggle.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body
  document.body.classList.toggle('dark-mode');
});

// 2. Counter Game

// Select the counter and button
const countBtn = document.getElementById('countBtn');
const counterDisplay = document.getElementById('counter');
let count = 0; // initial value

// Increase count on button click
countBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count; // update display
});

// Part 3: Form Validation

// Select form elements
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

// Function to check if email is valid using regex
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Add form submit event listener
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // stop page reload

  // Get values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation conditions
  if (name.length < 2) {
    formMessage.textContent = 'Name must be at least 2 characters.';
    formMessage.style.color = 'red';
  } else if (!isValidEmail(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
  } else if (password.length < 6) {
    formMessage.textContent = 'Password must be at least 6 characters.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    // Here you could send data to a server using fetch() if needed
    signupForm.reset(); // clear the form
  }
});