const printManga = () => {
    fetch('https://api.jikan.moe/v4/manga?genres=1')
    .then(response => response.json())
    .then(data =>{
        mangaResults = data;
        print2(mangaResults.data);
    });
};

// let header = document.createElement('h1');
// header.classList.add('title', 'is-3', 'mt-2');
// header.setAttribute('id', "title-header")
// document.querySelector('#container').append(header);
// document.querySelector('#title-header').innerHTML = "Action Manga"




document.querySelector('#manga-button').addEventListener('click', printManga)