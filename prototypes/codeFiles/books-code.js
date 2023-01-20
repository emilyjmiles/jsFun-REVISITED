const { books } = require('../datasets/books');

const bookPrompts = {
  // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
  // return an array of all book titles that are not horror or true crime. Eg:

  //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
  //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
  //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
  //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
  //   'Catch-22', 'Treasure Island']
  removeViolence() {

  },

  // return an array of objects containing all books that were published in the 90's and 00's. Inlucde the title and the year Eg:

  // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
  //  { title: 'Life of Pi', year: 2001 },
  //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
  getNewBooks() {

  },

  // return an array of objects containing all books that were
  // published after the specified year without the author or genre data. 
  // The published property should be changed to year for the returned books.
  // e.g. given 1990, return

  // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
  //  { title: 'Life of Pi', year: 2001 },
  //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]
  getBooksByYear() {

  }

};
