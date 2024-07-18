function crearCard(objeto) {

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const imgSrc = favoritos.includes(objeto.title) ? '../RecursosMoviestack/corazonRojoLleno.png' : '../RecursosMoviestack/corazonRojoVacio.png';
    return `
        <div id="card" class="border border-black p-4 flex flex-col items-center w-96 h-auto mt-5 ml-7 mb-[35px] text-white
                rounded-3xl transition duration-300 transform hover:-translate-y-2 hover:bg-slate-300">
                <a href="../Pages/descripcionDePelicula.html?id=${objeto.id}">
                  <img class="w-72 h-auto my-3 mt-[30px] ml-[30px] rounded-3xl" src="https://moviestack.onrender.com/static/${objeto.image}" alt="${objeto.title}">
                  <h1 class="font-bold">${objeto.title}</h1>
                  <h2 class="text-start">${objeto.tagline}</h2>
                  <p class="text-start">${objeto.overview}</p>
                   <p class="text-start text-[#ffd500]">Genre: ${objeto.genres}</p>
                </a>
                <button id="buttonCorazon" class="particle-button" onclick="createParticles(event)"><img class="w-[60px] h-[60px]" src="${imgSrc}" alt=""></button>

        </div>
        
    `;
}
{/* <button id="buttonCorazon" class="buttonCorazon"><img class="w-[60px] h-[60px]" src="${imgSrc}" alt=""></button> */}

function mostrarCards(array,contenedor) {
    let cardsHTML = "";
    array.forEach(element => {
        // cardsHTML += crearCard(element.image, element.title, element.tagline, element.overview);
        cardsHTML += crearCard(element)
    });
    contenedor.innerHTML = cardsHTML;
}


// Función para obtener todos los géneros sin duplicados
function arrayDeGeneros(array) {
    let todosLosGeneros = [];
    array.forEach(objeto => {
        todosLosGeneros.push(objeto.genres);
    });
    return Array.from(new Set(todosLosGeneros.flat()));
}

function agregarOpcionesDeGenero(array, contenedorHTML) {
    array.forEach(genero => {
        let opcion = document.createElement("option");
        opcion.textContent = genero;
        opcion.value = genero;
        contenedorHTML.appendChild(opcion);
    });
}

function filtrarPorGenero(array, selector) {
    const generoSeleccionado = selector.value;
    if (generoSeleccionado === "all") {
        return array;
    } else {
        return array.filter(movie => movie.genres.includes(generoSeleccionado));
    }
}

function filtrarPorTitulo(array, inputTitulo) {
    const tituloIngresado = inputTitulo.value.toLowerCase();
    return array.filter(movie => movie.title.toLowerCase().includes(tituloIngresado));
}

function filctrosCruzados(array, contenedor,selector, inputTitulo) {
    // let peliculasFiltradas = array;
    
    // Aplicar filtro de género
    let peliculasFiltradas = filtrarPorGenero(array,selector);
    
    // Aplicar filtro de título
    peliculasFiltradas = filtrarPorTitulo(peliculasFiltradas, inputTitulo);
    
    // Mostrar las películas filtradas
    if (peliculasFiltradas.length > 0) {
        mostrarCards(peliculasFiltradas,contenedor);
    } else {
        contenedor.innerHTML = `
            <div class="w-full text-center">
                <h1 class="text-[40px] text-[#F00000] font-bold">FILM NOT FOUND</h1>
            </div>`;
    }
}

export { crearCard, mostrarCards, arrayDeGeneros, agregarOpcionesDeGenero, filtrarPorGenero, filtrarPorTitulo, filctrosCruzados} 

//-----------------------------------------------------------------------------------------------------------------------------------