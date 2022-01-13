import data from './data/ghibli/ghibli.js';
import { sortFilms, sortReverse, filterByDirector, filterFilm } from './data.js'

function showCards(data) {
    document.getElementById('container').innerHTML = data.map((films) => `
    <div class="cards">
        <div>
        <h3>${films.title}</h3>
        <img src="${films.poster}">
        <h4>Lançamento: ${films.release_date}</h4>
        <h4>Avaliação: ${films.rt_score}</h4>
        </div>
        <div class="text">
            <h4>${films.description}</h4>
        </div>
    </div>
    `)
}

const films = data.films
const higherScoreButton = document.getElementById('higher-score-btn');
const lowerScoreButton = document.getElementById('lower-score-btn');
const chooseDirector = document.querySelector('.select-director');
const findFilm = document.getElementById('search-film');

showCards(films)

higherScoreButton.addEventListener('click', () => showCards(sortReverse(films)))
lowerScoreButton.addEventListener('click', () => showCards(sortFilms(films)))
chooseDirector.addEventListener('change', () => showCards(filterByDirector(films, chooseDirector.value, 'director')))
findFilm.addEventListener('keypress', () => showCards(filterFilm(films, findFilm.value)))
findFilm.addEventListener("keydown", event => {
  if (event.keyCode === 8) {
    return showCards(films);
  }
})
