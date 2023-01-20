const { turing } = require('../datasets/turing');

const turingPrompts = {
  // Return an array of instructors where each instructor is an object with a name and the count of students in their module.
  // ex: [
  //  { name: 'Pam', studentCount: 21 },
  //  { name: 'Robbie', studentCount: 18 }
  // ]
  studentsForEachInstructor() {

  },

  // Return an object of how many students per teacher there are in each cohort.
  // ex: {
  // cohort1806: 9,
  // cohort1804: 10.5
  // }
  studentsPerInstructor() {

  },

  // Return an object where each key is an instructor name and each value is an array of the modules they can teach based on their skills.
  // ex: {
  //     Pam: [2, 4],
  //     Brittany: [2, 4],
  //     Nathaniel: [2, 4],
  //     Robbie: [4],
  //     Leta: [2, 4],
  //     Travis: [1, 2, 3, 4],
  //     Louisa: [1, 2, 3, 4],
  //     Christie: [1, 2, 3, 4],
  //     Will: [1, 2, 3, 4]
  //   }
  modulesPerTeacher() {

  },

  // Return an object where each key is a curriculum topic and each value is an array of instructors who teach that topic.
  // ex: {
  //   html: [ 'Travis', 'Louisa' ],
  //   css: [ 'Travis', 'Louisa' ],
  //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
  //   recursion: [ 'Pam', 'Leta' ]
  // }
  curriculumPerTeacher() {

  }
};

module.exports = turingPrompts;
