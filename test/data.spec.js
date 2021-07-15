import { sortFilms, sortReverse } from '../src/data.js';
import { dataFilms, castleInTheSky, neighborTotoro, kikiDelivery, theTaleOfThePrincess } from './mock.js'

describe('Sort movies by highest score', () => {
  it('is a function', () => {
    expect(typeof sortReverse).toBe('function');
  });

  it('Returns movies from highest to lowest score', () => {
    expect(sortReverse(dataFilms)).toEqual([theTaleOfThePrincess, kikiDelivery, castleInTheSky, neighborTotoro]);
  });
});


describe('Sort movies by lowest score', () => {
  it('is a function', () => {
    expect(typeof sortFilms).toBe('function');
  });

  it('Returns movies from lowest to highest score', () => {
    expect(sortFilms(dataFilms)).toEqual([neighborTotoro, castleInTheSky, kikiDelivery, theTaleOfThePrincess]);
  });
});
