/* eslint-disable consistent-return */

const Book = require('../models/book');

// Get book object
function getBooks(req, res) {
  // Finds all books in the database with those params
  Book.find(req.params, (error, books) => {
    if (error) return res.status(500).send({ error });

    return res.status(200).send(books);
  });
}

// Get book object by ISBN
function getBook(req, res) {
  const { isbn } = req.params;

  // Finds the book with the ISBN provided
  Book.findOne({ isbn }, (error, book) => {
    if (error) return res.status(404).send({ message: 'No books found', error });

    return res.status(200).send(book);
  });
}

// Create and save a new book
function createBook(req, res) {
  // Create a new book
  const book = new Book(req.body);

  // Save the new book
  book.save((error, newBook) => {
    if (error) return res.status(400).send({ message: 'Error saving book', error });

    return res.status(200).send({ message: 'Saved book', newBook });
  });
}

// Replace the books information
function replaceBook(req, res) {
  const { title } = req.body;
  const { isbn } = req.params;
  const { description } = req.body;
  const { author } = req.body;
  const { publicationDate } = req.body;
  const { publisher } = req.body;
  const { price } = req.body;

  if (!title || !isbn || !description || !author || !publicationDate || !publisher || !price) {
    return res.status(400).send({ message: 'Missing params' });
  }

  // Create the new book
  const bookReplacement = req.body;

  Book.findOne({ isbn }, (err, book) => {
    if (err) return res.status(404).send({ message: 'No book to replace found', err });

    // Replaces the book
    book.replaceOne(bookReplacement, (error) => {
      if (error) return res.status(500).send({ error });

      return res.status(200).send({ message: 'Book replaced' });
    });
  });
}

// Update the book information
function editBook(req, res) {
  const { isbn } = req.params;

  // Update the book
  Book.findOneAndUpdate({ isbn }, req.body, { new: true }, (error, book) => {
    if (error) return res.status(500).send({ error });

    return res.status(200).send({ message: 'Book updated', book });
  });
}

// Deletes the book from the database
function deleteBook(req, res) {
  const { isbn } = req.params;

  Book.findOneAndRemove(isbn, (err, book) => {
    if (err) return res.status(500).send({ err });
    if (!book) return res.status(404).send({ message: 'Book not found' });

    return res.status(200).send({ message: 'Book deleted', book });
  });
}

module.exports = {
  getBook,
  getBooks,
  createBook,
  replaceBook,
  editBook,
  deleteBook,
};
