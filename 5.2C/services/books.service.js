const Books = require('../models/bookModel');

// Get all books from MongoDB
async function getAllBooks() {
  return Books.find({})
    .select('-_id -__v')
    .lean({ getters: true });
}

// Get one book by its custom id
async function getBookById(id) {
  return Books.findOne({ id })
    .select('-_id -__v')
    .lean({ getters: true });
}

module.exports = {
  getAllBooks,
  getBookById
};