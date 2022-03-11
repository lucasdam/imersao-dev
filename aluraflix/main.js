const localStorageMovies = JSON.parse(localStorage.getItem('aluraflix'))
let movies = localStorage.getItem('aluraflix') !== null ? localStorageMovies : []

const updateLocalStorage = () => {
    localStorage.setItem('aluraflix', JSON.stringify(movies))
}

let listMovies = document.getElementById('list-movies')

for (let movie of movies) {
    listMovies.innerHTML += `<img src="${movie}">`
}


function addMovie() {

    let newMovie = document.getElementById('input-movie').value
    let formatedMovie = newMovie.replaceAll(' ', '_')

    getMovieInfosFromIMDB(formatedMovie)

    document.getElementById('input-movie').value = ''
    document.getElementById('input-movie').focus()

}


function getMovieInfosFromIMDB(movie) {

    const newMovieLength = 6 + movie.length

    fetch('https://api.allorigins.win/get?url=https://sg.media-imdb.com/suggests/' + movie[0].toLowerCase() + '/' + movie + '.json')
        .then(response => response.json())
        .then(data => {
            const movieInfos = data.contents.substr(newMovieLength, data.contents.length - newMovieLength - 1)

            splitMovieInfos(JSON.parse(movieInfos))
        })

}


function splitMovieInfos(movie) {

    const movieId = movie.d[0].id
    const movieTitle = movie.d[0].l
    const movieYear = movie.d[0].y
    const moviePoster = movie.d[0].i[0]

    console.log(movie.d[0].id)
    console.log(movie.d[0].l)
    console.log(movie.d[0].y)
    console.log(movie.d[0].i[0])

    showMovies(moviePoster)

}


function showMovies(poster) {

    let hasMovie = movies.includes(poster)

    if (!hasMovie) {
        movies.push(poster)
        updateLocalStorage()
        listMovies.innerHTML += `<img src="${poster}">`
    } else {
        alert('Esse filme já foi adicionado. Tente outro! :D')
    }

}

/* TAREFAS
1. Adicionar nome do filme e ano de lançamento abaixo do poster
2. Ao clicar no poster, ser direcionado para a página do filme no site da IMDB
3. Criar botão para remover o filme */