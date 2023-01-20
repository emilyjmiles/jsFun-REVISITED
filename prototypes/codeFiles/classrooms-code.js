const { classrooms } = require('../datasets/classrooms');

const classPrompts = {
  // Create an array of just the front-end classrooms. e.g.
  // [
  //   { roomLetter: 'A', program: 'FE', capacity: 32 },
  //   { roomLetter: 'C', program: 'FE', capacity: 27 },
  //   { roomLetter: 'E', program: 'FE', capacity: 22 },
  //   { roomLetter: 'G', program: 'FE', capacity: 29 }
  // ]
  feClassrooms() {

  },

  // Create an object where the keys are 'feCapacity' and 'beCapacity',
  // and the values are the total capacity for all classrooms in each program e.g.
  // {
  //   feCapacity: 110,
  //   beCapacity: 96
  // }
  totalCapacities() {

  },

  // Return the array of classrooms sorted by their capacity (least capacity to greatest)
  sortByCapacity() {

  }
};

module.exports = classPrompts;
