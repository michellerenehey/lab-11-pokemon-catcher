import { pokemonList } from './pokemon.js';
import { encounterPokemon } from './storageUtils.js';

const pokeImg1 = document.getElementById('pokemon-1-img'); 
const pokeImg2 = document.getElementById('pokemon-2-img'); 
const pokeImg3 = document.getElementById('pokemon-3-img'); 
const catchButton = document.getElementById('catch-button'); 

const generatePoke = () => {
    let randNum1 = Math.floor(Math.random() * pokemonList.length); 
    let randNum2 = Math.floor(Math.random() * pokemonList.length); 
    let randNum3 = Math.floor(Math.random() * pokemonList.length); 

    while (
        randNum1 === randNum2 ||
        randNum2 === randNum3 ||
        randNum1 === randNum3
    ){
        randNum1 = Math.floor(Math.random() * pokemonList.length); 
        randNum2 = Math.floor(Math.random() * pokemonList.length); 
        randNum3 = Math.floor(Math.random() * pokemonList.length); 
    }

    // call encounterPoke function for each 

    let poke1 = pokemonList[randNum1]; 
    pokeImg1.src = poke1.url_image; 
    encounterPokemon(poke1.id); 

    let poke2 = pokemonList[randNum2]; 
    pokeImg2.src = poke2.url_image; 
    encounterPokemon(poke2.id); 

    let poke3 = pokemonList[randNum3]; 
    pokeImg3.src = poke3.url_image;
    encounterPokemon(poke3.id);
}; 

generatePoke(); 

catchButton.addEventListener('click', () => {
    generatePoke(); 
    // capturePokemon(); id here needs to be id of radio button selected!
}); 

