const express = require('express');
const router = express.Router();
const { getAuthor, getAllAuthors, createAuthor, updateSingleAuthor, deleteAuthor } = require('../controllers/apiAuthorsController');

router.get('/author', getAuthor);

router.get('/show-authors', getAllAuthors);

router.post('/create-author', createAuthor);

router.put('/update-author/:id', updateSingleAuthor);

router.get('/:name', deleteAuthor);

module.exports=router;