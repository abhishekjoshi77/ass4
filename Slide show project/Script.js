const images = [
    'https://via.placeholder.com/600x400?text=Movie+1',
    'https://via.placeholder.com/600x400?text=Movie+2',
    'https://via.placeholder.com/600x400?text=Movie+3',
];

let currentIndex = 0;
let intervalId;
const slideshow = document.getElementById('slideshow');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imageUrlInput = document.getElementById('image-url');
const positionInput = document.getElementById('position');
const addImageButton = document.getElementById('add-image');

// Set initial image
slideshow.src = images[currentIndex];

// Function to show the current image
function showImage(index) {
    slideshow.style.opacity = 0; // Start fading out
    setTimeout(() => {
        slideshow.src = images[index];
        slideshow.style.opacity = 1; // Fade in
    }, 500);
}

// Function to start the slideshow
function startSlideshow() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 2000);
}

// Function to stop the slideshow
function stopSlideshow() {
    clearInterval(intervalId);
}

// Event Listeners
playButton.addEventListener('click', startSlideshow);
pauseButton.addEventListener('click', stopSlideshow);
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

addImageButton.addEventListener('click', () => {
    const url = imageUrlInput.value;
    const position = parseInt(positionInput.value, 10);

    if (url && !isNaN(position) && position >= 0 && position <= images.length) {
        images.splice(position, 0, url);
        imageUrlInput.value = '';
        positionInput.value = '';
        if (images.length === 1) {
            showImage(0); // Show the first image if it's the only one
        }
    } else {
        alert('Please enter a valid URL and position.');
    }
});
