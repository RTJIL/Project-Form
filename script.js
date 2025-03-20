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