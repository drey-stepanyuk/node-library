var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {
    var books = [

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

    bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

    bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });
    
    return bookRouter;
}

module.exports = router;