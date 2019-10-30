const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Method and end of url needed to access each controller
router.get('/', bookController.getBooks);

router.post('/', bookController.createBook);
router.put('/:isbn', bookController.replaceBook);
router.patch('/:isbn', bookController.editBook);
router.delete('/:isbn', bookController.deleteBook);

module.exports = router;
