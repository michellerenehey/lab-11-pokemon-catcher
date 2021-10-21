// find by ID
export function findById(id, itemList) {
    for (let item of itemList) {
        if (item.id === id){
            return item;
        }
    }
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
        const newEncounter = { id: id, encounter: 1, capture: 0 }; 
        results.push(newEncounter); 
    }
    const resultsString = JSON.stringify(results); 
    localStorage.setItem('RESULTS', resultsString); 
}

// capture 
export function capturePokemon(id){
    const results = getPokedex(); 
    const captured = findById(id, results); 
    if (captured) {
        captured.capture++;
    }
    const resultsString = JSON.stringify(results); 
    localStorage.setItem('RESULTS', resultsString);
}

// move the 
// const resultsString = JSON.stringify(results); 
// localStorage.setItem('RESULTS', resultsString);
// into it's own function

// after lunch: begin TESTING! 