const express = require('express');
const book = require('../controllers/book.controller');

const router = express.Router();

// Create book
router.post('/', book.create);

// Retrieve books matching query params
router.get('/', book.get);

// Retrieve books by title

// Retrieve books by isbn

// Retrieve books by description

// Retrieve books by author

// Retrieve books by publicationDate

// Retrieve books by publisher

// Retrieve books by price

// Replace an existing book with isbn
router.put('/:isbn', book.replaceByIsbn);

// Update an existing book partially with isbn
router.patch('/:isbn', book.editByIsbn);

// Delete an existing book with isbn
router.delete('/:isbn', book.deleteByIsbn);

module.exports = router;
