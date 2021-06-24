import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

function showCards(data) {
    document.getElementById('container').innerHTML = data.map((films) => `
    <div class="cards">
        <h3>${films.title}</h3>
        <img src="${films.poster}">
        <h4 class="font-lighter">Lançamento: ${films.release_date}</h4>
        <h4 class="font-lighter">Avaliação: ${films.rt_score}</h4>
    </div>
    `)
}

showCards(data.films)