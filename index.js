const contenedor = document.getElementById('container')

// import funciones from "./modulos/modulos.js"
// funciones.crearListas(pelicula)
// import {crearListas} from "./modulos/modulos.js"
// crearListas(pelicula)

function crearListas(peliculas) {
    let fichasHTML = '';
    peliculas.forEach(pelicula => {
        fichasHTML += `
            <article id="ficha">
                <a href="./detalles.html?id=${pelicula.id}" class="m-0">
                    <img src="${pelicula.image}" alt="Imagen" class="m-0">
                </a>
                <div class="mx-1">
                    <h3 class="text-3xl text-center my-1">${pelicula.title}</h3>
                    <h4 class="text-xl my-1">${pelicula.tagline}</h4>
                    <p class="my-1">${pelicula.overview}</p>
                </div>
            </article>
        `;
    });
    contenedor.innerHTML = fichasHTML
}
crearListas(pelicula)

const inputBusqueda = document.getElementById('inputBusqueda')
const selectGenero = document.querySelector('select[name="Genero"]')

let totalGenero = []
pelicula.forEach(peli => {
    totalGenero.push(...peli.genres)
})
let generos = new Set(totalGenero)
let generosUnicos = Array.from(generos)


generosUnicos.sort().forEach(genero => {
    let Creaelemento = document.createElement('option')
    Creaelemento.value = genero
    Creaelemento.textContent = genero
    selectGenero.appendChild(Creaelemento)
})

// import {filtrarPeliculaGenero} from "./modulos/modulos.js"
// funciones.filtrarPeliculaGenero(pelicula)

function filtrarPeliculaGenero() {
    let genero = selectGenero.value
    inputBusqueda.value = ''
    if (genero == "Todas") {
        crearListas(pelicula)
    } else {
        let filtroPelicula = pelicula.filter(pelicula =>
            pelicula.genres.includes(genero)
        )
        crearListas(filtroPelicula)
    }
}
selectGenero.addEventListener('change', filtrarPeliculaGenero)

// import {busquedaPeliculaGeneroYtitulo} from "./modulos/modulos.js"
// funciones.busquedaPeliculaGeneroYtitulo(pelicula)

function busquedaPeliculaGeneroYtitulo() {
    let peliculasFiltradas = pelicula
    const busqueda = inputBusqueda.value.toLowerCase()
    const generoSeleccionado = selectGenero.value
    if (generoSeleccionado !== 'Todas') {
        peliculasFiltradas = peliculasFiltradas.filter(p =>
            p.genres.includes(generoSeleccionado))
        console.log(generoSeleccionado)
    }
    peliculasFiltradas = peliculasFiltradas.filter(p =>
        p.title.toLowerCase().includes(busqueda))
    crearListas(peliculasFiltradas)
}
inputBusqueda.addEventListener('input', busquedaPeliculaGeneroYtitulo)

