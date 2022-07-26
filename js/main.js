let animeAction = [];   
let animeAdventure = [];


const closeModal = () => {
  document.querySelector('#modal').classList.remove('is-active');
};



const home = () => {
  window.location.href = "index.html"
};

//   fetch('https://api.jikan.moe/v4/anime?genre=2')
//   .then(response => response.json())
//   .then(data =>{
//     animeAdventure = data;
//     console.log(animeAdventure.data);
//     print(animeAdventure.data);    
//   });




const printAction = (animePrint) => {
 animePrint.forEach((results) => {
    let div = document.createElement("div");
    div.classList.add("column", "is-3");
    div.innerHTML += `<div class="column">
    <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img src="${results.images.jpg.image_url}" alt="Placeholder image">
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
           <figure class="image is-square">
             <img src="${results.images.jpg.image_url}" alt="Placeholder image">
           </figure>
         </div>
     </div>
 </div>`
 document.querySelector('#genre-adventure').append(div)
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
  console.log(animeAdventure.data)
  printAdventure(animeAdventure.data);    
});


document.querySelector('#home-button').addEventListener('click', home);
document.querySelector('#imageAnipedia').addEventListener('click', home);
document.querySelector('#close-button').addEventListener('click', closeModal);

