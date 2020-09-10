
function renderMovies(movies) {
    
    let newMov = '';
    for (let index = 0; index < movies.length; index++){
        let imRating = `${movies[index].imdbRating}/10`; 
        let rotRating = movies[index].rottenTomatoesRating * 100;

        newMov += `
            <div class="col">
                <div class="row justify-content-center">
                    <img src='${movies[index].poster}' style=" width: 120px; height: auto;">
                    <div class="d-flex flex-column rounded ml-1 p-1 align-items-start" style="background-color: rgb(240, 240, 240);">
                        <p class="font-weight-bold" style="margin: 0;">${movies[index].title}</p>
                        <p style="font-size: 14px;">${movies[index].year}</p>
                        <p style="font-size: 16px;">IMDB:<br>${imRating}</p>
                        <p style="font-size: 16px;">Rotten Tomatoes:<br>${rotRating}%</p>
                    </div>
                </div>
            </div>
        `
    }
    
    
    return `
        <div class="text-center mt-5 row p-3 rounded" style="background-color: rgb(180, 180, 180);">
            ${newMov}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}