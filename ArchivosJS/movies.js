import { movies } from "./data.js";

console.log(movies[0].id)

//Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 
let contenedor = document.getElementById("contenedor")
contenedor.classList.add("w-full", "flex", "flex-row", "flex-wrap", "place-content-around", "p-8")

//Función que devuelve la estructura de una card
function crearCard(objetoPelicula)
{

    return `
           <div id="card" class="border border-black p-4 flex flex-col items-center w-96 h-auto mt-5 ml-7 text-white
                    rounded-3xl transition duration-300 transform hover:-translate-y-2 hover:bg-slate-300">
                <img class="w-72 h-auto my-3 rounded-3xl" src="${objetoPelicula.image}" alt="${objetoPelicula.title}">
                <h1 class = "font-bold">${objetoPelicula.title}</h1>
                <h2 class = "text-start" >${objetoPelicula.tagline}</h2>
                <p class = "text-start" >${objetoPelicula.overview}</p>
            </div>
    `
}

//Bucle para crear cards con los datos de las frutas y mostrarlas en el div "#contenedor"
function mostrarCards()
{
    let cardsHTML = ""
    movies.forEach(movie => {
        cardsHTML += crearCard(movie)
    })
    console.log(cardsHTML)
    // cardsHTML += crearCard(movies)
    contenedor.innerHTML = cardsHTML
}

// Llamar a la función para mostrar las cards
mostrarCards(movies)
