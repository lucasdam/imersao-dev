const initialMovies = [
    'https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg', 
    'https://moviesense.files.wordpress.com/2020/03/05147-arrival1.jpg', 
    'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg',
]

let newMovie = ''
let moviePoster = ''
let listMovies = document.getElementById('list-movies')

const localStorageMovies = JSON.parse(localStorage.getItem('aluraflix'))
let movies = localStorage.getItem('aluraflix') !== null ? localStorageMovies : initialMovies

const updateLocalStorage = () => {
    localStorage.setItem('aluraflix', JSON.stringify(movies))
}

for (let movie of movies) {
    listMovies.innerHTML += `<img src="${movie}">`
}


async function addMovie() {

    newMovie = document.getElementById('input-movie').value

    await getMovieInfos()

    let hasMovie = movies.includes(moviePoster)
    
    if (!hasMovie) {
        movies.push(moviePoster)
        updateLocalStorage()
        listMovies.innerHTML += `<img src="${moviePoster}">`
    } else {
        alert('Essa capa já foi adicionada. Tente outra!')
    }

    document.getElementById('input-movie').value = ''
    document.getElementById('input-movie').focus()

}


async function getMovieInfos() {

    let movieFormated = newMovie.replaceAll(' ', '%20')

    await fetch(`https://imdb-data-searching.p.rapidapi.com/om?t=${movieFormated}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
		"x-rapidapi-key": "6b049fd902msh11b57c5ebb6ac4bp190938jsn2e0d04b84102"
	}
    })
    .then(response => response.json())
    .then(data => {
        moviePoster = data.Poster
    })
    .catch(err => {
        console.error(err);
    });

}



/*

TAREFAS:

1. Abaixo do poster, apresentar o nome do filme e ano de lançamento, gênero e sinopse
2. Usar outra API que permita fazer a busca do filme pelo título em português também, não só inglês
3. Se possível (dependendo da API), fazer com que ao clicar no poster, o usuário seja direcionado a página do IMDB
4. Realmente trocar essa API pois ela só deixa fazer 50 requisições por mês

oldkey: 524ef02908msh7bf0426979dca94p1b3e94jsn80282e9d9859

*/