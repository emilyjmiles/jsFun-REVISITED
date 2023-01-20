const { dinosaurs } = require('../datasets/dinosaurs');

const dinosaurPrompts = {
  // Return an object where each key is a movie title and each value is the
  // number of awesome dinosaurs in that movie. e.g.:
  // {
  //   'Jurassic Park': 5,
  //   'The Lost World: Jurassic Park': 8,
  //   'Jurassic Park III': 9,
  //   'Jurassic World': 11,
  //   'Jurassic World: Fallen Kingdom': 18
  // }
  countAwesomeDinosaurs() {

  },

  // Return an object where each key is a movie director's name and each value is
  //     an object whose key is a movie's title and whose value is the average age
  //     of the cast on the release year of that movie.
  //   e.g.:
  //   {
  //     'Steven Spielberg':
  //       {
  //         'Jurassic Park': 34,
  //         'The Lost World: Jurassic Park': 37
  //       },
  //     'Joe Johnston':
  //       {
  //         'Jurassic Park III': 44
  //       },
  //     'Colin Trevorrow':
  //       {
  //         'Jurassic World': 56
  //         },
  //     'J. A. Bayona':
  //       {
  //         'Jurassic World: Fallen Kingdom': 59
  //       }
  //   }

  averageAgePerMovie() {

  },

  // Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

  // e.g.
  //   [{
  //     name: 'Justin Duncan',
  //     nationality: 'Alien',
  //     imdbStarMeterRating: 0
  //   },
  //   {
  //     name: 'Karin Ohman',
  //     nationality: 'Chinese',
  //     imdbStarMeterRating: 0
  //   },
  //   {
  //     name: 'Tom Wilhoit',
  //     nationality: 'Kiwi',
  //     imdbStarMeterRating: 1
  //   }, {
  //     name: 'Jeo D',
  //     nationality: 'Martian',
  //     imdbStarMeterRating: 0
  //   }]

  uncastActors() {

  },

  // Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

  // e.g.
  // [ { name: 'Sam Neill', ages: [ 46, 54 ] },
  //   { name: 'Laura Dern', ages: [ 26, 34 ] },
  //   { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
  //   { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
  //   { name: 'Ariana Richards', ages: [ 14, 18 ] },
  //   { name: 'Joseph Mazello', ages: [ 10, 14 ] },
  //   { name: 'BD Wong', ages: [ 33, 55, 58 ] },
  //   { name: 'Chris Pratt', ages: [ 36, 39 ] },
  //   { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]

  actorsAgesInMovies() {

  }
};

module.exports = dinosaurPrompts;
