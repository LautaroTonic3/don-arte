const images = [
    'resources-responsive/img/background/background-1.jpg',
    'resources-responsive/img/background/background-2.jpg',
    'resources-responsive/img/background/background-3.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);

changeBackgroundImage();