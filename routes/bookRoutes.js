const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Method and end of url needed to access each controller
router.get('/:title', bookController.getBooks);
router.get('/:isbn', bookController.getBook);
router.get('/:description', bookController.getBooks);
router.get('/:author', bookController.getBooks);
router.get('/:publicationDate', bookController.getBooks);
router.get('/:publisher', bookController.getBooks);
router.get('/:price', bookController.getBooks);

router.post('/', bookController.createBook);
router.put('/:isbn', bookController.replaceBook);
router.patch('/:isbn', bookController.editBook);
router.delete('/:isbn', bookController.deleteBook);

module.exports = router;
