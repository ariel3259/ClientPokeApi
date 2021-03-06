

btnShow.onclick = () =>{
    const pokeIdArray = [];
    for(let i = 0; i <= 5; i++){
        pokeIdArray.push(Math.round( Math.random() * (839-1) + 1))
    }
    pokeIdArray.forEach(async id => {
       try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemon = await response.json();
            let name = pokemon.species.name;
            let pokeId = pokemon.id;
            let image = pokemon.sprites.front_default;
            let abilities = pokemon.abilities.map( element =>  element.ability.name);
            let types = pokemon.types.map( element => element.type.name);
            //
            mapPokemon(name, pokeId, abilities, image, types);
       }catch(err){
            console.log(err);
            return;
        }
    })
}


const mapPokemon = (name, id, abilities, image, types) =>{
    containerPokemons.innerHTML += 
    `  
        <div class = "card">
            <img class = "img" src="${image}" alt="${name}">
            <div class = "description-pokemon">
                <h2>Id : ${id}</h2>
                <h2>Name : ${name}</h2>
                <h2>Types : ${types.map( element => element )}</h2>
                <h2>Habilities: ${abilities.map(element => element)}</h2>
            </div>
        </div>
    `;
}

const habilitiesDescription = () => { 

}