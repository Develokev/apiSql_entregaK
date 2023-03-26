const express = require('express');
const router = express.Router();
const { getEntry, deleteEntries, updateEntries, getAllEntries, createEntries } = require('../controllers/apiEntriesController');
// const { createEntry } = require('../models/entriesModel');

router.get('/', getEntry);

router.get('/show-entries', getAllEntries);

router.post('/create-entry', createEntries);

router.put('/update-entry/:id', updateEntries);

router.delete('/:title', deleteEntries);




module.exports=router;