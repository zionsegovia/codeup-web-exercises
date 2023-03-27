
/// traditional promise method
function getMovie(movie = 1){
    fetch(`https://swapi.dev/api/films/${movie}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error.message);
    });
}
getMovie().then(movie => {
    console.log(movie);
});

// async/await method
//async function getMovieA() {

//}

const getMovieB = async (movie) => {
    let response = await fetch(`https://swapi.dev/api/films/${movie}`)
    let data = await response.json();
    return data;
}
//let newHope = getMovieB(1);
(async()=>{
    //main line of code
    let newHope = await getMovieB(1);
})();



/* async function getMovieAsync(){
    try {
        let response = await fetch('https://swapi.dev/api/films/1/')
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }

}
*/