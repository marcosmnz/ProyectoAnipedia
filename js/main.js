let animeAction = [];   
let animeAdventure = [];


const closeModal = () => {
  document.querySelector('#modal').classList.remove('is-active');
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
        <figure class="image is-square">
          <img src="${results.images.jpg.image_url}" alt="Placeholder image">
         <div class="capa">
         <h3 class="modal-title">${results.title}</h3>
         </div>
        </figure>
     </a>
          </figure>
        </div>
    </div>
</div>`
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
         <figure class="image is-square">
           <img src="${results.images.jpg.image_url}" alt="Placeholder image">
          <div class="capa">
          <h3 class="modal-title">${results.title}</h3>
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
           <figure class="image is-square">
             <img src="${results.images.jpg.image_url}" alt="Placeholder image">
            <div class="capa">
            <h3 class="modal-title">${results.title}</h3>
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

