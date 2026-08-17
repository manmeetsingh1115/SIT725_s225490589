const booksService = require('../services/books.service');

// Controller gets all books through the service
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await booksService.getAllBooks();

    res.status(200).json({
      statusCode: 200,
      data: books,
      message: 'Books retrieved using service'
    });
  } catch (error) {
    next(error);
  }
};

// Controller gets one book through the service
exports.getBookById = async (req, res, next) => {
  try {
    const book = await booksService.getBookById(req.params.id);

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
  } catch (error) {
    next(error);
  }
};