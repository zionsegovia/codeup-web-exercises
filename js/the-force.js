const lukeSkywalker = async (luke) => {
    let response = await fetch(`https://swapi.dev/api/people/${luke}`)
    return await response.json();
}

(async()=>{
    let getLuke = await lukeSkywalker(1);
    console.log(getLuke)
})();
