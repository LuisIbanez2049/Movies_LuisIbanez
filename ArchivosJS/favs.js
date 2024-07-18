
// import {crearCard, mostrarCards} from "../ArchivosJS/funcionesMovies.js"

// fetch es una funcion global y lo podemos guardar en una variable. Pero este no es el caso. Usamos fetch para hacer una solitud a una api 
// Recibe como parametros el link al cual queremos hacer la solicitud y un objeto. En este caso con las key "method" y "headers"
// "method": es el tipo de peticion que se va a hacer. En este caso "GET" porque queremos obtner datos de la api. No hace falta escribir este metodo 
// ya que "fetch" tiene este metedo como predeterminado  
// "headers": dentro de este agregamos la "API_KEY" la cual nos va a dar autorizacion para hacer la peticion. 

// "fetch" nos retorna un promise por lo que tiene atribuido un ".then()", un ".catch()" y un "finally()"

// ".then()": dentro de este se va a programar lo que se va a hacer si la peticion fue exitosa
// ".catch()": dentro de este se va a programar lo que se va a hacer si la peticion fue erronea 
// ".finally()" ?

import { mostrarCards, crearCard} from "../ArchivosJS/funcionesMovies.js"
import {toggleFavorito, mostrarFavoritos, pintarBotones, filtrarFavoritos} from "../ArchivosJS/funcionesParaFavoritos.js" 
const divCard = document.querySelector("#divCard")



 const API_KEY = '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
fetch('https://moviestack.onrender.com/api/movies', { 
    method : 'GET',
    headers : {
        'x-api-key' : '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
})
.then(response => response.json())
.then(data => {
    let arrayDePeliculas = data.movies
    console.log(arrayDePeliculas)
    const contenedor = document.querySelector("#contenedor")

    let filtrados = filtrarFavoritos(arrayDePeliculas)

    if (filtrados.length > 0) {
        console.log("verdadero")

        console.log("---------------------FILTRADOS" + filtrados)
        mostrarCards(filtrarFavoritos(arrayDePeliculas), contenedor)
        console.log("cards-----" + mostrarCards)
        contenedor.addEventListener('click', function(event) {
            if (event.target.closest('#buttonCorazon')) {
              const button = event.target.closest('#buttonCorazon');
              const pais = button.closest('#card').querySelector('h1').innerText;
              toggleFavorito(pais, button);
              pintarBotones(pais, button)
            }
        });
    }
    else{ 
        console.log("falso")
        contenedor.innerHTML = `
            <div class="w-full text-center">
                <h1 class="text-[40px] text-[#F00000] font-bold">THERE ARE NO FILMS</h1>
            </div>`;
    }

})
.catch(error => console.warn(error))
.finally(() => console.log("finally is here"))


