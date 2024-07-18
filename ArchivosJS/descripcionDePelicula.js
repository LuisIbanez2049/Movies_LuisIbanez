
// -----------------------------------------------------------------------------------------------------------------------------------

import { cargarImagen, cargarDescripcion, llenarTabla } from "../ArchivosJS/funcionesDescripcionDePeliculas.js"
//import { fetchMovies } from '../ArchivosJS/data.js';

const API_KEY = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd';


fetch('https://moviestack.onrender.com/api/movies', { 
        method: 'GET',
        headers: {
            'x-api-key': API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        let movies = data.movies
        // Aquí puedes usar el array de películas
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
    } )
    .catch(error => {
        console.warn(error)
        return [];
    })
    .finally(console.log("hola"))


// fetchMovies().then(movies => {
//     console.log(movies);
//     // Aquí puedes usar el array de películas
//     const contenedorImagen = document.querySelector("#contenedorImagen")
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

// cargarImagen(peliculaEncontradaPorId, contenedorImagen)

// cargarDescripcion(peliculaEncontradaPorId, contenedorDescripcion)

// llenarTabla(peliculaEncontradaPorId)
// });
