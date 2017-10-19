const express = require('express');
const bookRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const router = (nav) => {
    const bookService = require('../services/goodreadsService')();
    const bookController =
        require('../controllers/bookController')(bookService, nav);

    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;
