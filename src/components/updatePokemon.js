import createAbility from './createAbility.js';
import createStats from './createStats.js';

const updatePokemon = (pokemonDom, pokemonData) => {
    // update name
    const name = pokemonDom.querySelector('#name');
    name.innerText = pokemonData.name;

    // update img
    const img = pokemonDom.querySelector('#img');
    img.src = pokemonData.sprites.front_default;
    img.alt = `${pokemonData.name} Image`;

    const abilitiesList = createAbility(pokemonData.abilities);
    const oldList = pokemonDom.querySelector('#ability-list');
    oldList.replaceWith(abilitiesList);

    const statsList = createStats(pokemonData.stats);
    const oldStatList = pokemonDom.querySelector('#stat-list');
    oldStatList.replaceWith(statsList);
    return pokemonDom;
};

export default updatePokemon;
