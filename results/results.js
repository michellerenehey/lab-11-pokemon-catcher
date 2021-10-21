import { pokemonList } from '../pokemon.js'; 
import { findById, getPokedex } from '../storageUtils.js'; 

const results = getPokedex(); 
const resultsHolder = document.getElementById('results-section'); 

for (let item of results){
    const pokefriend = findById(item.id, pokemonList); 

    const div = document.createElement('div'); 

    const pokeName = document.createElement('h2'); 
    pokeName.textContent = pokefriend.pokemon; 

    const pokeImg = document.createElement('img'); 
    pokeImg.src = pokefriend.url_image;

    const encounterSpan = document.createElement('span'); 
    encounterSpan.textContent = `Times encountered: ${item.encounter}`; 

    const captureSpan = document.createElement('span'); 
    captureSpan.textContent = `Times captured: ${item.capture}`; 

    div.append(pokeName, pokeImg, encounterSpan, captureSpan); 
    resultsHolder.append(div); 

}