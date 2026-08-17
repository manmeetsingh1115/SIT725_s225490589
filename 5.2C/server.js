const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;

// Connect to MongoDB using the required hardcoded localhost URI
mongoose.connect(
  'mongodb://localhost:27017/booksDB',
  { family: 4 }
);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Book routes
const booksRoute = require('./routes/books.routes');
app.use('/api/books', booksRoute);

// Error-handling middleware
app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    statusCode: 500,
    data: null,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});