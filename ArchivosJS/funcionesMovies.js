function crearCard(objeto) {
    return `
        <div id="card" class="border border-black p-4 flex flex-col items-center w-96 h-auto mt-5 ml-7 text-white
                rounded-3xl transition duration-300 transform hover:-translate-y-2 hover:bg-slate-300">
                <a href="../Pages/descripcionDePelicula.html?id=${objeto.id}">
                  <img class="w-72 h-auto my-3 rounded-3xl" src="${objeto.image}" alt="${objeto.title}">
                  <h1 class="font-bold">${objeto.title}</h1>
                  <h2 class="text-start">${objeto.tagline}</h2>
                  <p class="text-start">${objeto.overview}</p>
                   <p class="text-start text-[#ffd500]">Genre: ${objeto.genres}</p>
                </a>
        </div>
        
    `;
}

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
                <h1 class="text-[40px] text-[#F00000] font-bold">PELICULA NO ENCONTRADA</h1>
            </div>`;
    }
}

export { crearCard, mostrarCards, arrayDeGeneros, agregarOpcionesDeGenero, filtrarPorGenero, filtrarPorTitulo, filctrosCruzados} 