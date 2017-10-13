const express = require('express');
const bookRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const router = (nav) => {

    bookRouter.route('/')
    .get((req, res) => {
        const url = ('mongodb://localhost:27017/libraryApp');

        mongodb.connect(url, (err, db) => {
            const collection = db.collection('books');
            
            collection.find({}).toArray((err, results) => {
                res.render('bookListView', {
                    title: 'Books',
                    nav: nav,
                    books: results
                });
            });
            
        });

    });

    bookRouter.route('/:id')
    .get((req, res) => {
        const id = new objectId(req.params.id);
        const url = ('mongodb://localhost:27017/libraryApp');
        
        mongodb.connect(url, (err, db) => {
            const collection = db.collection('books');
            
            collection.findOne({_id: id}, (err, results) => {
                res.render('bookView', {
                    title: 'Books',
                    nav: nav,
                    book: results
                });
            });
            
        });
    });
    
    return bookRouter;
};

module.exports = router;