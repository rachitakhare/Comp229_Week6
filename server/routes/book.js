let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();


let Book = require('../models/book');
let bookController = require('../controllers/book');

/* GET Route for the Book List page - READ Operation */
router.get('/',bookController.displayBookList );


/* GET Route for the Book List page - CREATE Operation */
router.get('/add',bookController.displayAddPage );

/* Post Route for the Book List page - CREATE Operation */
router.post('/add', bookController.processAddPage);


/* GET Route for the Edit Book page - Update Operation */
router.get('/edit/:id', bookController.displayEditPage);

/* Post Route for the Edit book page - Update Operation */
router.post('/edit/:id', bookController.processEditPage);


/* GET Route for the Delete Book page - Delete Operation */
router.get('/delete/:id',bookController.performDelete);
module.exports = router;