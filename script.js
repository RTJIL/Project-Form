const images = [
  'images/Telescope.png',
  'images/Plannett.JPG',
  'images/telescope+planet.JPG'
];

const imageElement = document.querySelector('.imgCard');
const selectors = document.querySelectorAll('.selectors');
let currentIndex = 0;

imageElement.src = images[currentIndex];
selectors[currentIndex].classList.add('active');

function updateImage() {
  imageElement.src = images[currentIndex];
  selectors.forEach(selector => selector.classList.remove('active'));
  selectors[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % images.length;
}

// Update the image and selectors every 3 seconds
setInterval(updateImage, 10 * 1000);

// Initialize the image and selectors
updateImage();

const passwordInput = document.querySelector('input[type="password"]');
const confirmPasswordInput = document.querySelector('input[type="password"]:last-child');
const verificationMessage = document.createElement('span');

verificationMessage.classList.add('verification-message');
confirmPasswordInput.parentNode.appendChild(verificationMessage);

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    verificationMessage.textContent = 'Passwords match';
    verificationMessage.style.color = 'green';
    passwordInput.style.borderColor = 'green';
    confirmPasswordInput.style.borderColor = 'green';
    passwordInput.style.color = 'black';
    confirmPasswordInput.style.color = 'black';
  } else {
    verificationMessage.style.color = 'red';
    passwordInput.style.borderColor = 'red';
    confirmPasswordInput.style.borderColor = 'red';
    passwordInput.style.color = 'red';
    confirmPasswordInput.style.color = 'red';
  }
});