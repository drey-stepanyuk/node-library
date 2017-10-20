const express = require('express');
const adminRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const books = [

    {
        title: 'A Game of Thrones',
        genre: 'Fantasy Fiction',
        author: 'George R.R. Martin',
        bookId: 13496,
        read: true
    },
    {
        title: 'A Clash of Kings',
        genre: 'Fantasy Fiction',
        author: 'George R.R. Martin',
        bookId: 10572,
        read: false
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        genre: 'Fanstasy Fiction',
        author: 'J.K. Rowling',
        bookId: 5,
        read: true
    },
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        bookId: 656,
        read: true
    },
        {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        bookId: 32829,
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
