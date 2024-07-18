
  function toggleFavorito(movieTitle) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    
    if (favoritos.includes(movieTitle)) {
      favoritos = favoritos.filter(fav => fav !== movieTitle);
      console.log("FAVORITOS VERDADERO-----" + favoritos)
    } else {
      favoritos.push(movieTitle);
      console.log("FAVORITOS FALSO-----" + favoritos)
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    console.log(favoritos);
  }

  function pintarBotones( movieMovieTitle ,buttonSeleccionado)
  {
    const img = buttonSeleccionado.querySelector('img');
    // img almacena el objeto imagen para despues acceder a su propiedad src
    let arrayMoviesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (arrayMoviesFavoritos.includes(movieMovieTitle)) {
        console.log("FAVORITOS VERDADERO-----" + arrayMoviesFavoritos)
        img.src = '../RecursosMoviestack/corazonRojoLleno.png'; // Imagen inicial
      } else {
        console.log("FAVORITOS FALSO-----" + arrayMoviesFavoritos)
        img.src = '../RecursosMoviestack/corazonRojoVacio.png'; // Imagen alterna
      }
  }


  function filtrarFavoritos(arrayMovies) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    //const paisesFavoritos = arrayPaises.filter(pais => favoritos.includes(pais.pais));
    // mostrarCards(paisesFavoritos, contenedorHTML);
    return arrayMovies.filter(movie => favoritos.includes(movie.title));
  }

  //mostrarCards(paisesFavoritos, contenedorHTML);
  function mostrarFavoritos(arrayFiltrarFavoritos ,contenedorHTML)
  {
    mostrarCards(arrayFiltrarFavoritos, contenedorHTML)
  }

//  ---------------------------------------------------------------------------------------------------------


  export {toggleFavorito, mostrarFavoritos, pintarBotones, filtrarFavoritos}