const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const bookController = (bookService, nav) => {
    const getIndex = (req, res) => {
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

    };

    const getById = (req, res) => {
        const id = new ObjectId(req.params.id);
        const url = ('mongodb://localhost:27017/libraryApp');

        mongodb.connect(url, (err, db) => {
            const collection = db.collection('books');

            collection.findOne({
                _id: id
            }, 
            (err, results) => {
                bookService.getBookById(results.bookId,
                    (err,  book) => {
                        results.book = book;
                        res.render('bookView', {
                            title: 'Books',
                            nav: nav,
                            book: results
                        });                    
                });
            });

        });
    };

    const middleware = (req, res, next) => {
//        if (!req.user) {
//            res.redirect('/');
//        }
        next();
    };

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;
