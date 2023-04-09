const express = require('express');
const router = express.Router();
const { getEntry, updateEntries, getAllEntries, createEntries, deleteEntries } = require('../controllers/apiEntriesController');
const { deleteEntry } = require('../models/entriesModel');
// const { createEntry } = require('../models/entriesModel');

router.get('/', getEntry);

router.get('/show-entries', getAllEntries);

router.post('/create-entry', createEntries);

router.put('/update-entry/:id', updateEntries);

router.delete('/:title', deleteEntries);


module.exports=router;