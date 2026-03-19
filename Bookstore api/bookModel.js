const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  inStock: {
    type: Boolean,
    default: true
  },

  quantity: {
    type: Number,
    default: 1
  }

}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;