const { boardGames } = require('../datasets/boardGames');

const boardGamePrompts = {
  // Return an array of just the names of the games within a specified type. 
  // e.g. given an argument of "strategy", return
  // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]
  listGames() {

  },

  // Return an array of just the names of the games within a specified 
  // type, sorted alphabetically. 
  // e.g. given an argument of "childrens", return
  // ["Candy Land", "Connect Four", "Operation", "Trouble"]
  listGamesAlphabetically() {

  },

  // Return an object which is the highest rated game within the specified type.
  // e.g. given the argument of 'party', return
  // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },
  findHighestRatedGamesByType() {

  },

  // Return the average score for the specified type.
  // e.g. given the argument of "strategy", return 7
  // note: do not worry about rounding your result.
  averageScoreByType() {

  },

  // Return the average score of any games that match the specified type
  // and maximum number of players.
  // e.g. given the arguments of "strategy" and 2, return 6.16666666667
  // note: do not worry about rounding your result.
  averageScoreByTypeAndPlayers() {

  }
};

module.exports = boardGamePrompts;