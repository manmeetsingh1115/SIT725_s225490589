const mongoose = require('mongoose');

// Define the Book schema and model
const BookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
    get: value => value?.toString()
  },
  currency: {
    type: String,
    required: true,
    default: 'AUD'
  }
}, {
  toJSON: {
    getters: true,
    virtuals: false,
    transform(_doc, result) {
      delete result._id;
      delete result.__v;
      return result;
    }
  },
  toObject: {
    getters: true,
    virtuals: false
  }
});

module.exports = mongoose.model('Book', BookSchema);