const mongoose = require('mongoose');
const Books = require('../models/bookModel');

// Sample data is used only for seeding the database
const sampleData = [
  {
    id: 'b1',
    title: 'The Three-Body Problem',
    author: 'Liu Cixin',
    year: 2008,
    genre: 'Science Fiction',
    summary:
      "The Three-Body Problem is the first novel in the Remembrance of Earth's Past trilogy. The series portrays a fictional past, present, and future wherein Earth encounters an alien civilisation from a nearby system of three Sun-like stars orbiting one another.",
    price: '29.99',
    currency: 'AUD'
  },
  {
    id: 'b2',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Classic',
    summary:
      "An orphaned governess confronts class, morality, and love at Thornfield Hall while uncovering Mr Rochester's secret and forging her own independence.",
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: 'b3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Classic',
    summary:
      'Elizabeth Bennet and Mr Darcy navigate pride, misunderstanding, and social expectations in a sharp study of manners and marriage.',
    price: '22.00',
    currency: 'AUD'
  },
  {
    id: 'b4',
    title: 'The English Patient',
    author: 'Michael Ondaatje',
    year: 1992,
    genre: 'Historical Fiction',
    summary:
      'In a ruined Italian villa at the end of World War II, four strangers with intersecting pasts confront memory, identity, and loss.',
    price: '25.39',
    currency: 'AUD'
  },
  {
    id: 'b5',
    title: 'Small Gods',
    author: 'Terry Pratchett',
    year: 1992,
    genre: 'Fantasy',
    summary:
      'In Omnia, the god Om returns as a tortoise, and novice Brutha must confront dogma, empire, and the nature of belief.',
    price: '31.99',
    currency: 'AUD'
  }
];

(async () => {
  try {
    // Wait for the local MongoDB connection before seeding
    await mongoose.connect(
      'mongodb://localhost:27017/booksDB',
      { family: 4 }
    );

    console.log('Connected to MongoDB for seeding.');

    // Ensure that each custom book id is unique
    await Books.collection.createIndex(
      { id: 1 },
      { unique: true }
    );

    // Clear existing records and insert the five required books
    await Books.deleteMany({});
    await Books.insertMany(sampleData);

    console.log('Seeded 5 books.');
  } catch (error) {
    console.error('Seeding failed:', error.message);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
})();