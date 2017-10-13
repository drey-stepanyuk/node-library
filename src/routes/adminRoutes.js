const express = require('express');
const adminRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const books = [

    {
        title: 'A Song of Ice and Fire',
        genre: 'Fiction',
        author: 'George R.R. Martin',
        read: true
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        genre: 'Fiction',
        author: 'J.K. Rowling',
        read: true
    },
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: true
    },
        {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    }
];

const router = (nav) => {
    
    adminRouter.route('/addBooks')
        .get((req, res) => {
            const url = ('mongodb://localhost:27017/libraryApp');
            mongodb.connect(url, (err, db) => {
                const collection = db.collection('books');
                collection.insertMany(books,
                    (err, results) => {
                        res.send(results);
                        db.close();
                    });
            });
        });

    return adminRouter;
};

module.exports = router;
