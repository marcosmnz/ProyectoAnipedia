// cuando se pulsa en "agregar a favoritos"
setFavs = (e) => {
    // alert('Agregado en favs.')
    // leemos los datos clave del anime y los guardamos en un objeto
    var datos = results.mal_id
  
    // leemos los favoritos del localStorage
    var favoritos = localStorage.getItem("favoritos") || "[]";
    favoritos = JSON.parse(favoritos);
  
    // buscamos el producto en la lista de favoritos
    var posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });
    if (posLista > -1) {
      // si está, lo quitamos
      favoritos.splice(posLista, 1);
    } else {
      // si no está, lo añadimos
      favoritos.push(datos);
    }
  
    // guardamos la lista de favoritos 
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}



var favoritos = localStorage.getItem("favoritos") || "[]";
favoritos = JSON.parse(favoritos);



// document.querySelector("#favoritos").addEventListener("click", printFavs);

