const images = [
    'resources-responsive/img/background/background-1.jpg',
    'resources-responsive/img/background/background-2.jpg',
    'resources-responsive/img/background/background-3.jpg'
];

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

let currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);
