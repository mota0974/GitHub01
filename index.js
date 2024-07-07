

let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let slideWidth = slides[0].offsetWidth; // Ancho de cada slide
let currentSlide = 0;
let slideCount = slides.length;

function nextSlide() {
    if (currentSlide < slideCount - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta el intervalo según tus necesidades)



















