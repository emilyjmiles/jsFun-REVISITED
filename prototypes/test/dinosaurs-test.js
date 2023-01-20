const chai = require("chai");
const expect = chai.expect;

const { dinosaurs } = require('../datasets/dinosaurs');
const dinosaurPrompts = require('../codeFiles/dinosaurs-code');

describe("Dinosaur Prompts", () => {
  it.skip("should return a list of movie titles as keys and the number of awesome dinosaurs in that movie as values", () => {
    const e = dinosaurPrompts.countAwesomeDinosaurs();

    expect(e).to.deep.equal({
      'Jurassic Park': 5,
      'The Lost World: Jurassic Park': 8,
      'Jurassic Park III': 9,
      'Jurassic World': 11,
      'Jurassic World: Fallen Kingdom': 18
    });
  });

  it.skip("should return a list with the movie director as keys with a list as values with movie titles as keys and average actors age as values", () => {
    const e = dinosaurPrompts.averageAgePerMovie();

    expect(e).to.deep.equal({
      'Steven Spielberg': {
        'Jurassic Park': 34,
        'The Lost World: Jurassic Park': 37
      },
      'Joe Johnston': {
        'Jurassic Park III': 44
      },
      'Colin Trevorrow': {
        'Jurassic World': 56
      },
      'J. A. Bayona': {
        'Jurassic World: Fallen Kingdom': 59
      }
    });
  });

  it.skip("uncastActors", () => {
    const e = dinosaurPrompts.uncastActors();

    expect(e).to.deep.equal([{
      name: 'Justin Duncan',
      nationality: 'Alien',
      imdbStarMeterRating: 0
    },
    {
      name: 'Karin Ohman',
      nationality: 'Chinese',
      imdbStarMeterRating: 0
    },
    {
      name: 'Tom Wilhoit',
      nationality: 'Kiwi',
      imdbStarMeterRating: 1
    }, {
      name: 'Jeo D',
      nationality: 'Martian',
      imdbStarMeterRating: 0
    }]);
  });

  it.skip("actorsAgesInMovies", () => {
    const e = dinosaurPrompts.actorsAgesInMovies();

    expect(e).to.deep.equal([{
      name: 'Sam Neill',
      ages: [46, 54]
    }, {
      name: 'Laura Dern',
      ages: [26, 34]
    }, {
      name: 'Jeff Goldblum',
      ages: [41, 45, 63, 66]
    }, {
      name: 'Richard Attenborough',
      ages: [70, 74, 92, 95]
    }, {
      name: 'Ariana Richards',
      ages: [14, 18]
    }, {
      name: 'Joseph Mazello',
      ages: [10, 14]
    }, {
      name: 'BD Wong',
      ages: [33, 55, 58]
    }, {
      name: 'Chris Pratt',
      ages: [36, 39]
    }, {
      name: 'Bryce Dallas Howard',
      ages: [34, 37]
    }]);
  });
});
