const images = [
    'resources-responsive/img/background/background-1.jpg',
    'resources-responsive/img/background/background-2.jpg',
    'resources-responsive/img/background/background-3.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
    gsap.to(document.body, {
        duration: 1,
        backgroundImage: `url('${images[currentIndex]}')`,
        ease: 'power1.inOut'
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000);