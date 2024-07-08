
document.addEventListener('DOMContentLoaded', function() {
    var banners = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']
    var index = 0
    var bannerImg = document.getElementById('banner')

    function cambiarBanner() {
        bannerImg.src = 'banners/' + banners[index]
        index = (index + 1) % banners.length
    }
    setInterval(cambiarBanner, 5000)
})

document.addEventListener('DOMContentLoaded', function() {
    var banners = []
    peliculas.forEach(imagen => {
        let ObjMovie = {
            title : imagen.title,
            descripcion : imagen.tagline,
            overview: imagen.overview,
            img : imagen.image
            
        }
        // banners.push(ObjMovie)

        let cardDiv = document.createElement('div')
        let newTitle = document.createElement('h4')
        let newTagline = document.createElement('p')
        let newDescription = document.createElement('p')
        let newImagen = document.createElement('img')
        

        newImagen.src = imagen.image
        newTitle.innerHTML = imagen.title
        newTagline.innerHTML = imagen.tagline
        newDescription.innerHTML = imagen.overview

        cardDiv.id = 'caratula'
        cardDiv.appendChild(newImagen)
        cardDiv.appendChild(newTitle)
        newTitle.style = "font-weight: bold; font-size: 22px; margin: 5px;"
        cardDiv.appendChild(newTagline)
        newTagline.style = "font-weight: bold; font-size: 18px; margin: 5px;"
        cardDiv.appendChild(newDescription)

        let test = document.getElementsByClassName('slider');

        if (test.length > 0) {
            let sliderElement = test[0];
            sliderElement.appendChild(cardDiv);
        } else {
            console.error('No se encontró ningún elemento con la clase "slider".');
        }
    });

    var bannerImg = document.getElementById('mau')

    var index = 0

    function cambiarBanner() {

        bannerImg.src =  banners[index].img
        index = (index + 1) % banners.length
    }
    setInterval(cambiarBanner, 5000)
})

// let slider = document.querySelector('.slider');
// let slides = document.querySelectorAll('.slide');

// let slideWidth = slides[0].offsetWidth; // Ancho de cada slide
// let currentSlide = 0;
// let slideCount = slides.length;

// function nextSlide() {
//     if (currentSlide < slideCount - 1) {
//         currentSlide++;
//     } else {
//         currentSlide = 0;
//     }
//     slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
// }
// setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta el intervalo según tus necesidades)

