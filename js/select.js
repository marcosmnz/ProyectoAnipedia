const renderSelect = (data) => {
    let select = document.querySelector("#categories")
    
    
    
    let {genres} = data;
    genres.forEach(
        (gender)=> {
            let option = document.createElement("option")
            option.setAttribute("value", gender.id);
            select.appendChild(option);
            option.innerText = gender.name;
            console.log(gender.name)
        });
    

}

fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => renderSelect(data))