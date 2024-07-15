
// import { movies } from "./data.js";

// // Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
// let contenedor = document.getElementById("contenedor");
// contenedor.classList.add("w-full", "flex", "flex-row", "flex-wrap", "place-content-around", "p-8");

// // Función que devuelve la estructura de una card
// function crearCard(objeto) {
//     return `
//         <div id="card" class="border border-black p-4 flex flex-col items-center w-96 h-auto mt-5 ml-7 text-white
//                 rounded-3xl transition duration-300 transform hover:-translate-y-2 hover:bg-slate-300">
//                 <a href="../Pages/descripcionDePelicula.html?id=${objeto.id}">
//                   <img class="w-72 h-auto my-3 rounded-3xl" src="${objeto.image}" alt="${objeto.title}">
//                   <h1 class="font-bold">${objeto.title}</h1>
//                   <h2 class="text-start">${objeto.tagline}</h2>
//                   <p class="text-start">${objeto.overview}</p>
//                    <p class="text-start text-[#ffd500]">Genre: ${objeto.genres}</p>
//                 </a>
//         </div>
        
//     `;
// }

// // Bucle para crear cards con los datos de las películas y mostrarlas en el div "#contenedor"
// function mostrarCards(array,contenedor) {
//     let cardsHTML = "";
//     array.forEach(element => {
//         // cardsHTML += crearCard(element.image, element.title, element.tagline, element.overview);
//         cardsHTML += crearCard(element)
//     });
//     contenedor.innerHTML = cardsHTML;
// }

// // Mostrar todas las películas inicialmente
// mostrarCards(movies, contenedor);

// // Función para obtener todos los géneros sin duplicados
// function arrayDeGeneros(array) {
//     let todosLosGeneros = [];
//     array.forEach(objeto => {
//         todosLosGeneros.push(objeto.genres);
//     });
//     return Array.from(new Set(todosLosGeneros.flat()));
// }

// // Función para agregar opciones de género al selector
// function agregarOpcionesDeGenero(array, contenedorHTML) {
//     array.forEach(genero => {
//         let opcion = document.createElement("option");
//         opcion.textContent = genero;
//         opcion.value = genero;
//         contenedorHTML.appendChild(opcion);
//     });
// }

// // Capturar el selector de género y el input de título
// const selectorDeGenero = document.querySelector("#selectorDeGenero");
// const inputTitulo = document.querySelector("#filtrarTitulo");

// // Agregar opciones de género al selector
// agregarOpcionesDeGenero(arrayDeGeneros(movies), selectorDeGenero);

// // Función para filtrar películas por género
// function filtrarPorGenero(array, selector) {
//     const generoSeleccionado = selector.value;
//     if (generoSeleccionado === "all") {
//         return array;
//     } else {
//         return array.filter(movie => movie.genres.includes(generoSeleccionado));
//     }
// }

// // Función para filtrar películas por título
// function filtrarPorTitulo(array, inputTitulo) {
//     const tituloIngresado = inputTitulo.value.toLowerCase();
//     return array.filter(movie => movie.title.toLowerCase().includes(tituloIngresado));
// }

// // Función para aplicar ambos filtros
// function filctrosCruzados(array, contenedor,selector) {
//     // let peliculasFiltradas = array;
    
//     // Aplicar filtro de género
//     let peliculasFiltradas = filtrarPorGenero(array,selector);
    
//     // Aplicar filtro de título
//     peliculasFiltradas = filtrarPorTitulo(peliculasFiltradas, inputTitulo);
    
//     // Mostrar las películas filtradas
//     if (peliculasFiltradas.length > 0) {
//         mostrarCards(peliculasFiltradas,contenedor);
//     } else {
//         contenedor.innerHTML = `
//             <div class="w-full text-center">
//                 <h1 class="text-[40px] text-[#F00000] font-bold">PELICULA NO ENCONTRADA</h1>
//             </div>`;
//     }
// }

// // Agregar eventos para ejecutar los filtros cruzados
// selectorDeGenero.addEventListener("change", () => filctrosCruzados(movies, contenedor,selectorDeGenero));
// inputTitulo.addEventListener("input", () => filctrosCruzados(movies, contenedor, selectorDeGenero));



//------------------------------------------------------------------------------------------------------------------------------------------------------------


import { movies } from "./data.js";
import { crearCard, mostrarCards, arrayDeGeneros, agregarOpcionesDeGenero, filtrarPorGenero, filtrarPorTitulo, filctrosCruzados} from "../ArchivosJS/funcionesMovies.js"

// Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
let contenedor = document.getElementById("contenedor");
contenedor.classList.add("w-full", "flex", "flex-row", "flex-wrap", "place-content-around", "p-8");

// Mostrar todas las películas inicialmente
mostrarCards(movies, contenedor);

// Capturar el selector de género y el input de título
const selectorDeGenero = document.querySelector("#selectorDeGenero");
const inputTitulo = document.querySelector("#filtrarTitulo");

// Agregar opciones de género al selector
agregarOpcionesDeGenero(arrayDeGeneros(movies), selectorDeGenero);

// Agregar eventos para ejecutar los filtros cruzados
selectorDeGenero.addEventListener("change", () => filctrosCruzados(movies, contenedor,selectorDeGenero, inputTitulo));
inputTitulo.addEventListener("input", () => filctrosCruzados(movies, contenedor, selectorDeGenero, inputTitulo));