import { pokemonList } from '../pokemon.js'; 
import { findById, getPokedex } from '../storageUtils.js'; 

const results = getPokedex(); 
const resultsHolder = document.getElementById('results-section'); 


results.forEach((item) => {
    const pokefriend = findById(item.id, pokemonList); 

    const pokeCard = document.createElement('div'); 
    pokeCard.classList.add('pokeCard'); 

    const pokeName = document.createElement('h2'); 
    pokeName.textContent = pokefriend.pokemon; 

    const pokeImg = document.createElement('img'); 
    pokeImg.src = pokefriend.url_image;

    const encounterSpan = document.createElement('span'); 
    encounterSpan.textContent = `Times encountered: ${item.encounter}`; 

    const captureSpan = document.createElement('span'); 
    captureSpan.textContent = `Times captured: ${item.capture}`; 

    pokeCard.append(pokeName, pokeImg, encounterSpan, captureSpan); 
    resultsHolder.append(pokeCard); 
}); 