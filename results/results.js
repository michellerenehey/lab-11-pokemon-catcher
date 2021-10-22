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

// chart stuff! 

const arrayOfPokemonNames = results.map((item) => {
    const pokefriend = findById(item.id, pokemonList); 
    return pokefriend.pokemon; 
}); 

const arrayOfPokemonCaptured = results.map(item => item.capture);

const arrayOfPokemonEncountered = results.map(item => item.encounter)


var ctx = document.getElementById('resultsChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrayOfPokemonNames,
        datasets: [{
                label: 'Times Captured',
                data: arrayOfPokemonCaptured,
                backgroundColor: 'rgb(118, 190, 208)', // the key
                borderColor: 'rgb(118, 190, 208)', // the line
                pointBorderColor: 'rgb(245, 93, 62)', // border of dot
                pointBackgroundColor: 'rgb(245, 93, 62)', // fill of dot
                borderWidth: 2, 
                hoverBorderWidth: 2, 
                hoverBorderColor: '#000', 
                type: 'line'
        }, 
        {
                label: 'Times Encountered', 
                data: arrayOfPokemonEncountered, 
                backgroundColor: 'rgb(247, 203, 21)',
                borderColor: 'rgb(225, 225, 225)',
                pointBorderColor: 'rgba(255, 109, 0,0.7)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                borderWidth: 2, 
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




