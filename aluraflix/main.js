const initialMovies = [
    'https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg', 
    'https://moviesense.files.wordpress.com/2020/03/05147-arrival1.jpg', 
    'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg',
]

const localStorageMovies = JSON.parse(localStorage.getItem('aluraflix'))
let movies = localStorage.getItem('aluraflix') !== null ? localStorageMovies : initialMovies

const updateLocalStorage = () => {
    localStorage.setItem('aluraflix', JSON.stringify(movies))
}

let listMovies = document.getElementById('list-movies')

for (let movie of movies) {
    listMovies.innerHTML += `<img src="${movie}">`
}

function addMovie() {

    let newMovie = document.getElementById('input-movie').value
    let hasMovie = movies.includes(newMovie)
    
    if (!hasMovie) {
        movies.push(newMovie)
        updateLocalStorage()
        listMovies.innerHTML += `<img src="${newMovie}">`
    } else {
        alert('Essa capa já foi adicionada. Tente outra!')
    }

    document.getElementById('input-movie').value = ''
    document.getElementById('input-movie').focus()

    console.log(movies)

}



/* 

https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/160520140525-uau-posters-filmes-ela--her--2.jpg

https://i.pinimg.com/originals/75/b4/9e/75b49ec4073b178e9bfc75308a763e5b.jpg

https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg

https://upload.wikimedia.org/wikipedia/pt/8/87/The-evil-dead-original-1981-poster.jpg


*/