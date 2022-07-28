let animeAction = [];   
let animeAdventure = [];


const closeModal = () => {
  document.querySelector('#modal-characters').classList.remove('is-active');
};

const closeModalLogin = () => {
  document.querySelector('#modal-login').classList.remove('is-active');
};

const closeModalSignUp = () => {
  document.querySelector('#modal-signup').classList.remove('is-active');

};



const home = () => {
  window.location.href = "index.html"
};

const printAction = (animePrint) => {
 animePrint.forEach((results) => {
    let div = document.createElement("div");
    div.classList.add("column", "is-3");
    div.innerHTML += `<div class="column">
    <div class="card">
        <div class="card-image">
        <a class="link-anime" href="${results.url}" target="_blank">
        <figure class="image is-2by3">
          <img src="${results.images.jpg.image_url}" alt="Placeholder image">
         <div class="capa">
         <h3 class="modal-title">${results.title}</h3>
         <a><p><ion-icon onclick="setFavs()" class="icon is-large" name="heart-outline"></ion-icon></p><a/>
         </div>
        </figure>
     </a>
          </figure>
        </div>
    </div>
</div>`;

setFavs = (e) => {
  // alert('Agregado en favs.')
  // leemos los datos clave del anime y los guardamos en un objeto
  var datos = results.mal_id
  console.log(datos)

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


document.querySelector('#genre-action').append(div)

 })
 

}

const printAdventure = (animePrint) => {

  animePrint.forEach((results) => {
     let div = document.createElement("div");
     div.classList.add("column", "is-3");
     div.innerHTML += `<div class="column">
     <div class="card">
         <div class="card-image">
         <a class="link-anime" href="${results.url}" target="_blank">
         <figure class="image is-2by3">
           <img src="${results.images.jpg.image_url}" alt="Placeholder image">
          <div class="capa">
          <h3 class="modal-title">${results.title}</h3>
          <a><p><ion-icon onclick="setFavs()" class="icon is-large" name="heart-outline"></ion-icon></p><a/>
          </div>
         </figure>
      </a>
         </div>
     </div>
 </div>`
 document.querySelector('#genre-adventure').append(div);
  })
 }


 const printHorror = (animePrint) => {

  animePrint.forEach((results) => {
     let div = document.createElement("div");
     div.classList.add("column", "is-3");
     div.innerHTML += `<div class="column">
     <div class="card">
         <div class="card-image">
         <a class="link-anime" href="${results.url}" target="_blank">
           <figure class="image is-2by3">
             <img src="${results.images.jpg.image_url}" alt="Placeholder image">
            <div class="capa">
            <h3 class="modal-title">${results.title}</h3>
            <a><p><ion-icon onclick="setFavs()" class="icon is-large" name="heart-outline"></ion-icon></p><a/>
            </div>
           </figure>
        </a>
         </div>
     </div>
 </div>`
 document.querySelector('#genre-horror').append(div)
  })
 }


        
fetch('https://api.jikan.moe/v4/anime?genres=1')
.then(response => response.json())
.then(data =>{
  animeAction = data;
  printAction(animeAction.data);    
});

fetch('https://api.jikan.moe/v4/anime?genres=2')
.then(response => response.json())
.then(data =>{
  animeAdventure = data;
  printAdventure(animeAdventure.data);    
});

fetch('https://api.jikan.moe/v4/anime?genres=14')
.then(response => response.json())
.then(data =>{
  animeHorror = data;
  printHorror(animeHorror.data);
});




document.querySelector('#home-button').addEventListener('click', home);
document.querySelector('#imageAnipedia').addEventListener('click', home);
document.querySelector('#close-button').addEventListener('click', closeModal);
document.querySelector('#close-button-login').addEventListener('click', closeModalLogin);
document.querySelector('#close-button-signup').addEventListener('click', closeModalSignUp);



