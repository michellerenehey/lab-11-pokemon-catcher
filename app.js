import { pokemonList } from './pokemon.js';
import { capturePokemon, encounterPokemon, findById, getPokedex } from './storageUtils.js';

const pokeImg1 = document.getElementById('pokemon-1-img'); 
const pokeImg2 = document.getElementById('pokemon-2-img'); 
const pokeImg3 = document.getElementById('pokemon-3-img'); 
const catchButton = document.getElementById('catch-button'); 
const pokeRadio1 = document.getElementById('radio-1'); 
const pokeRadio2 = document.getElementById('radio-2'); 
const pokeRadio3 = document.getElementById('radio-3'); 
const timesPlayedSpan = document.getElementById('times-played'); 
const pokeEncSpan1 = document.getElementById('pokemon-1-encounter-span');
const pokeEncSpan2 = document.getElementById('pokemon-2-encounter-span');
const pokeEncSpan3 = document.getElementById('pokemon-3-encounter-span');
const pokeCatchSpan1 = document.getElementById('pokemon-1-capture-span'); 
const pokeCatchSpan2 = document.getElementById('pokemon-2-capture-span'); 
const pokeCatchSpan3 = document.getElementById('pokemon-3-capture-span'); 
const pokeNameSpan1 = document.getElementById('pokemon-1-name-span'); 
const pokeNameSpan2 = document.getElementById('pokemon-2-name-span');
const pokeNameSpan3 = document.getElementById('pokemon-3-name-span');

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
    // update radio button value on each 

    // creating the pokemon object

    let poke1 = pokemonList[randNum1]; 
    let poke2 = pokemonList[randNum2]; 
    let poke3 = pokemonList[randNum3]; 
 
    // creating the encounter for pokemon objects 
    encounterPokemon(poke1.id);     
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);
 
    // calling encounter/capture data from LS 
    // AFTER we've encountered (above)
    // otherwise, there's nothing to encounter
    const pokeResults = getPokedex(); 

    // handling the DOM
    pokeImg1.src = poke1.url_image; 
    pokeRadio1.value = poke1.id; 
    const poke1Results = findById(poke1.id, pokeResults); 
    const poke1Name = findById(poke1.id, pokemonList); 
    pokeNameSpan1.textContent = poke1Name.pokemon;
    pokeEncSpan1.textContent = `Times encountered: ${poke1Results.encounter}`; 
    pokeCatchSpan1.textContent = `Times captured: ${poke1Results.capture}`; 
 
    pokeImg2.src = poke2.url_image; 
    pokeRadio2.value = poke2.id; 
    const poke2Results = findById(poke2.id, pokeResults); 
    const poke2Name = findById(poke2.id, pokemonList); 
    pokeNameSpan2.textContent = poke2Name.pokemon;
    pokeEncSpan2.textContent = `Times encountered: ${poke2Results.encounter}`; 
    pokeCatchSpan2.textContent = `Times captured: ${poke2Results.capture}`; 
     
    pokeImg3.src = poke3.url_image;
    pokeRadio3.value = poke3.id; 
    const poke3Results = findById(poke3.id, pokeResults); 
    const poke3Name = findById(poke3.id, pokemonList); 
    pokeNameSpan3.textContent = poke3Name.pokemon;
    pokeEncSpan3.textContent = `Times encountered: ${poke3Results.encounter}`; 
    pokeCatchSpan3.textContent = `Times captured: ${poke3Results.capture}`; 
}; 

let totalPlays = 0;
generatePoke(); 

catchButton.addEventListener('click', () => {
    const chosenRadio = document.querySelector('input[type=radio]:checked'); 
    
    if (chosenRadio){
        const chosenID = Number(chosenRadio.value); //value comes back string without Number()
        totalPlays++;
        timesPlayedSpan.textContent = `Times played: ${totalPlays}`;
        capturePokemon(chosenID); 
        if (totalPlays >= 10){
            window.location = './results'; 
        } else {
            generatePoke(); 
        }
    } 
}); 

