

// index.js
export function crearListas(peliculas) {
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


export function filtrarPeliculaGenero () {
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


export function busquedaPeliculaGeneroYtitulo () {
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


// detalle.js

export function crearListasD(peliculas) {
    let vacia = ""
    peliculas.forEach(pelicula => {
        if (pelicula.id == id) {
            vacia += crearListaD(pelicula.image, pelicula.title, pelicula.tagline, pelicula.overview, pelicula.id, pelicula.original_language, pelicula.release_date, pelicula.runtime, pelicula.status, pelicula.vote_average, pelicula.budget, pelicula.revenue)
        }
    });
    contenedor.innerHTML = vacia
}

export function crearListaD(imagen, titulo, tagline, descripcion, id, original_language, release_date, runtime, status, vote_average, budget, revenue) {
    let ficha = `
        <div>
            <img src="${imagen}" class="rounded-xl bg-gray-200 p-1 bg-gray-700 flex-shrink-0 mb-4 w-[600px] min-w-[600px] rounded-tl-lg rounded-br-sm bg-gray-200 p-1" style="" alt="Imagen">
            <table class="m-5 w-[400px] min-w-[300px] " style="">
                <tr>
                    <td class="border-t border-l border-b border-black px-4 py-2">Original Language</td>
                    <td class="border border-black px-4 py-2">${original_language}</td>
                </tr>
                <tr>
                    <td class="border-t border-l border-b border-black px-4 py-2">Release Date</td>
                    <td class="border border-black px-4 py-2">${release_date}</td>
                </tr>
                <tr>
                    <td class="border-t border-l border-b border-black px-4 py-2">Runtime</td>
                    <td class="border border-black px-4 py-2">${runtime}</td>
                </tr>
                <tr>
                    <td class="border-t border-l border-b border-black px-4 py-2">Status</td>
                    <td class="border border-black px-4 py-2">${status}</td>
                </tr>
            </table>
        </div>
        <div class="ml-10">
            <div>  
                <h3 class="font-bold text-3xl mb-1 mb-10">${titulo}</h3>
                <h4 class="font-bold text-xl text-gray-400 mb-10">${tagline}</h4>
                <p class="mb-10">${descripcion}</p>
            </div>
            <div>
                <table class="m-5">
                    <tr>
                        <td class="border-t border-l border-b border-black px-4 py-2">Vote Average</td>
                        <td class="border border-black px-4 py-2">${vote_average}</td>
                    </tr>
                    <tr>
                        <td class="border-t border-l border-b border-black px-4 py-2">Budget</td>
                        <td class="border border-black px-4 py-2">${budget}</td>
                    </tr>
                    <tr>
                        <td class="border-t border-l border-b border-black px-4 py-2">Revenue</td>
                        <td class="border border-black px-4 py-2">${revenue}</td>
                    </tr>
                </table>
            </div>
        </div>
            `

    return ficha
}


















