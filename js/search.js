
const buscar = (evt) =>{
    let nombre = evt.currentTarget.value;

        fetch(`https://api.jikan.moe/v4/anime?letter=${nombre}`)
        .then(response => response.json())
        .then(data =>{
            busqueda = data;
            console.log(busqueda.data);
            print2(busqueda.data);
        })
   
   
   
    };









document.querySelector("#busqueda").addEventListener("keyup", buscar);