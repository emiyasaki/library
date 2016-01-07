var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
//var bookRouter = require('./src/routes/bookRoutes');

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', require('./src/routes/bookRoutes'));

app.get('/', function (req, res) {
    res.render('index',
        {
            title: 'Hello from EJS render',
            nav: [
                { Link: '/Books', Text: 'Books' },
                { Link: '/Authors', Text: 'Authors' }
            ]
        });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});