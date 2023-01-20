const { nationalParks } = require('../datasets/nationalParks');

const nationalParksPrompts = {
  /// Return an object containing the names of which parks I need to visit and the ones I have already visited.
  // ex: {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  // }
  getParkVisitList() {

  },

  // Return an array of objects where the key is the state and the value is its National Park
  // ex: [ { Colorado: 'Rocky Mountain' },
  // { Wyoming: 'Yellowstone' },
  // { Montana: 'Glacier' },
  // { Maine: 'Acadia' },
  // { Utah: 'Zion' },
  // { Florida: 'Everglades' } ]
  getParkInEachState() {

  },

  // Return an array of all the activities I can do in a National Park. Make sure to exclude duplicates.
  // ex: [ 'hiking', 'shoeshoing', 'camping', 'fishing', 'boating', 'watching wildlife', 'cross-country skiing', 'swimming', 'bird watching', 'canyoneering', 'backpacking', 'rock climbing' ]
  getParkActivities() {

  }
};

module.exports = nationalParksPrompts;