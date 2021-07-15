export const sortFilms = (data) => data.sort((a, b) => a.rt_score - b.rt_score);

export const sortReverse = (data) => sortFilms(data).slice(0, 20).reverse()

