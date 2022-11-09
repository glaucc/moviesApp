const APILINK = ''
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query="


const main = document.getElementById('section')
const form = document.getElementById('form')
const search  = document.getElementById('query')

returnMovies(APILINK)
    function returnMovies(url) {
        fetch(url).then(res => res.json())
        .then(function(data){
            console.log(data.results);
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card')
            })
        })
    }