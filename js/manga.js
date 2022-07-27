const printManga = () => {
    fetch('https://api.jikan.moe/v4/manga?limit=25')
    .then(response => response.json())
    .then(data =>{
        mangaResults = data;
        print2(mangaResults.data);
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
        fetch('https://api.jikan.moe/v4/manga?limit=25&page=1')
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
        fetch('https://api.jikan.moe/v4/manga?limit=25&page=2')
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
        fetch('https://api.jikan.moe/v4/manga?limit=25&page=3')
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
        fetch('https://api.jikan.moe/v4/manga?limit=25&page=4')
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
        fetch('https://api.jikan.moe/v4/manga?limit=25&page=5')
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



document.querySelector('#manga-button').addEventListener('click', printManga)