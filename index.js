// 1.
    // let funcionFlecha = (mensaje) => {
    //     console.log (mensaje)
    // }
    // console.log(funcionFlecha="hola")

// 2.
    // let crearMultiplicacion = (numero1, numero2) => {
    //     return numero1 * numero2
    // }

    // console.log(crearMultiplicacion(12, 34))

// 3.
    // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // let multiplicacion = array.map( (numero1, numero2) => {
    //     return numero1 * numero2
    // }
    // )

    // console.log(multiplicacion)

// 4.
    // let alcoholCerveza = [12, 25, 2, 9, 45, 5, 7, 1, 34, 56, 12, 33, 78, 22, 43, 9]

    // let ordenDescendiente = alcoholCerveza.sort ((a, b) => {
    //         return b - a
    //         }
    //     )
    // let top10Descendiente = ordenDescendiente.slice(0, 10)

    // console.log(top10Descendiente)  

// 5.
    // let ibuAscendente = (beers.map((cerveza) => {
    //     return cerveza
    // }).sort((a, b) => a.ibu - b.ibu)).slice(0, 10)

    // console.log(ibuAscendente)

// 6.
    // function buscar(nombreCerveza) {
    //     let encontrado = beers.filter((cerveza) => 
    //         cerveza.name == nombreCerveza
    //     );
    //     return encontrado;
    // }

    // console.log(buscar("AB:12"))

    // // Buzz
    // // Trashy Blonde
    // // AB:12
    // // Movember

// 7.
    // function bucarCervesa(IBU) {
    //     let eCervesa = beers.find((array) => 
    //         array.ibu == IBU) 
    //         if (eCervesa) {
    //             return eCervesa
    //         } else {
    //             console.log("No existe ninguna cerveza con un ibu de (valor ingresado)")
    //         }
    //     }

    // console.log(bucarCervesa(1))

// // 41.5
// // 60
// // 8

// 8.
    // function bucarCervesa(cervesa) {
    //     let eCervesa = beers.find((array) =>
    //         array.name == cervesa)
    //     if (eCervesa) {
    //         return {
    //             id: eCervesa.id
    //         }
    //     } else {
    //         console.log("Nombre de la cerveza ingresada no exite")
    //     }
    // }
    // console.log(bucarCervesa("AB:12"))

// // Buzz
// // Trashy Blonde
// // AB:12
// // Movember

// 9.
    // function valorAlcohol(alcohol) {
    //     let nuevoArray = beers.filter(cerveza => cerveza.abv < alcohol)
    //     let resultado = nuevoArray.map(cerveza => ({
    //         nombre: cerveza.name,
    //         "acohol (abv)": cerveza.abv,
    //         "amargura (ibu)": cerveza.ibu
    //     }));
    //     return resultado;
    // }
    // console.log(valorAlcohol(5))

// 10.
    // function resultado(tipoCaracteristica, valorBooleano) {
    //         let array = beers.map((cerveza) => {
    //             return {
    //                 caracteristica: cerveza[tipoCaracteristica]
    //             }
    //         })
    //         array.sort((a, b) => {
    //             let caracteristicaA = a.caracteristica
    //             let caracteristicaB = b.caracteristica
    //             if (typeof caracteristicaA === 'string' && typeof caracteristicaB === 'string') {
    //                 return valorBooleano === true ? caracteristicaA.localeCompare(caracteristicaB) : caracteristicaB.localeCompare(caracteristicaA)
    //             } else {
    //                 return (valorBooleano === true ? caracteristicaA - caracteristicaB : caracteristicaB - caracteristicaA)
    //             }
    //         })
    //         return array.slice(0, 10)
    //     }
    
    // console.log(resultado("name", false))

// // id
// // name
// // abv
// // ibu
// // ebc
// // srm
// // ph
// // volume
// // method

// 11.
    // function renderizarTablaCervezas(cervezas, idTabla) {
    //     let tablaPaso1 = document.getElementById(idTabla)

    //     let tabla = document.createElement('table')
    //     let encabezado = tabla.createTHead()
    //     let filaEncabezado = encabezado.insertRow()
    //     let columnas = ['Nombre', 'ABV', 'IBU']

    //     columnas.forEach((columna) => {
    //         let th = document.createElement('th')
    //         th.textContent = columna
    //         filaEncabezado.appendChild(th)
    //     });

    //     let cuerpoTabla = document.createElement('tbody')

    //     cervezas.forEach((cerveza) => {
    //         let fila = cuerpoTabla.insertRow()
    //         let nombre = cerveza.nombre
    //         let abv = cerveza.abv
    //         let ibu = cerveza.ibu

    //         let celdaNombre = fila.insertCell()
    //         celdaNombre.textContent = nombre

    //         let celdaABV = fila.insertCell()
    //         celdaABV.textContent = abv

    //         let celdaIBU = fila.insertCell()
    //         celdaIBU.textContent = ibu
    //     });

    //     tabla.appendChild(cuerpoTabla)
    //     tablaPaso1.appendChild(tabla)
    // }

    // renderizarTablaCervezas(beers, 'tablaCervezas')




