let pokemon_List = [];

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=170", true);
xhr.send(); 

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        console.log(data.results);
        for(let i = 0; i < data.results.length; i++){
            pokemon_List.push({name: data.results[i].name, url: data.results[i].url});
        } 
        for(let i = 0; i < data.results.length; i++){
                    const species = document.createElement('h1');
                    species.textContent = pokemon_List[i].name;
                    document.body.appendChild(species);
        }    
        for(let i = 0; i < data.results.length; i++){
            console.log(pokemon_List[i]);
        }
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText);
    }
}

