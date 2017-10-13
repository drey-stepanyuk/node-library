const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const nav = [{
    Link: '/Books',
    Text: 'Books'
    }, {
    Link: '/Authors',
    Text: 'Authors'
    }];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
                        }, {
            Link: '/Authors',
            Text: 'Authors'
            }]
    });
});

app.get('/books', (req, res) => {
    res.send('Hello Books!');
});

app.listen(port, (err) => {
    console.log('running server on port ' + port);
});
