var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Tolstoy',
            read: false
        },
        {
            title: 'Les Misérables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: true
        },
        {
            title: 'Life On The Mississipi',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView',
                {
                    title: 'Books',
                    nav: nav,
                    books: books
                }
                );
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView',
                {
                    title: books[id].title,
                    nav: nav,
                    book: books[id]
                }
                );
        });
    return bookRouter;
};


module.exports = router;