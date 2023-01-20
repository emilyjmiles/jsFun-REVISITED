const { weather } = require('../datasets/weather');

const weatherPrompts = {
  // Return an array of all the average temperatures.
  // ex: [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
  getAverageTemps() {

  },

  // Return an array of sentences of the locations that are sunny and mostly sunny. Include the location and weather type.
  // ex: [ 'Atlanta, Georgia is sunny.',
  // 'New Orleans, Louisiana is sunny.',
  // 'Raleigh, North Carolina is mostly sunny.' ]
  findSunnySpots() {

  },

  // Return the location with the highest humidity.
  // ex: {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }
  findHighestHumidity() {

  }
};

module.exports = weatherPrompts;