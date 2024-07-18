

//------------------------------------------------------------------------------------------------------------------------------------------------------------

import { fetchMovies } from '../ArchivosJS/data.js';
import { crearCard, mostrarCards, arrayDeGeneros, agregarOpcionesDeGenero, filtrarPorGenero, filtrarPorTitulo, filctrosCruzados} from "../ArchivosJS/funcionesMovies.js"
import {toggleFavorito, mostrarFavoritos, pintarBotones, filtrarFavoritos} from "../ArchivosJS/funcionesParaFavoritos.js"

fetchMovies().then(movies => {
    console.log(movies);
    // Aquí puedes usar el array de películas
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

//----------------NUEVO--------------------------------------------------------------------------------------------
contenedor.addEventListener('click', function(event) {
    if (event.target.closest('#buttonCorazon')) {
      const button = event.target.closest('#buttonCorazon');
      console.log("BUTTON------" + button)
      const pais = button.closest('#card').querySelector('h1').innerText;
      console.log("PAIS----" + pais)
      toggleFavorito(pais);
      pintarBotones(pais, button)
     // mostrarTodos()
    }
  });
}); 
