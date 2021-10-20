# Pokemon Cathcher App

## HTML Elements Needed
- [ ] Home Page
  - [ ] Three pokemon image buttons/(radios?)
    * need id's to watch event listeners
  - [ ] Results Page
- [ ] Render results table?/list?

## State to Keep track of
- [ ] **totalPlays** -- total plays
- [ ] **capturePokemon** -- selected button // "pick"
- [ ] **encounterPokemon** -- the three generated per session // "shown"

## user events
* Page Load
  * update state -- **totalPlays** (total plays = 0)
  * generate three pokemon 
  * update state -- **encounterPokemonr**
  * update view based on state -- render
* Button Click
  * increment total plays state -- **pokemonCaught**
  * increment selected pokemon state -- **capturePokemon**
  * if (plays < 10) 
      * generate three pokemon 
      * update state -- **encounterPokemon**
      * update view based on state -- render
  * else () 
    * send user to results page


## functions


### Local Storage Utils Functions -- could be in a separate *storage-utils.js*
* findById -- reference e-commerce lab for this function
* setPokedex -- TWO FUNCTIONS to SEND items to localStorage 
  * *Encountered* -- 
    * getResults
    * increment pokemonAppear
    * stringify
    * localStorage.setItem('RESULTS', string)
  * *Selected* -- 
    * getResults
    * increment pokemonChosen
    * stringify
    * localStorage.setItem('RESULTS', string)
* getPokedex -- a function to GET items from localStorage 
  * looks for 'RESULTS' in local storage
  * if ('RESULTS') exists 
    * localStorage.getItem('RESULTs')
    * JSON.parse
    * return results array
  * else (no 'RESULTS')
    * return empty array

  ```
  'RESULTS' = [
    {
        id: '',
        appeared: #,
        chosen: #
    },
    {
        id: '',
        appeared: #,
        chosen: #
    },
    ...
]```


### home page Functions -- app.js

* generatePokemon function -- 
  * use array.length and Math.random / Math.floor to **create an index**
    *  use a while loop to make sure the three random numbers are not the same
    (rand1 === rand2 || rand2 === rand3 || rand1 === rand3 )
  * call Encountered 
  * render image onto page



* increment pokemonCaught -- number of plays



()[]





