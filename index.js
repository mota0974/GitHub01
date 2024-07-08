

let imgPelicula = document.getElementById(`imgPelicula`)
let titlePelicula = document.getElementById(`titlePelicula`)
let taglinePelicula = document.getElementById(`taglinePelicula`)
let descriptionPelicula = document.getElementById(`descriptionPelicula`)

function crearLista(array) {
    for (let i = 0; i < array.length; i++) {
        let newimg = document.createElement('img')
        let newTitle = document.createElement('h4')
        let newTagline = document.createElement('p')
        let newDescription = document.createElement('p')

        newimg.src = array[i].image
        newTitle.innerHTML = array[i].title
        newTagline.innerHTML = array[i].tagline
        newDescription.innerHTML = array[i].overview


        let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
        cardDiv.appendChild(newimg)
        cardDiv.appendChild(newTitle)
        newTitle.style = "font-weight: bold; font-size: 22px; margin: 5px;"
        cardDiv.appendChild(newTagline)
        newTagline.style = "font-weight: bold; font-size: 18px; margin: 5px;"
        cardDiv.appendChild(newDescription)

        // document.body.appendChild(cardDiv)
        // document.section.appendChild(cardDiv)
    }
}

crearLista(peliculas)

