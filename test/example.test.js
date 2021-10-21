// IMPORT MODULES under test here:
import { getPokedex, encounterPokemon, capturePokemon, setPokedex } from '../storageUtils.js';

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