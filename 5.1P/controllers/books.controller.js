const booksService = require('../services/books.service');

// Controller uses the service to get all books
exports.getAllBooks = (req, res) => {
  const books = booksService.getAllBooks();
  res.status(200).json({
    statusCode: 200,
    data: books,
    message: 'Books retrieved using service'
  });
};

// Controller uses the service to get one book by id
exports.getBookById = (req, res) => {
  const book = booksService.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({
      statusCode: 404,
      data: null,
      message: 'Book not found'
    });
  }

  return res.status(200).json({
    statusCode: 200,
    data: book,
    message: 'Book retrieved using service'
  });
};
