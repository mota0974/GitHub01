let button = document.getElementById('button');
let cuadro = document.getElementById('cuadro');
let cuadro2 = document.getElementById('cuadro2');
let input = document.getElementById('inputCapturar')
let texto = document.getElementById('texto')
let submitButton = document.getElementById('submitButton');
let estado = 0

// Filter Exercise 
// Ejercicio 1.-
// button.addEventListener('click', function(event) {
//     event.preventDefault();

//     switch (estado) {
//         case 0:
//             cuadro.classList.remove('bg-blue-300', 'bg-red-300')
//             cuadro.classList.add('bg-gray-300', 'relative')
//             cuadro.innerText = 'Gris';
//             estado = 1
//             break
//         case 1:
//             cuadro.classList.remove('bg-gray-300', 'bg-red-300')
//             cuadro.classList.add('bg-blue-300', 'relative')
//             cuadro.innerText = 'Azul Claro'
//             estado = 2
//             break
//         case 2:
//             cuadro.classList.remove('bg-gray-300', 'bg-blue-300')
//             cuadro.classList.add('bg-red-300', 'relative')
//             cuadro.innerText = 'Rojo'
//             estado = 0
//             break
//         default:
//             break
//     }
// })




// Ejercicio 2.-
// input.addEventListener('input', function() {
//     texto.innerText = input.value
// })
// submitButton.addEventListener('click', function(event) {
//     event.preventDefault()
//     texto.innerText = ''
//     input.value = ''
// })



// Ejercicio 3.-
// let estatura = document.getElementById('inputEstatura');
// let peso = document.getElementById('inputPeso');
// let total = document.getElementById('total');
// let boton = document.getElementById('submitButton');

// boton.addEventListener('click', function(event) {
//     event.preventDefault()
//     let calculo = peso.value / (estatura.value/100) ** 2
//     total.value = calculo.toFixed(2)
//     console.log(calculo)
//     console.log(peso.value)
//     console.log(estatura.value)
//     console.log(calculo)
// })




// Ejercicio 4.-
// let local1 = document.getElementById('local1')
// let dolares1 = document.getElementById('dolares1')
// let convertir1 = document.getElementById('convertir1')
// let delete1 = document.getElementById('delete1')
// let local2 = document.getElementById('local2')
// let dolares2 = document.getElementById('dolares2')
// let convertir2 = document.getElementById('convertir2')
// let delete2 = document.getElementById('delete2')

// convertir1.addEventListener('click', (evento) => {
//     evento.preventDefault()
//     let valor1 = local1.value / 500

//     dolares1.value = valor1.toFixed(2)
// });
// delete1.addEventListener('click', (event) => {
//     event.preventDefault()
//     local1.value = ""
//     dolares1.value = ""
// })

// convertir2.addEventListener('click', (evento) => {
//     evento.preventDefault()
//     let valor2 = dolares2.value * 500

//     local2.value = valor2.toFixed(2)
// });
// delete2.addEventListener('click', (event) => {
//     event.preventDefault()
//     local2.value = ""
//     dolares2.value = ""
// })



// Filter Exercise, Based on the beer
// function filtrarCervezas(beers, PartNameChosen, minIBU) {
//     return beers.filter(beer =>
//         beer.name.toLocaleLowerCase().includes(PartNameChosen.toLocaleLowerCase()) && beer.ibu > minIBU
//     )
// }
// let PartNameChosen = "be"
// let MINIBU = 40
// let cervezaFiltradass = filtrarCervezas(beers, PartNameChosen, MINIBU)
// console.log(cervezaFiltradass)


