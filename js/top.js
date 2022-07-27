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
               <div class="capa">
            <h3 class="modal-title">${results.name}</h3>
            </div>
             </figure>
           </div>
       </div>
   </div>`
   document.querySelector('#main-container').append(div)


    div.dataset.name = results.name;
    div.dataset.about = results.about;
    div.dataset.image = results.images.jpg.image_url;
    div.dataset.link = results.url
  


   div.addEventListener("click",function(evt){
    document.querySelector(".modal").classList.add("is-active");
    document.querySelector("#modal-name").innerText = evt.currentTarget.dataset.name;
    document.querySelector("#modal-about").innerText = evt.currentTarget.dataset.about;
    document.querySelector("#modal-image").src = evt.currentTarget.dataset.image;
    document.querySelector("#modal-link").href = evt.currentTarget.dataset.link;



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
               <div class="capa">
            <h3 class="modal-title">${results.title}</h3>
            </div>
             </figure>
          </a>
           </div>
       </div>
   </div>`
   document.querySelector('#main-container').append(div)
    })
   }


const printTopAnime = () => {
    
    fetch('https://api.jikan.moe/v4/top/anime?page=1')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#pagination-buttons').innerHTML = `
        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
              <ul class="pagination-list">
                <li><a id="buttonPage1" class="pagination-link is-current" aria-label="Go to page 1">1</a></li>
                <li><a id="buttonPage2" class="pagination-link" aria-label="Go to page 2">2</a></li>
                <li><a id="buttonPage3" class="pagination-link" aria-label="Go to page 3">3</a></li>
                <li><a id="buttonPage4" class="pagination-link" aria-label="Go to page 4">4</a></li>
                <li><a id="buttonPage5" class="pagination-link" aria-label="Go to page 5">5</a></li>
              </ul>
            </nav>`;
      
      const goToPage1 = () => {
        fetch('https://api.jikan.moe/v4/top/anime?page=1')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.add('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }

      const goToPage2 = () => {
        fetch('https://api.jikan.moe/v4/top/anime?page=2')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.add('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }


      const goToPage3 = () => {
        fetch('https://api.jikan.moe/v4/top/anime?page=3')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.add('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }



      const goToPage4 = () => {
        fetch('https://api.jikan.moe/v4/top/anime?page=4')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.add('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }



      const goToPage5 = () => {
        fetch('https://api.jikan.moe/v4/top/anime?page=5')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.add('is-current');
    })
      }

        document.querySelector('#buttonPage1').addEventListener('click', goToPage1);
        document.querySelector('#buttonPage2').addEventListener('click', goToPage2);
        document.querySelector('#buttonPage3').addEventListener('click', goToPage3);
        document.querySelector('#buttonPage4').addEventListener('click', goToPage4);
        document.querySelector('#buttonPage5').addEventListener('click', goToPage5);

    });
    

};

const characters = () => {

    fetch('https://api.jikan.moe/v4/top/characters')
    .then(response => response.json())
    .then(data =>{
        topCharacters = data;    
        print(topCharacters.data);
        document.querySelector('#pagination-buttons').innerHTML = `
        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
              <ul class="pagination-list">
                <li><a id="buttonPage1" class="pagination-link is-current" aria-label="Go to page 1">1</a></li>
                <li><a id="buttonPage2" class="pagination-link" aria-label="Go to page 2">2</a></li>
                <li><a id="buttonPage3" class="pagination-link" aria-label="Go to page 3">3</a></li>
                <li><a id="buttonPage4" class="pagination-link" aria-label="Go to page 4">4</a></li>
                <li><a id="buttonPage5" class="pagination-link" aria-label="Go to page 5">5</a></li>
              </ul>
            </nav>`;

            const goToPage1 = () => {
              fetch('https://api.jikan.moe/v4/top/characters?page=1')
          .then(response => response.json())
          .then(data =>{
              topAnime = data;
              console.log(topAnime.data);    
              print(topAnime.data);
              document.querySelector('#buttonPage1').classList.add('is-current');
              document.querySelector('#buttonPage2').classList.remove('is-current');
              document.querySelector('#buttonPage3').classList.remove('is-current');
              document.querySelector('#buttonPage4').classList.remove('is-current');
              document.querySelector('#buttonPage5').classList.remove('is-current');
          })
            }
      
            const goToPage2 = () => {
              fetch('https://api.jikan.moe/v4/top/characters?page=2')
          .then(response => response.json())
          .then(data =>{
              topAnime = data;
              console.log(topAnime.data);    
              print(topAnime.data);
              document.querySelector('#buttonPage1').classList.remove('is-current');
              document.querySelector('#buttonPage2').classList.add('is-current');
              document.querySelector('#buttonPage3').classList.remove('is-current');
              document.querySelector('#buttonPage4').classList.remove('is-current');
              document.querySelector('#buttonPage5').classList.remove('is-current');
          })
            }
      
      
            const goToPage3 = () => {
              fetch('https://api.jikan.moe/v4/top/characters?page=3')
          .then(response => response.json())
          .then(data =>{
              topAnime = data;
              console.log(topAnime.data);    
              print(topAnime.data);
              document.querySelector('#buttonPage1').classList.remove('is-current');
              document.querySelector('#buttonPage2').classList.remove('is-current');
              document.querySelector('#buttonPage3').classList.add('is-current');
              document.querySelector('#buttonPage4').classList.remove('is-current');
              document.querySelector('#buttonPage5').classList.remove('is-current');
          })
            }
      
      
      
            const goToPage4 = () => {
              fetch('https://api.jikan.moe/v4/top/characters?page=4')
          .then(response => response.json())
          .then(data =>{
              topAnime = data;
              console.log(topAnime.data);    
              print(topAnime.data);
              document.querySelector('#buttonPage1').classList.remove('is-current');
              document.querySelector('#buttonPage2').classList.remove('is-current');
              document.querySelector('#buttonPage3').classList.remove('is-current');
              document.querySelector('#buttonPage4').classList.add('is-current');
              document.querySelector('#buttonPage5').classList.remove('is-current');
          })
            }
      
      
      
            const goToPage5 = () => {
              fetch('https://api.jikan.moe/v4/top/characters?page=5')
          .then(response => response.json())
          .then(data =>{
              topAnime = data;
              console.log(topAnime.data);    
              print(topAnime.data);
              document.querySelector('#buttonPage1').classList.remove('is-current');
              document.querySelector('#buttonPage2').classList.remove('is-current');
              document.querySelector('#buttonPage3').classList.remove('is-current');
              document.querySelector('#buttonPage4').classList.remove('is-current');
              document.querySelector('#buttonPage5').classList.add('is-current');
          })
            }
      
              document.querySelector('#buttonPage1').addEventListener('click', goToPage1);
              document.querySelector('#buttonPage2').addEventListener('click', goToPage2);
              document.querySelector('#buttonPage3').addEventListener('click', goToPage3);
              document.querySelector('#buttonPage4').addEventListener('click', goToPage4);
              document.querySelector('#buttonPage5').addEventListener('click', goToPage5);



    });
  };

  const printTopManga= () => {

    fetch('https://api.jikan.moe/v4/top/manga')
    .then(response => response.json())
    .then(data =>{
        topManga = data;
        console.log(topManga.data);    
        print2(topManga.data);
        document.querySelector('#pagination-buttons').innerHTML = `
        <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
              <ul class="pagination-list">
                <li><a id="buttonPage1" class="pagination-link is-current" aria-label="Go to page 1">1</a></li>
                <li><a id="buttonPage2" class="pagination-link" aria-label="Go to page 2">2</a></li>
                <li><a id="buttonPage3" class="pagination-link" aria-label="Go to page 3">3</a></li>
                <li><a id="buttonPage4" class="pagination-link" aria-label="Go to page 4">4</a></li>
                <li><a id="buttonPage5" class="pagination-link" aria-label="Go to page 5">5</a></li>
              </ul>
            </nav>`;
      
      const goToPage1 = () => {
        fetch('https://api.jikan.moe/v4/top/manga?page=1')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.add('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }

      const goToPage2 = () => {
        fetch('https://api.jikan.moe/v4/top/manga?page=2')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.add('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }


      const goToPage3 = () => {
        fetch('https://api.jikan.moe/v4/top/manga?page=3')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.add('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }



      const goToPage4 = () => {
        fetch('https://api.jikan.moe/v4/top/manga?page=4')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.add('is-current');
        document.querySelector('#buttonPage5').classList.remove('is-current');
    })
      }



      const goToPage5 = () => {
        fetch('https://api.jikan.moe/v4/top/manga?page=5')
    .then(response => response.json())
    .then(data =>{
        topAnime = data;
        console.log(topAnime.data);    
        print2(topAnime.data);
        document.querySelector('#buttonPage1').classList.remove('is-current');
        document.querySelector('#buttonPage2').classList.remove('is-current');
        document.querySelector('#buttonPage3').classList.remove('is-current');
        document.querySelector('#buttonPage4').classList.remove('is-current');
        document.querySelector('#buttonPage5').classList.add('is-current');
    })
      }

        document.querySelector('#buttonPage1').addEventListener('click', goToPage1);
        document.querySelector('#buttonPage2').addEventListener('click', goToPage2);
        document.querySelector('#buttonPage3').addEventListener('click', goToPage3);
        document.querySelector('#buttonPage4').addEventListener('click', goToPage4);
        document.querySelector('#buttonPage5').addEventListener('click', goToPage5);
    });
  };
  
  
  
  document.querySelector('#top-characters').addEventListener('click', characters);
  document.querySelector('#top-anime').addEventListener('click', printTopAnime);
  document.querySelector('#top-manga').addEventListener('click', printTopManga);