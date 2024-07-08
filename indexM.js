let peli = document.getElementById('regPeliculas')

function listaPeli(array) {
    for (let i = 0; i < array.length; i++) {
        let imagenNueva = document.createElement('img')
        let tituloNuevo = document.createElement('h4')
        let tagNuevo = document.createElement('p')
        let descripNuevo = document.createElement('p')

        imagenNueva.src = array[i].image
        tituloNuevo.innerHTML = array[i].title
        tagNuevo.innerHTML = array[i].tagline
        descripNuevo.innerHTML = array[i].overview


        let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
        cardDiv.append(imagenNueva)
        cardDiv.append(tituloNuevo)
        tituloNuevo.style = "font-weight: bold; font-size: 22px; margin: 5px;"
        cardDiv.append(tagNuevo)
        tagNuevo.style = "font-weight: bold; font-size: 18px; margin: 5px;"
        cardDiv.append(descripNuevo)

        peli.append(cardDiv)

    }
}





listaPeli(peliculas)




















