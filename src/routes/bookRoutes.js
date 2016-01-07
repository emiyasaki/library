var express = require('express');

var bookRouter = express.Router();

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
    }
];

bookRouter.route('/')
    .get(function (req, res) {
        res.render('bookListView',
            {
                title: 'Books',
                nav: [
                    { Link: '/Books', Text: 'Books' },
                    { Link: '/Authors', Text: 'Authors' }
                ],
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
                nav: [
                    { Link: '/Books', Text: 'Books' },
                    { Link: '/Authors', Text: 'Authors' }
                ],
                book: books[id]
            }
        );
    });

module.exports = bookRouter;