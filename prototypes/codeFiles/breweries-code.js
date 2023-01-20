const { breweries } = require('../datasets/breweries');

const breweryPrompts = {
  // Return the total beer count of all beers for every brewery e.g.
  // 40
  getBeerCount() {

  },

  // Return an array of objects where each object has the name of a brewery
  // and the count of the beers that brewery has e.g.
  // [
  //  { name: 'Little Machine Brew', beerCount: 12 },
  //  { name: 'Ratio Beerworks', beerCount: 5},
  // ...etc.
  // ]
  getBreweryBeerCount() {

  },

  // Return a number that is the count of beers that the specified
  // brewery has e.g.
  // given 'Ratio Beerworks', return 5
  getSingleBreweryBeerCount() {

  },

  // Return the beer which has the highest ABV of all beers, e.g.
  // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
  findHighestAbvBeer() {

  }
};

module.exports = breweryPrompts;
