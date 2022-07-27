let topAnime = [];
let topCharacters = [];








const print = (animePrint) => {
    document.querySelector('#main-container').innerHTML = "";
    animePrint.forEach((results) => {
       let div = document.createElement("div");
       div.classList.add("column", "is-3");
       div.innerHTML += `<div class="column">
       <div class="card">
           <div class="card-image">
             <figure class="image is-square">
               <img src="${results.images.jpg.image_url}" alt="Placeholder image">
             </figure>
             <p class="modal-title">${results.name}</p>
           </div>
       </div>
   </div>`
   document.querySelector('#main-container').append(div)


    div.dataset.name = results.name;
    div.dataset.about = results.about;
    div.dataset.image = results.images.jpg.image_url;
  


   div.addEventListener("click",function(evt){
    console.log(evt.currentTarget.dataset.about)
    document.querySelector(".modal").classList.add("is-active");
    document.querySelector("#modal-name").innerText = evt.currentTarget.dataset.name;
    document.querySelector("#modal-about").innerText = evt.currentTarget.dataset.about;
    document.querySelector("#modal-image").src = evt.currentTarget.dataset.image;


 });
    })
   }


   const print2 = (animePrint) => {

    document.querySelector('#main-container').innerHTML = "";
    console.log(animePrint);
    animePrint.forEach((results) => {
       let div = document.createElement("div");
       div.classList.add("column", "is-3");
       div.innerHTML += `<div class="column">
       <div class="card">
           <div class="card-image">
           <a class="link-anime" href="${results.url}" target="_blank">
             <figure class="image is-square">
               <img src="${results.images.jpg.image_url}" alt="Placeholder image">
             </figure>
             <p class="modal-title">${results.title}</p>
          </a>
           </div>
       </div>
   </div>`
   document.querySelector('#main-container').append(div)
    })
   }

const printTopAnime = () => {
    
    fetch('https://api.jikan.moe/v4/top/anime')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
    });
    

};

const characters = () => {

    fetch('https://api.jikan.moe/v4/top/characters')
    .then(response => response.json())
    .then(data =>{
        topCharacters = data;    
        print(topCharacters.data);
    });
  };

  const printTopManga= () => {

    fetch('https://api.jikan.moe/v4/top/manga')
    .then(response => response.json())
    .then(data =>{
        topManga = data;
        console.log(topManga.data);    
        print2(topManga.data);
    });
  };
  
  
  
  document.querySelector('#top-characters').addEventListener('click', characters);
  document.querySelector('#top-anime').addEventListener('click', printTopAnime);
  document.querySelector('#top-manga').addEventListener('click', printTopManga);