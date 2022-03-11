const localStorageMovies = JSON.parse(localStorage.getItem('aluraflix'))
let movies = localStorage.getItem('aluraflix') !== null ? localStorageMovies : []

const updateLocalStorage = () => {
    localStorage.setItem('aluraflix', JSON.stringify(movies))
}

let listMovies = document.getElementById('list-movies')

for (let movie of movies) {
    listMovies.innerHTML += `
        <div id="movie-content">
            <a href="https://www.imdb.com/title/${movie.id}" target="_blank">
                <img src="${movie.poster}">
            </a>
            <h3>${movie.title}</h3>
            <h4>${movie.year}</h4>
        </div>
    `
}


function addMovie() {

    let newMovie = document.getElementById('input-movie').value
    let formattedMovie = newMovie.replaceAll(' ', '_')

    getMovieInfosFromIMDB(formattedMovie)

    document.getElementById('input-movie').value = ''
    document.getElementById('input-movie').focus()

}


function getMovieInfosFromIMDB(formattedMovie) {

    const newMovieLength = 6 + formattedMovie.length

    fetch('https://api.allorigins.win/get?url=https://sg.media-imdb.com/suggests/' + formattedMovie[0].toLowerCase() + '/' + formattedMovie + '.json')
        .then(response => response.json())
        .then(data => {
            const movieInfos = data.contents.substr(newMovieLength, data.contents.length - newMovieLength - 1)

            splitMovieInfos(JSON.parse(movieInfos))
        })

}


function splitMovieInfos(movieInfos) {

    let movie = {
        id: movieInfos.d[0].id,
        title: movieInfos.d[0].l,
        year: movieInfos.d[0].y,
        poster: movieInfos.d[0].i[0]
    }

    showMovies(movie)

}


function showMovies(movie) {

    let hasMovie = movies.includes(movie)

    if (!hasMovie) {
        movies.push(movie)
        updateLocalStorage()

        const movieContent = `
            <div id="movie-content">
                <a href="https://www.imdb.com/title/${movie.id}" target="_blank">
                    <img src="${movie.poster}">
                </a>
                <h3>${movie.title}</h3>
                <h4>${movie.year}</h4>
            </div>
        `
        
        listMovies.innerHTML += movieContent
    } else {
        alert('Esse filme já foi adicionado. Tente outro! :D')
    }

}

/* TAREFAS
1. [ ] Adicionar nome do filme e ano de lançamento abaixo do poster
2. [ ] Quebrar o nome do filme caso ele seja muito grande
3. [ ] Ao clicar no poster, ser direcionado para a página do filme no site da IMDB
4. [ ] Criar botão para remover o filme */
