export const PokemonSpritiesAPI = () => {
    const pokemonArray = [];
    for (let i = 1; i <= 151; i++) {
        const pokemonId = i;
        const pokemonPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)

            .then((response) => response.json())
            .then((data) => data.sprites)
        pokemonArray.push(pokemonPromise);

    }
    return pokemonArray;
};

export const PokemonAPI = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json())
        .then((data) => data); 
};