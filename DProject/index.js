
let titulo = document.getElementById(`ch1`)
let headerFooter = document.getElementsByClassName(`headeFoote`)
let footer = document.querySelector(`footer`)
let contenedor = document.getElementById(`contenedor`)
let lista = document.getElementById('lista')
let cardt = document.getElementById('card')



for (const hF of headerFooter) {
    hF.classList.add(`bg-orange-200`)
}
footer.innerText = 'Rafael Martinez  055'

function crearLista(array) {
    const listaFruta = []
    for (let i = 0; i < array.length; i++) {
        let card = {
            nombre: array[i].nombre,
            foto: array[i].foto,
            descripcion: array[i].descripcion,
            esDulce: array[i].esDulce
        }
        listaFruta.push(card)
        let itemLista = document.createElement('ul');
        let nuevaImagen = document.createElement('img');
        let nuevoProducto = document.createElement('h2');
        let nuevaDesc = document.createElement('p');

        nuevaImagen.src = array[i].foto;
        nuevoProducto.innerHTML = `<h2 class="font-bold text-2xl">${array[i].nombre}</h2>`;
        nuevaDesc.innerHTML = `<p>${array[i].descripcion}</p>`;

        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.append(nuevaImagen);
        cardDiv.append(nuevoProducto);
        cardDiv.append(nuevaDesc);
        contenedor.append(cardDiv);

    }
}

// nuevaimagen.innerHTML = `<div class="w-min" id="img1" ></div>`
// nuevaimagen.classList.add(border-red-500)
// nuevaImagen.classList.add("clase-modificada")
// imagen.style.width = "200px"
// imagen.style.height = "auto"
// imagen.style.border = "2px solid red"





crearLista(frutas)

function frutasDulce(listaDulce) {
    for (let i = 0; i < listaDulce.length; i++) {
        if (listaDulce[i].esDulce === true) {
            let itemLista = document.createElement('li')
            itemLista.innerHTML = `${listaDulce[i].nombre}`
            lista.append(itemLista)
        }
    }
}

frutasDulce(frutas)





