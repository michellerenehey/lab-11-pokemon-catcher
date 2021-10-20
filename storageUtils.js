// find by ID
export function findById(id, itemList) {
    for (let item of itemList) {
        if (item.id === id){
            return item;
        }
    }
}

// set pokedex
export function setPokedex(pokemonList){
    const resultsString = JSON.stringify(pokemonList); 
    localStorage.setItem('RESULTS', resultsString); 

}

// get pokedex
export function getPokedex(){
    const resultsString = localStorage.getItem('RESULTS') || '[]'; 
    const results = JSON.parse(resultsString); 
    return results;
}

// encounter
    
    // call getPokedex() 
    // find the matching pokemon (findByID)
    // increment encounter (these are shown)
    // localStorage.setItem
    
export function encounterPokemon(id){
    const results = getPokedex(); 
    const encountered = findById(id, results); 
    if (encountered) {
        encountered.encounter++; 
    } else {
        const newEncounter = { id: id, encounter: 1, capture: }; 
        results.push(newEncounter); 
    }
    const resultsString = JSON.stringify(results); 
    localStorage.setItem('RESULTS', resultsString)
}

// capture 
export function capturePokemon(id){
    // increement what is chosen/preferred/caught
}