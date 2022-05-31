
const API_KEY = 'api_key=48057a0fa3f9c2e1cfcc9e05fcb49758';

const BASE_URL = 'https://api.themoviedb.org/3/'

const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+ API_KEY ;

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json).then(data => {
        console.log(data);
    })
}


function ShowMovie(data) {

    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = ''

    })
}



