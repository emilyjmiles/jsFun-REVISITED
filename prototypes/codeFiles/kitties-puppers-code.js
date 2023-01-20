const { kitties } = require('../datasets/kitties');
const { puppers } = require('../datasets/puppers');

const kittyPrompts = {
  // Return an array of just the names of kitties who are orange.
  // ex: ['Tiger', 'Snickers']
  orangePetNames() {

  },

  // Sort the kitties by their age.
  sortByAge() {

  },

  // Return an array of kitties who have all grown up by 2 years.
  // ex: [
  //  { name: 'Felicia', age: 4, color: 'grey' },
  //  { name: 'Tiger', age: 7, color: 'orange' }, 
  //  ...etc
  // ]
  growUp() {

  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

module.exports = kittyPrompts;