export const sortFilms = (data) => data.sort((a, b) => a.rt_score - b.rt_score);

export const sortReverse = (data) => sortFilms(data).slice(0, 20).reverse()

export const filterByDirector = (data, conditionValue, type) => data.filter((film) => {
  return film[type] == conditionValue
})

export const filterFilm = (data, search) => data.filter(film => {
  return film.name.toLowerCase().includes(search.toLowerCase());
})
