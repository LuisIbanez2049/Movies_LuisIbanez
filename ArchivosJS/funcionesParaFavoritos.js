// function creaCard(objetoPais) {
//     const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
//     const imgSrc = favoritos.includes(objetoPais.pais) ? './corazonRojoLleno.png' : './corazonRojoVacio.png';
//     return `
//       <div id="card" class="border border-black w-[200px] h-[300px] mb-6">
//         <h1 class="text-center text-[25px]">${objetoPais.pais}</h1>
//         <p class="pl-4 text-[18px]">${objetoPais.descripcionDePais}</p>
//         <button id="buttonCorazon" class="buttonCorazon">
//           <img class="w-[60px] h-[60px]" src="${imgSrc}" alt="">
//         </button>
//       </div>       
//     `;
//   }

//   function mostrarCards(arrayPaises, contenedorHTML) {
//     let cardsGuardadas = "";
//     arrayPaises.forEach(pais => {
//       cardsGuardadas += creaCard(pais);
//     });
//     contenedorHTML.innerHTML = cardsGuardadas;
//   }

  function toggleFavorito(pais) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (favoritos.includes(pais)) {
      favoritos = favoritos.filter(fav => fav !== pais);
      console.log("FAVORITOS VERDADERO-----" + favoritos)
    } else {
      favoritos.push(pais);
      console.log("FAVORITOS FALSO-----" + favoritos)
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log(favoritos);
  }

  function pintarBotones( pais ,button)
  {
    const img = button.querySelector('img');
    let arrayPaisesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (arrayPaisesFavoritos.includes(pais)) {
        console.log("FAVORITOS VERDADERO-----" + arrayPaisesFavoritos)
        img.src = '../RecursosMoviestack/corazonRojoLleno.png'; // Imagen inicial
      } else {
        console.log("FAVORITOS FALSO-----" + arrayPaisesFavoritos)
        img.src = '../RecursosMoviestack/corazonRojoVacio.png'; // Imagen alterna
      }
  }


  function filtrarFavoritos(arrayPaises) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    //const paisesFavoritos = arrayPaises.filter(pais => favoritos.includes(pais.pais));
    // mostrarCards(paisesFavoritos, contenedorHTML);
    return arrayPaises.filter(movie => favoritos.includes(movie.title));
  }

  //mostrarCards(paisesFavoritos, contenedorHTML);
  function mostrarFavoritos(arrayFiltrarFavoritos ,contenedorHTML)
  {
    mostrarCards(arrayFiltrarFavoritos, contenedorHTML)
  }

//  ---------------------------------------------------------------------------------------------------------


  export {toggleFavorito, mostrarFavoritos, pintarBotones, filtrarFavoritos}