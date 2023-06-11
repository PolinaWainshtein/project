'use strict';
const numberOfFilms = +prompt('How much movies did you watch?', '');

const personalMoviesDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Whats the last movie youve watched?', ''),
      b = prompt('How would you rate it?', ''),
    c = prompt('What the last movie youve watched?', ''),
    d = prompt('How would you rate it?', '');
    
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);