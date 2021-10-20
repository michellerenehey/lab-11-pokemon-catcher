export function findById(id, itemList) {
    for (let item of itemList) {
        if (item.id === id){
            return item;
        }
    }
}

export function getResults(){
    const resultsString = localStorage.getItem('RESULTS') || '[]'; 
    const results = JSON.parse(resultsString); 
    return results;
}

export function encountered(){

}

export function selected(){
    
}