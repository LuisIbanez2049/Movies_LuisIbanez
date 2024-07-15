// import { movies } from "../ArchivosJS/data.js"


// const contenedorImagen = document.querySelector("#contenedorImagen")
// const contenedorDescripcion = document.querySelector("#contenedorDescripcion")
// const urlParams = new URLSearchParams(window.location.search)
// const movieId = urlParams.get("id") 
// console.log(movieId)

// let peliculaEncontradaPorId
// for (let i = 0; i < movies.length; i++) {
//     if (movies[i].id == movieId) {
//         peliculaEncontradaPorId = movies[i]
//     }
// }

// console.log(peliculaEncontradaPorId.title)

// function cargarImagen(objeto, contenedor)
// {
//     contenedor.innerHTML = `<img class="w-[100%] h-[100%] object-cover rounded-t-[50px]" src="${objeto.image}" alt="">`
// }

// cargarImagen(peliculaEncontradaPorId, contenedorImagen)

// function cargarDescripcion(objetoPeliculaEncontradaPorId, contenedorDeLaDescripcion)
// {
//     const title = document.createElement("h1")
//     const tagline = document.createElement("h2")
//     const genres = document.createElement("p")
//     const description = document.createElement("p")

//     title.className = "text-[50px] font-bold text-[#d6ebc1]"
//     title.setAttribute("id", "sombreadoTitulo")
//     tagline.className = "text-[30px] font-bold text-white"
//     genres.className = "text-[25px] font-bold text-white text-[#ffd500]"
//     description.className = "text-[20px]  text-white mt-[10px]"

//     title.textContent = objetoPeliculaEncontradaPorId.title
//     tagline.textContent = objetoPeliculaEncontradaPorId.tagline
//     genres.textContent = objetoPeliculaEncontradaPorId.genres
//     description.textContent = objetoPeliculaEncontradaPorId.overview

//     contenedorDeLaDescripcion.appendChild(title)
//     contenedorDeLaDescripcion.appendChild(tagline)
//     contenedorDeLaDescripcion.appendChild(genres)
//     contenedorDeLaDescripcion.appendChild(description)

// }

// // -----------------------------------------------------------------------------------------------------------------------------------
// cargarDescripcion(peliculaEncontradaPorId, contenedorDescripcion)

// function llenarTabla (objetoPeliculaEncontradaPorId)
// {

//     let opciones = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
//     let formateador = new Intl.NumberFormat('de-DE', opciones);
//     let numeroFormateado1 = formateador.format(objetoPeliculaEncontradaPorId.budget);
//     let numeroFormateado2 = formateador.format(objetoPeliculaEncontradaPorId.revenue);

//     const td1 = document.querySelector("#td1")
//     td1.textContent = objetoPeliculaEncontradaPorId.original_language 

//     const td2 = document.querySelector("#td2")
//     td2.textContent = objetoPeliculaEncontradaPorId.release_date

//     const td3 = document.querySelector("#td3")
//     td3.textContent = `${objetoPeliculaEncontradaPorId.runtime} mins`
    
//     const td4 = document.querySelector("#td4")
//     td4.textContent = objetoPeliculaEncontradaPorId.status

//     const td5 = document.querySelector("#td5")
//     td5.textContent = `${objetoPeliculaEncontradaPorId.vote_average.toFixed(2)}%`

//     const td6 = document.querySelector("#td6")
//     td6.textContent = `USD ${numeroFormateado1}`

//     const td7 = document.querySelector("#td7")
//     td7.textContent = `USD ${numeroFormateado2}`
// }

// llenarTabla(peliculaEncontradaPorId)


// -----------------------------------------------------------------------------------------------------------------------------------

import { movies } from "../ArchivosJS/data.js"
import { cargarImagen, cargarDescripcion, llenarTabla } from "../ArchivosJS/funcionesDescripcionDePeliculas.js"

const contenedorImagen = document.querySelector("#contenedorImagen")
const contenedorDescripcion = document.querySelector("#contenedorDescripcion")
const urlParams = new URLSearchParams(window.location.search)
const movieId = urlParams.get("id") 
console.log(movieId)

let peliculaEncontradaPorId
for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == movieId) {
        peliculaEncontradaPorId = movies[i]
    }
}

console.log(peliculaEncontradaPorId.title)

cargarImagen(peliculaEncontradaPorId, contenedorImagen)

cargarDescripcion(peliculaEncontradaPorId, contenedorDescripcion)

llenarTabla(peliculaEncontradaPorId)