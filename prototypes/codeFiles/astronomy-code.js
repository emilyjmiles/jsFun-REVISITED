const { constellations, stars } = require('../datasets/astronomy');

const astronomyPrompts = {
  // Return an array of all the star objects that appear in any of the constellations
  // listed in the constellations object e.g.
  // [
  //   { name: 'Rigel', visualMagnitude: 0.13, constellation: 'Orion', lightYearsFromEarth: 860, color: 'blue' },
  //   { name: 'Betelgeuse', visualMagnitude: 0.5, constellation: 'Orion', lightYearsFromEarth: 640, color: 'red' },
  //   { name: 'Achernar', visualMagnitude: 0.46, constellation: 'The Plow', lightYearsFromEarth: 140, color: 'blue' },
  //   { name: 'Hadar', visualMagnitude: 0.61, constellation: 'The Little Dipper', lightYearsFromEarth: 350, color: 'blue' }
  // ]
  starsInConstellations() {

  },

  // Return an object with keys of the different colors of the stars,
  // whose values are arrays containing the star objects that match e.g.
  // {
  //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
  //   white: [{obj}, {obj}],
  //   yellow: [{obj}, {obj}],
  //   orange: [{obj}],
  //   red: [{obj}]
  // }
  starsByColor() {

  },

  // Sort the stars by brightness and return an array of the star's constellation names
  // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
  // e.g.
  //  [ "Canis Major", "Carina", "Boötes", "Auriga", "Orion", "Lyra", "Canis Minor", "The Plow", "Orion", "The Little Dipper" ]
  constellationsStarsExistIn() {

  }
};

module.exports = astronomyPrompts;