// IMPORT MODULES under test here:
import { getPokedex, encounterPokemon, capturePokemon, setPokedex, findById } from '../storageUtils.js';
import { pokemonList } from '../pokemon.js';

const test = QUnit.test;

// TEST 1 getPokedex() when there is RESULTS array in LS
test('getPokedex returns the key RESULTS from localStorage', (expect) => {
    
    //Arrange
    const results = [
        { id: 1, encounter: 1, capture: 1 }, 
        { id: 3, encounter: 2, capture: 1 },
        { id: 5, encounter: 1, capture: 1 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results)); 
    
    //Act 
    const actual = getPokedex();

    //Expect
    expect.deepEqual(actual, results);
});


// TEST 2 getPokedex() when RESULTS array in LS is empty
test('getPokedex returns an empty array if RESULTS in ls is empty', (expect) => {

    //arrange
    localStorage.removeItem('RESULTS'); 

    //act 
    const actual = getPokedex(); 

    //expect
    expect.deepEqual(actual, []); 

});

// TEST 3 encounterPokemon() will increment encounter key in RESULTS in ls when exists
test('encounterPokemon will increment encounter when exists', (expect) => {

    //arrange
    const results = [
        { id: 1, encounter: 1, capture: 1 },
    ]; 
    localStorage.setItem('RESULTS', JSON.stringify(results)); 
    const expected = [
        { id: 1, encounter: 2, capture: 1 },
    ]; 

    //act 
    encounterPokemon(1); 
    const actual = getPokedex(); 

    //expect
    expect.deepEqual(actual, expected);
});

// TEST 4 encounterPokemon() will add new item to RESULTS in ls if doesn't exist
test('encounterPokemon will add a new item if not in results already', (expect) => {

    //arrange
    localStorage.removeItem('RESULTS'); 
    const expected = [
        { id: 1, encounter: 1, capture: 0 },
    ]; 

    //act 
    encounterPokemon(1); 
    const actual = getPokedex(); 

    //expect
    expect.deepEqual(actual, expected); 
}); 

// TEST 5 capturePokemon() will increment capture key in RESULTS in ls
test('capturePokemon will increment capture', (expect) => {
    // arrange
    const results = [
        { id: 1, encounter: 1, capture: 1 },
    ]; 
    localStorage.setItem('RESULTS', JSON.stringify(results)); 
    const expected = [
        { id: 1, encounter: 1, capture: 2 },
    ]; 

    //act
    capturePokemon(1); 
    const actual = getPokedex(); 

    //expect
    expect.deepEqual(actual, expected); 
}); 

// TEST 6 setPokedex should strigify & store data
test('setPokedex should send data up to localStorage', (expect) => {
    
    //arrange
    const results = [
        { id: 1, encounter: 1, capture: 1 }, 
        { id: 3, encounter: 2, capture: 1 },
        { id: 5, encounter: 1, capture: 1 }
    ];
    
    //Act 
    setPokedex(results);
    const actual = getPokedex(); 

    //Expect
    expect.deepEqual(actual, results);
}); 

// TEST 7 findByID should return the poke matching the id
test('findById should return the poke matching the id', (expect) => {

    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };

    const actual = findById(1, pokemonList); 
    expect.deepEqual(actual, expected);
});