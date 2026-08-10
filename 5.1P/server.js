const express = require('express');
const app = express();
const PORT = 3000;

// App middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import route file
const booksRoutes = require('./routes/books.routes');

// Mount the route at /api/books
app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
